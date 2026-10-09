export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  bannerTitle: string;
  bannerSubtitle: string;
  description: string;
  image: string;
  date: string;
  author: string;
  authorImage?: string;
  readTime: string;
}

export const homeBlogs: BlogPost[] = [
  {
    id: "ganesh-chaturthi-2026",
    slug: "ganesh-chaturthi-2026-tithi-puja-vidhi",
    title: "Ganesh Chaturthi 2026: Tithi, Puja Vidhi, Mahatva aur Visarjan",
    category: "Vedic Festivals & Rituals",
    bannerTitle: "Ganesh Chaturthi 2026",
    bannerSubtitle: "Tithi, Puja Muhurat, Vrat Vidhi aur Mahatva",
    description: "Ganesh Chaturthi 2026 ko Ganpati Bappa ke divya aashirwad ke saath manayein. Shubh muhurat, sthapna vidhi aur visarjan ke niyam janein.",
    image: "/images/blogs/blog-ganesh.webp",
    date: "September 2026",
    author: "Narayani Garg",
    readTime: "5 min read",
  },
  {
    id: "kundli-dosh-remedies",
    slug: "kundli-dosh-planetary-alignment-remedies",
    title: "Kundli Dosh & Remedies: How Vedic Astrology Guides Life & Mindset",
    category: "Astrology & Mindset",
    bannerTitle: "Vedic Kundli & Dosh",
    bannerSubtitle: "Planetary Alignments, Mindset & Practical Remedies",
    description: "Upay tab kaam karta hai jab dimaag kaam karta hai. Samjhein kaise graha prabhav aur subconscious alignment se jeevan me badlaav aata hai.",
    image: "/images/blogs/blog-kundli.webp",
    date: "September 2026",
    author: "Narayani Garg",
    readTime: "6 min read",
  },
  {
    id: "hartalika-teej-2026",
    slug: "hartalika-teej-2026-puja-muhurat-vrat-vidhi",
    title: "Hartalika Teej 2026: Tithi, Puja Muhurat, Vrat Vidhi aur Mahatva",
    category: "Spiritual Celebrations",
    bannerTitle: "Hartalika Teej 2026",
    bannerSubtitle: "Shubh Muhurat, Puja Vidhi & Spiritual Significance",
    description: "Hartalika Teej 2026 ko bhakti aur Mata Parvati ke aashirwad se manayein. Akhand saubhagya aur mansik shanti ke liye vishesh niyam.",
    image: "/images/blogs/blog-shiva.webp",
    date: "September 2026",
    author: "Narayani Garg",
    readTime: "4 min read",
  },
];
