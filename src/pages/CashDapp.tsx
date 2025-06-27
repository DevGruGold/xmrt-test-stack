
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, BarChart3, Zap, CreditCard, Globe, Key } from "lucide-react";

const CashDapp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CashDapp: Your Gateway to
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Multi-Chain DeFi
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              CashDapp is the user-facing portal integrating KYC-compliant fiat on/off ramps, 
              cross-chain bridging to Polygon and Avalanche, Layer2 scaling, and biometric 
              NFC security—all powered by our live smart contract.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-green-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">KYC-Compliant Operations</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automated KYC enforcement above 1,000 XMRT with biometric verification 
                  and NFC registration for secure fiat transactions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Globe className="h-12 w-12 text-emerald-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Chain Bridging</h3>
                <p className="text-gray-300 leading-relaxed">
                  Native Polygon and Avalanche bridge integration with token locking/unlocking 
                  mechanisms and Layer2 deposit/withdrawal capabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <CreditCard className="h-12 w-12 text-yellow-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">NFT Debit Cards</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatic NFT debit card minting upon NFC registration, enabling 
                  real-world payments with blockchain-secured identity verification.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Key className="h-10 w-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Offline Transaction Support</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• EIP-712 signed offline transfers</li>
                  <li>• Nonce-based replay attack prevention</li>
                  <li>• Process transactions when network unavailable</li>
                  <li>• Seamless sync when connection restored</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <BarChart3 className="h-10 w-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Real-time XMR conversion tracking</li>
                  <li>• Cross-chain transaction monitoring</li>
                  <li>• Staking rewards visualization</li>
                  <li>• DAO voting history and analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Contract Integration */}
      <section className="py-16 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Live Smart Contract Features</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">21M</div>
                <p className="text-gray-300">Max XMRT Supply</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">7 Days</div>
                <p className="text-gray-300">Min Staking Period</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">30%</div>
                <p className="text-gray-300">DAO Quorum</p>
              </div>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              CashDapp interfaces directly with our deployed smart contract, providing 
              real-time access to XMR conversion, multi-chain bridging, staking rewards, 
              and DAO governance—all with enterprise-grade security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Experience Multi-Chain DeFi Today
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Access our live protocol through CashDapp's intuitive interface. 
            Convert XMR, bridge to multiple chains, and participate in AI governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              Launch CashDapp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/invest'}
            >
              View Smart Contract
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CashDapp;
