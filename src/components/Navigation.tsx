
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 xmrt-gradient rounded-lg flex items-center justify-center">
              <Shield className="h-4 w-4 text-black" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">XMRT</span>
              <p className="text-xs text-muted-foreground -mt-1 hidden sm:block">Private Finance. Public Power.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('dapps')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              DApps
            </button>
            <button 
              onClick={() => scrollToSection('faucet')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Faucet
            </button>
            <button 
              onClick={() => scrollToSection('dao')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              DAO
            </button>
            <button 
              onClick={() => scrollToSection('invest')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Invest
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('dapps')}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                DApps
              </button>
              <button 
                onClick={() => scrollToSection('faucet')}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                Faucet
              </button>
              <button 
                onClick={() => scrollToSection('dao')}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                DAO
              </button>
              <button 
                onClick={() => scrollToSection('invest')}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                Invest
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
