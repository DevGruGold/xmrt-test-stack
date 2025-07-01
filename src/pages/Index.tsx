
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Users, Vote, Brain, Code, ExternalLink, Github } from "lucide-react";
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
      
      {/* Hero Section - Improved Mobile */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className={`container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-primary/20 text-primary rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6 animate-pulse-glow border border-primary/30">
              🚀 Smart Contract Live on Sepolia Testnet
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            <span className="block mb-2 sm:mb-4">Private Finance.</span>
            <span className="block xmrt-gradient-text animate-float">Public Power.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            XMRT is a privacy-first DeFi protocol with AI-enhanced DAO governance, 
            built on Monero's principles for the next generation of decentralized finance.
          </p>

          {/* Contract Address Info */}
          <div className="mb-8 sm:mb-12 px-4">
            <div className="bg-card/50 rounded-xl p-4 sm:p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground mb-2">XMRT Token Contract (Sepolia Testnet):</p>
              <a 
                href="https://sepolia.etherscan.io/token/0x77307DFbc436224d5e6f2048d2b6bDfA66998a15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-mono text-sm break-all flex items-center justify-center gap-2"
              >
                0x77307DFbc436224d5e6f2048d2b6bDfA66998a15
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Stats - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-4 sm:p-6 xmrt-card hover-lift ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg" 
              className="xmrt-gradient text-black px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              onClick={() => window.location.href = '/dao'}
            >
              Join the DAO
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              onClick={() => window.location.href = '/invest'}
            >
              View Investment
              <Vote className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Protocol Features Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              The XMRT Protocol
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              A comprehensive DeFi infrastructure combining privacy, governance, 
              and artificial intelligence for institutional-grade decentralized finance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto px-4">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`xmrt-card hover-lift group ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6">
                    <feature.icon className={`h-12 w-12 sm:h-16 sm:w-16 ${feature.color} mx-auto group-hover:scale-125 transition-transform duration-500`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Demonstrations Section - Mobile Optimized */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Protocol Demonstrations
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Live proof-of-concept applications showcasing XMRT protocol capabilities 
              for institutional investors and strategic partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto px-4">
            <Card className="xmrt-card hover-lift group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold">Payment Protocol Demo</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  Technical demonstration of XMRT's privacy-first payment infrastructure. 
                  Showcases zero-knowledge transactions and instant settlement capabilities.
                </p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://coldcash.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 font-semibold text-sm sm:text-base"
                  >
                    View Technical Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.location.href = '/invest'}
                    className="w-full"
                  >
                    Investment Opportunity
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="xmrt-card hover-lift group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-accent mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold">Bridge Protocol Demo</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  Proof-of-concept for XMRT's fiat-crypto bridge infrastructure. 
                  Demonstrates seamless onramp/offramp with privacy preservation.
                </p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://pipuente.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:text-accent/80 font-semibold text-sm sm:text-base"
                  >
                    View Technical Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.location.href = '/invest'}
                    className="w-full"
                  >
                    Investment Opportunity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DAO Governance Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              AI-Enhanced DAO Governance
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-4">
              XMRT's governance system combines community voting with AI oversight, 
              ensuring proposals meet technical, economic, and strategic criteria.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
              <div className="text-center">
                <Vote className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Token-Weighted Voting</h3>
                <p className="text-muted-foreground text-sm">Stake XMRT tokens to participate in protocol governance</p>
              </div>
              <div className="text-center">
                <Brain className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Proposal Analysis</h3>
                <p className="text-muted-foreground text-sm">5 specialized AI roles evaluate all governance proposals</p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Community Quorum</h3>
                <p className="text-muted-foreground text-sm">30% participation threshold for decision validity</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-semibold px-6 sm:px-8 py-4 hover:opacity-90 w-full sm:w-auto"
                onClick={() => window.location.href = '/dao'}
              >
                Explore DAO Structure
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black px-6 sm:px-8 py-4 w-full sm:w-auto"
                onClick={() => window.location.href = '/invest'}
              >
                Investment Opportunity
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Join the Future of Private Finance
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            XMRT is building the infrastructure for privacy-first DeFi. 
            Participate in governance, explore our protocol, or learn about investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              size="lg" 
              className="xmrt-gradient text-black font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.location.href = '/dao'}
            >
              Vote with XMRT
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-semibold transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.location.href = '/about'}
            >
              Meet the Founder
              <Github className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
