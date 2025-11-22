import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[hsl(30_30%_12%)]/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-end">
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={goHome}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('packages')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Packages
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(30_30%_12%)] border-t border-border animate-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button 
              onClick={goHome}
              className="text-foreground hover:text-primary transition-colors text-left py-2 text-base"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-foreground hover:text-primary transition-colors text-left py-2 text-base"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors text-left py-2 text-base"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-left py-2 text-base"
            >
              Services
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 w-full mt-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
