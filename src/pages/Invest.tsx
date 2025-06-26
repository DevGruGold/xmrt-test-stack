
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, DollarSign, Target, Users, Shield, TrendingUp } from "lucide-react";

const Invest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Us at the Ground Floor
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                of the Next Tech Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              This is your opportunity to invest in foundational technology at the intersection 
              of three massive markets: AI, Web3, and Wearable Tech.
            </p>
          </div>
        </div>
      </section>

      {/* The Ask Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="p-12">
                <DollarSign className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Pre-Seed Funding Goal</h2>
                <div className="text-6xl font-bold text-yellow-400 mb-6">$500,000</div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  We are seeking a pre-seed round to accelerate development, secure strategic 
                  partnerships, and bring our MVP to market. This is an opportunity to invest 
                  in foundational technology that will reshape how humans and AI collaborate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use of Funds Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-900/50 to-orange-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Use of Funds</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Every dollar is strategically allocated to maximize our path to market and 
              establish XMRT as the leader in decentralized AI collaboration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Target className="h-8 w-8 text-blue-400" />
                  <span className="text-2xl font-bold text-blue-400">35%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hardware & AI Development</h3>
                <p className="text-gray-300 mb-3">Smart contract audits, AI integrations, and hardware MVP.</p>
                <div className="text-xl font-semibold text-blue-400">$175,000</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">25%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Team Expansion</h3>
                <p className="text-gray-300 mb-3">Hiring elite developer and AI agent talent.</p>
                <div className="text-xl font-semibold text-green-400">$125,000</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                  <span className="text-2xl font-bold text-purple-400">20%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Enterprise Pilot Program</h3>
                <p className="text-gray-300 mb-3">Onboarding our first B2B partners.</p>
                <div className="text-xl font-semibold text-purple-400">$100,000</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-red-400" />
                  <span className="text-2xl font-bold text-red-400">10%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Legal & Compliance</h3>
                <p className="text-gray-300 mb-3">Ensuring a rock-solid legal foundation.</p>
                <div className="text-xl font-semibold text-red-400">$50,000</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-yellow-400" />
                  <span className="text-2xl font-bold text-yellow-400">10%</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Marketing & Community</h3>
                <p className="text-gray-300 mb-3">Building the DAO and driving initial user adoption.</p>
                <div className="text-xl font-semibold text-yellow-400">$50,000</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Why Invest in XMRT?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <h3 className="text-xl font-bold text-white">$200B AI Market</h3>
                <p className="text-gray-300">Positioned at the forefront of the autonomous AI revolution.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W3</span>
                </div>
                <h3 className="text-xl font-bold text-white">$3T Web3 Ecosystem</h3>
                <p className="text-gray-300">Building the infrastructure for decentralized intelligence.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AR</span>
                </div>
                <h3 className="text-xl font-bold text-white">$50B Wearables Market</h3>
                <p className="text-gray-300">Creating the next generation of intelligent devices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/50 to-orange-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Collaborate?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We are actively seeking investment and strategic partnerships. If you share our vision 
            for a more intelligent, private, and decentralized future, let's connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              Schedule Investment Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
            >
              Download Pitch Deck
            </Button>
          </div>
          
          <div className="text-gray-300">
            <p className="mb-2">For investment inquiries:</p>
            <a href="mailto:xmrtsolutions@gmail.com" className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold">
              xmrtsolutions@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
