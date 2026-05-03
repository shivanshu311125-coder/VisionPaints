import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIVisualizer from "@/components/AIVisualizer";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import LandingGallery from "@/components/LandingGallery";
import Clients from "@/components/Clients";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LandingGallery />
      <Services />
      <Clients />
      <AIVisualizer />
      <WhyChooseUs />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
