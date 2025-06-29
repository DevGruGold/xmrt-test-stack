import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Mail, Download, ExternalLink, Shield, Code, Globe, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

        <div className={`container mx-auto px-6 text-center relative z-10 max-w-6xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block mb-4">Meet the Founder.</span>
            <span className="block xmrt-gradient-text animate-float">Joe Lee.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
            A full-stack developer and AI researcher, Joe is building XMRT to bring privacy and community governance to decentralized finance.
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-black px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => window.open('https://github.com/josephmlee', '_blank')}
            >
              View GitHub
              <Github className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              className="xmrt-gradient text-black px-10 py-6 text-xl font-bold shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => window.open('https://twitter.com/JoeLee_Defi', '_blank')}
            >
              Follow on Twitter
              <Twitter className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                About Joe Lee
              </h2>
              <p className="text-xl text-muted-foreground">
                Joe Lee is a full-stack developer and AI researcher passionate about bringing privacy and community governance to decentralized finance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a background in computer science and artificial intelligence, Joe is dedicated to building innovative solutions that empower individuals and promote financial freedom.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/josephmlee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/JoeLee_Defi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/3997985?v=4"
                alt="Joe Lee"
                className="rounded-xl shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Joe's expertise spans full-stack development, AI research, and blockchain technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="xmrt-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
                <p className="text-muted-foreground">
                  Proficient in building scalable and user-friendly web applications.
                </p>
                <div className="mt-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="xmrt-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">AI Research</h3>
                <p className="text-muted-foreground">
                  Experience in developing and implementing AI algorithms for various applications.
                </p>
                <div className="mt-4">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Natural Language Processing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="xmrt-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Blockchain Technologies</h3>
                <p className="text-muted-foreground">
                  Knowledgeable in blockchain development and decentralized applications.
                </p>
                <div className="mt-4">
                  <Badge variant="secondary">Smart Contracts</Badge>
                  <Badge variant="secondary">Solidity</Badge>
                  <Badge variant="secondary">Web3.js</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Feel free to reach out for collaborations, project inquiries, or just a friendly chat.
          </p>
          <Button
            size="lg"
            className="xmrt-gradient text-black font-bold px-10 py-6 text-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = 'mailto:joe@xmrt.net'}
          >
            Contact via Email
            <Mail className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
