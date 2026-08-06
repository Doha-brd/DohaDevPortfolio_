export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  color: string;
  image?: string;
  credentialUrl?: string;
}

import pythonCertif from "../assets/certs/PythonCertif.jpeg";
import sqlCertif from "../assets/certs/SQLCertif.jpeg";

export const certificationsData: Certification[] = [
  {
    id: "python",
    name: "Python",
    issuer: "Certificate",
    date: "2026",
    color: "#3776AB",
    image: pythonCertif,
  },
  {
    id: "sql",
    name: "SQL",
    issuer: "Certificate",
    date: "2026",
    color: "#336791",
    image: sqlCertif,
  },
  {
    id: "ts-digital-2",
    name: "TS Développement Digital – Option Web Full Stack",
    issuer: "Centre Mixte HAY NAHDA – Rabat",
    date: "2026 - Présent",
    color: "#68a063",
    image: "",
  },
  {
    id: "ts-digital-1",
    name: "TS Développement Digital – 1ère Année",
    issuer: "Centre Mixte HAY NAHDA – Rabat",
    date: "2024 - 2025",
    color: "#61DAFB",
    image: "",
  },
  {
    id: "tronc-commun-ia",
    name: "Tronc Commun IA (Informatique Appliquée & Cyber Sécurité)",
    issuer: "Faculté de Sciences – UM5 Rabat",
    date: "2023 - 2024",
    color: "#e44d26",
    image: "",
  },
  {
    id: "bac-physique",
    name: "Baccalauréat en Science Physique",
    issuer: "Lycée IBN BATTOUTA – Rabat",
    date: "2022 - 2023",
    color: "#ff4fa3",
    image: "",
  },
];
