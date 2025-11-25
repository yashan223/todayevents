import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "Rs 15,000",
    description: "Ideal for cozy birthday parties and stylish small events",
    features: [
      "Backdrop",
      "Wondering or happy birthday neon light",
      "Balloon garland",
      "Floor carpet",
      "Light setup",
      "Smooth coordination and quick assistance"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "Rs 25,000",
    description: "Our most popular choice for memorable events",
    features: [
      "2 Backdrops",
      "Happy birthday neon light",
      "Balloon garland",
      "One table",
      "Floor carpet",
      "Light setup",
      "Cartoon characters"
    ],
    popular: true
  },
  {
    name: "Customizable",
    price: "Personalized",
    description: "The ultimate experience for grand celebrations",
    features: [
      "Customizable venue (indoor/outdoor)",
      "Flexible location options",
      "Personalized theme & decor",
      "Adjustable guest capacity",
      "Fresh flower arrangements",
      "Custom lighting ",
      "Photography & videography packages",
      "Unique add-ons available",
      "Tailored timeline & schedule",
      "Professional event coordination"
    ],
    popular: false
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-8 md:py-20 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Tailored solutions for every event size and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name} 
              className={`relative ${pkg.popular ? 'border-primary border-2 shadow-elegant scale-105' : 'shadow-soft'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl md:text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base md:text-base">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-sm md:text-base text-muted-foreground"> / event</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
