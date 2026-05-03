import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 4);

const LandingGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Images className="h-4 w-4" />
              Project Images
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Real Spaces,{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Real Finish
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A quick look at the kind of clean painting, color planning, and
              polished finishing VisionPaint brings to client spaces.
            </p>
          </div>

          <Button asChild variant="outline" className="w-fit">
            <Link to="/clients" className="inline-flex items-center gap-2">
              View Client Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.name}
              to="/clients"
              className={`group relative overflow-hidden rounded-lg border border-border bg-card shadow-soft ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  index === 0 ? "h-[420px]" : "h-[200px]"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accent/90 to-transparent p-5 text-white">
                <p className="text-sm text-white/75">{project.type}</p>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingGallery;
