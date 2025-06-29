
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 xmrt-gradient rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">XMRT</span>
              <p className="text-xs text-muted-foreground -mt-1">Private Finance. Public Power.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/apps" className="text-foreground hover:text-primary transition-colors font-medium">
              Apps
            </a>
            <a href="/dao" className="text-foreground hover:text-primary transition-colors font-medium">
              DAO
            </a>
            <a href="/invest" className="text-foreground hover:text-primary transition-colors font-medium">
              Invest
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:inline-flex xmrt-gradient text-black font-semibold hover:opacity-90">
              Join the DAO
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/" className="text-foreground hover:text-primary font-medium py-2">
                Home
              </a>
              <a href="/apps" className="text-foreground hover:text-primary font-medium py-2">
                Apps
              </a>
              <a href="/dao" className="text-foreground hover:text-primary font-medium py-2">
                DAO
              </a>
              <a href="/invest" className="text-foreground hover:text-primary font-medium py-2">
                Invest
              </a>
              <a href="/about" className="text-foreground hover:text-primary font-medium py-2">
                About
              </a>
              <Button className="xmrt-gradient text-black font-semibold w-full mt-4">
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
