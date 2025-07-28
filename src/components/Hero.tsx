import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  const services = [
    "Breakdown Recovery",
    "Accident Recovery", 
    "Flat Tyre",
    "Refuelling",
    "Mobile Tyre Fitting",
    "Motorbike Breakdown Recovery",
    "Jump Start",
    "Wrong Fuel",
    "Lost Car Keys",
    "Exporting and Importing Vehicles",
    "Stolen Catalytic Converter",
    "Stuck Vehicle"
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.85), rgba(34, 40, 49, 0.85)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          24 Hour Mobile Tyre Service
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm md:text-base">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
          GET A FREE QUOTE
        </Button>
      </div>
    </section>
  );
};

export default Hero;