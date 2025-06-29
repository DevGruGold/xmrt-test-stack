
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vote, Shield, Users, Coins, Brain, Zap, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DAO = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              XMRT <span className="xmrt-gradient-text">DAO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Decentralized governance powered by the community, enhanced by AI oversight. 
              Vote with XMRT tokens and shape the future of privacy-first finance.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-primary mb-2">21M</div>
              <p className="text-muted-foreground text-sm">Max XMRT Supply</p>
            </div>
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <p className="text-muted-foreground text-sm">AI Governance Roles</p>
            </div>
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
              <p className="text-muted-foreground text-sm">Voting Quorum</p>
            </div>
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <p className="text-muted-foreground text-sm">Min Staking Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            How DAO Governance Works
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 xmrt-gradient rounded-xl flex items-center justify-center mb-4">
                    <Coins className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl">1. Stake XMRT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Stake your XMRT tokens for a minimum of 7 days to gain voting rights. 
                    Voting power is proportional to your staked amount.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Vote className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">2. Vote on Proposals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Participate in governance by voting on protocol upgrades, treasury allocation, 
                    and strategic decisions. Each token equals one vote.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">3. AI Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    AI agents analyze proposals for technical feasibility, economic impact, 
                    and alignment with protocol goals before community voting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance Roles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              AI Governance Roles
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Five specialized AI agents provide oversight and analysis for all DAO proposals
            </p>

            <div className="space-y-6">
              <Card className="xmrt-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">Security Auditor</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Reviews all technical proposals for security vulnerabilities and best practices compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Coins className="h-8 w-8 text-accent mr-4" />
                    <h3 className="text-xl font-semibold">Treasury Manager</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Analyzes financial implications and ensures sustainable treasury management.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-green-400 mr-4" />
                    <h3 className="text-xl font-semibold">Community Advocate</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Ensures proposals align with community interests and platform values.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">Technical Validator</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Validates technical feasibility and integration requirements for development proposals.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-accent mr-4" />
                    <h3 className="text-xl font-semibold">Strategic Planner</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Evaluates long-term strategic impact and alignment with roadmap objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              XMRT Tokenomics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="xmrt-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Token Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Community & Mining</span>
                    <span className="font-semibold">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DAO Treasury</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Development</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ecosystem Partners</span>
                    <span className="font-semibold">5%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="xmrt-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Utility & Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Governance Voting</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Staking Rewards</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee Discounts</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Treasury Share</span>
                    <span className="font-semibold">✓</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Ready to Join the DAO?</h3>
              <p className="text-muted-foreground mb-6">
                Stake your XMRT tokens and start participating in governance today. 
                Shape the future of privacy-first DeFi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="xmrt-gradient text-black font-semibold px-8 py-4"
                >
                  Stake XMRT Tokens
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                  onClick={() => window.location.href = '/invest'}
                >
                  Investment Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DAO;
