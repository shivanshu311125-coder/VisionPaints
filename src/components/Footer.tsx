import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">VisionPaint</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transforming spaces with AI-powered visualization and professional craftsmanship. 
              Your vision, our expertise.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">AI Color Visualization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Residential Painting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Painting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Color Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Touch-up Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+91 6307567956</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span>shivanshu.yadav@vp.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>Sirdar Enterprises, IIM Road<br />Lucknow, Uttar Pradesh, India</span>
              </div>
              <p className="text-sm text-white/60 mt-2">We serve all over India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 VisionPaint by Shivanshu Yadav. All rights reserved. | Built with ❤️ for better painting experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;