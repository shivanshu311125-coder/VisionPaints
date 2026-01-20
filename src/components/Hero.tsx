import { Button } from "@/components/ui/button";
import { Eye, Calculator, Phone } from "lucide-react";

import LetsConnectModal from "./LetsConnectModal";
import EstimateModal from "./EstimateModal";
import ImageSlider from "./ui/ImageSlider";
import PromoVideo from "./ui/PromoVideo";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-card-gradient relative overflow-hidden dark:bg-card-gradient-dark"
    >
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
                Painting shouldn’t be stressful. With TheVisionPaint, visualize colors instantly and enjoy a smooth, modern painting experience—before the first stroke.

              </p>
            </div>
                        {/* PROMISE CARD */}
                        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-primary/15 via-muted/40 to-secondary/15 p-5 shadow-md">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />

              <div className="relative text-center space-y-2">

                <p className="text-lg lg:text-xl font-bold text-foreground">
                  You Imagine It. We Make It Real.
                </p>

                <div className="flex justify-center">
                  <span className="h-1 w-14 rounded-full bg-primary" />
                </div>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://thevisionpaints.vercel.app/">
                <Button variant="hero" size="lg" className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  AI Color Visualizer
                </Button>
              </a>

              <EstimateModal>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Get Instant Estimate
                </Button>
              </EstimateModal>

              <a href="#contact">
                <Button variant="secondary" size="lg" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Button>
              </a>
            </div>

            <LetsConnectModal>
              <button
                style={{ display: "none" }}
                id="lets-connect-trigger"
              ></button>
            </LetsConnectModal>



            {/* TRUST + CONTACT BUTTON */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Quick Response
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Professional Painters
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    No Hidden Costs
                  </span>
                </div>
              </div>


            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
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
