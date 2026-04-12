import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Leading Dot Solutions, Noida | Remote",
    description:
      "Built a React Native app with 10+ reusable components, developed a Laravel backend with 15+ REST API endpoints, and designed a MySQL schema that cut query execution time by 25–30%.",
    icon: React.createElement(FaReact),
    date: "Feb 2026 – Present",
  },
  {
    title: "Data Analyst Intern",
    location: "Red Dot Foundation – Safecity | Remote",
    description:
      "Built interactive dashboards to surface safety incident trends, cleaned 20,000+ records, and translated raw data into actionable insights for public safety stakeholders.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2025 – Jan 2026",
  },
  {
    title: "Google Developers Club — Lead",
    location: "SRM University, Sonepat",
    description:
      "Led 5+ cross-functional student teams, organized technical workshops, and helped 100+ students build collaborative development habits using Git and agile practices.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2021 – Jan 2025",
  },
] as const;

export const projectsData = [
  {
    title: "ReactNative-Task-ManagerApp",
    href: "https://github.com/adityain24/React-Native-Task-Manager-App",
    description:
      "Cross-platform Task Manager app using React Native and TypeScript with full CRUD support for tasks and notes on both Android and iOS",
    tags: ["TypeScript", "JavaScript", "React Native", "NativeWind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "PHPAuthManagement-System",
    href: "https://github.com/adityain24/PHPAuthManagement-System",
    description:
      "User-authentication system in PHP with secure registration, login & session management on a local Apache XAMPP server.",
    tags: ["PHP", "MySQL", "XAMPP", "Apache", "Jquery"],
    imageUrl: rmtdevImg,
  },
  {
    title: "MotherOfAllDeals (India-Europe) FTA",
    href: "https://github.com/adityain24/Mother-of-all-deals-ind-eu-fta",
    description:
      "Project analyzes the potential impact of the India – EuropeanUnion Free Trade Agreement negotiations on passenger vehicle import costs.",
    tags: ["Python", "SQL", "Excel"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "NextJS",
  "TypeScript",
  "PHP",
  "Laravel",
  "Python",
  "SQL",
  "React Native",
  "NativeWind",
  "Tailwind CSS",
  "REST APIs",
  "MySQL",
  "Power BI",
  "Tableau",
  "Google Cloud Platform",
  "Jupyter Notebook",
] as const;