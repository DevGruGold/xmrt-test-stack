
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Shield, Zap, Code, Brain, ChevronRight, TrendingUp, Wallet, Lock, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DApps = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              XMRT <span className="xmrt-gradient-text">DApps</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Decentralized applications built on XMRT protocol. Experience privacy-first finance 
              with our suite of DeFi tools and utilities.
            </p>
          </div>
        </div>
      </section>

      {/* DApps Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* ColdCash - Privacy Payment DApp */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 xmrt-gradient rounded-xl flex items-center justify-center mr-4">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">ColdCash</CardTitle>
                    <p className="text-muted-foreground">Privacy-First Payment DApp</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Send and receive payments with complete privacy. ColdCash uses zero-knowledge proofs 
                  to ensure transaction details remain confidential while maintaining blockchain transparency.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Zero-Knowledge Proofs</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Instant Settlements</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">Private Transactions</span>
                    </div>
                    <div className="flex items-center">
                      <Wallet className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Multi-Token Support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Live DApp:</p>
                  <code className="text-primary font-mono text-sm">coldcash.vercel.app</code>
                  <p className="text-xs text-muted-foreground mt-2">Beta version - Testnet only</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="xmrt-gradient text-black font-semibold flex-1"
                    onClick={() => window.open('https://coldcash.vercel.app', '_blank')}
                  >
                    Launch DApp
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PiPuente - Bridge DApp */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">PiPuente</CardTitle>
                    <p className="text-muted-foreground">Cross-Chain Bridge DApp</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bridge assets across different blockchains while maintaining privacy. 
                  PiPuente enables seamless cross-chain transfers with built-in privacy protection.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Multi-Chain Support</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Fast Bridging</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">Privacy Preserved</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Smart Contract Secured</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Live DApp:</p>
                  <code className="text-accent font-mono text-sm">pipuente.vercel.app</code>
                  <p className="text-xs text-muted-foreground mt-2">Beta version - Testnet only</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-br from-accent to-blue-600 text-white font-semibold flex-1 hover:opacity-90"
                    onClick={() => window.open('https://pipuente.vercel.app', '_blank')}
                  >
                    Launch DApp
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* XMRT Swap - DEX DApp */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">XMRT Swap</CardTitle>
                    <p className="text-muted-foreground">Privacy DEX DApp</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Trade tokens with complete privacy. Our decentralized exchange hides trading patterns 
                  and amounts while providing optimal swap rates across multiple liquidity sources.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">Best Price Routing</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Anonymous Trading</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">AI-Optimized Swaps</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">MEV Protection</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Status:</p>
                  <code className="text-green-400 font-mono text-sm">Coming Soon</code>
                  <p className="text-xs text-muted-foreground mt-2">In development</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-br from-green-400 to-emerald-600 text-white font-semibold flex-1 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </Button>
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    Join Waitlist
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* XMRT Governance - DAO DApp */}
            <Card className="xmrt-card hover-lift group">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">XMRT Governance</CardTitle>
                    <p className="text-muted-foreground">DAO Voting DApp</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Participate in protocol governance with AI-enhanced decision making. 
                  Vote on proposals, delegate tokens, and shape the future of XMRT ecosystem.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-sm">AI Proposal Analysis</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Anonymous Voting</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-accent mr-3" />
                      <span className="text-sm">Instant Results</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-sm">Token Delegation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-muted-foreground mb-2">Status:</p>
                  <code className="text-purple-400 font-mono text-sm">Coming Soon</code>
                  <p className="text-xs text-muted-foreground mt-2">In development</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-br from-purple-500 to-pink-600 text-white font-semibold flex-1 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                    onClick={() => window.location.href = '/dao'}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Build on XMRT Protocol
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 xmrt-card">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Developer SDK</h3>
                <p className="text-muted-foreground text-sm">Build privacy-first DApps with our comprehensive SDK</p>
              </div>
              <div className="text-center p-6 xmrt-card">
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                <p className="text-muted-foreground text-sm">Leverage AI agents for enhanced user experiences</p>
              </div>
              <div className="text-center p-6 xmrt-card">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privacy by Design</h3>
                <p className="text-muted-foreground text-sm">Built-in privacy features for all protocol interactions</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
              <p className="text-muted-foreground mb-6">
                Join our developer community and start building the next generation of privacy-first DApps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="xmrt-gradient text-black font-semibold px-8 py-4"
                >
                  Developer Docs
                  <Code className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                  onClick={() => window.location.href = '/dao'}
                >
                  Join Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DApps;
