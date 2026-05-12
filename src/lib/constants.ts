/**
 * Constants and configuration values
 */

export const SITE_NAME = "Alex Morgan";
export const SITE_DESCRIPTION =
  "A modern portfolio showcasing creative graphic design work";

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
];

export const CONTACT_EMAIL = "hello@alexmorgan.com";
export const CONTACT_PHONE = "+1 (234) 567-890";
export const CONTACT_LOCATION = "New York, USA";

export const SKILLS = [
  "Brand Identity",
  "UI/UX Design",
  "Logo Design",
  "Social Media Design",
  "Print Design",
  "Typography",
  "Color Theory",
  "Layout Design",
  "Web Design",
  "Packaging Design",
  "Illustration",
  "Animation",
];

export const categories = [
  "all",
  "advertising design",
  "branding design",
  "creative design",
  "event flyer",
  "birthday flyers",
  "flyer design",
  "packaging and product design",
  "social media design",
  "label design",
  "magazine design",
  "logo design",
];

export const projects = [
  {
    id: 1,
    image: "/Artboard 1.jpg",
    category: "branding design",
  },
  {
    id: 2,
    image: "/Artboard 2.jpg",
    category: "branding design",
  },
  {
    id: 3,
    image: "/cookies mockup design.jpg",
    category: "branding design",
  },
  {
    id: 4,
    image: "/logo-8.png",
    category: "branding design",
  },
  {
    id: 5,
    image: "/SHOE BRAND.jpg",
    category: "branding design",
  },
  {
    id: 6,
    image: "/TSHIRT BRAND.jpg",
    category: "branding design",
  },
  {
    id: 7,
    image: "/gid achomo.jpg",
    category: "advertising design",
  },
  {
    id: 8,
    image: "/kan brodea.jpg",
    category: "advertising design",
  },
  {
    id: 9,
    image: "/label-4.jpg",
    title: "Logo Design for Local Business",
    category: "advertising design",
  },
  {
    id: 10,
    image: "/Another one 4,5.jpg",
    category: "creative design",
  },
  {
    id: 11,
    image: "/Cereal design.jpg",
    category: "packaging and product design",
  },
  {
    id: 12,
    image: "/CREATIVES.jpg",
    category: "creative design",
  },
  {
    id: 13,
    image: "/JPEG image-4A19-8FB5-0D-0.jpeg",
    category: "birthday flyers",
  },
  {
    id: 14,
    image: "/JPEG image-4A19-8FB5-0D-1.jpeg",
    category: "birthday flyers",
  },
  {
    id: 15,
    image: "/JPEG image-4A19-8FB5-0D-2.jpeg",
    category: "birthday flyers",
  },
  {
    id: 16,
    image: "/JPEG image-4A19-8FB5-0D-3.jpeg",
    category: "birthday flyers",
  },
  {
    id: 17,
    image: "/JPEG image-4A19-8FB5-0D-4.jpeg",
    category: "birthday flyers",
  },
  {
    id: 18,
    image: "/JPEG image-4A19-8FB5-0D-5.jpeg",
    category: "birthday flyers",
  },
  {
    id: 19,
    image: "/JPEG image-4A19-8FB5-0D-6.jpeg",
    category: "birthday flyers",
  },
  {
    id: 20,
    image: "/JPEG image-4A19-8FB5-0D-7.jpeg",
    category: "birthday flyers",
  },

  // Flyer design (16 images) — ids 21..35
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: 21 + i,
    image: `/flyer-design-${i + 1}.jpg`,
    category: "flyer design",
  })),

  ...Array.from({ length: 3 }).map((_, i) => ({
    id: 38 + i,
    image: `/flyer-design-${i + 1}.jpeg`,
    category: "flyer design",
  })),

  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 41 + i,
    image: `/event-flyer-${i + 1}.jpg`,
    category: "event flyer",
  })),

  // // Packaging design (5 images) — ids 61..65
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: 51 + i,
    image: `/packaging-${i + 1}.jpg`,
    category: "packaging and product design",
  })),

  ...Array.from({ length: 3 }).map((_, i) => ({
    id: 60 + i,
    image: `/packaging-${i + 1}.jpeg`,
    category: "packaging and product design",
  })),

  // // Social media design (8 images) — ids 66..73
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: 69 + i,
    image: `/social-${i + 1}.jpg`,
    category: "social media design",
  })),

  // // Label design (7 images) — ids 74..80
  ...Array.from({ length: 3 }).map((_, i) => ({
    id: 75 + i,
    image: `/label-${i + 1}.jpg`,
    category: "label design",
  })),

  ...Array.from({ length: 2 }).map((_, i) => ({
    id: 79 + i,
    image: `/magazine-${i + 1}.jpg`,
    category: "magazine design",
  })),

  ...Array.from({ length: 9 }).map((_, i) => ({
    id: 81 + i,
    image: `/logo-${i + 1}.png`,
    category: "logo design",
  })),
].flat();
