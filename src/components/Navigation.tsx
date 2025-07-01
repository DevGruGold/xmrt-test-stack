
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => handleNavClick('/')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 xmrt-gradient rounded-lg flex items-center justify-center">
              <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-white">XMRT</span>
              <p className="text-xs text-muted-foreground -mt-1 hidden sm:block">Private Finance. Public Power.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => handleNavClick('/')}
              className={`text-foreground hover:text-primary transition-colors font-medium ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('/dapps')}
              className={`text-foreground hover:text-primary transition-colors font-medium ${isActive('/dapps') ? 'text-primary' : ''}`}
            >
              DApps
            </button>
            <button 
              onClick={() => handleNavClick('/dao')}
              className={`text-foreground hover:text-primary transition-colors font-medium ${isActive('/dao') ? 'text-primary' : ''}`}
            >
              DAO
            </button>
            <button 
              onClick={() => handleNavClick('/invest')}
              className={`text-foreground hover:text-primary transition-colors font-medium ${isActive('/invest') ? 'text-primary' : ''}`}
            >
              Invest
            </button>
            <button 
              onClick={() => handleNavClick('/about')}
              className={`text-foreground hover:text-primary transition-colors font-medium ${isActive('/about') ? 'text-primary' : ''}`}
            >
              About
            </button>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              className="hidden sm:inline-flex xmrt-gradient text-black font-semibold hover:opacity-90 text-sm px-4 py-2"
              onClick={() => handleNavClick('/dao')}
            >
              Join the DAO
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('/')}
                className={`text-foreground hover:text-primary font-medium py-2 text-left ${isActive('/') ? 'text-primary' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('/dapps')}
                className={`text-foreground hover:text-primary font-medium py-2 text-left ${isActive('/dapps') ? 'text-primary' : ''}`}
              >
                DApps
              </button>
              <button 
                onClick={() => handleNavClick('/dao')}
                className={`text-foreground hover:text-primary font-medium py-2 text-left ${isActive('/dao') ? 'text-primary' : ''}`}
              >
                DAO
              </button>
              <button 
                onClick={() => handleNavClick('/invest')}
                className={`text-foreground hover:text-primary font-medium py-2 text-left ${isActive('/invest') ? 'text-primary' : ''}`}
              >
                Invest
              </button>
              <button 
                onClick={() => handleNavClick('/about')}
                className={`text-foreground hover:text-primary font-medium py-2 text-left ${isActive('/about') ? 'text-primary' : ''}`}
              >
                About
              </button>
              <Button 
                className="xmrt-gradient text-black font-semibold w-full"
                onClick={() => handleNavClick('/dao')}
              >
                Join the DAO
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
