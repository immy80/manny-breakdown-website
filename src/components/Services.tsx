import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import breakdownImage from "@/assets/uk-breakdown-truck.jpg";
import tireImage from "@/assets/tire-service.jpg";
import batteryImage from "@/assets/battery-service.jpg";
import fuelImage from "@/assets/fuel-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Car Breakdown Services",
      description: "Stranded on the road? Cheshire Breakdown Recovery offers nationwide breakdown recovery across England—day or night. Whether it's a flat battery, engine failure, or accident, our recovery team is ready to help.",
      image: breakdownImage,
    },
    {
      title: "Mobile Tyre Fitting",
      description: "Looking for fast, convenient mobile tyre fitting? Cheshire Breakdown Recovery provides expert tyre replacement and puncture repair at your home, workplace, or roadside across England.",
      image: tireImage,
    },
    {
      title: "Battery & Jump Start",
      description: "Dead battery? Don't worry! Cheshire Breakdown Recovery offers rapid battery replacement and jump-start services anywhere in England. We'll get your vehicle running again quickly and safely.",
      image: batteryImage,
    },
    {
      title: "Emergency Refuelling",
      description: "Out of fuel? Cheshire Breakdown Recovery offers fast, reliable emergency refuelling anywhere in England—day or night. Whether you're at home, work, or roadside, we deliver petrol or diesel directly to your vehicle.",
      image: fuelImage,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-0 shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;