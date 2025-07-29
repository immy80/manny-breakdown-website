import { Phone, MessageCircle, Battery, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JumpStart = () => {
  const services = [
    "Rapid response car jump start near me",
    "12V and 24V jump starter pack solutions", 
    "Jumper cables, booster packs & heavy-duty jump leads",
    "Battery boosting for automatic, hybrid & standard vehicles",
    "Mobile service to any postcode or city",
    "Safe connection of red jump lead & black jump lead terminals",
    "Full charging and restart process handled professionally"
  ];

  const safetySteps = [
    "Switch off both vehicle engines",
    "Connect the red jump lead to the positive terminal", 
    "Attach the black jump lead to a grounding point",
    "Begin the charge",
    "Start the vehicle and test stability",
    "Remove cables in reverse order and perform final safety checks"
  ];

  const batterySignsData = [
    { title: "Clicking sound when turning the key", icon: "🔊" },
    { title: "Dashboard lights are dim or flickering", icon: "💡" },
    { title: "Engine won't crank or start", icon: "🚗" },
    { title: "Electrical components not working properly", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Car Jump Start Service – 24/7 Battery Boost & Replacement
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            <strong>Flat battery? Car won't start?</strong>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We provide fast, affordable car jump start and battery replacement services across Cheshire — 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="w-5 h-5 mr-2" />
              Call 07940 553685
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're at home, work, or stuck roadside, we're only one call away. Our trained technicians use safe, professional-grade equipment to jump start cars of all types — petrol, diesel, hybrid, and electric-assist.
            </p>

            {/* Services We Provide */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Battery className="w-8 h-8 mr-3 text-primary" />
                  Car Jump Start Services We Provide:
                </h2>
                <div className="grid gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety Procedures */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-primary" />
                  We follow standard jump start safety procedures:
                </h2>
                <div className="grid gap-4">
                  {safetySteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Battery Replacement */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Dead Battery? We Also Replace the Battery
                </h2>
                <p className="text-muted-foreground mb-6">
                  <strong>If a jump start fails or the battery is fully discharged, we offer car battery replacement with no delay:</strong>
                </p>
                <div className="grid gap-4">
                  {[
                    "Mobile car battery fitting anywhere in Cheshire",
                    "At-home battery installation or workplace callouts", 
                    "Trusted \"car battery near me\" options always in stock",
                    "Disposal of old battery in line with environmental standards"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  ❓ FAQ: Car Battery Help
                </h2>
                <p className="text-muted-foreground mb-6">
                  Here are answers to the most common questions we get:
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    🤔 How do I know if my car battery is dead?
                  </h3>
                  <div className="grid gap-4">
                    {batterySignsData.map((sign, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-2xl mr-3">{sign.icon}</span>
                        <span className="text-foreground">{sign.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Need a Jump Start? We're Here 24/7
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't wait in the cold or miss important appointments. Call us now for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp 07940 553685
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 07940 553685
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JumpStart;