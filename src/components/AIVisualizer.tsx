import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Upload, Palette, Sparkles, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIVisualizer = () => {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const colors = [
    { name: "Crimson Red", value: "#DC143C", bg: "bg-red-400" },
    { name: "Ocean Blue", value: "#4169E1", bg: "bg-blue-400" },
    { name: "Forest Green", value: "#228B22", bg: "bg-green-400" },
    { name: "Sunset Yellow", value: "#FFD700", bg: "bg-yellow-400" },
    { name: "Royal Purple", value: "#8A2BE2", bg: "bg-purple-400" },
    { name: "Rose Pink", value: "#FF69B4", bg: "bg-pink-400" },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('capture', 'environment');
      fileInputRef.current.click();
    }
  };

  const generatePreview = () => {
    if (!uploadedImage) {
      toast({
        title: "No Image Uploaded",
        description: "Please upload an image first.",
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedColor) {
      toast({
        title: "No Color Selected",
        description: "Please select a color first.",
        variant: "destructive",
      });
      return;
    }

    // Simulate AI processing
    toast({
      title: "Preview Generated!",
      description: `Your room preview with ${selectedColor} is ready!`,
    });
    
    // In a real app, this would call an AI service
    setPreviewImage(uploadedImage); // For demo, we keep the original image
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            <span className="bg-hero-gradient bg-clip-text text-transparent">AI-Powered</span> Color Visualization
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See your space transformed before the first brush stroke. Upload your room photo and preview any color instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Upload Your Photo</h3>
                  <p className="text-muted-foreground">Simply take a photo of your wall or room and upload it to our AI system.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Choose Your Colors</h3>
                  <p className="text-muted-foreground">Select from our extensive palette of colors and premium paint brands.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Preview Instantly</h3>
                  <p className="text-muted-foreground">Our AI generates a realistic preview of your painted room in seconds.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
                <Eye className="w-5 h-5" />
                Try AI Visualizer Now
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Free to use • No registration required • Instant results
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-card-gradient border-border shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  AI Color Preview Demo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Upload your room photo here</p>
                    <Button variant="outline" 
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    >
                      Browse Files
                      </Button>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  />
                
                <div className="grid grid-cols-6 gap-2">
                  <div className="aspect-square bg-red-400 rounded-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="aspect-square bg-blue-400 rounded-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="aspect-square bg-green-400 rounded-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="aspect-square bg-yellow-400 rounded-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="aspect-square bg-purple-400 rounded-md cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="aspect-square bg-pink-400 rounded-md cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
                
                <Button variant="default" className="w-full"
                onClick={generatePreview}
                >
                  Generate Preview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Visualizer Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild data-trigger="ai-color-visualizer">
            <div style={{ display: 'none' }}></div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI Color Visualization Tool
              </DialogTitle>
            </DialogHeader>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Upload Section */}
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  {uploadedImage ? (
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded room" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center space-y-3">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Upload your room photo here</p>
                      <div className="flex gap-2 justify-center">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="w-4 h-4 mr-1" />
                          Browse Files
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={handleCameraCapture}
                        >
                          <Camera className="w-4 h-4 mr-1" />
                          Take Photo
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Select Color:</h4>
                  <div className="grid grid-cols-6 gap-2">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className={`aspect-square ${color.bg} rounded-md cursor-pointer hover:scale-110 transition-transform border-2 ${
                          selectedColor === color.name ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'
                        }`}
                        onClick={() => setSelectedColor(color.name)}
                        title={color.name}
                      ></div>
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="text-sm text-muted-foreground">Selected: {selectedColor}</p>
                  )}
                </div>
              </div>

              {/* Preview Section */}
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">
                  {previewImage ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={previewImage} 
                        alt="Color preview" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {selectedColor && (
                        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <p className="text-sm font-medium">{selectedColor}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center space-y-2">
                      <Palette className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Preview will appear here</p>
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full" 
                  onClick={generatePreview}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Preview
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AIVisualizer;