import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LetsConnectModal from "./LetsConnectModal";
import { Menu, X , Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import FAQ from "./FAQ";

const Header = () => {
  const [isOpen, setIsOpen] =useState(false);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
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
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
              </a>
            
          </nav>
          <div className="flex items-center space-x-2">
            <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => 
              setTheme(theme === "light" ? "dark"  : "light")
            }
            >
              {theme === "light" && <Sun className="h-5 w-5 "/>}
              {theme === "dark" && <Moon className="h-5 w-5 "/>}
              
            </Button>

          
          
          
          <LetsConnectModal>
            <Button variant="outline" className="hidden md:flex">
              Get Started
            </Button>
          </LetsConnectModal>
          

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <nav className="flex flex-col space-y-3">
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
            <div className="flex justify-end">
            <LetsConnectModal>
              <Button variant="outline" className="w-auto">
                Get Started
              </Button>
            </LetsConnectModal>
            </div>
            </div>
            
        )}
      </div>
    </header>
  );
};

export default Header;