
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EcosystemStack = () => {
  const layers = [
    {
      id: 5,
      title: "Enterprise API Layer",
      description: "Unlocking AI productivity for the world's leading companies.",
      color: "bg-amber-100 border-amber-200",
      textColor: "text-amber-700",
      link: "/enterprise"
    },
    {
      id: 4,
      title: "AI Agents",
      description: "Autonomous cognitive power that thinks and acts for you.",
      color: "bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      link: "/ai-agents"
    },
    {
      id: 3,
      title: "XMRT Devices",
      description: "Smart glasses and headphones for seamless real-world interaction.",
      color: "bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
      link: "/devices"
    },
    {
      id: 2,
      title: "CashDapp",
      description: "Your portal to Web3 mining, staking, and DeFi.",
      color: "bg-green-100 border-green-200",
      textColor: "text-green-700",
      link: "/cashdapp"
    },
    {
      id: 1,
      title: "XMRT Token + DAO",
      description: "The foundation for on-chain identity and governance.",
      color: "bg-indigo-100 border-indigo-200",
      textColor: "text-indigo-700",
      link: "/token-dao"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {layers.map((layer, index) => (
          <Card 
            key={layer.id}
            className={`${layer.color} hover:shadow-md transition-all duration-300 cursor-pointer group`}
            onClick={() => window.location.href = layer.link}
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border-2 ${layer.color.replace('bg-', 'border-').replace('-100', '-300')} flex items-center justify-center ${layer.textColor} font-bold text-lg`}>
                    {layer.id}
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 font-serif ${layer.textColor}`}>{layer.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{layer.description}</p>
                  </div>
                </div>
                <ArrowRight className={`h-5 w-5 sm:h-6 sm:w-6 ${layer.textColor} group-hover:translate-x-1 transition-all duration-300`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Each layer builds upon the foundation below, creating a comprehensive ecosystem 
          for the future of intelligent collaboration.
        </p>
        <Button 
          variant="outline" 
          className="btn-secondary"
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
