
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Coins, Users, Globe } from "lucide-react";

const TokenDao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Foundation of Trust:
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Decentralized Identity & Governance
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The XMRT Token is more than a currency; it's the lifeblood of our ecosystem. 
              It powers our DAO, secures our network, and provides the on-chain identity layer 
              that makes true digital sovereignty possible.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Coins className="h-12 w-12 text-green-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Staking & Rewards</h3>
                <p className="text-gray-300 leading-relaxed">
                  Stake your XMRT to participate in network validation and earn rewards, 
                  creating a powerful incentive for long-term growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-purple-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DAO Governance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your tokens are your voice. Propose and vote on key ecosystem decisions, 
                  from treasury allocation to new feature development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Globe className="h-12 w-12 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Chain Utility</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built for a multi-chain future, our token will seamlessly bridge across networks, 
                  unlocking liquidity and utility wherever you operate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Revenue Model</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Revenue is generated through transaction fees on our network and value accrual 
              from staking participation. As the ecosystem grows, token holders benefit from 
              increased utility and network effects, creating a sustainable economic model 
              that aligns incentives across all participants.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Become a Founding Token Holder?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us at the ground floor of the decentralized intelligence revolution.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            onClick={() => window.location.href = '/invest'}
          >
            Learn How to Invest
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TokenDao;
