import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI color visualizer work?",
    answer: "Upload a photo of your room, choose any brand/shade, and instantly see how it looks on your walls before painting."
  },
  {
    question: "Can I choose my own paint brand?",
    answer: "Yes, we support all major brands like Asian Paints, Berger, Nerolac, Dulux, and more."
  },
  {
    question: "How do I get an estimate?",
    answer: "Simply click Get an Estimate, fill in your space details (area, dimensions, type of work), and you'll receive an approximate cost instantly."
  },
  {
    question: "Do you provide painters or just consultation?",
    answer: "We provide end-to-end service: colors, paints, painters, and timelines — all managed by VisionPaint."
  },
  {
    question: "Are there hidden charges?",
    answer: "No. Our pricing is 100% transparent with no hidden commissions or last-minute surprises."
  },
  {
    question: "Do you offer post-painting support?",
    answer: "Yes. We provide free guidance for touch-ups and long-term maintenance after the job."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about VisionPaint services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;