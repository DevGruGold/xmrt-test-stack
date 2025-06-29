
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, TrendingUp, Shield, Users, Mail, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Invest = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, name, company });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Series A <span className="xmrt-gradient-text">Investment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in building the future of privacy-first DeFi. XMRT is seeking strategic partners 
              for our Series A round to scale our ecosystem and expand globally.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="xmrt-card hover-lift">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Proven Traction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Live products with real users, deployed smart contracts, and growing ecosystem adoption.
                </p>
              </CardContent>
            </Card>

            <Card className="xmrt-card hover-lift">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Unique Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  First privacy-focused DeFi platform with AI-enhanced governance and live applications.
                </p>
              </CardContent>
            </Card>

            <Card className="xmrt-card hover-lift">
              <CardHeader>
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-2xl">Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Led by Joe Lee, Harvard-trained journalist and veteran developer with proven track record.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Investment Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-primary mb-2">$2M</div>
              <p className="text-muted-foreground text-sm">Series A Target</p>
            </div>
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-accent mb-2">21M</div>
              <p className="text-muted-foreground text-sm">Token Cap</p>
            </div>
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <p className="text-muted-foreground text-sm">Live Products</p>
            </div>
            <div className="text-center p-6 xmrt-card">
              <div className="text-3xl font-bold text-primary mb-2">18M</div>
              <p className="text-muted-foreground text-sm">Months Runway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck & Materials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Investment Materials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <Download className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Pitch Deck</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive overview of XMRT's vision, traction, tokenomics, 
                    and growth strategy for Series A investors.
                  </p>
                  <Button className="xmrt-gradient text-black font-semibold w-full">
                    Download Pitch Deck
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <Mail className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-2xl">Investor Memo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Detailed financial projections, technical specifications, 
                    and competitive analysis for qualified investors.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-black w-full"
                  >
                    Request Investor Memo
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="xmrt-card">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Connect with Our Team</CardTitle>
                <p className="text-muted-foreground text-center">
                  Interested in learning more? Get in touch with our investment team.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-background border-white/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background border-white/20"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Fund (Optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-background border-white/20"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="xmrt-gradient text-black font-semibold w-full py-4"
                  >
                    Schedule Investment Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Use of Funds
            </h2>
            
            <div className="space-y-6">
              <Card className="xmrt-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Product Development</h3>
                    <span className="text-2xl font-bold text-primary">40%</span>
                  </div>
                  <p className="text-muted-foreground">
                    Expand XMRT Pay and XMRT Bridge features, develop new dApps, enhance AI governance
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Marketing & Growth</h3>
                    <span className="text-2xl font-bold text-accent">25%</span>
                  </div>
                  <p className="text-muted-foreground">
                    User acquisition, partnership development, community building, brand awareness
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Team Expansion</h3>
                    <span className="text-2xl font-bold text-green-400">20%</span>
                  </div>
                  <p className="text-muted-foreground">
                    Hire top engineering, security, and business development talent
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Operations & Legal</h3>
                    <span className="text-2xl font-bold text-primary">15%</span>
                  </div>
                  <p className="text-muted-foreground">
                    Regulatory compliance, legal framework, operational infrastructure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
