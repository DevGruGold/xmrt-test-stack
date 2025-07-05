import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Users, Vote, Brain, Code, ExternalLink, Github, Lock, Globe, TrendingUp, Wallet, DollarSign, Target, User, Mail, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Privacy-First Protocol",
      description: "Built on Monero principles with complete transaction privacy and zero-knowledge proofs for DeFi.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI-Enhanced Governance",
      description: "Role-based DAO voting with AI proposal analysis and automated treasury management.",
      color: "text-accent"
    },
    {
      icon: Code,
      title: "Smart Contract Infrastructure",
      description: "Deployed testnet contracts with KYC thresholds, NFT mining, and on-chain governance.",
      color: "text-green-400"
    }
  ];

  const stats = [
    { value: "21M", label: "Max Supply", color: "text-primary" },
    { value: "5", label: "AI Governance Roles", color: "text-accent" },
    { value: "30%", label: "DAO Quorum", color: "text-green-400" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className={`container mx-auto px-4 text-center relative z-10 max-w-6xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block px-3 py-2 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-6 animate-pulse-glow border border-primary/30">
              🚀 Smart Contract Live on Sepolia Testnet
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Private Finance.</span>
            <span className="block xmrt-gradient-text animate-float">Public Power.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            XMRT is a privacy-first DeFi protocol with AI-enhanced DAO governance, 
            built on Monero's principles for the next generation of decentralized finance.
          </p>

          {/* Contract Address Info */}
          <div className="mb-8">
            <div className="bg-card/50 rounded-xl p-4 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xs text-muted-foreground mb-2">XMRT Token Contract (Sepolia Testnet):</p>
              <a 
                href="https://sepolia.etherscan.io/token/0x77307DFbc436224d5e6f2048d2b6bDfA66998a15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-mono text-xs break-all flex items-center justify-center gap-2"
              >
                0x77307DFbc436224d5e6f2048d2b6bDfA66998a15
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-3 xmrt-card hover-lift ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <p className="text-muted-foreground font-medium text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 justify-center mb-12">
            <Button 
              size="lg" 
              className="xmrt-gradient text-black px-8 py-4 text-lg font-bold shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => document.getElementById('faucet')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free XMRT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => document.getElementById('dao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the DAO
              <Vote className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Protocol Features Section */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              The XMRT Protocol
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A comprehensive DeFi infrastructure combining privacy, governance, 
              and artificial intelligence for institutional-grade decentralized finance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`xmrt-card hover-lift group ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <feature.icon className={`h-12 w-12 ${feature.color} mx-auto group-hover:scale-125 transition-transform duration-500`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faucet Section */}
      <section id="faucet" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              XMRT <span className="xmrt-gradient-text">Faucet</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get free XMRT testnet tokens to explore our DeFi protocol and test our applications.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="xmrt-card">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 xmrt-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Request Testnet XMRT</h3>
                  <p className="text-muted-foreground text-sm">Get up to 1000 XMRT tokens for testing</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                    <p className="text-xs text-muted-foreground mb-2">Network: Sepolia Testnet</p>
                    <p className="text-xs text-muted-foreground mb-2">Daily Limit: 1000 XMRT per address</p>
                    <p className="text-xs text-muted-foreground">Contract: 0x77307DFbc436224d5e6f2048d2b6bDfA66998a15</p>
                  </div>

                  <div className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Enter your Ethereum address (0x...)"
                      className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-muted-foreground text-sm focus:border-primary focus:outline-none"
                    />
                    <Button className="w-full xmrt-gradient text-black font-semibold py-3">
                      Request XMRT Tokens
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Need Sepolia ETH for gas? Visit the{" "}
                      <a 
                        href="https://sepoliafaucet.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Sepolia Faucet
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DApps Section */}
      <section id="dapps" className="py-16 bg-card/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              XMRT <span className="xmrt-gradient-text">DApps</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Decentralized applications built on XMRT protocol. Experience privacy-first finance 
              with our suite of DeFi tools and utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            
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
          </div>
        </div>
      </section>

      {/* DAO Section */}
      <section id="dao" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              AI-Enhanced DAO Governance
            </h2>
            <p className="text-base text-muted-foreground mb-12 leading-relaxed">
              XMRT's governance system combines community voting with AI oversight, 
              ensuring proposals meet technical, economic, and strategic criteria.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="text-center p-4 xmrt-card">
                <Vote className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Token-Weighted Voting</h3>
                <p className="text-muted-foreground text-sm">Stake XMRT tokens to participate in protocol governance</p>
              </div>
              <div className="text-center p-4 xmrt-card">
                <Brain className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">AI Proposal Analysis</h3>
                <p className="text-muted-foreground text-sm">5 specialized AI roles evaluate all governance proposals</p>
              </div>
              <div className="text-center p-4 xmrt-card">
                <Users className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Community Quorum</h3>
                <p className="text-muted-foreground text-sm">30% participation threshold for decision validity</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-semibold px-8 py-4 hover:opacity-90"
              >
                Explore DAO Structure
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                onClick={() => document.getElementById('invest')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Investment Opportunity
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="invest" className="py-16 bg-card/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Investment <span className="xmrt-gradient-text">Opportunity</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join the next generation of privacy-first DeFi infrastructure. XMRT offers institutional-grade 
                investment opportunities in the growing privacy economy.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {/* Investment Highlights */}
              <Card className="xmrt-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary mr-3" />
                    Investment Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Fixed Supply Token Economics</h4>
                        <p className="text-muted-foreground text-sm">21M max supply with deflationary mechanisms</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Privacy Market Leadership</h4>
                        <p className="text-muted-foreground text-sm">First-mover advantage in AI-enhanced privacy DeFi</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Brain className="h-5 w-5 text-accent mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">AI Governance Innovation</h4>
                        <p className="text-muted-foreground text-sm">Revolutionary 5-role AI system for protocol decisions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Institutional Focus</h4>
                        <p className="text-muted-foreground text-sm">Built for enterprise and institutional adoption</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Token Metrics */}
              <Card className="xmrt-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Wallet className="h-6 w-6 text-accent mr-3" />
                    Token Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-black/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">21M</div>
                      <p className="text-muted-foreground text-sm">Max Supply</p>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">5</div>
                      <p className="text-muted-foreground text-sm">AI Governance Roles</p>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">30%</div>
                      <p className="text-muted-foreground text-sm">DAO Quorum</p>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">Live</div>
                      <p className="text-muted-foreground text-sm">Testnet Status</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 border border-white/20">
                    <p className="text-sm text-muted-foreground mb-2">Contract Address (Sepolia):</p>
                    <code className="text-primary font-mono text-xs break-all">0x77307DFbc436224d5e6f2048d2b6bDfA66998a15</code>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-bold px-10 py-6 text-xl hover:opacity-90"
              >
                Request Investment Information
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="xmrt-gradient-text">XMRT</span>
            </h2>
            <p className="text-base text-muted-foreground mb-12 leading-relaxed">
              Meet the founder and learn about the vision behind XMRT's privacy-first DeFi protocol.
            </p>

            <Card className="xmrt-card max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Joe Lee</h3>
                <p className="text-primary font-semibold mb-4">Founder & Lead Developer</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Blockchain developer and DeFi innovator focused on building privacy-preserving 
                  financial infrastructure. Previously worked on enterprise blockchain solutions 
                  and decentralized governance systems.
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/josephmlee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://twitter.com/JoeLee_Defi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:joe@xmrt.net" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Join the Future of Private Finance
          </h2>
          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
            XMRT is building the infrastructure for privacy-first DeFi. 
            Participate in governance, explore our protocol, or learn about investment opportunities.
          </p>
          <div className="flex flex-col gap-3 justify-center">
            <Button 
              size="lg" 
              className="xmrt-gradient text-black font-bold px-10 py-4 text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('faucet')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Tokens
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('dao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the DAO
              <Vote className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
