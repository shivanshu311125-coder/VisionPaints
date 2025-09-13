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

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card shadow-soft border-border hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-3">
                  Ready to discuss your project? Give us a call for instant support.
                </p>
                <p className="font-semibold text-primary text-lg">Shivanshu Yadav</p>
              <p className="font-semibold text-primary text-lg">+91 6307567956</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-soft border-border hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-2">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-xl">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-3">
                  Send us your questions and we'll respond within 24 hours.
                </p>
                <p className="font-semibold text-primary text-lg">Shivanshu Yadav</p>
              <p className="font-semibold text-primary text-lg">shivanshu.yadav@vp.com</p>
              <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-soft border-border hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Come see our color samples and meet our team in person.
              </p>
              <p className="font-semibold text-primary">Sirdar Enterprises, IIM Road</p>
              <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
              <p className="text-sm text-muted-foreground mt-2">We serve all over India</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card shadow-medium border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
              <p className="text-muted-foreground text-center">
                Let's bring your vision to life! Tell us about your project.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your painting needs, space details, timeline, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="min-h-32"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
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