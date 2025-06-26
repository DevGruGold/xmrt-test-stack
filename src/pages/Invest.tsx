
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, TrendingUp, Shield, Users, Building2, Globe, Zap, Target, Calendar, CheckCircle } from "lucide-react";

const Invest = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Pre-Seed Investment Opportunity
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Join the Future of
              <span className="block text-blue-600">
                Human-AI Collaboration
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-8 leading-relaxed">
              Invest in foundational technology at the intersection of AI, Web3, and IoT. 
              $500K pre-seed round to accelerate development and capture market share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Request Investment Deck
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$500K</div>
                  <div className="text-sm text-slate-600">Pre-Seed Target</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">$4.2T</div>
                  <div className="text-sm text-slate-600">Combined TAM</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">18M</div>
                  <div className="text-sm text-slate-600">Months to MVP</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3x</div>
                  <div className="text-sm text-slate-600">Revenue Streams</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Massive Market Convergence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>AI Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">$1.8T</div>
                  <p className="text-slate-600 text-sm mb-4">
                    Projected AI market size by 2030, with enterprise AI adoption accelerating rapidly.
                  </p>
                  <div className="text-sm text-slate-500">
                    CAGR: 37.3% (2023-2030)
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Web3 & Blockchain</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">$3.0T</div>
                  <p className="text-slate-600 text-sm mb-4">
                    Global blockchain market value, driven by DeFi, NFTs, and enterprise adoption.
                  </p>
                  <div className="text-sm text-slate-500">
                    CAGR: 85.9% (2023-2030)
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>IoT & Wearables</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-2">$380B</div>
                  <p className="text-slate-600 text-sm mb-4">
                    IoT and wearable technology market, with smart devices becoming ubiquitous.
                  </p>
                  <div className="text-sm text-slate-500">
                    CAGR: 25.2% (2023-2030)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Strategic Use of Funds
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">35%</div>
                      <div className="text-sm text-slate-600">$175K</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">R&D Development</h3>
                  <p className="text-slate-600 text-sm">
                    AI model training, smart contract audits, hardware prototyping, and core platform development.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">25%</div>
                      <div className="text-sm text-slate-600">$125K</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Team Expansion</h3>
                  <p className="text-slate-600 text-sm">
                    Hiring senior AI engineers, blockchain developers, and product managers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Building2 className="h-8 w-8 text-purple-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">20%</div>
                      <div className="text-sm text-slate-600">$100K</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Pilots</h3>
                  <p className="text-slate-600 text-sm">
                    Onboarding Fortune 500 clients and building enterprise partnerships.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">10%</div>
                      <div className="text-sm text-slate-600">$50K</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Legal & Compliance</h3>
                  <p className="text-slate-600 text-sm">
                    International legal framework, IP protection, and regulatory compliance.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="h-8 w-8 text-red-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">10%</div>
                      <div className="text-sm text-slate-600">$50K</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Marketing & GTM</h3>
                  <p className="text-slate-600 text-sm">
                    Brand building, community development, and go-to-market strategy execution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Diversified Revenue Streams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                    SaaS Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">$50-500/mo</div>
                  <p className="text-slate-600 text-sm mb-4">
                    Tiered pricing for CashDapp Pro, enterprise dashboards, and AI agent subscriptions.
                  </p>
                  <div className="text-sm text-slate-500">
                    Target: 10K enterprise users by Year 2
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 text-green-600 mr-2" />
                    API Licensing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">$0.01-1.00</div>
                  <p className="text-slate-600 text-sm mb-4">
                    Per-call pricing for AI agent API access and enterprise integration services.
                  </p>
                  <div className="text-sm text-slate-500">
                    Target: 1M API calls/month by Year 2
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 text-purple-600 mr-2" />
                    Hardware Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-2">$299-799</div>
                  <p className="text-slate-600 text-sm mb-4">
                    Direct sales of XMRT smart glasses and headphones with recurring software licenses.
                  </p>
                  <div className="text-sm text-slate-500">
                    Target: 50K units sold by Year 3
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              18-Month Execution Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <CardTitle>Q1-Q2 2025</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">Complete token deployment on Polygon</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">Launch CashDapp Pro beta</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">Begin hardware prototyping</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">Secure 3 enterprise pilot partners</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-green-600 mr-2" />
                    <CardTitle>Q3-Q4 2025</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">Public token launch & DAO activation</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">AI agent marketplace alpha</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">Hardware MVP testing</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">Enterprise API launch</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                    <CardTitle>Q1-Q2 2026</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">Hardware pre-orders launch</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">Series A fundraising</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">International expansion</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-4 w-4 border-2 border-slate-300 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                      <span className="text-sm">10K+ enterprise customers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Invest in XMRT Solutions?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">First-Mover Advantage</h3>
                  <p className="text-slate-600">
                    We're building the foundational infrastructure for AI-human collaboration before the market becomes saturated. 
                    Our integrated approach combining AI, blockchain, and IoT creates significant barriers to entry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Technical Foundation</h3>
                  <p className="text-slate-600">
                    Live smart contracts on testnet, functional web application, and partnerships with leading AI providers. 
                    We're not just a concept - we're already building and testing real solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Experienced Leadership</h3>
                  <p className="text-slate-600">
                    Harvard-educated founder with USMC discipline and proven track record in AI/ML and blockchain development. 
                    Strong advisory network with deep industry connections.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Global Strategic Positioning</h3>
                  <p className="text-slate-600">
                    Based in Costa Rica with significant cost advantages, crypto-friendly regulations, and strategic location 
                    for serving both North American and European markets.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We're actively seeking strategic investors and partners who share our vision for the future of human-AI collaboration. 
              Let's discuss how you can be part of this transformative journey.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Investment Inquiries</h3>
              <p className="text-slate-300 mb-4">
                Contact us directly to receive our detailed investment deck and schedule a private presentation.
              </p>
              <a 
                href="mailto:xmrtsolutions@gmail.com" 
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
              >
                xmrtsolutions@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 text-lg shadow-lg"
              >
                Request Investment Deck
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              >
                Schedule Private Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
