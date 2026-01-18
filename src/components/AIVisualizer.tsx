import { Button } from "@/components/ui/button";
import { Eye, Upload, Palette, Sparkles } from "lucide-react";

const AIVisualizer = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            <span className="bg-hero-gradient bg-clip-text text-transparent">AI-Powered</span> Color Visualization
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See your space transformed before the first brush stroke. Upload your room photo and preview any color instantly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Upload Your Photo</h3>
                  <p className="text-sm text-muted-foreground">Simply take a photo of your wall or room and upload it to our AI system.</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Choose Your Colors</h3>
                  <p className="text-sm text-muted-foreground">Select from our extensive palette of colors and premium paint brands.</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Preview Instantly</h3>
                  <p className="text-sm text-muted-foreground">Our AI generates a realistic preview of your painted room in seconds.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a href="https://thevisionpaints.vercel.app/" className="block">
                <Button variant="hero" size="lg" className="w-full flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Try AI Visualizer Now
                </Button>
              </a>
              <p className="text-sm text-muted-foreground text-center">
                Free to use • No registration required • Instant results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVisualizer;