
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Wallet, Nfc, Shield, Zap, Users, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Apps = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              XMRT <span className="xmrt-gradient-text">Applications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Live decentralized applications built on XMRT's privacy-first infrastructure. 
              Try our products with real users and real transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* XMRT Pay */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 xmrt-gradient rounded-xl flex items-center justify-center mr-4">
                    <Wallet className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">XMRT Pay</CardTitle>
                    <p className="text-muted-foreground">Peer-to-Peer Crypto Payments</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Send and receive cryptocurrency payments with complete privacy and instant settlement. 
                  Built for real-world use with an intuitive interface.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Private Transactions</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Instant Settlement</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">P2P Network</span>
                    </div>
                    <div className="flex items-center">
                      <Wallet className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Multi-Wallet Support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Live Demo URL:</p>
                  <code className="text-primary font-mono text-sm">coldcash.vercel.app</code>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="xmrt-gradient text-black font-semibold flex-1"
                    onClick={() => window.open('https://coldcash.vercel.app', '_blank')}
                  >
                    Try Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* XMRT Bridge */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Nfc className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">XMRT Bridge</CardTitle>
                    <p className="text-muted-foreground">Fiat Onramp/Offramp Tool</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seamlessly bridge traditional finance with decentralized privacy. 
                  Convert fiat to crypto and back while maintaining complete anonymity.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Private Bridging</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Fast Conversion</span>
                    </div>
                    <div className="flex items-center">
                      <Nfc className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">NFC Support</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Global Access</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Live Demo URL:</p>
                  <code className="text-accent font-mono text-sm">pipuente.vercel.app</code>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-br from-accent to-blue-600 text-white font-semibold flex-1 hover:opacity-90"
                    onClick={() => window.open('https://pipuente.vercel.app', '_blank')}
                  >
                    Try Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Built on XMRT Infrastructure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 xmrt-card">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Contract Security</h3>
                <p className="text-muted-foreground text-sm">EIP-712 signatures with role-based access control</p>
              </div>
              <div className="text-center p-6 xmrt-card">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Chain Ready</h3>
                <p className="text-muted-foreground text-sm">Polygon, Avalanche, and Layer 2 support</p>
              </div>
              <div className="text-center p-6 xmrt-card">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">DAO Integrated</h3>
                <p className="text-muted-foreground text-sm">Governed by token holders with AI oversight</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-semibold px-8 py-4"
                onClick={() => window.location.href = '/dao'}
              >
                Learn About DAO Governance
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apps;
