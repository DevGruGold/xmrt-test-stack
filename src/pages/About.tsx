
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight font-serif">
              The Visionaries Building
              <span className="block text-blue-600">
                the Future
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Meet the team behind XMRT Solutions and discover our mission to revolutionize 
              human-AI collaboration through innovative technology and strategic vision.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional headshot"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-serif">Joseph Andrew Lee</h2>
                <p className="text-xl text-blue-600 font-semibold mb-6">Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A unique blend of intellectual rigor, disciplined leadership, and hands-on technical expertise. 
                  With a Master's from <strong>Harvard University</strong>, a background as a <strong>USMC Veteran</strong>, 
                  and proven experience as an <strong>AI/Web3 Builder</strong>, Joe possesses the global vision 
                  and execution capability to lead XMRT's revolution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Harvard</div>
                    <div className="text-sm text-gray-600">Education</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">USMC</div>
                    <div className="text-sm text-gray-600">Veteran</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">AI/Web3</div>
                    <div className="text-sm text-gray-600">Builder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Advisors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Backed by a Global Network of Experts
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our strength lies in our network. We are supported by advisors from the AI, Web3, 
              and smart hardware industries, with deep connections to partners like DeepSeek, 
              Manus.im, and the Polygon ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">Core Team</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We are actively expanding our core team with the world's best AI engineers, 
                  hardware specialists, and business development leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Globe className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">Strategic Partners</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Deep connections to industry leaders including DeepSeek for AI capabilities 
                  and Manus.im for hardware development expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <MapPin className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">Ecosystem Network</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Strong relationships within the Polygon ecosystem and broader Web3 community, 
                  ensuring seamless integration and adoption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Costa Rica Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-serif">
                  Innovating from Paradise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Based in Costa Rica, we leverage a strategic position as a cost-effective, 
                  politically stable, and crypto-friendly hub for innovation, perfectly situated 
                  to serve both North American and European markets.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Cost-effective operational base</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Politically stable environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Crypto-friendly regulatory framework</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Strategic geographic positioning</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Costa Rica landscape"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-serif">
            Ready to Join Our Mission?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're an investor, partner, or future team member, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 text-lg shadow-lg"
              onClick={() => window.location.href = '/invest'}
            >
              Explore Investment Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary px-8 py-4 text-lg"
              onClick={() => window.location.href = '/enterprise'}
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
