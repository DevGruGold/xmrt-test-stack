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
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats on load
    const statsTargets = [21, 7, 30];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedStats([
        Math.round(statsTargets[0] * easeOut),
        Math.round(statsTargets[1] * easeOut),
        Math.round(statsTargets[2] * easeOut)
      ]);
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
    
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
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
      description: "EIP-712 signature verification with live smart contract",
      highlight: "21M Max Supply"
    },
    {
      icon: Zap,
      title: "Multi-Chain Bridging",
      description: "Polygon/Avalanche integration with Layer2 scaling",
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
    { value: `${animatedStats[0]}M`, label: "Max XMRT Supply", color: "text-blue-600" },
    { value: `${animatedStats[1]} Days`, label: "Min Staking Period", color: "text-green-600" },
    { value: `${animatedStats[2]}%`, label: "DAO Quorum", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section - Now starts from top */}
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
          {/* Navigation in hero */}
          <div className="absolute top-8 right-8 flex items-center space-x-6 z-20">
            <a href="/token-dao" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Token & DAO</a>
            <a href="/cashdapp" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">CashDapp</a>
            <a href="/enterprise" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Enterprise</a>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => window.location.href = '/invest'}
            >
              Invest Now
            </Button>
          </div>

          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-lg font-semibold mb-6 animate-pulse border border-blue-200">
              🚀 Live Smart Contract on Sepolia Testnet
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight font-serif">
            <span className="block mb-4">XMR to DeFi Bridge</span>
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              With AI Governance
            </span>
          </h1>
          
          <p className="text-2xl text-slate-700 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Live protocol converting XMR to XMRT with oracle verification, 
            cross-chain bridging, biometric NFC security, and autonomous AI governance.
          </p>

          {/* Interactive Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => window.location.href = '/invest'}
            >
              View Investment Details
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => scrollToSection('ecosystem')}
            >
              Explore Live Protocol
            </Button>
          </div>
        </div>
        
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
          onClick={() => scrollToSection('features')}
        >
          <ChevronDown className="h-10 w-10 text-slate-400 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 font-serif">
              Real Technology. Proven Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our smart contract is live and operational with verified features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-10 text-center">
                  <div className="mb-8">
                    <feature.icon className="h-16 w-16 text-blue-600 mx-auto group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">{feature.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{feature.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {feature.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-slate-900 mb-12 font-serif">
              Bridging Privacy Coins to DeFi Innovation
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-semibold text-slate-900 mb-6">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  XMR holders have been locked out of DeFi due to privacy features that exchanges 
                  can't handle, missing out on staking, lending, and yield opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-red-600">
                    <div className="w-5 h-5 bg-red-600 rounded-full mr-4"></div>
                    <span className="text-lg">Limited DeFi access for privacy coins</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <div className="w-5 h-5 bg-red-600 rounded-full mr-4"></div>
                    <span className="text-lg">Regulatory compliance barriers</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-semibold text-slate-900 mb-6">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Our protocol provides oracle-verified XMR conversion with KYC compliance, 
                  multi-chain bridging, and AI governance—bringing privacy coins into DeFi.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-4" />
                    <span className="text-lg">Live smart contract with proven utility</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-4" />
                    <span className="text-lg">Multi-chain bridging & AI governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 font-serif">
              Deployed Smart Contract Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five integrated layers built on our live, upgradeable smart contract
            </p>
          </div>
          <EcosystemStack />
        </div>
      </section>

      {/* Traction & Roadmap */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 font-serif">
              From Code to Market: Our Execution
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">Live & Deployed</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Smart contract live on Sepolia with XMR conversion, multi-chain bridging, 
                  AI governance, NFC security, and upgradeable architecture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">Next 12 Months</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Polygon mainnet deployment, CashDapp public launch, enterprise pilots, 
                  NFC debit card distribution, and full DAO activation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <CardContent className="p-8">
                <div className="mb-6">
                  <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">3-Year Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Become the standard bridge between privacy coins and DeFi, expanding 
                  to additional chains and establishing global partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 font-serif">
            The Bridge is Built. Join the Revolution.
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Experience the future of privacy coin integration with our live protocol
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-6 text-xl shadow-lg transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => window.location.href = '/invest'}
            >
              Become an Early Investor
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
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
