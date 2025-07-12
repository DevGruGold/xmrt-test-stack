import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Loader2, ExternalLink } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";

export const Faucet = () => {
  const { account, isConnected, requestTokens, isRequestingTokens } = useWallet();

  return (
    <Card className="xmrt-card">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-xl">
          <Droplets className="h-6 w-6 text-primary" />
          XMRT Token Faucet
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Get free XMRT tokens for testing on Sepolia testnet
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-3">
          <div className="bg-card/50 rounded-lg p-3 border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1">Amount per request:</p>
            <p className="font-semibold text-primary">1,000 XMRT</p>
          </div>
          
          {!isConnected ? (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Connect your wallet to request testnet tokens
              </p>
              <Button variant="outline" size="sm" disabled>
                Connect Wallet First
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                Connected: {account?.slice(0, 6)}...{account?.slice(-4)}
              </p>
              <Button
                onClick={requestTokens}
                disabled={isRequestingTokens}
                className="w-full"
                size="sm"
              >
                {isRequestingTokens ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Requesting Tokens...
                  </>
                ) : (
                  <>
                    <Droplets className="h-4 w-4 mr-2" />
                    Request 1,000 XMRT
                  </>
                )}
              </Button>
            </div>
          )}
          
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Need Sepolia ETH for gas?</p>
            <a
              href="https://sepoliafaucet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-xs flex items-center justify-center gap-1"
            >
              Get Sepolia ETH <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};