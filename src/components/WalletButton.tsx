import { Button } from "@/components/ui/button";
import { Wallet, LogOut, Loader2 } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import { useState } from "react";

export const WalletButton = () => {
  const { account, balance, isConnected, isConnecting, walletType, connectWallet, disconnectWallet } = useWallet();
  const [showWalletOptions, setShowWalletOptions] = useState(false);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleConnectWallet = async (type: 'metamask' | 'walletconnect') => {
    setShowWalletOptions(false);
    try {
      await connectWallet(type);
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  if (isConnected && account) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-sm text-muted-foreground hidden sm:block">
          {balance ? `${balance} XMRT` : 'Loading...'}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={disconnectWallet}
          className="flex items-center gap-2"
        >
          <span className="hidden sm:inline">{formatAddress(account)}</span>
          <span className="sm:hidden">
            {walletType === 'metamask' ? 'MetaMask' : 'WalletConnect'}
          </span>
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (showWalletOptions) {
    return (
      <div className="flex flex-col gap-2 relative">
        <div className="absolute top-full left-0 mt-2 bg-card border rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
          <Button
            onClick={() => handleConnectWallet('metamask')}
            disabled={isConnecting}
            className="w-full justify-start mb-2"
            variant="ghost"
            size="sm"
          >
            {isConnecting ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Wallet className="h-4 w-4 mr-2" />
            )}
            MetaMask
          </Button>
          <Button
            onClick={() => handleConnectWallet('walletconnect')}
            disabled={isConnecting}
            className="w-full justify-start"
            variant="ghost"
            size="sm"
          >
            {isConnecting ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <div className="h-4 w-4 mr-2 rounded bg-blue-500 flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
            )}
            WalletConnect
          </Button>
          <Button
            onClick={() => setShowWalletOptions(false)}
            className="w-full justify-center mt-2"
            variant="outline"
            size="sm"
          >
            Cancel
          </Button>
        </div>
        <Button
          onClick={() => setShowWalletOptions(false)}
          className="flex items-center gap-2"
          size="sm"
        >
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
          <span className="sm:hidden">Connect</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => setShowWalletOptions(true)}
      disabled={isConnecting}
      className="flex items-center gap-2"
      size="sm"
    >
      {isConnecting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="hidden sm:inline">Connecting...</span>
        </>
      ) : (
        <>
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
          <span className="sm:hidden">Connect</span>
        </>
      )}
    </Button>
  );
};