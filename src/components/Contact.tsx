import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Ready to start planning your perfect event? Get in touch with us today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          <Card className="shadow-soft">
            <CardContent className="flex items-start gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-lg mb-1">Email Us</h3>
                <p className="text-base md:text-base text-muted-foreground break-all">todayevents001@gmail.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="flex items-start gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-lg mb-1">Call Us</h3>
                <p className="text-base md:text-base text-muted-foreground">+94 74 297 9393</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="flex items-start gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-lg mb-1">Visit Us</h3>
                <p className="text-base md:text-base text-muted-foreground">512, Kotte Road, Pitakotte</p>
                <p className="text-base md:text-base text-muted-foreground">Colombo, Sri Lanka</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
