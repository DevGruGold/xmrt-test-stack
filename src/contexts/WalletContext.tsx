import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  account: string | null;
  balance: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  requestTokens: () => Promise<void>;
  isRequestingTokens: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const INFURA_KEY = 'c843a693bc5d43d1aee471d2491f2414';
const SEPOLIA_RPC_URL = `https://sepolia.infura.io/v3/${INFURA_KEY}`;
const XMRT_CONTRACT_ADDRESS = '0x77307DFbc436224d5e6f2048d2b6bDfA66998a15';

// XMRT Token ABI (simplified for basic functions)
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

  useEffect(() => {
    checkConnection();
  }, []);

  useEffect(() => {
    if (account) {
      updateBalance();
    }
  }, [account]);

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
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

  const connectWallet = async () => {
    // Check if we're on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (typeof window.ethereum === 'undefined') {
      if (isMobile) {
        // On mobile, redirect to MetaMask app with deep link
        const dappUrl = window.location.href;
        const metamaskAppDeepLink = `https://metamask.app.link/dapp/${encodeURIComponent(dappUrl)}`;
        window.open(metamaskAppDeepLink, '_self');
        return;
      } else {
        alert('MetaMask is not installed. Please install MetaMask to connect your wallet.');
        return;
      }
    }

    setIsConnecting(true);
    
    try {
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        
        // Switch to Sepolia testnet
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // Sepolia chainId
          });
        } catch (switchError: any) {
          // If the chain doesn't exist, add it
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
          }
        }
        
        // Add XMRT token to MetaMask
        try {
          await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: XMRT_CONTRACT_ADDRESS,
                symbol: 'XMRT',
                decimals: 18,
                image: 'https://via.placeholder.com/64x64.png?text=XMRT',
              },
            },
          });
        } catch (error) {
          // Token addition failed, but wallet connection succeeded
          console.log('Token addition failed:', error);
        }
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setIsConnected(false);
  };

  const requestTokens = async () => {
    if (!account) {
      alert('Please connect your wallet first');
      return;
    }

    setIsRequestingTokens(true);
    
    try {
      // Simulate faucet request delay (since no backend exists)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful faucet request for demo purposes
      alert('🎉 Successfully requested 1000 XMRT tokens! This is a demo faucet - in a real implementation, tokens would be sent from a backend service.');
      
      // Update balance after a short delay
      setTimeout(updateBalance, 3000);
    } catch (error) {
      console.error('Error requesting tokens:', error);
      alert('❌ Error requesting tokens. Please try again later.');
    } finally {
      setIsRequestingTokens(false);
    }
  };

  const value: WalletContextType = {
    account,
    balance,
    isConnected,
    isConnecting,
    connectWallet,
    disconnectWallet,
    requestTokens,
    isRequestingTokens,
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

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: any;
  }
}