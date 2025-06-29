
import { Shield, Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleNavClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <footer className="bg-card/30 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => handleNavClick('/')}>
              <div className="w-8 h-8 xmrt-gradient rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-black" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-white">XMRT</span>
                <p className="text-xs text-muted-foreground -mt-1">Private Finance. Public Power.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A privacy-first DeFi platform with DAO governance, AI oversight, and decentralized applications.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleNavClick('/apps')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                XMRT Apps
              </button>
              <button 
                onClick={() => handleNavClick('/dao')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                DAO Governance
              </button>
              <button 
                onClick={() => handleNavClick('/invest')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                Investment
              </button>
              <button 
                onClick={() => handleNavClick('/about')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                About
              </button>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              <a 
                href="https://coldcash.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                XMRT Pay
              </a>
              <a 
                href="https://pipuente.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                XMRT Bridge
              </a>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/josephmlee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/JoeLee_Defi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:joe@xmrt.net" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 XMRT. Open source protocol. Built by Joe Lee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
