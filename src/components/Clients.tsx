import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects as defaultProjects, type Project } from "@/data/projects";

type ClientsProps = {
  projects?: Project[];
};

const Clients: React.FC<ClientsProps> = ({ projects = defaultProjects }) => {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Client Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated preview of homes and spaces shaped with VisionPaint colors,
            preparation, and finishing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 6).map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-medium"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-primary">{item.type}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="hero" size="lg">
            <Link to="/clients" className="inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
