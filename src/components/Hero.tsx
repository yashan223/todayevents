
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import GoldParticles from "./GoldParticles";

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-16 pb-6 md:pb-8 px-4 relative overflow-hidden">
      <GoldParticles />
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center text-center relative z-20">
          <img src="/logo.png" alt="Premium Event Management" className="h-40 sm:h-48 md:h-72 w-auto max-w-[90%] md:max-w-5xl object-contain" />
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground max-w-4xl mt-3 md:mt-3 leading-tight">
            Create Unforgettable
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Events </span>
            That Last Forever
          </h1>
          <div className="w-24 sm:w-32 md:w-64 h-0.5 md:h-1 bg-gradient-hero rounded-full mt-3 md:mt-3 mb-2"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mt-3 md:mt-3 px-2 sm:px-4 leading-relaxed">
            From intimate gatherings to grand celebrations, we bring your vision to life with 
            exceptional planning, stunning execution, and memories that last a lifetime.
          </p>
          <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-4 w-full max-w-sm sm:max-w-none sm:flex-row sm:w-auto px-4">
            <Button 
              size="lg" 
              onClick={scrollToPackages}
              className="bg-primary hover:bg-primary/90 shadow-elegant text-sm sm:text-base md:text-lg px-6 md:px-8 w-full sm:w-auto h-11 sm:h-auto"
            >
              <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              View Packages
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base sm:text-lg md:text-lg px-6 md:px-8 border-2 w-full sm:w-auto h-12 sm:h-auto"
            >
              See Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
