
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EcosystemStack from "@/components/EcosystemStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Redefining Human + AI
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Collaboration.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            An integrated ecosystem of autonomous AI agents, privacy-first smart devices, 
            and decentralized identity, all powered by the blockchain.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Ecosystem
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Today's Digital World is Powerful, But Broken.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              One Ecosystem to Unite Them All.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              XMRT Solutions shatters these silos. We are building the foundational layer for the 
              next generation of intelligence—an ecosystem where your AI has persistent memory, your 
              devices protect your privacy, and your identity is truly your own. This is where AI 
              moves from suggesting to <em className="text-blue-400 font-semibold">doing</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Layered Technology Stack.
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Five integrated layers working in harmony to create the future of human-AI collaboration.
            </p>
          </div>
          <EcosystemStack />
        </div>
      </section>

      {/* Traction & Roadmap */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Vision to Reality: Our Journey.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Current</h3>
                <p className="text-gray-300 leading-relaxed">
                  Live front-end on XMRT.io, smart contracts deployed and tested on Sepolia, 
                  functional staking prototype, and full Polygon deployment ready.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Next 12 Months</h3>
                <p className="text-gray-300 leading-relaxed">
                  Public token launch, MVP hardware prototypes, inaugural enterprise pilot program, 
                  and full community DAO rollout.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">3-Year Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Become the global standard for private, intelligent, on-chain collaboration, 
                  leading the enterprise market and fostering a multi-chain AI agent marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The Future is Collaborative. Let's Build It Together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
              onClick={() => window.location.href = '/invest'}
            >
              Become an Early Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
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
