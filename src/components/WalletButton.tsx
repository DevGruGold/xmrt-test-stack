import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Wallet, 
  LogOut, 
  Loader2, 
  ChevronDown, 
  Copy, 
  ExternalLink,
  Network,
  RefreshCw,
  User,
  Shield,
  Zap
} from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { toast } from "sonner";

export const WalletButton = () => {
  const { 
    account, 
    ethBalance,
    xmrtBalance,
    isConnected, 
    isConnecting, 
    walletType,
    chainId,
    networkName,
    connectWeb3Auth,
    connectReown,
    disconnect,
    switchToSepolia,
    refreshBalances
  } = useWallet();

  const [showConnectionOptions, setShowConnectionOptions] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Format balance for display
  const formatBalance = (balance: string | null, decimals: number = 4) => {
    if (!balance) return '0.0000';
    const num = parseFloat(balance);
    return num.toFixed(decimals);
  };

  // Copy address to clipboard
  const copyAddress = async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      toast.success('Address copied to clipboard');
    }
  };

  // Handle connection method selection
  const handleConnect = async (method: 'web3auth' | 'reown') => {
    setShowConnectionOptions(false);

    try {
      if (method === 'web3auth') {
        await connectWeb3Auth();
        toast.success('Connected via Web3Auth');
      } else {
        await connectReown();
        toast.success('Connected via Reown');
      }
    } catch (error: any) {
      console.error('Connection error:', error);
      toast.error(error.message || 'Failed to connect wallet');
    }
  };

  // Handle disconnect
  const handleDisconnect = async () => {
    try {
      await disconnect();
      toast.success('Wallet disconnected');
    } catch (error: any) {
      console.error('Disconnect error:', error);
      toast.error(error.message || 'Failed to disconnect wallet');
    }
  };

  // Handle network switch
  const handleSwitchNetwork = async () => {
    try {
      await switchToSepolia();
      toast.success('Switched to Sepolia testnet');
    } catch (error: any) {
      console.error('Network switch error:', error);
      toast.error(error.message || 'Failed to switch network');
    }
  };

  // Handle balance refresh
  const handleRefreshBalances = async () => {
    setIsRefreshing(true);
    try {
      await refreshBalances();
      toast.success('Balances refreshed');
    } catch (error) {
      toast.error('Failed to refresh balances');
    } finally {
      setIsRefreshing(false);
    }
  };

  // Check if on correct network
  const isSepoliaNetwork = chainId === 11155111;

  // If not connected, show connection options
  if (!isConnected) {
    return (
      <div className="relative">
        <Button
          onClick={() => setShowConnectionOptions(!showConnectionOptions)}
          disabled={isConnecting}
          className="relative"
        >
          {isConnecting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        {showConnectionOptions && (
          <Card className="absolute top-full mt-2 right-0 w-64 z-50 shadow-lg">
            <CardContent className="p-4 space-y-3">
              <div className="text-sm font-medium text-center">Choose Connection Method</div>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleConnect('web3auth')}
                disabled={isConnecting}
              >
                <User className="mr-2 h-4 w-4" />
                Web3Auth (Social Login)
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleConnect('reown')}
                disabled={isConnecting}
              >
                <Shield className="mr-2 h-4 w-4" />
                Reown (Traditional Wallets)
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                Choose your preferred connection method
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // If connected, show wallet info dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {walletType === 'web3auth' ? (
                <User className="h-4 w-4" />
              ) : (
                <Shield className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">
                {formatAddress(account || '')}
              </span>
            </div>

            {/* Network indicator */}
            <Badge 
              variant={isSepoliaNetwork ? "default" : "destructive"}
              className="text-xs"
            >
              {networkName || 'Unknown'}
            </Badge>

            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Wallet Connected</span>
              <Badge variant="outline" className="text-xs capitalize">
                {walletType === 'web3auth' ? (
                  <>
                    <User className="h-3 w-3 mr-1" />
                    Web3Auth
                  </>
                ) : (
                  <>
                    <Shield className="h-3 w-3 mr-1" />
                    Reown
                  </>
                )}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <code className="bg-muted px-1 py-0.5 rounded">
                {formatAddress(account || '')}
              </code>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyAddress}
                className="h-4 w-4 p-0"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Network Status */}
        <div className="px-2 py-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <Network className="h-4 w-4" />
              Network
            </span>
            <div className="flex items-center gap-2">
              <Badge variant={isSepoliaNetwork ? "default" : "destructive"}>
                {networkName || 'Unknown'}
              </Badge>
              {!isSepoliaNetwork && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleSwitchNetwork}
                  className="h-6 text-xs"
                >
                  Switch to Sepolia
                </Button>
              )}
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Balances */}
        <div className="px-2 py-1.5">
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Balances</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefreshBalances}
              disabled={isRefreshing}
              className="h-6 w-6 p-0"
            >
              <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">ETH</span>
              <span className="font-mono">
                {formatBalance(ethBalance)} ETH
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">XMRT</span>
              <span className="font-mono">
                {formatBalance(xmrtBalance, 2)} XMRT
              </span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Quick Actions */}
        <DropdownMenuItem
          onClick={() => window.open(`https://sepolia.etherscan.io/address/${account}`, '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View on Etherscan
        </DropdownMenuItem>

        <DropdownMenuItem onClick={copyAddress}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Address
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Contract Info */}
        <div className="px-2 py-1.5">
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center justify-between">
              <span>XMRT Contract</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://sepolia.etherscan.io/address/0x77307DFbc436224d5e6f2048d2b6bDfA66998a15', '_blank')}
                className="h-4 w-4 p-0"
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
            <code className="text-xs bg-muted px-1 py-0.5 rounded block">
              0x77307...2b6bDfA66998a15
            </code>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Disconnect */}
        <DropdownMenuItem 
          onClick={handleDisconnect}
          className="text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletButton;
