import { Button } from "@/components/ui/button";
import { Eye, Calculator, Phone } from "lucide-react";

import LetsConnectModal from "./LetsConnectModal";
import EstimateModal from "./EstimateModal";
import ImageSlider from "./ui/ImageSlider";
import PromoVideo from "./ui/PromoVideo";
const Hero = () => {
  return (
    <section id="hero" 
    className="min-h-screen bg-card-gradient relative overflow-hidden dark:bg-card-gradient-dark">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-4xl lg:text-5xl text-foreground">
                Visualize Before You{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Realize
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choosing the right paint shouldn't be stressful. With VisionPaint, 
                you can skip the hassle and enjoy a smooth, modern painting experience 
                — from your screen to your walls.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                With our AI-powered color visualizer, you can see your space in any shade 
                or brand before the first stroke. No more guesswork, no more endless shop 
                visits — just clarity and confidence in your choices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex items-center gap-2" onClick={() => {
                const element = document.querySelector('[data-trigger="ai-color-visualizer"]') as HTMLElement;
                element?.click();
              }}>
                <Eye className="w-5 h-5" />
                AI Color Visualizer
              </Button>
              <EstimateModal>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Get Instant Estimate
                </Button>
              </EstimateModal>
            </div>

            <LetsConnectModal>
              <button style={{ display: 'none' }} id="lets-connect-trigger"></button>
            </LetsConnectModal>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-muted-foreground">Professional Painters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-muted-foreground">No Hidden Costs</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-hero-gradient rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <ImageSlider />
          </div>
        </div>
        <div className="mt-20">
          <PromoVideo />
        </div>
      </div>
    </section>
  );
};

export default Hero;