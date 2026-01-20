import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">VisionPaint</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're more than just painters — we're your partners in transforming spaces with modern technology and professional expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Welcome to VisionPaint
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At VisionPaint, we're revolutionizing the painting industry with cutting-edge AI technology
                and unwavering commitment to quality. From choosing the perfect colors with our AI-powered
                visualizer to delivering flawless finishes, we make painting simple, modern, and stress-free.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We handle everything from colors, painters, and timelines to seamless post-job follow-ups.
                Our expert painters are punctual, professional, and supervised every step of the way.
                And with no commissions, hidden charges, or delays, you get exactly what you were promised.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-primary/15 via-muted/40 to-secondary/15 p-6 shadow-md">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />

              <div className="relative text-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  Our Promise
                </p>

                <p className="text-xl lg:text-2xl font-bold text-foreground">
                  You Imagine It. We Make It Real.
                </p>

                <div className="flex justify-center">
                  <span className="h-1 w-16 rounded-full bg-primary" />
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card-gradient border-border hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Expert Team</h4>
                <p className="text-sm text-muted-foreground">Trained & supervised professional painters</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">AI Technology</h4>
                <p className="text-sm text-muted-foreground">Revolutionary color visualization system</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">Quality Promise</h4>
                <p className="text-sm text-muted-foreground">100% satisfaction guaranteed</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-foreground">Long-term Care</h4>
                <p className="text-sm text-muted-foreground">Forever support & partnership</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-accent-gradient rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold ">Our Philosophy</h3>
            <p className="text-lg  leading-relaxed">
              Modern painting shouldn't be stressful. We believe in transparency, quality, and building
              lasting relationships with our clients. Our innovative approach combines the latest technology
              with traditional craftsmanship to deliver results that exceed expectations.
            </p>
            <div className="flex justify-center">
              <Button
                variant="secondary" size="lg">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;