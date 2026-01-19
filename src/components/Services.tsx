import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Home, Building, Wrench, TreePine, Settings } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Wall Painting",
    description: "Transform your living spaces with our exceptional interior painting services.",
    category: "Core Painting Services",
  },
  {
    icon: Home,
    title: "Exterior Wall Painting",
    description: "Protect and beautify your property with our weather-resistant exterior coatings.",
    category: "Core Painting Services",
  },
  {
    icon: Building,
    title: "Pop & Fall-Ceiling",
    description: "Refresh your ceilings with our specialized painting techniques for flawless finish.",
    category: "Specialty Coatings",
  },
  {
    icon: Wrench,
    title: "Waterproof Coating",
    description: "Durable and attractive floor coatings for residential, commercial, and industrial spaces.",
    category: "Specialty Coatings",
  },
  {
    icon: TreePine,
    title: "Wood Polishing & Painting",
    description: "Restore and protect your wooden surfaces with our expert polishing and painting services.",
    category: "Cleaning & Restoration",
  },
  {
    icon: Settings,
    title: "Metal Painting",
    description: "Specialized coatings for metal surfaces to prevent rust and enhance appearance.",
    category: "Complementary Services",
  },
];

const serviceCategories = [
  { name: "Core Painting Services", active: false },
  { name: "Specialty Coatings", active: false },
  { name: "Cleaning & Restoration", active: false },
  { name: "Complementary Services", active: false },
  { name: "Segment-Based", active: false },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Painting Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for residential and commercial properties
          </p>
        </div>

        {/* Service Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card-gradient border-border hover:shadow-medium transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Our Painting Process */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our <span className="bg-hero-gradient bg-clip-text text-transparent">Painting Process</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At VisionPaint, we follow a meticulous 5-step process to ensure flawless results that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold">Consultation & Planning</h4>
              <p className="text-sm text-muted-foreground">We discuss your vision, assess the space, and create a customized painting plan.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold">Personalized AI Visualization</h4>
              <p className="text-sm text-muted-foreground">Preview multiple colors on your actual walls before deciding.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold">Professional Painting & Preperation</h4>
              <p className="text-sm text-muted-foreground">Surface preparation + supervised painting with premium materials.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                4
              </div>
              <h4 className="text-lg font-semibold">Final Inspection</h4>
              <p className="text-sm text-muted-foreground">Touch-ups, cleanup, quality check.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                5
              </div>
              <h4 className="text-lg font-semibold">Final Handover</h4>
              <p className="text-sm text-muted-foreground">Final touch-ups, deep cleanup, and a quality check—then we hand over your perfectly finished space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;