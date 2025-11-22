import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519167758481-83f29da8ee97?w=800&auto=format&fit=crop",
    title: "Corporate Event"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
    title: "Wedding Celebration"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop",
    title: "Birthday Party"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop",
    title: "Gala Dinner"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop",
    title: "Conference"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
    title: "Product Launch"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-8 md:py-20 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Our Event Gallery
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Explore the moments we've helped create
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-soft hover:shadow-elegant transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="text-lg md:text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl md:text-2xl font-bold text-center">{selectedImage.title}</h3>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
