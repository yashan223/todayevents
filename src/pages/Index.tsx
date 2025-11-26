import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/94742979393", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-20 right-4 h-12 w-12 md:bottom-6 md:right-6 md:h-16 md:w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 animate-bounce"
        aria-label="Chat on WhatsApp"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
      </button>
    </div>
  );
};

export default Index;
