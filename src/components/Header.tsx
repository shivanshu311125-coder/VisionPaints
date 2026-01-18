import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LetsConnectModal from "./LetsConnectModal";
import { Menu, X , Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import FAQ from "./FAQ";
import {  Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoVideo from "@/assets/video/logo_video.mp4";


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
           <video 
           src={logoVideo}
           autoPlay
           loop
           muted
           playsInline
           className="w-12 h-10 rounded-lg object-cover"
           />
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
              <a href="#hero" className="text-foreground hover:text-primary transition-colors"
               onClick={() => setIsOpen(false)}
               >
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors"
               onClick={() => setIsOpen(false)}
               >
                Services
              </a>
              <a href="#why-choose-us" className="text-foreground hover:text-primary transition-colors"
               onClick={() => setIsOpen(false)}>
                Why Choose Us
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors"
               onClick={() => setIsOpen(false)}
               >
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors"
               onClick={() => setIsOpen(false)}
                >
                Contact
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
              >
              FAQ
              </a>
            </nav>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
              <Button asChild variant="ghost" size="icon" aria-label="Facebook" className="text-white hover:bg-white/10">
                <a href="https://www.facebook.com/shivkaansh.u" target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}>
                
                 <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}>
                  <Twitter className="w-4 h-4" />
                 </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <a href="https://www.instagram.com/_sam_85?igsh=anVrNXhhMzRqaTl3&utm_source=qr" target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}>
                   <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <a href="https://www.linkedin.com/in/shivanshu311125?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}>
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
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