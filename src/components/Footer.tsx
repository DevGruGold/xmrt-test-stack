
const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-serif">XMRT Solutions</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building the future of human-AI collaboration through decentralized intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">Home</a>
              <a href="/enterprise" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">Enterprise Solutions</a>
              <a href="/about" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">About Us</a>
              <a href="/invest" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">Invest</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Ecosystem</h3>
            <div className="space-y-2">
              <a href="/token-dao" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">XMRT Token & DAO</a>
              <a href="/cashdapp" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">CashDapp Pro</a>
              <a href="/devices" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">Smart Devices</a>
              <a href="/ai-agents" className="block text-gray-600 hover:text-slate-900 transition-colors text-sm">AI Agents</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">xmrtsolutions@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors text-sm">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors text-sm">Discord</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 XMRT Solutions. Based in Costa Rica. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
