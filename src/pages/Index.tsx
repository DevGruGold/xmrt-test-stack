
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Users, Vote, Wallet, Nfc, Play, ExternalLink, Github } from "lucide-react";
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
      title: "Privacy-First DeFi",
      description: "Built on Monero principles with complete transaction privacy and decentralized governance.",
      color: "text-primary"
    },
    {
      icon: Vote,
      title: "AI-Enhanced DAO",
      description: "Role-based voting with AI proposal approval and automated treasury management.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Live dApps",
      description: "XMRT Pay and XMRT Bridge are deployed and operational with real users.",
      color: "text-green-400"
    }
  ];

  const stats = [
    { value: "21M", label: "Max Supply", color: "text-primary" },
    { value: "5", label: "AI Roles", color: "text-accent" },
    { value: "30%", label: "DAO Quorum", color: "text-green-400" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className={`container mx-auto px-6 text-center relative z-10 max-w-6xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-primary/20 text-primary rounded-full text-lg font-semibold mb-6 animate-pulse-glow border border-primary/30">
              🚀 Smart Contract Live on Mainnet
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block mb-4">Private Finance.</span>
            <span className="block xmrt-gradient-text animate-float">Public Power.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
            XMRT is a privacy-first DeFi platform with DAO governance, AI oversight, 
            and live decentralized applications for payments and fiat bridging.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 xmrt-card hover-lift ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="xmrt-gradient text-black px-10 py-6 text-xl font-bold shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => window.location.href = '/dao'}
            >
              Join the DAO
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => window.location.href = '/apps'}
            >
              Try Our Apps
              <Play className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Demo Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a 
              href="https://coldcash.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo: XMRT Pay
            </a>
            <a 
              href="https://pipuente.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo: XMRT Bridge
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for Privacy. Powered by Community.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              XMRT combines the privacy principles of Monero with modern DeFi governance 
              and AI-enhanced decision making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`xmrt-card hover-lift group ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <feature.icon className={`h-16 w-16 ${feature.color} mx-auto group-hover:scale-125 transition-transform duration-500`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Live Products. Real Users.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our decentralized applications are deployed and operational, 
              serving real users with privacy-focused financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="xmrt-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Wallet className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">XMRT Pay</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Peer-to-peer crypto payments with privacy-first design. 
                  Send and receive payments instantly with complete anonymity.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://coldcash.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 font-semibold"
                  >
                    Try Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/apps'}>
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="xmrt-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Nfc className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold">XMRT Bridge</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Seamless fiat onramp and offramp tool for private transactions. 
                  Bridge traditional finance with decentralized privacy.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://pipuente.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:text-accent/80 font-semibold"
                  >
                    Try Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/apps'}>
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DAO Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Governed by Community. Enhanced by AI.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              XMRT's DAO features role-based voting, AI proposal approval, 
              and automated treasury management for transparent governance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Vote className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vote with XMRT</h3>
                <p className="text-muted-foreground text-sm">Token-weighted governance with role-based permissions</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Oversight</h3>
                <p className="text-muted-foreground text-sm">5 AI roles managing proposals and treasury</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">30% Quorum</h3>
                <p className="text-muted-foreground text-sm">Community-driven decision making</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-semibold px-8 py-4 hover:opacity-90"
                onClick={() => window.location.href = '/dao'}
              >
                Join the DAO
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                onClick={() => window.location.href = '/invest'}
              >
                View Investment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Build the Future of Finance?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join the XMRT ecosystem today. Vote with your tokens, use our apps, 
            and help shape the future of privacy-first DeFi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="xmrt-gradient text-black font-bold px-10 py-6 text-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/dao'}
            >
              Vote with XMRT
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/about'}
            >
              Meet the Founder
              <Github className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
