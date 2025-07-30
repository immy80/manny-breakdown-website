import { Phone, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Breakdown Recovery", href: "#services" },
    { name: "Battery Fitting", href: "#services" },
    { name: "Jump Start", href: "/" },
    { name: "Mobile Tyre Fitting", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a href="tel:07940553685" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call us: 07940 553685</span>
            </a>
            <a href="tel:07561762745" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call us: 07561 762745</span>
            </a>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="bg-green-600 text-white border-green-600 hover:bg-green-700" asChild>
              <a href="https://wa.me/447940553685" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp 07940553685
              </a>
            </Button>
            <Button size="sm" variant="outline" className="border-white text-secondary hover:bg-white hover:text-secondary">
              <Phone className="w-4 h-4 mr-1" />
              Call us
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">CHESHIRE</span>
              <span className="text-secondary"> BREAKDOWN RECOVERY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;