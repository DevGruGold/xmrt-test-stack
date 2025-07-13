// Verification: ee222d48-d2fb-40d3-b0bd-6fa4a7ab094c=a2d319e8d34db477c859741ef7e4165fda851257b90bfbcb652bb9296b0e51e9
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet, sepolia } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// Environment variables
const INFURA_KEY = process.env.REACT_APP_INFURA_KEY || 'c843a693bc5d43d1aee471d2491f2414';
const REOWN_PROJECT_ID = process.env.REACT_APP_REOWN_PROJECT_ID || '3c0e28ee15f49b20eebc46f23df5aa8e';
const WEB3AUTH_CLIENT_ID = process.env.REACT_APP_WEB3AUTH_CLIENT_ID || 'BEb2L3krttO76pfZzYGtTjW1nPop_Urx5GsrWafLnikRcdQNBXs6vhDx5p_dn1L9PG5KeFqo9cIaIARsdAwMx8Q';
const XMRT_CONTRACT_ADDRESS = process.env.REACT_APP_XMRT_CONTRACT_ADDRESS || '0x77307DFbc436224d5e6f2048d2b6bDfA66998a15';

// XMRT Token ABI (ERC-20 standard functions)
const XMRT_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function transferFrom(address from, address to, uint256 amount) returns (bool)',
  'function mint(address to, uint256 amount) returns (bool)',
  'function faucet() returns (bool)',
  'function faucetAmount() view returns (uint256)',
  'function faucetCooldown() view returns (uint256)',
  'function lastFaucetTime(address) view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)'
];

// Sepolia network configuration
const sepoliaNetwork = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: `https://sepolia.infura.io/v3/${INFURA_KEY}`
};

// Web3Auth configuration
const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0xaa36a7', // Sepolia testnet
  rpcTarget: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
  displayName: 'Sepolia Testnet',
  blockExplorer: 'https://sepolia.etherscan.io',
  ticker: 'ETH',
  tickerName: 'Ethereum',
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3auth = new Web3Auth({
  clientId: WEB3AUTH_CLIENT_ID,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
});

// Wagmi configuration for Reown
const queryClient = new QueryClient();

const wagmiAdapter = new WagmiAdapter({
  storage: localStorage,
  networks: [sepolia, mainnet, arbitrum],
  projectId: REOWN_PROJECT_ID,
});

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: REOWN_PROJECT_ID,
  networks: [sepolia, mainnet, arbitrum],
  defaultNetwork: sepolia,
  metadata: {
    name: 'XMRT Test Stack',
    description: 'XMRT Ecosystem Test Application',
    url: 'https://xmrt.io',
    icons: ['https://xmrt.io/favicon.ico']
  },
  features: {
    analytics: true,
  }
});

interface WalletContextType {
  // Connection state
  account: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  walletType: 'web3auth' | 'reown' | null;

  // Network state
  chainId: number | null;
  networkName: string | null;

  // Balances
  ethBalance: string | null;
  xmrtBalance: string | null;

  // Connection methods
  connectWeb3Auth: () => Promise<void>;
  connectReown: () => Promise<void>;
  disconnect: () => Promise<void>;

  // Network operations
  switchToSepolia: () => Promise<void>;

  // Faucet operations
  requestFaucet: () => Promise<{ success: boolean; txHash?: string; error?: string }>;
  getFaucetCooldown: () => Promise<number>;

  // Utility functions
  refreshBalances: () => Promise<void>;
  getProvider: () => ethers.BrowserProvider | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  // State management
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletType, setWalletType] = useState<'web3auth' | 'reown' | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [networkName, setNetworkName] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState<string | null>(null);
  const [xmrtBalance, setXmrtBalance] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  // Initialize Web3Auth
  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();

        // Check if already connected
        if (web3auth.connected) {
          const web3authProvider = web3auth.provider;
          if (web3authProvider) {
            const ethersProvider = new ethers.BrowserProvider(web3authProvider as any);
            setProvider(ethersProvider);

            const signer = await ethersProvider.getSigner();
            const address = await signer.getAddress();
            const network = await ethersProvider.getNetwork();

            setAccount(address);
            setChainId(Number(network.chainId));
            setNetworkName(network.name);
            setWalletType('web3auth');
            setIsConnected(true);

            await refreshBalances();
          }
        }
      } catch (error) {
        console.error('Error initializing Web3Auth:', error);
      }
    };

    init();
  }, []);

  // Connect via Web3Auth
  const connectWeb3Auth = async () => {
    try {
      setIsConnecting(true);

      const web3authProvider = await web3auth.connect();
      if (web3authProvider) {
        const ethersProvider = new ethers.BrowserProvider(web3authProvider as any);
        setProvider(ethersProvider);

        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();
        const network = await ethersProvider.getNetwork();

        setAccount(address);
        setChainId(Number(network.chainId));
        setNetworkName(network.name);
        setWalletType('web3auth');
        setIsConnected(true);

        await refreshBalances();
      }
    } catch (error) {
      console.error('Error connecting Web3Auth:', error);
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  // Connect via Reown
  const connectReown = async () => {
    try {
      setIsConnecting(true);
      modal.open();

      // Listen for connection
      const unsubscribe = modal.subscribeState((state) => {
        if (state.open === false && state.selectedNetworkId) {
          // Connection successful
          setWalletType('reown');
          setIsConnected(true);
          // Additional setup would be handled by Reown's state management
        }
      });

      return unsubscribe;
    } catch (error) {
      console.error('Error connecting Reown:', error);
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  // Disconnect wallet
  const disconnect = async () => {
    try {
      if (walletType === 'web3auth' && web3auth.connected) {
        await web3auth.logout();
      } else if (walletType === 'reown') {
        modal.close();
      }

      // Reset state
      setAccount(null);
      setIsConnected(false);
      setWalletType(null);
      setChainId(null);
      setNetworkName(null);
      setEthBalance(null);
      setXmrtBalance(null);
      setProvider(null);
    } catch (error) {
      console.error('Error disconnecting:', error);
      throw error;
    }
  };

  // Switch to Sepolia network
  const switchToSepolia = async () => {
    if (!provider) return;

    try {
      await provider.send('wallet_switchEthereumChain', [
        { chainId: '0xaa36a7' } // Sepolia
      ]);
    } catch (error: any) {
      // If network doesn't exist, add it
      if (error.code === 4902) {
        await provider.send('wallet_addEthereumChain', [
          {
            chainId: '0xaa36a7',
            chainName: 'Sepolia Testnet',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: [`https://sepolia.infura.io/v3/${INFURA_KEY}`],
            blockExplorerUrls: ['https://sepolia.etherscan.io'],
          },
        ]);
      } else {
        throw error;
      }
    }
  };

  // Refresh balances
  const refreshBalances = async () => {
    if (!provider || !account) return;

    try {
      // Get ETH balance
      const ethBal = await provider.getBalance(account);
      setEthBalance(ethers.formatEther(ethBal));

      // Get XMRT balance
      const xmrtContract = new ethers.Contract(XMRT_CONTRACT_ADDRESS, XMRT_ABI, provider);
      const xmrtBal = await xmrtContract.balanceOf(account);
      const decimals = await xmrtContract.decimals();
      setXmrtBalance(ethers.formatUnits(xmrtBal, decimals));

    } catch (error) {
      console.error('Error refreshing balances:', error);
    }
  };

  // Request faucet tokens
  const requestFaucet = async (): Promise<{ success: boolean; txHash?: string; error?: string }> => {
    if (!provider || !account) {
      return { success: false, error: 'Wallet not connected' };
    }

    try {
      const signer = await provider.getSigner();
      const xmrtContract = new ethers.Contract(XMRT_CONTRACT_ADDRESS, XMRT_ABI, signer);

      // Check cooldown
      const lastFaucetTime = await xmrtContract.lastFaucetTime(account);
      const cooldown = await xmrtContract.faucetCooldown();
      const now = Math.floor(Date.now() / 1000);

      if (Number(lastFaucetTime) + Number(cooldown) > now) {
        const remainingTime = Number(lastFaucetTime) + Number(cooldown) - now;
        return { 
          success: false, 
          error: `Faucet cooldown active. Try again in ${Math.ceil(remainingTime / 60)} minutes.` 
        };
      }

      // Request faucet
      const tx = await xmrtContract.faucet();
      await tx.wait();

      // Refresh balances
      await refreshBalances();

      return { success: true, txHash: tx.hash };
    } catch (error: any) {
      console.error('Faucet error:', error);
      return { 
        success: false, 
        error: error.reason || error.message || 'Faucet request failed' 
      };
    }
  };

  // Get faucet cooldown
  const getFaucetCooldown = async (): Promise<number> => {
    if (!provider || !account) return 0;

    try {
      const xmrtContract = new ethers.Contract(XMRT_CONTRACT_ADDRESS, XMRT_ABI, provider);
      const lastFaucetTime = await xmrtContract.lastFaucetTime(account);
      const cooldown = await xmrtContract.faucetCooldown();
      const now = Math.floor(Date.now() / 1000);

      const remainingTime = Number(lastFaucetTime) + Number(cooldown) - now;
      return Math.max(0, remainingTime);
    } catch (error) {
      console.error('Error getting faucet cooldown:', error);
      return 0;
    }
  };

  // Get provider
  const getProvider = () => provider;

  // Listen for account changes
  useEffect(() => {
    if (provider) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect();
        } else {
          setAccount(accounts[0]);
          refreshBalances();
        }
      };

      const handleChainChanged = (chainId: string) => {
        setChainId(parseInt(chainId, 16));
        refreshBalances();
      };

      // For Web3Auth
      if (walletType === 'web3auth') {
        provider.on('accountsChanged', handleAccountsChanged);
        provider.on('chainChanged', handleChainChanged);
      }

      return () => {
        if (provider.removeAllListeners) {
          provider.removeAllListeners();
        }
      };
    }
  }, [provider, walletType]);

  const contextValue: WalletContextType = {
    account,
    isConnected,
    isConnecting,
    walletType,
    chainId,
    networkName,
    ethBalance,
    xmrtBalance,
    connectWeb3Auth,
    connectReown,
    disconnect,
    switchToSepolia,
    requestFaucet,
    getFaucetCooldown,
    refreshBalances,
    getProvider,
  };

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <WalletContext.Provider value={contextValue}>
          {children}
        </WalletContext.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletProvider;
