
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Building2, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EcosystemStack from "@/components/EcosystemStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Tightened spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="AI and blockchain technology"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight font-serif">
            Live Multi-Chain Protocol:
            <span className="block text-blue-600">
              XMR to DeFi Bridge
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            Deployed smart contract converting XMR to XMRT with cross-chain bridging, 
            AI governance, biometric NFC security, and offline transaction capabilities.
          </p>

          {/* Key Value Props - Reduced spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-3">
              <Shield className="h-7 w-7 text-blue-600 mb-2" />
              <h3 className="text-base font-semibold text-slate-900 mb-1">Oracle-Verified XMR Conversion</h3>
              <p className="text-sm text-slate-600">Live smart contract with EIP-712 signature verification and 21M max supply</p>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Zap className="h-7 w-7 text-blue-600 mb-2" />
              <h3 className="text-base font-semibold text-slate-900 mb-1">Multi-Chain Bridging</h3>
              <p className="text-sm text-slate-600">Native Polygon/Avalanche integration with Layer2 scaling and KYC compliance</p>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Globe className="h-7 w-7 text-blue-600 mb-2" />
              <h3 className="text-base font-semibold text-slate-900 mb-1">AI-Governed DAO</h3>
              <p className="text-sm text-slate-600">5 AI roles managing treasury, proposals, and upgrades with biometric security</p>
            </div>
          </div>

          {/* Funding Status - Reduced spacing */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Contract Live on Sepolia</h3>
            <p className="text-slate-700 mb-3">Raising $500K for Polygon mainnet deployment & enterprise partnerships</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-base px-6 py-3"
                onClick={() => window.location.href = '/invest'}
              >
                View Investment Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-secondary text-base px-6 py-3"
                onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Live Protocol
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* Problem Section - Reduced padding */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Privacy Coins Meet DeFi Innovation.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              XMR holders have been locked out of DeFi due to privacy features that exchanges 
              can't handle. Our protocol bridges this gap with oracle-verified conversion, 
              KYC compliance where required, and multi-chain accessibility—bringing privacy 
              coin holders into the expanding DeFi ecosystem while maintaining security.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Reduced padding */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Live Protocol. Real Utility. Proven Technology.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our smart contract is deployed and operational, featuring upgradeable architecture, 
              multi-signature AI governance, biometric NFC integration, and cross-chain bridging. 
              This isn't a whitepaper—it's <em className="text-blue-600 font-semibold">working code 
              processing real transactions</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview - Reduced padding */}
      <section id="ecosystem" className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">
              Deployed Smart Contract Architecture.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five integrated layers built on our live, upgradeable smart contract with real-world utility.
            </p>
          </div>
          <EcosystemStack />
        </div>
      </section>

      {/* Traction & Roadmap - Reduced padding */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">
              From Code to Market: Our Execution.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-5 sm:p-6">
                <div className="mb-3">
                  <Building2 className="h-7 w-7 text-blue-600 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">Live & Deployed</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Smart contract live on Sepolia with XMR conversion, multi-chain bridging, 
                  AI governance, NFC security, and upgradeable architecture ready for mainnet.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-5 sm:p-6">
                <div className="mb-3">
                  <Users className="h-7 w-7 text-green-600 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">Next 12 Months</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Polygon mainnet deployment, CashDapp public launch, enterprise pilot programs, 
                  NFC debit card distribution, and full DAO governance activation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-5 sm:p-6">
                <div className="mb-3">
                  <TrendingUp className="h-7 w-7 text-purple-600 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">3-Year Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Become the standard bridge between privacy coins and DeFi, expanding 
                  to additional chains and establishing enterprise partnerships globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - Reduced padding */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
            The Bridge is Built. Join the Revolution.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 text-lg shadow-lg"
              onClick={() => window.location.href = '/invest'}
            >
              Become an Early Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary px-8 py-4 text-lg"
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
