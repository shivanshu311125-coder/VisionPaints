import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIVisualizer from "@/components/AIVisualizer";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <AIVisualizer />
      <WhyChooseUs />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
