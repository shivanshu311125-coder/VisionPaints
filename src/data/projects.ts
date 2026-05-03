import paint1 from "@/assets/images/paint1.jpg";
import paint2 from "@/assets/images/paint2.jpg";
import paint3 from "@/assets/images/paint3.png";
import paint4 from "@/assets/images/paint4.jpg";
import client1 from "@/assets/images/clients/Client1.jpeg";
import client2 from "@/assets/images/clients/clients2.jpeg";

export type Project = {
  image: string;
  name: string;
  type: string;
  location: string;
  description: string;
};

export const projects: Project[] = [
  {
    image: client1,
    name: "Modern Family Living Room",
    type: "Interior Painting",
    location: "Lucknow",
    description:
      "A soft, premium wall finish with clean edges and a warmer palette for daily family use.",
  },
  {
    image: client2,
    name: "Residential Refresh",
    type: "Home Painting",
    location: "Uttar Pradesh",
    description:
      "Complete room repainting with smooth surface preparation and a fresh, durable finish.",
  },
  {
    image: paint1,
    name: "Color Consultation Preview",
    type: "AI Visualization",
    location: "Remote",
    description:
      "Before-work visualization support so the client could choose colors with confidence.",
  },
  {
    image: paint2,
    name: "Premium Wall Finish",
    type: "Texture & Finish",
    location: "Lucknow",
    description:
      "A refined wall treatment planned around the room lighting, furniture, and existing decor.",
  },
  {
    image: paint3,
    name: "Creative Color Upgrade",
    type: "Interior Styling",
    location: "India",
    description:
      "A brighter, personality-led color update balanced with professional execution.",
  },
  {
    image: paint4,
    name: "Commercial Paint Touch-up",
    type: "Commercial Painting",
    location: "India",
    description:
      "Fast, neat paintwork for a business-facing space with minimal disruption.",
  },
];
