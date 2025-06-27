
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Coins, Users, Globe, Shield, Zap, Code } from "lucide-react";

const TokenDao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Live Smart Contract:
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                XMR Conversion + Multi-Chain Bridge
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The XMRT protocol is a fully deployed, upgradeable smart contract that converts 
              XMR to XMRT tokens, enables cross-chain bridging to Polygon/Avalanche, and 
              implements AI-governed DAO operations with biometric NFC security.
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
                  <Coins className="h-12 w-12 text-green-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">XMR to XMRT Conversion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Oracle-verified XMR conversion with configurable rates. 21M max supply 
                  with automatic KYC enforcement above 1,000 XMRT threshold.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-purple-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Biometric NFC Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  EIP-712 signed biometric verification for NFC registration, 
                  automatically minting NFT debit cards for secure payments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Globe className="h-12 w-12 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Chain Bridging</h3>
                <p className="text-gray-300 leading-relaxed">
                  Native Polygon and Avalanche bridge integration via CashDapp, 
                  with Layer2 support for enhanced scalability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Features */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Users className="h-10 w-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">AI-Governed DAO</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• CEO, CFO, CTO, Compliance & Audit AI roles</li>
                  <li>• 7-day voting periods with 30% quorum</li>
                  <li>• Automated treasury distribution (70% rewards, 20% dev, 10% fees)</li>
                  <li>• Proposal types: funding, hiring, marketing, upgrades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Zap className="h-10 w-10 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Advanced Staking</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 7-day minimum stake period</li>
                  <li>• Dynamic reward rate adjustment</li>
                  <li>• Emergency unstaking capabilities</li>
                  <li>• Governance voting weight based on stake</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-8">Smart Contract Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-3">Offline Transactions</h3>
                  <p className="text-gray-300 text-sm">
                    EIP-712 signature support for offline transaction processing 
                    with nonce-based replay protection.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-red-400 mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-3">UUPS Upgradeable</h3>
                  <p className="text-gray-300 text-sm">
                    Future-proof architecture with admin-controlled upgrades 
                    and pausable functionality for security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Experience Live DeFi Innovation
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our smart contract is deployed and operational. Start converting XMR, 
            participate in governance, and bridge across chains today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              Access CashDapp Portal
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

export default TokenDao;
