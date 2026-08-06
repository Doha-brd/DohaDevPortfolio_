import type { IconType } from "react-icons";
import { 
  FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaDocker, FaGithub, FaPhp, FaDatabase, FaBootstrap
} from "react-icons/fa";
import { 
  SiC, SiVercel,
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiJira, SiLaravel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type SkillNode = {
  name: string;
  icon?: IconType;
  children?: SkillNode[];
  color?: string; // Hex color for the leaf/icon 
};

export const skillsTreeData: SkillNode = {
  name: "Skills",
  color: "#ffffff",
  children: [
    {
      name: "Languages",
      color: "#8ca83d",
      children: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#ff4fa3" },
        { name: "PHP", icon: FaPhp, color: "#777BB4" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "C", icon: SiC, color: "#a8b9cc" },
      ]
    },
    {
      name: "Frontend",
      color: "#4ab5bd",
      children: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      ]
    },
    {
      name: "Backend",
      color: "#bf5656",
      children: [
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "Next.js", icon: SiVercel, color: "#ffffff" },
      ]
    },
    {
      name: "Databases",
      color: "#bfb256",
      children: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: FaDatabase, color: "#4169E1" },
      ]
    },
    {
      name: "Tools & Methods",
      color: "#9b56bf",
      children: [
        { name: "Git / GitHub", icon: FaGithub, color: "#F05032" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Jira", icon: SiJira, color: "#0052CC" },
      ]
    }
  ]
};
