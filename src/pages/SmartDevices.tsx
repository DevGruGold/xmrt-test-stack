
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Headphones, ShieldCheck } from "lucide-react";

const SmartDevices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Intelligence That Lives in Your World,
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Not Just on Your Screen
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The next generation of intelligence won't be confined to your phone. Our XMRT Smart 
              Devices—AR glasses and voice-first headphones—are designed to be your natural interface 
              to the digital world, embedding AI context directly into your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Product Mockups Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <div className="w-full h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Eye className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">XMRT AR Glasses</h3>
              <p className="text-gray-300">Sleek, lightweight design with advanced augmented reality capabilities.</p>
            </div>
            <div className="space-y-6">
              <div className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <Headphones className="h-16 w-16 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">XMRT Voice Headphones</h3>
              <p className="text-gray-300">Premium audio with advanced voice processing and AI integration.</p>
            </div>
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
                  <Eye className="h-12 w-12 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Augmented Reality Glasses</h3>
                <p className="text-gray-300 leading-relaxed">
                  Overlay critical information, receive AI-driven insights, and interact with your 
                  agents without breaking your focus from the real world.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Headphones className="h-12 w-12 text-cyan-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Voice-First Headphones</h3>
                <p className="text-gray-300 leading-relaxed">
                  Communicate with your AI agent, manage tasks, and receive private audio updates, 
                  all with simple voice commands and premium audio quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <ShieldCheck className="h-12 w-12 text-green-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Embedded Privacy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hardware-level security ensures your data and interactions remain yours and 
                  yours alone, with zero-knowledge architecture built into every device.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Revenue Model</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Revenue from direct-to-consumer (B2C) sales and business-to-business (B2B) 
              enterprise leasing models. Our premium hardware approach focuses on quality 
              over quantity, targeting users who value privacy, innovation, and seamless 
              AI integration in their daily workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Be Among the First to Experience the Future
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist to get early access to XMRT Smart Devices and 
            special launch pricing for founding members.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
          >
            Join the Hardware Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartDevices;
