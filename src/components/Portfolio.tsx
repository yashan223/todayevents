import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export type ProjectType = "wedding" | "birthday" | "engagement" | "anniversary" | "flower" | "all";

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  thumbnail: string;
  images: string[];
  description: string;
  services: string[];
}

export const projects: Project[] = [
  {
    id: "elegant-wedding-2024",
    title: "Royal Palace Wedding",
    type: "wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&auto=format&fit=crop"
    ],
    description: "A grand wedding celebration with luxurious stage decorations, fresh floral arrangements, elegant lighting, and stunning backdrops throughout the venue.",
    services: ["Stage Decoration", "Floral Arrangements", "Backdrop Design", "Lighting Setup", "Entrance Decor"]
  },
  {
    id: "romantic-engagement-2024",
    title: "Garden Engagement Ceremony",
    type: "engagement",
    thumbnail: "/work/engagement1/558869147_1388021599990934_4280350293898980616_n.jpg",
    images: [
      "/work/engagement1/558869147_1388021599990934_4280350293898980616_n.jpg",
      "/work/engagement1/558871309_1388022949990799_216638428082638714_n.jpg",
      "/work/engagement1/560056221_1388021556657605_3353337068931393047_n.jpg"
    ],
    description: "A romantic outdoor engagement with elegant backdrop setups, soft ambient lighting, rose petal decorations, and intimate seating arrangements.",
    services: ["Backdrop Setup", "Floral Decor", "Ambient Lighting", "Seating Arrangement", "Photo Corner"]
  },
  {
    id: "harrypotter-birthday-2024",
    title: "Harry Potter Theme Birthday",
    type: "birthday",
    thumbnail: "/work/birthday1/561209381_825382233605427_2402909910801337242_n.jpg",
    images: [
      "/work/birthday1/561209381_825382233605427_2402909910801337242_n.jpg",
      "/work/birthday1/571816318_825382356938748_1425967128962442537_n.jpg",
      "/work/birthday1/573057863_825382330272084_3437592138299268699_n.jpg",
      "/work/birthday1/573069933_825382313605419_7330631771780148963_n.jpg",
      "/work/birthday1/573097170_825382226938761_7185281214207004710_n.jpg",
      "/work/birthday1/574477986_825382260272091_2288177678426716254_n.jpg"
    ],
    description: "A magical Harry Potter–themed birthday party featuring custom Hogwarts-inspired backdrops, spellbinding balloon garlands, a neon ‘Happy Birthday’ sign, and enchanting wizard-style decorations.",
    services: ["Themed Backdrop", "Balloon Decoration", "Neon Lights", "Floor Carpet", "Character Cutouts"]
  },
  {
    id: "golden-anniversary-2024",
    title: "50th Golden Anniversary",
    type: "anniversary",
    thumbnail: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A beautiful golden anniversary celebration with sophisticated gold-themed decorations, elegant table settings, personalized photo displays, and soft romantic lighting.",
    services: ["Gold Theme Decor", "Photo Display Setup", "Table Arrangements", "Ambient Lighting", "Floral Centerpieces"]
  },
  {
    id: "unicorn-birthday-2024",
    title: "Magical Unicorn Birthday",
    type: "birthday",
    thumbnail: "/work/birthday2/481269547_648433627966956_4586121035398510464_n.jpg",
    images: [
      "/work/birthday2/481269547_648433627966956_4586121035398510464_n.jpg",
      "/work/birthday2/481284161_648433457966973_211848616780153981_n.jpg",
      "/work/birthday2/481949108_648433487966970_2149855473055495795_n.jpg",
      "/work/birthday2/485098912_648433434633642_4817418802079468037_n.jpg",
      "/work/birthday2/485769252_648433521300300_2581794192312957663_n.jpg"
    ],
    description: "A whimsical unicorn-themed birthday with pastel balloon arches, rainbow decorations, custom backdrop, and magical party setup.",
    services: ["Unicorn Theme Setup", "Balloon Arch", "Rainbow Decor", "Custom Backdrop", "Floor Carpet"]
  },
  {
    id: "superhero-birthday-2024",
    title: "Superhero Theme Birthday",
    type: "birthday",
    thumbnail: "/work/birthday3/546292267_781231401353844_7766569173999632876_n.jpg",
    images: [
      "/work/birthday3/546292267_781231401353844_7766569173999632876_n.jpg",
      "/work/birthday3/547178052_781231588020492_190811733159996670_n.jpg",
      "/work/birthday3/547253980_781231624687155_37601410841357260_n.jpg",
      "/work/birthday3/547541544_781231688020482_4817017563977487222_n.jpg"
    ],
    description: "An action-packed superhero-themed birthday party with vibrant decorations, custom character setups, themed balloon arrangements, and exciting party props.",
    services: ["Superhero Theme Setup", "Character Props", "Balloon Decorations", "Photo Booth Setup", "Themed Backdrop"]
  },
  {
    id: "luxury-flower-mandap-2024",
    title: "Luxury Floral Mandap",
    type: "flower",
    thumbnail: "/work/flowers1/480309570_622089710601348_3880074227553183298_n.jpg",
    images: [
      "/work/flowers1/480309570_622089710601348_3880074227553183298_n.jpg",
      "/work/flowers1/480310019_622089503934702_5136812878682483722_n.jpg",
      "/work/flowers1/480422451_622087397268246_3746676849025485650_n.jpg",
      "/work/flowers1/480422451_622089450601374_1172256143917400113_n.jpg",
      "/work/flowers1/480542226_626368850173434_5543039224425955998_n.jpg",
      "/work/flowers1/480564222_622087377268248_608371427645922317_n.jpg",
      "/work/flowers1/480566352_622087277268258_6008169143598485004_n.jpg"
    ],
    description: "Exquisite fresh flower mandap with roses, orchids, and marigolds creating a breathtaking ceremony centerpiece with cascading floral arrangements and hanging flower installations.",
    services: ["Fresh Flower Mandap", "Rose Arrangements", "Hanging Flowers", "Floral Pathways", "Garland Making"]
  },
  {
    id: "garden-flower-reception-2024",
    title: "Garden Flower Reception",
    type: "flower",
    thumbnail: "/work/flowers1/480620160_626368886840097_3120061898921612344_n.jpg",
    images: [
      "/work/flowers1/480620160_626368886840097_3120061898921612344_n.jpg",
      "/work/flowers1/480771558_626369013506751_5574317532395329231_n.jpg",
      "/work/flowers1/480974490_626369006840085_3932503951676727419_n.jpg",
      "/work/flowers1/481052931_626368706840115_3435161438734921232_n.jpg",
      "/work/flowers1/481058716_626369116840074_5103124366412808184_n.jpg",
      "/work/flowers1/481158782_626368866840099_1557586491096455446_n.jpg",
      "/work/flowers1/481297355_626369130173406_639127747326665151_n.jpg",
      "/work/flowers1/481452492_626368746840111_7588361468411817108_n.jpg"
    ],
    description: "Stunning outdoor reception featuring elaborate floral centerpieces, jasmine and rose petals pathways, fresh flower table runners, and custom floral photo booth backdrop.",
    services: ["Table Centerpieces", "Petal Pathways", "Flower Runners", "Photo Booth Flowers", "Stage Floral Decor"]
  }
];

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState<ProjectType>("all");
  const navigate = useNavigate();

  const filteredProjects = selectedType === "all" 
    ? projects 
    : projects.filter(p => p.type === selectedType);

  const getTypeColor = (type: ProjectType) => {
    const colors: Record<ProjectType, string> = {
      wedding: "bg-accent/10 text-accent",
      birthday: "bg-secondary/10 text-secondary",
      engagement: "bg-primary/10 text-primary",
      anniversary: "bg-accent/10 text-accent",
      flower: "bg-green-100 text-green-700",
      all: "bg-muted text-muted-foreground"
    };
    return colors[type];
  };

  return (
    <section id="portfolio" className="py-8 md:py-20 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Our Portfolio
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8 px-2">
            Discover our past events and the unforgettable experiences we've created
          </p>
          
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {(["all", "wedding", "birthday", "engagement", "anniversary", "flower"] as ProjectType[]).map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className="capitalize text-sm md:text-base h-9 md:h-10 px-3 md:px-4"
              >
                {type === "all" ? "All Events" : type === "flower" ? "Flower Decoration" : `${type}s`}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getTypeColor(project.type)} capitalize`}>
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 md:p-6">
                <h3 className="text-xl md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-3 md:mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors h-9 md:h-10 text-sm md:text-base"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
