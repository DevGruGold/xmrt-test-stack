// Verification: ee222d48-d2fb-40d3-b0bd-6fa4a7ab094c=a2d319e8d34db477c859741ef7e4165fda851257b90bfbcb652bb9296b0e51e9
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  account: string | null;
  balance: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  walletType: 'metamask' | 'walletconnect' | null;
  connectWallet: (type: 'metamask' | 'walletconnect') => Promise<void>;
  disconnectWallet: () => void;
  requestTokens: () => Promise<void>;
  isRequestingTokens: boolean;
  networkId: number | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const INFURA_KEY = 'c843a693bc5d43d1aee471d2491f2414';
const WALLETCONNECT_PROJECT_ID = '3c0e28ee15f49b20eebc46f23df5aa8e';
const SEPOLIA_RPC_URL = `https://sepolia.infura.io/v3/${INFURA_KEY}`;
const SEPOLIA_CHAIN_ID = 11155111;
const XMRT_CONTRACT_ADDRESS = '0x77307DFbc436224d5e6f2048d2b6bDfA66998a15';

const XMRT_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint256 value)'
];

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRequestingTokens, setIsRequestingTokens] = useState(false);
  const [walletType, setWalletType] = useState<'metamask' | 'walletconnect' | null>(null);
  const [networkId, setNetworkId] = useState<number | null>(null);

  useEffect(() => {
    checkExistingConnection();
    setupEventListeners();
  }, []);

  useEffect(() => {
    if (account) {
      updateBalance();
    }
  }, [account]);

  const checkExistingConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          setWalletType('metamask');
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          setNetworkId(parseInt(chainId, 16));
        }
      } catch (error) {
        console.error('Error checking MetaMask connection:', error);
      }
    }
  };

  const setupEventListeners = () => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        } else {
          disconnectWallet();
        }
      });

      window.ethereum.on('chainChanged', (chainId: string) => {
        setNetworkId(parseInt(chainId, 16));
        if (parseInt(chainId, 16) !== SEPOLIA_CHAIN_ID) {
          console.warn('Please switch to Sepolia testnet');
        }
      });

      window.ethereum.on('connect', (connectInfo: { chainId: string }) => {
        setNetworkId(parseInt(connectInfo.chainId, 16));
      });

      window.ethereum.on('disconnect', () => {
        disconnectWallet();
      });
    }
  };

  const detectMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const connectMetaMask = async () => {
    const isMobile = detectMobile();

    if (typeof window.ethereum === 'undefined') {
      if (isMobile) {
        const dappUrl = encodeURIComponent(window.location.href);
        const metamaskDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
        window.open(metamaskDeepLink, '_self');
        return;
      } else {
        throw new Error('MetaMask is not installed. Please install MetaMask to connect.');
      }
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        setWalletType('metamask');
        await switchToSepolia();
        await addXMRTToken();
      }
    } catch (error: any) {
      console.error('Error connecting MetaMask:', error);
      throw error;
    }
  };

  const connectWalletConnect = async () => {
    try {
      const { EthereumProvider } = await import('@walletconnect/ethereum-provider');

      const provider = await EthereumProvider.init({
        projectId: WALLETCONNECT_PROJECT_ID,
        chains: [SEPOLIA_CHAIN_ID],
        rpcMap: {
          [SEPOLIA_CHAIN_ID]: SEPOLIA_RPC_URL
        },
        showQrModal: true,
        metadata: {
          name: 'XMRT Test Stack',
          description: 'XMRT privacy-first DeFi protocol',
          url: window.location.origin,
          icons: ['https://xmrt.io/favicon.ico']
        }
      });

      await provider.connect();

      const accounts = await provider.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        setWalletType('walletconnect');
        setNetworkId(SEPOLIA_CHAIN_ID);
      }

      provider.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          disconnectWallet();
        }
      });

      provider.on('chainChanged', (chainId: number) => {
        setNetworkId(chainId);
      });

      provider.on('disconnect', () => {
        disconnectWallet();
      });

    } catch (error: any) {
      console.error('Error connecting WalletConnect:', error);
      throw error;
    }
  };

  const switchToSepolia = async () => {
    if (typeof window.ethereum === 'undefined') return;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0xaa36a7',
            chainName: 'Sepolia Test Network',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: [SEPOLIA_RPC_URL],
            blockExplorerUrls: ['https://sepolia.etherscan.io/'],
          }],
        });
      } else {
        throw switchError;
      }
    }
  };

  const addXMRTToken = async () => {
    if (typeof window.ethereum === 'undefined') return;

    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: XMRT_CONTRACT_ADDRESS,
            symbol: 'XMRT',
            decimals: 18,
            image: 'https://xmrt.io/favicon.ico',
          },
        },
      });
    } catch (error) {
      console.log('Token addition failed:', error);
    }
  };

  const updateBalance = async () => {
    if (!account) return;

    try {
      const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
      const contract = new ethers.Contract(XMRT_CONTRACT_ADDRESS, XMRT_ABI, provider);

      const balance = await contract.balanceOf(account);
      const decimals = await contract.decimals();
      const formattedBalance = ethers.formatUnits(balance, decimals);

      setBalance(parseFloat(formattedBalance).toFixed(4));
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('0');
    }
  };

  const connectWallet = async (type: 'metamask' | 'walletconnect') => {
    setIsConnecting(true);

    try {
      if (type === 'metamask') {
        await connectMetaMask();
      } else if (type === 'walletconnect') {
        await connectWalletConnect();
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setIsConnected(false);
    setWalletType(null);
    setNetworkId(null);
  };

  const requestTokens = async () => {
    if (!account) {
      throw new Error('Please connect your wallet first');
    }

    if (networkId !== SEPOLIA_CHAIN_ID) {
      throw new Error('Please switch to Sepolia testnet');
    }

    setIsRequestingTokens(true);

    try {
      # Simulate successful faucet request for demo
      await new Promise(resolve => setTimeout(resolve, 2000));

      # Update balance after successful request
      setTimeout(updateBalance, 3000);

      return { success: true, message: 'Tokens requested successfully' };
    } catch (error) {
      console.error('Error requesting tokens:', error);
      throw error;
    } finally {
      setIsRequestingTokens(false);
    }
  };

  const value: WalletContextType = {
    account,
    balance,
    isConnected,
    isConnecting,
    walletType,
    connectWallet,
    disconnectWallet,
    requestTokens,
    isRequestingTokens,
    networkId,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

declare global {
  interface Window {
    ethereum?: any;
  }
}
