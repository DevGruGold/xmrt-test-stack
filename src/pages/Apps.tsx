
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Shield, Zap, Code, Brain, ChevronRight, TrendingUp } from "lucide-react";
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
              Protocol <span className="xmrt-gradient-text">Demonstrations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Live proof-of-concept applications showcasing XMRT protocol capabilities. 
              Built for institutional investors and strategic partners to evaluate technical feasibility.
            </p>
          </div>
        </div>
      </section>

      {/* Protocol Demos Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Payment Protocol Demo */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 xmrt-gradient rounded-xl flex items-center justify-center mr-4">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">Payment Protocol</CardTitle>
                    <p className="text-muted-foreground">Privacy-First Transaction Demo</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technical demonstration of XMRT's privacy-first payment infrastructure. 
                  Showcases zero-knowledge transactions, instant settlement, and Monero-level privacy for DeFi.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Technical Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Zero-Knowledge Proofs</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Smart Contract Integration</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">EIP-712 Signatures</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">AI-Enhanced Security</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Demo Environment:</p>
                  <code className="text-primary font-mono text-sm">coldcash.vercel.app</code>
                  <p className="text-xs text-muted-foreground mt-2">For investor evaluation only</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="xmrt-gradient text-black font-semibold flex-1"
                    onClick={() => window.open('https://coldcash.vercel.app', '_blank')}
                  >
                    View Technical Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                    Technical Specs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bridge Protocol Demo */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">Bridge Protocol</CardTitle>
                    <p className="text-muted-foreground">Fiat Integration Proof-of-Concept</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proof-of-concept for XMRT's fiat-crypto bridge infrastructure. 
                  Demonstrates seamless onramp/offramp capabilities while maintaining privacy and regulatory compliance.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Technical Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Privacy-Preserving KYC</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Real-Time Settlement</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">Multi-Chain Support</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Compliance Automation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Demo Environment:</p>
                  <code className="text-accent font-mono text-sm">pipuente.vercel.app</code>
                  <p className="text-xs text-muted-foreground mt-2">For investor evaluation only</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-br from-accent to-blue-600 text-white font-semibold flex-1 hover:opacity-90"
                    onClick={() => window.open('https://pipuente.vercel.app', '_blank')}
                  >
                    View Technical Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                    Technical Specs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protocol Infrastructure */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Built on XMRT Protocol Infrastructure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 xmrt-card">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Contract Security</h3>
                <p className="text-muted-foreground text-sm">Deployed mainnet contracts with role-based access control and AI oversight</p>
              </div>
              <div className="text-center p-6 xmrt-card">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Chain Ready</h3>
                <p className="text-muted-foreground text-sm">Designed for Polygon, Avalanche, and Layer 2 integration</p>
              </div>
              <div className="text-center p-6 xmrt-card">
                <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">DAO Governed</h3>
                <p className="text-muted-foreground text-sm">Community-driven development with AI-enhanced proposal analysis</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Investment Opportunity</h3>
                <p className="text-muted-foreground mb-6">
                  These technical demonstrations showcase the commercial potential of XMRT's protocol infrastructure. 
                  Explore investment opportunities and technical partnerships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="xmrt-gradient text-black font-semibold px-8 py-4"
                    onClick={() => window.location.href = '/invest'}
                  >
                    Investment Details
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                    onClick={() => window.location.href = '/dao'}
                  >
                    Protocol Governance
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apps;
