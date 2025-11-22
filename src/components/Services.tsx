import { Cake, Heart, Sparkles, Gift, PartyPopper, Flower2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cake,
    title: "Birthday Events",
    description: "Vibrant birthday celebrations with themed decorations, balloon garlands, neon lights, and custom backdrops"
  },
  {
    icon: Heart,
    title: "Engagements",
    description: "Romantic engagement setups with elegant backdrops, soft lighting, floral accents, and intimate seating arrangements"
  },
  {
    icon: Sparkles,
    title: "Anniversary Celebrations",
    description: "Elegant anniversary decorations featuring personalized themes, sophisticated lighting, and memorable photo setups"
  },
  {
    icon: Gift,
    title: "Badge Party's",
    description: "Cheerful badge ceremonies with fun decorations, colorful balloon arrangements, and festive party setups"
  },
  {
    icon: PartyPopper,
    title: "Weddings",
    description: "Spectacular wedding decorations with luxurious backdrops, stage setups, floral designs, and grand entrance decor"
  },
  {
    icon: Flower2,
    title: "Flower Decoration",
    description: "Exquisite fresh and artificial flower arrangements, centerpieces, garlands, and custom floral installations for any occasion"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-8 md:py-20 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Comprehensive Event Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Everything you need for a perfect event, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="border-2 hover:border-primary transition-colors shadow-soft hover:shadow-elegant">
                <CardHeader>
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base md:text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
