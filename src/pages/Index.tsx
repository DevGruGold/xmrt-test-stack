
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Building2, Users, TrendingUp, Shield, Zap, Globe, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EcosystemStack from "@/components/EcosystemStack";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const keyFeatures = [
    {
      icon: Shield,
      title: "Oracle-Verified XMR Conversion",
      description: "Live smart contract with EIP-712 signature verification",
      highlight: "21M Max Supply"
    },
    {
      icon: Zap,
      title: "Multi-Chain Bridging",
      description: "Native Polygon/Avalanche integration with Layer2 scaling",
      highlight: "Cross-Chain Ready"
    },
    {
      icon: Globe,
      title: "AI-Governed DAO",
      description: "5 AI roles managing treasury and protocol upgrades",
      highlight: "30% Quorum"
    }
  ];

  const stats = [
    { value: "21M", label: "Max XMRT Supply", color: "text-blue-600" },
    { value: "7 Days", label: "Min Staking Period", color: "text-green-600" },
    { value: "30%", label: "DAO Quorum", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="AI and blockchain technology"
            className="w-full h-full object-cover opacity-10 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/95 to-white/98"></div>
        </div>
        
        <div className={`container mx-auto px-6 text-center relative z-10 max-w-6xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4 animate-pulse">
              🚀 Live Smart Contract on Sepolia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight font-serif">
            Live Multi-Chain Protocol:
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              XMR to DeFi Bridge
            </span>
          </h1>
          
          <p className="text-xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deployed smart contract converting XMR to XMRT with cross-chain bridging, 
            AI governance, biometric NFC security, and offline transaction capabilities.
          </p>

          {/* Interactive Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = '/invest'}
            >
              View Investment Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              onClick={() => scrollToSection('ecosystem')}
            >
              Explore Live Protocol
            </Button>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('features')}
        >
          <ChevronDown className="h-8 w-8 text-slate-400 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              Real Technology. Proven Results.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our smart contract is live and operational with verified features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <feature.icon className="h-12 w-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{feature.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {feature.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 font-serif">
              Bridging Privacy Coins to DeFi Innovation
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  XMR holders have been locked out of DeFi due to privacy features that exchanges 
                  can't handle, missing out on staking, lending, and yield opportunities.
                </p>
                <div className="flex items-center text-red-600 mb-2">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                  <span>Limited DeFi access for privacy coins</span>
                </div>
                <div className="flex items-center text-red-600">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                  <span>Regulatory compliance barriers</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our protocol provides oracle-verified XMR conversion with KYC compliance, 
                  multi-chain bridging, and AI governance—bringing privacy coins into DeFi.
                </p>
                <div className="flex items-center text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span>Live smart contract with proven utility</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span>Multi-chain bridging & AI governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              Deployed Smart Contract Architecture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five integrated layers built on our live, upgradeable smart contract
            </p>
          </div>
          <EcosystemStack />
        </div>
      </section>

      {/* Traction & Roadmap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              From Code to Market: Our Execution
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Building2 className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Live & Deployed</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Smart contract live on Sepolia with XMR conversion, multi-chain bridging, 
                  AI governance, NFC security, and upgradeable architecture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Next 12 Months</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Polygon mainnet deployment, CashDapp public launch, enterprise pilots, 
                  NFC debit card distribution, and full DAO activation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">3-Year Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Become the standard bridge between privacy coins and DeFi, expanding 
                  to additional chains and establishing global partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            The Bridge is Built. Join the Revolution.
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the future of privacy coin integration with our live protocol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = '/invest'}
            >
              Become an Early Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = '/cashdapp'}
            >
              Try CashDapp Portal
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
