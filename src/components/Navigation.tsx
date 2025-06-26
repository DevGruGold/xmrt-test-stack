
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
            <span className="text-xl font-bold text-white">XMRT Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </a>
            
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-blue-400 transition-colors"
                onMouseEnter={() => setIsEcosystemOpen(true)}
                onMouseLeave={() => setIsEcosystemOpen(false)}
              >
                The Ecosystem
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isEcosystemOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50"
                  onMouseEnter={() => setIsEcosystemOpen(true)}
                  onMouseLeave={() => setIsEcosystemOpen(false)}
                >
                  <div className="py-2">
                    <a href="/token-dao" className="block px-4 py-3 text-white hover:bg-slate-700 transition-colors">
                      XMRT Token & DAO
                    </a>
                    <a href="/cashdapp" className="block px-4 py-3 text-white hover:bg-slate-700 transition-colors">
                      CashDapp Pro
                    </a>
                    <a href="/devices" className="block px-4 py-3 text-white hover:bg-slate-700 transition-colors">
                      XMRT Smart Devices
                    </a>
                    <a href="/ai-agents" className="block px-4 py-3 text-white hover:bg-slate-700 transition-colors">
                      Autonomous AI Agents
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/enterprise" className="text-white hover:text-blue-400 transition-colors">
              Enterprise Solutions
            </a>
            <a href="/about" className="text-white hover:text-blue-400 transition-colors">
              About Us
            </a>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
            onClick={() => window.location.href = '/invest'}
          >
            Invest Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
