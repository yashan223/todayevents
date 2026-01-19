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
    title: "Wedding 1",
    type: "wedding",
    thumbnail: "/work/wedding1/54918180-d8ba-47bf-8ed3-df8ac2f2b40b.jpg",
    images: [
      "/work/wedding1/54918180-d8ba-47bf-8ed3-df8ac2f2b40b.jpg",
      "/work/wedding1/ccd51f2e-74a3-46df-8834-86b2145b2f47.jpg",
      "/work/wedding1/dde80eab-d317-44a0-8627-cd4337101245.jpg"
    ],
    description: "A grand wedding celebration with luxurious stage decorations, fresh floral arrangements, elegant lighting, and stunning backdrops throughout the venue.",
    services: ["Stage Decoration", "Floral Arrangements", "Backdrop Design", "Lighting Setup", "Entrance Decor"]
  },
    {
    id: "wedding-2",
    title: "Wedding 2",
    type: "wedding",
    thumbnail: "/work/wedding2/4f484b0c-7bb6-4347-b80e-982c8e2d6bae.jpg",
    images: [
      "/work/wedding2/4f484b0c-7bb6-4347-b80e-982c8e2d6bae.jpg",
      "/work/wedding2/9f1ac80f-3d55-420c-b8d8-f891270d096c.jpg",
      "/work/wedding2/c8d8ac98-b951-4002-b4ef-9705df4fc50b.jpg",
      "/work/wedding2/cfc794f3-ce8b-4e54-9ff5-371c4f922709.jpg"
    ],
    description: "A grand wedding celebration with luxurious stage decorations, fresh floral arrangements, elegant lighting, and stunning backdrops throughout the venue.",
    services: ["Stage Decoration", "Floral Arrangements", "Backdrop Design", "Lighting Setup", "Entrance Decor"]
  },
  {
    id: "engagement-1",
    title: "Engagement 1",
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
    id: "birthday-1",
    title: "Birthday 1",
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
    description: "A magical Harry Potter–themed birthday party featuring custom Hogwarts-inspired backdrops, spellbinding balloon garlands, a neon 'Happy Birthday' sign, and enchanting wizard-style decorations.",
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
    id: "birthday-2",
    title: "Birthday 2",
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
    id: "birthday-3",
    title: "Birthday 3",
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
    id: "flower-decoration-1",
    title: "Flower Decoration 1",
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
    id: "flower-decoration-2",
    title: "Flower Decoration 2",
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
