
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Shield, Code, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Visionaries
              <span className="block bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                Building the Future
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Behind every revolutionary technology is a team with the vision, expertise, 
              and determination to make the impossible possible.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">JL</span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-white mb-2">Joseph Andrew Lee</h2>
                    <p className="text-xl text-blue-400 mb-6">Founder & CEO</p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      A unique blend of intellectual rigor, disciplined leadership, and hands-on 
                      technical expertise. With a Master's from <strong className="text-white">Harvard University</strong>, 
                      a background as a <strong className="text-white">USMC Veteran</strong>, and proven experience as an 
                      <strong className="text-white"> AI/Web3 Builder</strong>, Joe possesses the global vision and 
                      execution capability to lead XMRT's revolution.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">Harvard Graduate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">USMC Veteran</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Code className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">AI/Web3 Builder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Advisors */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Backed by a Global Network of Experts
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-12">
              Our strength lies in our network. We are supported by advisors from the AI, Web3, 
              and smart hardware industries, with deep connections to partners like DeepSeek, 
              Manus.im, and the Polygon ecosystem. We are actively expanding our core team with 
              the world's best AI engineers, hardware specialists, and business development leaders.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/30 border-slate-600">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Advisory Board</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Industry veterans from AI research, blockchain development, and enterprise 
                    software, providing strategic guidance and market insights.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-600">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Strategic Partners</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Deep partnerships with DeepSeek for AI infrastructure, Manus.im for hardware 
                    development, and the Polygon ecosystem for blockchain integration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Costa Rica Advantage */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <MapPin className="h-16 w-16 text-green-400 mx-auto mb-6" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Innovating from Paradise
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Based in Costa Rica, we leverage a strategic position as a cost-effective, 
              politically stable, and crypto-friendly hub for innovation, perfectly situated 
              to serve both North American and European markets. Our location provides access 
              to world-class talent while maintaining operational efficiency and regulatory clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Join the XMRT Revolution
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you're an investor, partner, or future team member, 
            we're building something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
              onClick={() => window.location.href = '/invest'}
            >
              Invest in Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
