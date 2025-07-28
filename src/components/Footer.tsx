import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">CHESHIRE</span>
              <span className="text-white"> BREAKDOWN RECOVERY</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Your trusted 24/7 mobile automotive service across England. Fast, reliable, and professional assistance when you need it most.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Breakdown Recovery</li>
              <li>Mobile Tyre Fitting</li>
              <li>Battery Replacement</li>
              <li>Jump Start Service</li>
              <li>Emergency Refuelling</li>
              <li>Accident Recovery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>07411 856464</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@cheshirebreakdownrecovery.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>England Wide Service</span>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-4">24/7 Emergency</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Need immediate assistance? Our emergency team is always ready to help.
            </p>
            <div className="bg-primary/20 p-4 rounded-lg">
              <p className="text-primary font-bold text-xl">07411 856464</p>
              <p className="text-xs">Available 24 hours a day</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 Cheshire Breakdown Recovery. All rights reserved. Professional automotive services across England.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;