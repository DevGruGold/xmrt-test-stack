
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl sm:text-8xl font-bold mb-6 xmrt-gradient-text">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="xmrt-gradient text-black font-semibold px-8 py-4"
                onClick={() => window.location.href = '/'}
              >
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
