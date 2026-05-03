import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Eye, Truck, Clock, Heart, Shield, LucideIcon } from "lucide-react";
import Clients from "./Clients";

// ✅ Type for Feature
type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// ✅ Feature Data
const features: Feature[] = [
  {
    icon: Users,
    title: "Expert & Supervised Painters",
    description:
      "No random contractors, only trained professionals ensuring flawless results.",
  },
  {
    icon: Eye,
    title: "AI-Powered Color Visualization",
    description:
      "Preview your space in any shade or brand before the first stroke.",
  },
  {
    icon: Truck,
    title: "Complete End-to-End Service",
    description:
      "We bring paints, tools, and painters right to your doorstep.",
  },
  {
    icon: Clock,
    title: "On-Time & Transparent",
    description: "No delays, no hidden costs, no surprises.",
  },
  {
    icon: Heart,
    title: "Forever Support",
    description:
      "Our relationship doesn't end when the paint dries; we're here for touch-ups and continued guidance.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "100% satisfaction guaranteed with professional supervision at every step.",
  },
];

// ✅ Example Project Type (must match Clients.tsx)
type Project = {
  image: string;
  name: string;
  type: string;
};

// 🔥 Dummy data (replace with API later)
const projects: Project[] = [
  {
    image: "src/assets/images/clients/Client1.jpeg",
    name: "Modern Villa Painting",
    type: "Residential",
  },
  {
    image: "src/assets/images/clients/clients2.jpeg",
    name: "Office Interior Coating",
    type: "Commercial",
  },
  {
    image: "/images/project3.jpg",
    name: "Warehouse Paint Work",
    type: "Industrial",
  },
  {
    image: "/images/project4.jpg",
    name: "Luxury Apartment Finish",
    type: "Residential",
  },
  {
    image: "/images/project5.jpg",
    name: "Retail Store Design",
    type: "Commercial",
  },
  {
    image: "/images/project6.jpg",
    name: "Factory Exterior Work",
    type: "Industrial",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              VisionPaint?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're more than just painters — we're your partners in transforming
            spaces with modern technology and professional expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <Card
                key={index}
                className="bg-card-gradient border-border hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;