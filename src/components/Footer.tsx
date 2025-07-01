
import { Shield, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleNavClick = (path: string) => {
    window.location.href = path;
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("XMRT Inquiry");
    const body = encodeURIComponent("Hello XMRT Team,\n\nI'm interested in learning more about XMRT and would like to discuss:\n\n- \n\nBest regards");
    window.open(`mailto:xmrtsolutions@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello XMRT Team! I'm interested in learning more about your DeFi platform and would like to discuss potential opportunities.");
    window.open(`https://wa.me/50661500559?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-card/30 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
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
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <Mail className="h-4 w-4" />
                <span>Email Support</span>
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
              <p className="text-xs text-muted-foreground">
                For partnerships, support, or general inquiries
              </p>
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
