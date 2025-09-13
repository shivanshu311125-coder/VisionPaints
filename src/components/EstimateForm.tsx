import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    spaceType: "",
    area: "",
    workType: "",
    paintBrand: "",
    comments: "",
  });
  const [estimateRange, setEstimateRange] = useState<string>("");
  const { toast } = useToast();

  const calculateEstimate = () => {
    if (!formData.spaceType || !formData.area || !formData.workType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const baseRate = formData.workType === "fresh" ? 15 : formData.workType === "renovation" ? 20 : 12;
    const areaNum = parseInt(formData.area);
    const low = Math.floor(baseRate * areaNum * 0.8);
    const high = Math.floor(baseRate * areaNum * 1.2);
    
    setEstimateRange(`$${low.toLocaleString()} - $${high.toLocaleString()}`);
    
    toast({
      title: "Estimate Generated!",
      description: "Your instant estimate is ready. Contact us for a detailed quote.",
    });
  };

  const submitEstimate = () => {
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Get Your <span className="bg-hero-gradient bg-clip-text text-transparent">Instant Estimate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden charges, no surprises. Get a transparent estimate in seconds.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card shadow-medium border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calculator className="w-6 h-6 text-primary" />
                Calculate Your Painting Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="spaceType">Type of Space *</Label>
                  <Select value={formData.spaceType} onValueChange={(value) => setFormData({...formData, spaceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select space type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Area (sq. ft.) *</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="e.g., 1200"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workType">Type of Work *</Label>
                  <Select value={formData.workType} onValueChange={(value) => setFormData({...formData, workType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresh">Fresh Paint</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="touchup">Touch-up</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paintBrand">Paint Brand (Optional)</Label>
                  <Select value={formData.paintBrand} onValueChange={(value) => setFormData({...formData, paintBrand: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="berger">Berger</SelectItem>
                      <SelectItem value="asian">Asian Paints</SelectItem>
                      <SelectItem value="dulux">Dulux</SelectItem>
                      <SelectItem value="nerolac">Nerolac</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Additional Comments</Label>
                <Textarea
                  id="comments"
                  placeholder="Any specific requirements or questions..."
                  value={formData.comments}
                  onChange={(e) => setFormData({...formData, comments: e.target.value})}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  className="flex-1 flex items-center gap-2" 
                  onClick={calculateEstimate}
                >
                  <Calculator className="w-4 h-4" />
                  Get Instant Estimate
                </Button>
              </div>

              {estimateRange && (
                <div className="bg-muted rounded-xl p-6 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                    <DollarSign className="w-6 h-6" />
                    {estimateRange}
                  </div>
                  <p className="text-muted-foreground">
                    *This is an approximate estimate. Final pricing may vary based on specific requirements.
                  </p>
                  <Button variant="outline" onClick={submitEstimate} className="w-full">
                    Request Detailed Quote
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;