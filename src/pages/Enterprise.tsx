
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, BarChart3, Code, Calendar } from "lucide-react";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Unleash True AI Productivity
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                for Your Enterprise
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              XMRT offers more than just tools; we provide a fully integrated AI copilot 
              infrastructure for the modern enterprise. Our API layer and dashboards are 
              designed for seamless integration with the systems you already use, like Oracle and Autodesk.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Bot className="h-12 w-12 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Corporate-Ready AI Copilots</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deploy autonomous AI agents to your teams to handle scheduling, data analysis, 
                  report generation, and complex workflow automation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <BarChart3 className="h-12 w-12 text-indigo-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Productivity Dashboards</h3>
                <p className="text-gray-300 leading-relaxed">
                  Visualize your team's AI-driven productivity and manage agent access and 
                  permissions from a central, secure dashboard with real-time analytics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Code className="h-12 w-12 text-purple-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise API Licensing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Integrate the power of the XMRT cognitive framework directly into your 
                  proprietary applications with our comprehensive API suite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Built for Enterprise Integration</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Our enterprise solutions are designed to work seamlessly with the tools your teams 
              already rely on, from Oracle databases to Autodesk design suites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">OR</span>
              </div>
              <p className="text-gray-300">Oracle Integration</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AD</span>
              </div>
              <p className="text-gray-300">Autodesk Suite</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SF</span>
              </div>
              <p className="text-gray-300">Salesforce CRM</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <p className="text-gray-300">Microsoft 365</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Revenue Model</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Revenue is driven by API licensing fees and monthly subscription fees for our AI agents 
              and enterprise dashboards. Our scalable pricing model grows with your organization, 
              ensuring maximum ROI while providing enterprise-grade security and support.
            </p>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            See XMRT Enterprise in Action
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a private demonstration and discover how XMRT can transform 
            your organization's productivity and decision-making capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Private Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/invest'}
            >
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
