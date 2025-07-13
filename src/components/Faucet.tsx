import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Droplets, 
  Loader2, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Wallet,
  Network,
  Copy,
  RefreshCw
} from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { toast } from "sonner";

export const Faucet = () => {
  const { 
    account, 
    isConnected, 
    walletType,
    chainId,
    networkName,
    ethBalance,
    xmrtBalance,
    requestFaucet,
    getFaucetCooldown,
    refreshBalances,
    switchToSepolia
  } = useWallet();

  const [isRequesting, setIsRequesting] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [lastTxHash, setLastTxHash] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Update cooldown timer
  useEffect(() => {
    if (!isConnected || !account) return;

    const updateCooldown = async () => {
      try {
        const remaining = await getFaucetCooldown();
        setCooldownTime(remaining);
      } catch (error) {
        console.error('Error getting cooldown:', error);
      }
    };

    updateCooldown();
    const interval = setInterval(updateCooldown, 1000);

    return () => clearInterval(interval);
  }, [isConnected, account, getFaucetCooldown]);

  // Handle faucet request
  const handleFaucetRequest = async () => {
    if (!isConnected || !account) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (chainId !== 11155111) {
      toast.error('Please switch to Sepolia testnet');
      return;
    }

    if (cooldownTime > 0) {
      toast.error(`Cooldown active. Try again in ${Math.ceil(cooldownTime / 60)} minutes.`);
      return;
    }

    setIsRequesting(true);

    try {
      const result = await requestFaucet();

      if (result.success && result.txHash) {
        setLastTxHash(result.txHash);
        toast.success('XMRT tokens requested successfully!', {
          description: 'Transaction confirmed on Sepolia testnet',
          action: {
            label: 'View on Etherscan',
            onClick: () => window.open(`https://sepolia.etherscan.io/tx/${result.txHash}`, '_blank')
          }
        });
      } else {
        toast.error(result.error || 'Faucet request failed');
      }
    } catch (error: any) {
      console.error('Faucet request error:', error);
      toast.error(error.message || 'Failed to request tokens');
    } finally {
      setIsRequesting(false);
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

  // Copy address to clipboard
  const copyAddress = async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      toast.success('Address copied to clipboard');
    }
  };

  // Format time remaining
  const formatTimeRemaining = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Calculate progress percentage
  const getProgressPercentage = () => {
    if (cooldownTime <= 0) return 100;
    const totalCooldown = 24 * 60 * 60; // 24 hours in seconds
    return ((totalCooldown - cooldownTime) / totalCooldown) * 100;
  };

  const isSepoliaNetwork = chainId === 11155111;
  const canRequestFaucet = isConnected && isSepoliaNetwork && cooldownTime <= 0;

  return (
    <Card className="xmrt-card max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Droplets className="h-6 w-6 text-blue-500" />
          XMRT Token Faucet
        </CardTitle>
        <p className="text-muted-foreground">
          Get test XMRT tokens on Sepolia testnet for development and testing
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Connection Status */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Connection Status</span>
            <Badge variant={isConnected ? "default" : "secondary"}>
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
          </div>

          {isConnected && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Wallet Type</span>
                <Badge variant="outline" className="capitalize">
                  <Wallet className="h-3 w-3 mr-1" />
                  {walletType}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Network</span>
                <div className="flex items-center gap-2">
                  <Badge variant={isSepoliaNetwork ? "default" : "destructive"}>
                    <Network className="h-3 w-3 mr-1" />
                    {networkName || 'Unknown'}
                  </Badge>
                  {!isSepoliaNetwork && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={switchToSepolia}
                    >
                      Switch to Sepolia
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Address</span>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'N/A'}
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyAddress}
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(`https://sepolia.etherscan.io/address/${account}`, '_blank')}
                    className="h-6 w-6 p-0"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>

        <Separator />

        {/* Balances */}
        {isConnected && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Balances</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleRefreshBalances}
                disabled={isRefreshing}
                className="h-6 w-6 p-0"
              >
                <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-xs text-muted-foreground">ETH Balance</div>
                <div className="font-mono text-sm">
                  {ethBalance ? parseFloat(ethBalance).toFixed(4) : '0.0000'} ETH
                </div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-xs text-muted-foreground">XMRT Balance</div>
                <div className="font-mono text-sm">
                  {xmrtBalance ? parseFloat(xmrtBalance).toFixed(2) : '0.00'} XMRT
                </div>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Faucet Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Request Test Tokens</h3>
            <p className="text-sm text-muted-foreground">
              Get 1000 XMRT tokens every 24 hours
            </p>
          </div>

          {/* Cooldown Timer */}
          {isConnected && cooldownTime > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Cooldown Active
                </span>
                <span className="font-mono">
                  {formatTimeRemaining(cooldownTime)}
                </span>
              </div>
              <Progress value={getProgressPercentage()} className="h-2" />
            </div>
          )}

          {/* Faucet Button */}
          <Button
            onClick={handleFaucetRequest}
            disabled={!canRequestFaucet || isRequesting}
            className="w-full"
            size="lg"
          >
            {isRequesting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Requesting Tokens...
              </>
            ) : !isConnected ? (
              <>
                <AlertCircle className="mr-2 h-4 w-4" />
                Connect Wallet First
              </>
            ) : !isSepoliaNetwork ? (
              <>
                <Network className="mr-2 h-4 w-4" />
                Switch to Sepolia
              </>
            ) : cooldownTime > 0 ? (
              <>
                <Clock className="mr-2 h-4 w-4" />
                Cooldown Active
              </>
            ) : (
              <>
                <Droplets className="mr-2 h-4 w-4" />
                Request 1000 XMRT
              </>
            )}
          </Button>

          {/* Last Transaction */}
          {lastTxHash && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Last transaction:</span>
              <Button
                variant="link"
                size="sm"
                onClick={() => window.open(`https://sepolia.etherscan.io/tx/${lastTxHash}`, '_blank')}
                className="h-auto p-0 text-sm"
              >
                {`${lastTxHash.slice(0, 10)}...${lastTxHash.slice(-8)}`}
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          )}
        </div>

        <Separator />

        {/* Additional Resources */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Additional Resources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://sepoliafaucet.com/', '_blank')}
              className="justify-start"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Sepolia ETH Faucet
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://sepolia.etherscan.io/address/0x77307DFbc436224d5e6f2048d2b6bDfA66998a15', '_blank')}
              className="justify-start"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              XMRT Contract
            </Button>
          </div>
        </div>

        {/* Contract Information */}
        <div className="text-xs text-muted-foreground text-center space-y-1">
          <div>XMRT Token Contract: 0x77307DFbc436224d5e6f2048d2b6bDfA66998a15</div>
          <div>Network: Sepolia Testnet (Chain ID: 11155111)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Faucet;
