import type { IconType } from "react-icons";
import { 
  FaReact, FaNodeJs, FaPhp
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiMongodb, SiTailwindcss, SiMysql, SiLaravel
} from "react-icons/si";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: { name: string; icon: IconType; color: string }[];
  githubUrl: string;
  liveUrl?: string;
  placeholderColor?: string;
};

export const projectsData: Project[] = [
  {
    id: "rimas-jewelry",
    title: "Site E-commerce Rimas Jewelry",
    description: "Plateforme e-commerce complète pour la vente de bijoux avec authentification, panier d'achat, dashboard admin et système de tickets support.",
    image: "/images/rimas-jewelry.jpg", 
    placeholderColor: "linear-gradient(135deg, #1f2937, #111827)",
    techStack: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    githubUrl: "https://github.com/Doha-brd",
  },
  {
    id: "cabinet-medical",
    title: "Système de Gestion de Cabinet Médical",
    description: "Solution de gestion médicale avec authentification multi-rôles, CRUD patients, calendrier dynamique pour les RDV et historique médical sécurisé.",
    image: "/images/cabinet-medical.jpg",
    placeholderColor: "linear-gradient(135deg, #4b5563, #1f2937)",
    techStack: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    githubUrl: "https://github.com/Doha-brd",
  },
  {
    id: "portfolio-v3",
    title: "Modern Portfolio",
    description: "Portfolio personnel dynamique conçu avec React, Framer Motion et des effets visuels avancés pour présenter mes compétences et projets.",
    image: "/images/portfolio.jpg",
    placeholderColor: "linear-gradient(135deg, #0f172a, #020617)",
    techStack: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Framer Motion", icon: SiJavascript, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
    ],
    githubUrl: "https://github.com/Doha-brd/Microservices-Ecom",
    liveUrl: "#"
  }
];
