
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, DollarSign, TrendingUp, Shield, Users } from "lucide-react";

const Invest = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight font-serif">
              Join Us at the Ground Floor of the
              <span className="block text-blue-600">
                Next Tech Revolution
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              An opportunity to invest in foundational technology at the intersection of three 
              massive markets: AI, Web3, and Wearable Tech.
            </p>
          </div>
        </div>
      </section>

      {/* The Ask Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-serif">Pre-Seed Funding Goal</h2>
              <div className="text-5xl sm:text-6xl font-bold text-blue-600 mb-6">$500,000</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are seeking a pre-seed round to accelerate development, secure strategic partnerships, 
                and bring our MVP to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-serif">
                Strategic Use of Funds
              </h2>
              <p className="text-lg text-gray-600">
                Every dollar invested will drive measurable progress toward our market-ready solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 font-serif">Hardware & AI Development</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">35% • $175K</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Smart contract audits, AI integrations, and hardware MVP development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Users className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 font-serif">Team Expansion</h3>
                    <p className="text-2xl font-bold text-green-600 mt-2">25% • $125K</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Hiring elite developer and AI agent talent to accelerate product development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <DollarSign className="h-8 w-8 text-purple-600 mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 font-serif">Enterprise Pilot Program</h3>
                    <p className="text-2xl font-bold text-purple-600 mt-2">20% • $100K</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Onboarding our first B2B partners and enterprise customers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Shield className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 font-serif">Legal & Compliance</h3>
                    <p className="text-2xl font-bold text-orange-600 mt-2">10% • $50K</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Ensuring a rock-solid legal foundation for global operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <TrendingUp className="h-8 w-8 text-red-600 mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 font-serif">Marketing & Community</h3>
                    <p className="text-2xl font-bold text-red-600 mt-2">10% • $50K</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Building the DAO and driving initial user adoption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
              Why Invest in XMRT Solutions?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Massive Market Opportunity</h3>
                  <p className="text-gray-700">
                    At the intersection of AI ($1.8T), Web3 ($3T), and Wearable Tech ($380B) markets, 
                    with clear paths to revenue across multiple verticals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Technical Foundation</h3>
                  <p className="text-gray-700">
                    Live smart contracts, functional prototypes, and strategic partnerships 
                    already in place with industry leaders.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Experienced Leadership</h3>
                  <p className="text-gray-700">
                    Harvard-educated founder with USMC discipline and proven track record 
                    in AI and Web3 development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Strategic Positioning</h3>
                  <p className="text-gray-700">
                    Cost-effective operations from Costa Rica with regulatory advantages 
                    and access to global talent pool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We are actively seeking investment and strategic partnerships. If you share our vision 
              for a more intelligent, private, and decentralized future, let's connect.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-4">
                Email us directly to schedule a private presentation and discuss investment opportunities.
              </p>
              <a 
                href="mailto:xmrtsolutions@gmail.com" 
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
              >
                xmrtsolutions@gmail.com
              </a>
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 text-lg shadow-lg"
            >
              Schedule a Private Presentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
