import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
