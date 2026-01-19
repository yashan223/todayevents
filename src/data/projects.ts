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
    id: "wedding-1",
    title: "Wedding Ceremony",
    type: "wedding",
    thumbnail: "/work/wedding1/1.jpg",
    images: [
      "/work/wedding1/1.jpg",
      "/work/wedding1/2.jpg",
      "/work/wedding1/3.jpg"
    ],
    description: "A grand wedding celebration with luxurious stage decorations, fresh floral arrangements, elegant lighting, and stunning backdrops throughout the venue.",
    services: ["Stage Decoration", "Floral Arrangements", "Backdrop Design", "Lighting Setup", "Entrance Decor"]
  },
    {
    id: "wedding-2",
    title: "Wedding Ceremony",
    type: "wedding",
    thumbnail: "/work/wedding2/1.jpg",
    images: [
      "/work/wedding2/1.jpg",
      "/work/wedding2/2.jpg",
      "/work/wedding2/3.jpg",
      "/work/wedding2/4.jpg"
    ],
    description: "A grand wedding celebration with luxurious stage decorations, fresh floral arrangements, elegant lighting, and stunning backdrops throughout the venue.",
    services: ["Stage Decoration", "Floral Arrangements", "Backdrop Design", "Lighting Setup", "Entrance Decor"]
  },
  {
    id: "engagement-1",
    title: "Engagement Ceremony",
    type: "engagement",
    thumbnail: "/work/engagement1/1.jpg",
    images: [
      "/work/engagement1/1.jpg",
      "/work/engagement1/2.jpg",
      "/work/engagement1/3.jpg"
    ],
    description: "A romantic outdoor engagement with elegant backdrop setups, soft ambient lighting, rose petal decorations, and intimate seating arrangements.",
    services: ["Backdrop Setup", "Floral Decor", "Ambient Lighting", "Seating Arrangement", "Photo Corner"]
  },
  {
    id: "birthday-1",
    title: "Kids Birthday Celebration",
    type: "birthday",
    thumbnail: "/work/birthday1/1.jpg",
    images: [
      "/work/birthday1/1.jpg",
      "/work/birthday1/2.jpg",
      "/work/birthday1/3.jpg",
      "/work/birthday1/4.jpg",
      "/work/birthday1/5.jpg",
      "/work/birthday1/6.jpg"
    ],
    description: "A magical Harry Potter–themed birthday party featuring custom Hogwarts-inspired backdrops, spellbinding balloon garlands, a neon 'Happy Birthday' sign, and enchanting wizard-style decorations.",
    services: ["Themed Backdrop", "Balloon Decoration", "Neon Lights", "Floor Carpet", "Character Cutouts"]
  },
  {
    id: "anniversary-1",
    title: "Anniversary Celebration",
    type: "anniversary",
    thumbnail: "/work/anniversary/1.jpg",
    images: [
      "/work/anniversary/1.jpg",
      "/work/anniversary/2.jpg",
      "/work/anniversary/3.jpg"
    ],
    description: "A beautiful golden anniversary celebration with sophisticated gold-themed decorations, elegant table settings, personalized photo displays, and soft romantic lighting.",
    services: ["Gold Theme Decor", "Photo Display Setup", "Table Arrangements", "Ambient Lighting", "Floral Centerpieces"]
  },
  {
    id: "birthday-2",
    title: "Adult Birthday Celebration",
    type: "birthday",
    thumbnail: "/work/birthday2/1.jpg",
    images: [
      "/work/birthday2/1.jpg",
      "/work/birthday2/2.jpg",
      "/work/birthday2/3.jpg",
      "/work/birthday2/4.jpg",
      "/work/birthday2/5.jpg"
    ],
    description: "A whimsical unicorn-themed birthday with pastel balloon arches, rainbow decorations, custom backdrop, and magical party setup.",
    services: ["Unicorn Theme Setup", "Balloon Arch", "Rainbow Decor", "Custom Backdrop", "Floor Carpet"]
  },
  {
    id: "birthday-3",
    title: "Senior Birthday Celebration",
    type: "birthday",
    thumbnail: "/work/birthday3/1.jpg",
    images: [
      "/work/birthday3/1.jpg",
      "/work/birthday3/2.jpg",
      "/work/birthday3/3.jpg",
      "/work/birthday3/4.jpg"
    ],
    description: "An action-packed superhero-themed birthday party with vibrant decorations, custom character setups, themed balloon arrangements, and exciting party props.",
    services: ["Superhero Theme Setup", "Character Props", "Balloon Decorations", "Photo Booth Setup", "Themed Backdrop"]
  },
  {
    id: "flower-decoration-1",
    title: "Flower Decoration",
    type: "flower",
    thumbnail: "/work/flowers1/1.jpg",
    images: [
      "/work/flowers1/1.jpg",
      "/work/flowers1/2.jpg",
      "/work/flowers1/3.jpg",
      "/work/flowers1/4.jpg",
      "/work/flowers1/5.jpg",
      "/work/flowers1/6.jpg",
      "/work/flowers1/7.jpg"
    ],
    description: "Exquisite fresh flower mandap with roses, orchids, and marigolds creating a breathtaking ceremony centerpiece with cascading floral arrangements and hanging flower installations.",
    services: ["Fresh Flower Mandap", "Rose Arrangements", "Hanging Flowers", "Floral Pathways", "Garland Making"]
  },
  {
    id: "flower-decoration-2",
    title: "Flower Decoration",
    type: "flower",
    thumbnail: "/work/flowers1/8.jpg",
    images: [
      "/work/flowers1/8.jpg",
      "/work/flowers1/9.jpg",
      "/work/flowers1/10.jpg",
      "/work/flowers1/11.jpg",
      "/work/flowers1/12.jpg",
      "/work/flowers1/13.jpg",
      "/work/flowers1/14.jpg"
    ],
    description: "Stunning outdoor reception featuring elaborate floral centerpieces, jasmine and rose petals pathways, fresh flower table runners, and custom floral photo booth backdrop.",
    services: ["Table Centerpieces", "Petal Pathways", "Flower Runners", "Photo Booth Flowers", "Stage Floral Decor"]
  }
];
