
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Building2, Users, TrendingUp, Shield, Zap, Globe, CheckCircle } from "lucide-react";
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
        
        <div className={`container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Navigation in hero */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center space-x-2 sm:space-x-6 z-20">
            <a href="/token-dao" className="hidden sm:inline text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm sm:text-base">Token & DAO</a>
            <a href="/cashdapp" className="hidden sm:inline text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm sm:text-base">CashDapp</a>
            <a href="/enterprise" className="hidden sm:inline text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm sm:text-base">Enterprise</a>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
              onClick={() => window.location.href = '/invest'}
            >
              Invest Now
            </Button>
          </div>

          <div className="mb-4 sm:mb-6 mt-16 sm:mt-0">
            <span className="inline-block px-3 py-2 sm:px-6 sm:py-3 bg-blue-50 text-blue-700 rounded-full text-sm sm:text-lg font-semibold mb-4 sm:mb-6 animate-pulse border border-blue-200">
              🚀 Live Smart Contract on Sepolia Testnet
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight font-serif px-2">
            <span className="block mb-2 sm:mb-4">XMR to DeFi Bridge</span>
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              With AI Governance
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-700 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Live protocol converting XMR to XMRT with oracle verification, 
            cross-chain bridging, biometric NFC security, and autonomous AI governance.
          </p>

          {/* Interactive Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-4 sm:p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`text-2xl sm:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>{stat.value}</div>
                <p className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              onClick={() => window.location.href = '/invest'}
            >
              View Investment Details
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              onClick={() => scrollToSection('ecosystem')}
            >
              Explore Live Protocol
            </Button>
          </div>
        </div>
        
        <div 
          className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
          onClick={() => scrollToSection('features')}
        >
          <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-slate-400 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-12 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-2">
              Real Technology. Proven Results.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our smart contract is live and operational with verified features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 sm:p-10 text-center">
                  <div className="mb-6 sm:mb-8">
                    <feature.icon className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 font-serif">{feature.title}</h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">{feature.description}</p>
                  <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-semibold border border-blue-200">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {feature.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8 sm:mb-12 font-serif px-2">
              Bridging Privacy Coins to DeFi Innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="text-left px-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 sm:mb-6">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                  XMR holders have been locked out of DeFi due to privacy features that exchanges 
                  can't handle, missing out on staking, lending, and yield opportunities.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-red-600">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-600 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg">Limited DeFi access for privacy coins</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-600 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg">Regulatory compliance barriers</span>
                  </div>
                </div>
              </div>
              <div className="text-left px-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 sm:mb-6">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                  Our protocol provides oracle-verified XMR conversion with KYC compliance, 
                  multi-chain bridging, and AI governance—bringing privacy coins into DeFi.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Live smart contract with proven utility</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-3 sm:mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Multi-chain bridging & AI governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-12 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-2">
              Deployed Smart Contract Architecture
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Five integrated layers built on our live, upgradeable smart contract
            </p>
          </div>
          <EcosystemStack />
        </div>
      </section>

      {/* Traction & Roadmap */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-2">
              From Code to Market: Our Execution
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">Live & Deployed</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Smart contract live on Sepolia with XMR conversion, multi-chain bridging, 
                  AI governance, NFC security, and upgradeable architecture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">Next 12 Months</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Polygon mainnet deployment, CashDapp public launch, enterprise pilots, 
                  NFC debit card distribution, and full DAO activation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">3-Year Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Become the standard bridge between privacy coins and DeFi, expanding 
                  to additional chains and establishing global partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8 font-serif px-2">
            The Bridge is Built. Join the Revolution.
          </h2>
          <p className="text-lg sm:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Experience the future of privacy coin integration with our live protocol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              onClick={() => window.location.href = '/invest'}
            >
              Become an Early Investor
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-4 sm:px-10 sm:py-6 text-lg sm:text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
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
