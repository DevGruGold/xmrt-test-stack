
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, BarChart3, Zap } from "lucide-react";

const CashDapp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Gateway to the
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Decentralized Economy
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              CashDapp is the user-facing portal for the entire XMRT ecosystem. It's designed 
              for crypto natives and newcomers alike, providing a seamless interface for mining, 
              staking, and accessing powerful DeFi tools.
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
                  <Shield className="h-12 w-12 text-green-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Privacy-First Tools</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built with Monero miners and privacy advocates in mind, offering tools 
                  that respect your anonymity while maximizing your earning potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <BarChart3 className="h-12 w-12 text-emerald-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our SaaS subscription unlocks premium features, including advanced portfolio 
                  analytics, integration with other platforms, and enhanced governance dashboards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-yellow-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Seamless Staking</h3>
                <p className="text-gray-300 leading-relaxed">
                  An intuitive interface to stake your XMRT tokens and track your rewards 
                  in real-time, with detailed analytics and performance insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Revenue Model</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Revenue is generated via a SaaS subscription model for CashDapp Pro features 
              and premium analytics. Our freemium approach ensures accessibility while 
              providing advanced tools for power users and professional traders who need 
              sophisticated portfolio management and governance capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Experience CashDapp Pro Today
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            See how our intuitive interface makes complex DeFi operations simple and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              View Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/invest'}
            >
              Invest in the Future
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CashDapp;
