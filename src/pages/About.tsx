
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, LinkedIn, Twitter, Code, BookOpen, Award, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About <span className="xmrt-gradient-text">XMRT</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built by a solo developer with a vision for privacy-first finance. 
              Meet the team, explore our journey, and see what's coming next.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Meet the Founder
            </h2>
            
            <Card className="xmrt-card hover-lift">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 xmrt-gradient rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                      <span className="text-4xl font-bold text-black">JL</span>
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <LinkedIn className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold mb-4">Joe Lee</h3>
                    <p className="text-xl text-primary mb-4">Founder & Lead Developer</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Joe is a Harvard-trained journalist turned developer with a passion for privacy technology. 
                      As a veteran, he brings discipline and strategic thinking to building decentralized systems 
                      that empower individuals while maintaining privacy and security.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Having witnessed the importance of privacy in journalism and the need for financial freedom 
                      in his military service, Joe founded XMRT to bridge the gap between privacy coins and DeFi, 
                      creating tools that serve real users while maintaining the highest standards of security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Background & Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Harvard Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trained in journalism at Harvard, bringing analytical thinking and 
                    investigative skills to technology development.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-xl">Military Veteran</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Military service instilled discipline, strategic planning, 
                    and understanding of security-critical systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card hover-lift">
                <CardHeader>
                  <Code className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className="text-xl">Solo Developer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Self-taught developer with deep expertise in blockchain, 
                    smart contracts, and decentralized systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Open Source Commitment
            </h2>
            
            <Card className="xmrt-card hover-lift">
              <CardContent className="p-8">
                <Github className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Transparent Development</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  XMRT is committed to open source development. Our smart contracts, 
                  applications, and governance mechanisms are publicly auditable and 
                  contribute to the broader privacy and DeFi ecosystems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Smart Contract Code Open</p>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">2</div>
                    <p className="text-sm text-muted-foreground">Live Open Source Apps</p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="xmrt-gradient text-black font-semibold px-8 py-4"
                >
                  View Repository
                  <Github className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Future Roadmap
            </h2>
            
            <div className="space-y-8">
              <Card className="xmrt-card border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Q1 2025</h3>
                    <span className="text-primary font-semibold">In Progress</span>
                  </div>
                  <p className="text-muted-foreground">
                    Series A funding, team expansion, XMRT Pay mobile app launch
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Q2 2025</h3>
                    <span className="text-accent font-semibold">Planned</span>
                  </div>
                  <p className="text-muted-foreground">
                    Multi-chain deployment, enhanced AI governance, institutional partnerships
                  </p>
                </CardContent>
              </Card>

              <Card className="xmrt-card border-l-4 border-l-green-400">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Q3-Q4 2025</h3>
                    <span className="text-green-400 font-semibold">Future</span>
                  </div>
                  <p className="text-muted-foreground">
                    Global expansion, additional privacy coins integration, enterprise solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in collaborating, investing, or just want to learn more? 
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-semibold px-8 py-4"
              >
                Contact Us
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                onClick={() => window.location.href = '/dao'}
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
