
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EcosystemStack = () => {
  const layers = [
    {
      id: 5,
      title: "Enterprise API Layer",
      description: "Unlocking AI productivity for the world's leading companies.",
      color: "from-yellow-500 to-orange-500",
      link: "/enterprise"
    },
    {
      id: 4,
      title: "AI Agents",
      description: "Autonomous cognitive power that thinks and acts for you.",
      color: "from-purple-500 to-pink-500",
      link: "/ai-agents"
    },
    {
      id: 3,
      title: "XMRT Devices",
      description: "Smart glasses and headphones for seamless real-world interaction.",
      color: "from-blue-500 to-cyan-500",
      link: "/devices"
    },
    {
      id: 2,
      title: "CashDapp",
      description: "Your portal to Web3 mining, staking, and DeFi.",
      color: "from-green-500 to-emerald-500",
      link: "/cashdapp"
    },
    {
      id: 1,
      title: "XMRT Token + DAO",
      description: "The foundation for on-chain identity and governance.",
      color: "from-indigo-500 to-purple-500",
      link: "/token-dao"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {layers.map((layer, index) => (
          <Card 
            key={layer.id}
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
            onClick={() => window.location.href = layer.link}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${layer.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {layer.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                    <p className="text-gray-300">{layer.description}</p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-300 mb-6">
          Each layer builds upon the foundation below, creating a comprehensive ecosystem 
          for the future of intelligent collaboration.
        </p>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-slate-900"
          onClick={() => window.location.href = '/token-dao'}
        >
          Start with Layer 1: XMRT Token
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default EcosystemStack;
