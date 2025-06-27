
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EcosystemStack = () => {
  const layers = [
    {
      id: 5,
      title: "Enterprise API Layer",
      description: "Cross-chain bridging, Layer2 integration, and enterprise-grade staking infrastructure.",
      color: "bg-amber-100 border-amber-200",
      textColor: "text-amber-700",
      link: "/enterprise"
    },
    {
      id: 4,
      title: "AI-Governed Protocol",
      description: "Multi-AI role system with CEO, CFO, CTO, and Compliance AI managing protocol operations.",
      color: "bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      link: "/ai-agents"
    },
    {
      id: 3,
      title: "NFC Smart Cards & Devices",
      description: "Biometric-secured NFC registration with NFT debit cards for real-world payments.",
      color: "bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
      link: "/devices"
    },
    {
      id: 2,
      title: "CashDapp with Multi-Chain Bridge",
      description: "KYC-compliant fiat on/off ramp with Polygon/Avalanche bridging and offline transactions.",
      color: "bg-green-100 border-green-200",
      textColor: "text-green-700",
      link: "/cashdapp"
    },
    {
      id: 1,
      title: "XMRT Token + DAO",
      description: "Upgradeable ERC20/ERC721 hybrid with XMR conversion, staking rewards, and governance.",
      color: "bg-indigo-100 border-indigo-200",
      textColor: "text-indigo-700",
      link: "/token-dao"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-3">
        {layers.map((layer, index) => (
          <Card 
            key={layer.id}
            className={`${layer.color} hover:shadow-md transition-all duration-300 cursor-pointer group`}
            onClick={() => window.location.href = layer.link}
          >
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 sm:space-x-5">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border-2 ${layer.color.replace('bg-', 'border-').replace('-100', '-300')} flex items-center justify-center ${layer.textColor} font-bold text-base`}>
                    {layer.id}
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-1 font-serif ${layer.textColor}`}>{layer.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{layer.description}</p>
                  </div>
                </div>
                <ArrowRight className={`h-5 w-5 sm:h-6 sm:w-6 ${layer.textColor} group-hover:translate-x-1 transition-all duration-300`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Each layer builds upon a fully deployed, upgradeable smart contract with 
          live XMR conversion, multi-chain bridging, and AI governance capabilities.
        </p>
        <Button 
          variant="outline" 
          className="btn-secondary"
          onClick={() => window.location.href = '/token-dao'}
        >
          Explore Live Smart Contract
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default EcosystemStack;
