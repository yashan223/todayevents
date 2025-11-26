import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/components/Portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    if (!project) return;
    setSelectedImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project) return;
    setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!project) return;
      
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen, selectedImage, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      wedding: "bg-accent/10 text-accent",
      corporate: "bg-primary/10 text-primary",
      birthday: "bg-secondary/10 text-secondary",
      gala: "bg-accent/10 text-accent"
    };
    return colors[type] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Button 
            variant="ghost" 
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const portfolioSection = document.getElementById("portfolio");
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="mb-6 md:mb-8 text-sm md:text-base h-9 md:h-10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-3 md:space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-elegant group">
                <img
                  src={project.images[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsFullscreen(true)}
                />
                
                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Open fullscreen"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-black/60 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-medium">
                      {selectedImage + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[4/3] rounded-lg overflow-hidden ${
                      selectedImage === index 
                        ? "ring-2 ring-primary scale-105" 
                        : "opacity-70 hover:opacity-100 hover:scale-105"
                    } transition-all duration-200`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <Badge className={`${getTypeColor(project.type)} capitalize mb-3 md:mb-4 text-xs md:text-sm`}>
                  {project.type}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                  {project.title}
                </h1>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">About This</h2>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Services Provided</h2>
                <ul className="space-y-2 md:space-y-3">
                  {project.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
                      <span className="text-sm md:text-base text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20"
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-white/10 text-white px-4 py-2 rounded-full text-base font-medium z-20">
            {selectedImage + 1} / {project.images.length}
          </div>
          
          {/* Main Image */}
          <img
            src={project.images[selectedImage]}
            alt={`${project.title} - Image ${selectedImage + 1}`}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />
          
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
