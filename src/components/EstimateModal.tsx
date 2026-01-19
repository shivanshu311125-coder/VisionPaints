import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EstimateModalProps {
  children: React.ReactNode;
}

const EstimateModal = ({ children }: EstimateModalProps) => {
  const [formData, setFormData] = useState({
    spaceType: "",
    area: "",
    workType: "",
    paintBrand: "",
    comments: "",
  });
  const [estimateRange, setEstimateRange] = useState<string>("");
  const [open, setOpen] = useState(false);
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

    const baseRate =
      formData.workType === "fresh"
        ? 15
        : formData.workType === "renovation"
        ? 20
        : 12;

    const areaNum = parseInt(formData.area);
    const low = Math.floor(baseRate * areaNum * 0.8);
    const high = Math.floor(baseRate * areaNum * 1.2);

    setEstimateRange(`₹${low.toLocaleString()} - ₹${high.toLocaleString()}`);

    toast({
      title: "Estimate Generated!",
      description: "Your instant estimate is ready. Contact us for a detailed quote.",
    });
  };

  const submitEstimate = async () => {
    // Optional: you can check estimateRange or other fields before sending
    try {
      const response = await fetch(
        "https://sheetdb.io/api/v1/c1zup6sonqmam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                Space: formData.spaceType,
                Area: formData.area,
                Work: formData.workType,
                Paint: formData.paintBrand,
                Comments: formData.comments,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      toast({
        title: "Request Submitted!",
        description:
          "We’ll contact you within 24 hours with a detailed quote.",
      });

      // Reset the form
      setFormData({
        spaceType: "",
        area: "",
        workType: "",
        paintBrand: "",
        comments: "",
      });
      setEstimateRange("");
      setOpen(false);
    } catch (error) {
      console.error("Estimate submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="w-6 h-6 text-primary" />
            Calculate Your Painting Cost
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="spaceType">Type of Space *</Label>
              <Select
                value={formData.spaceType}
                onValueChange={(value) =>
                  setFormData({ ...formData, spaceType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select space type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="School">School</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
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
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="workType">Type of Work *</Label>
              <Select
                value={formData.workType}
                onValueChange={(value) =>
                  setFormData({ ...formData, workType: value })
                }
              >
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
              <Select
                value={formData.paintBrand}
                onValueChange={(value) =>
                  setFormData({ ...formData, paintBrand: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Berger">Berger</SelectItem>
                  <SelectItem value="Asian Paints">Asian Paints</SelectItem>
                  <SelectItem value="Dulux">Dulux</SelectItem>
                  <SelectItem value="Nerolac">Nerolac</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
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
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
            />
          </div>

          <Button
            variant="hero"
            className="w-full flex items-center gap-2"
            onClick={calculateEstimate}
          >
            <Calculator className="w-4 h-4" />
            Get Instant Estimate
          </Button>

          {estimateRange && (
            <div className="bg-muted rounded-xl p-6 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <DollarSign className="w-6 h-6" />
                {estimateRange}
              </div>
              <p className="text-muted-foreground">
                *This is an approximate estimate. Final pricing may vary based on specific requirements.
              </p>
              <Button
                variant="outline"
                onClick={submitEstimate}
                className="w-full"
              >
                Request Detailed Quote
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateModal;