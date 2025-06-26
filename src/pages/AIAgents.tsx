
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Zap, Network, ShoppingCart } from "lucide-react";

const AIAgents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Personal AI Copilot That
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Thinks, Acts, and Remembers
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              This is the core cognitive engine of the XMRT ecosystem. Our AI agents, powered by 
              leading models like Gemini and DeepSeek, are not just chatbots. They are autonomous 
              entities with persistent memory and context, capable of coordinating tasks and making 
              decisions across platforms on your behalf.
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
                  <Brain className="h-12 w-12 text-purple-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Persistent Memory</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your agent remembers past conversations and context across all your devices 
                  and platforms, creating truly personalized interactions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-pink-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Action</h3>
                <p className="text-gray-300 leading-relaxed">
                  Delegate complex tasks and workflows. Your agent doesn't just suggest; 
                  it executes on your behalf with your explicit permissions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Network className="h-12 w-12 text-indigo-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Decentralized Infrastructure</h3>
                <p className="text-gray-300 leading-relaxed">
                  Running on a decentralized cognitive framework, ensuring resilience, 
                  security, and censorship resistance for your AI interactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agent Marketplace Vision */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <ShoppingCart className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">Future Vision: The Agent Marketplace</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              We envision a future marketplace where developers can build and sell specialized 
              AI agents, creating a thriving economy on the XMRT platform. From financial 
              advisors to creative assistants, the possibilities are limitless.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="bg-slate-800/30 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">For Developers</h3>
                  <p className="text-gray-300">
                    Build, deploy, and monetize specialized AI agents using our 
                    comprehensive development framework and marketplace.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">For Users</h3>
                  <p className="text-gray-300">
                    Access a vast library of specialized agents tailored to your 
                    specific needs, from productivity to entertainment.
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover how autonomous AI agents can revolutionize productivity 
            and decision-making in your organization.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            onClick={() => window.location.href = '/enterprise'}
          >
            Discover Enterprise Use Cases
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgents;
