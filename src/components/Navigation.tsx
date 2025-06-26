
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold text-slate-900 font-serif">XMRT Solutions</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Home
            </a>
            
            <div className="relative">
              <button
                className="flex items-center text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onMouseEnter={() => setIsEcosystemOpen(true)}
                onMouseLeave={() => setIsEcosystemOpen(false)}
              >
                The Ecosystem
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isEcosystemOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  onMouseEnter={() => setIsEcosystemOpen(true)}
                  onMouseLeave={() => setIsEcosystemOpen(false)}
                >
                  <div className="py-2">
                    <a href="/token-dao" className="block px-4 py-3 text-slate-700 hover:bg-gray-50 transition-colors">
                      XMRT Token & DAO
                    </a>
                    <a href="/cashdapp" className="block px-4 py-3 text-slate-700 hover:bg-gray-50 transition-colors">
                      CashDapp Pro
                    </a>
                    <a href="/devices" className="block px-4 py-3 text-slate-700 hover:bg-gray-50 transition-colors">
                      XMRT Smart Devices
                    </a>
                    <a href="/ai-agents" className="block px-4 py-3 text-slate-700 hover:bg-gray-50 transition-colors">
                      Autonomous AI Agents
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/enterprise" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Enterprise Solutions
            </a>
            <a href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              About Us
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden sm:inline-flex btn-accent"
              onClick={() => window.location.href = '/invest'}
            >
              Invest Now
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="/" className="text-slate-700 hover:text-slate-900 font-medium py-2">
                Home
              </a>
              <div className="space-y-2">
                <p className="text-slate-500 text-sm font-medium">The Ecosystem</p>
                <a href="/token-dao" className="text-slate-700 hover:text-slate-900 pl-4 py-1 block">
                  XMRT Token & DAO
                </a>
                <a href="/cashdapp" className="text-slate-700 hover:text-slate-900 pl-4 py-1 block">
                  CashDapp Pro
                </a>
                <a href="/devices" className="text-slate-700 hover:text-slate-900 pl-4 py-1 block">
                  XMRT Smart Devices
                </a>
                <a href="/ai-agents" className="text-slate-700 hover:text-slate-900 pl-4 py-1 block">
                  Autonomous AI Agents
                </a>
              </div>
              <a href="/enterprise" className="text-slate-700 hover:text-slate-900 font-medium py-2">
                Enterprise Solutions
              </a>
              <a href="/about" className="text-slate-700 hover:text-slate-900 font-medium py-2">
                About Us
              </a>
              <Button 
                className="btn-accent w-full mt-4"
                onClick={() => window.location.href = '/invest'}
              >
                Invest Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
