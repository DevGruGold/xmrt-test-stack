
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">XMRT Solutions</span>
            </div>
            <p className="text-gray-400">
              Building the future of human-AI collaboration through decentralized intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/enterprise" className="block text-gray-400 hover:text-white transition-colors">Enterprise Solutions</a>
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="/invest" className="block text-gray-400 hover:text-white transition-colors">Invest</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Ecosystem</h3>
            <div className="space-y-2">
              <a href="/token-dao" className="block text-gray-400 hover:text-white transition-colors">XMRT Token & DAO</a>
              <a href="/cashdapp" className="block text-gray-400 hover:text-white transition-colors">CashDapp Pro</a>
              <a href="/devices" className="block text-gray-400 hover:text-white transition-colors">Smart Devices</a>
              <a href="/ai-agents" className="block text-gray-400 hover:text-white transition-colors">AI Agents</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">xmrtsolutions@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 XMRT Solutions. Based in Costa Rica. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
