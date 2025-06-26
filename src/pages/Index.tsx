
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Building2, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EcosystemStack from "@/components/EcosystemStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Technology workspace"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight font-serif">
            Redefining Human + AI
            <span className="block text-blue-600">
              Collaboration.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            An integrated ecosystem of autonomous AI agents, privacy-first smart devices, 
            and decentralized identity, all powered by the blockchain.
          </p>
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Ecosystem
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-serif">
              Today's Digital World is Powerful, But Broken.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI has become incredibly powerful, but it's fragmented across countless apps and devices, 
              unable to remember you. Your personal data is the price of admission, a trade-off we're 
              told is necessary for convenience. For enterprises, AI remains a passive suggestion engine, 
              not an active collaborator. And for the pioneers of the decentralized world, true on-chain 
              identity and utility remain just out of reach.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-serif">
              One Ecosystem to Unite Them All.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              XMRT Solutions shatters these silos. We are building the foundational layer for the 
              next generation of intelligence—an ecosystem where your AI has persistent memory, your 
              devices protect your privacy, and your identity is truly your own. This is where AI 
              moves from suggesting to <em className="text-blue-600 font-semibold">doing</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Our Layered Technology Stack.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five integrated layers working in harmony to create the future of human-AI collaboration.
            </p>
          </div>
          <EcosystemStack />
        </div>
      </section>

      {/* Traction & Roadmap */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">
              From Vision to Reality: Our Journey.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4">
                  <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Current</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Live front-end on XMRT.io, smart contracts deployed and tested on Sepolia, 
                  functional staking prototype, and full Polygon deployment ready.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Next 12 Months</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Public token launch, MVP hardware prototypes, inaugural enterprise pilot program, 
                  and full community DAO rollout.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">3-Year Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Become the global standard for private, intelligent, on-chain collaboration, 
                  leading the enterprise market and fostering a multi-chain AI agent marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 font-serif">
            The Future is Collaborative. Let's Build It Together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 text-lg shadow-lg"
              onClick={() => window.location.href = '/invest'}
            >
              Become an Early Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary px-8 py-4 text-lg"
              onClick={() => window.location.href = '/enterprise'}
            >
              Explore Enterprise Solutions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
