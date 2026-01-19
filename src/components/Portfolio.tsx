import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { projects, type ProjectType } from "@/data/projects";

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState<ProjectType>("all");
  const navigate = useNavigate();

  const filteredProjects = selectedType === "all" 
    ? projects 
    : projects.filter(p => p.type === selectedType);

  const getTypeColor = (type: ProjectType) => {
    const colors: Record<ProjectType, string> = {
      wedding: "bg-accent text-white shadow-md",
      birthday: "bg-secondary text-white shadow-md",
      engagement: "bg-primary text-white shadow-md",
      anniversary: "bg-accent text-white shadow-md",
      flower: "bg-green-600 text-white shadow-md",
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
                  loading="eager"
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
