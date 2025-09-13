import { Button } from "@/components/ui/button";
import LetsConnectModal from "./LetsConnectModal";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-foreground">VisionPaint</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-choose-us" className="text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <LetsConnectModal>
            <Button variant="outline" className="hidden md:flex">
              Get Started
            </Button>
          </LetsConnectModal>
        </div>
      </div>
    </header>
  );
};

export default Header;