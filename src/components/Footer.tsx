import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoVideo from "@/assets/video/logo-video.mp4";


const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-12 h-10 rounded-lg object-cover"
              >
              <source
              src={logoVideo} type="video/mp4"
              />
              </video>
              <span className="text-xl font-bold">VisionPaint</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transforming spaces with AI-powered visualization and professional craftsmanship. 
              Your vision, our expertise.
            </p>
            <div className="flex space-x-3">
              <Button asChild variant="ghost" size="icon" aria-label="Facebook" className="text-white hover:bg-white/10">
                <a href="https://www.facebook.com/shivkaansh.u" target="_blank" rel="noopener noreferrer">
                 <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                 </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <a href="https://www.instagram.com/_sam_85?igsh=anVrNXhhMzRqaTl3&utm_source=qr" target="_blank" rel="noopener noreferrer">
                   <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <a href="https://www.linkedin.com/in/shivanshu311125?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
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
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
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