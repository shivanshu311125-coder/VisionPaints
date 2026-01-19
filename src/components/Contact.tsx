import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Get in <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to transform your space? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
  {/* LEFT SIDE - CARDS */}
  <div className="flex flex-col gap-5">
    {/* Call Us */}
    <Card className="bg-card shadow-soft border-border hover:shadow-medium transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-lg">Call Us</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-1 text-sm">
        <p className="text-muted-foreground">
          Ready to discuss your project? Give us a call for instant support.
        </p>
        <p className="font-semibold text-primary">Shivanshu Yadav</p>
        <p className="font-semibold text-primary">
          <a href="tel:+916307567956">+91 6307567956</a>
        </p>
        <p className="text-xs text-muted-foreground">24X7 Support</p>
      </CardContent>
    </Card>

    {/* Email Us */}
    <Card className="bg-card shadow-soft border-border hover:shadow-medium transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-secondary" />
          </div>
          <CardTitle className="text-lg">Email Us</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-1 text-sm">
        <p className="text-muted-foreground">
          Send us your questions and we'll respond within 24 hours.
        </p>
        <p className="font-semibold text-primary">Shivanshu Yadav</p>
        <p className="font-semibold text-primary break-words">
          <a href="mailto:contact@thevisionpaints.in">
            contact@thevisionpaints.in
          </a>
        </p>
        <p className="text-xs text-muted-foreground">
          Quick response guaranteed
        </p>
      </CardContent>
    </Card>

    {/* Visit Us */}
    <Card className="bg-card shadow-soft border-border hover:shadow-medium transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <CardTitle className="text-lg">Visit Us</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-1 text-sm">
        <p className="text-muted-foreground">
          Come see our color samples and meet our team in person.
        </p>
        <p className="font-semibold text-primary">
          Sirdar Enterprises, IIM Road
        </p>
        <p className="text-muted-foreground">
          Lucknow, Uttar Pradesh, India
        </p>
        <p className="text-xs text-muted-foreground">We serve all over India</p>
      </CardContent>
    </Card>
  </div>

  {/* RIGHT SIDE - FORM */}
  <Card className="bg-card shadow-soft border-border h-full w-full max-w-lg lg:ml-auto">
    <CardHeader className="pb-3">
      <CardTitle className="text-xl text-center">Let's Connect</CardTitle>
      <p className="text-sm text-muted-foreground text-center">
        Fill the form and our team will contact you within 24 hours.
      </p>
    </CardHeader>

    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your painting needs..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="min-h-24 resize-none"
          />
        </div>

        <Button type="submit" variant="hero" className="w-full mt-2 py-3">
    Submit Request
  </Button>
      </form>
    </CardContent>
  </Card>
</div>

      </div>
    </section>
  );
};

export default Contact;