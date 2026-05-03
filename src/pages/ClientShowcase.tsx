import { ArrowRight, Building2, Home, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const stats = [
  { label: "Client spaces showcased", value: "06+" },
  { label: "Residential and commercial work", value: "02" },
  { label: "Service coverage", value: "India" },
];

const ClientShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-card-gradient dark:bg-card-gradient-dark">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Client Showcase
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl font-bold text-foreground lg:text-6xl">
                  Painting Work for{" "}
                  <span className="bg-hero-gradient bg-clip-text text-transparent">
                    Real Client Spaces
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Explore completed and concept-led VisionPaint projects across
                  homes, commercial spaces, interiors, finishes, and AI-assisted
                  color planning.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <a href="#client-projects" className="inline-flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#contact">Start Your Project</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {projects.slice(0, 4).map((project, index) => (
                <div
                  key={project.name}
                  className={`overflow-hidden rounded-lg border border-border bg-card shadow-medium ${
                    index === 0 || index === 3 ? "translate-y-6" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-48 w-full object-cover lg:h-56"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto grid gap-6 px-6 py-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="client-projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl space-y-4">
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
              Featured{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Client Projects
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Use this page to add more client site photos over time. The layout
              is ready for residential, commercial, texture, waterproofing, and
              AI visualization examples.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-medium"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-64 w-full object-cover"
                />
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <Home className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Residential Clients
              </h3>
              <p className="mt-3 text-muted-foreground">
                Interior walls, exterior repainting, wood finishes, ceiling
                work, waterproofing, and room-by-room color planning.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <Building2 className="mb-4 h-10 w-10 text-secondary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Commercial Clients
              </h3>
              <p className="mt-3 text-muted-foreground">
                Office touch-ups, business-facing paint refreshes, durable
                coatings, and fast project handling for active spaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientShowcase;
