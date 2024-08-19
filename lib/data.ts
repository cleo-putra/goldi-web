import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import evomoImg from "@/public/evomo2.png";
import sp from "@/public/sp.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import jaki from "@/public/jaki.png";

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
    title: "Full Stack Developer",
    location: "Qualify Me Australia!",
    description:
      "Worked as fullstack developer that create SaaS Web Platform and also manage Wordpress Applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Senior Front-End Engineer",
    location: "Wastec Indonesia",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Front-End Engineer",
    location: "Telkom Indonesia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },

  {
    title: "Front-End Developer",
    location: "Reka Cipta Digital",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },

  {
    title: "Software Engineer",
    location: "Bank Central Asia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Evomo EMS & OEE",
    description:
      "Application that can Monitor Factory Machine defect, downtime, and success rate. Also, detect environment conditions.",
    tags: [
      "React Native",
      "Next.js",
      "Redux",
      "Ant Design",
      "Javascript",
      "TypeScript",
      "Docker",
      "Zustand",
    ],
    imageUrl: evomoImg,
  },
  {
    title: "JAKI ArcGIS Kementrian PUPR",
    description:
      " Building Web Map Services Application for all National road in Indonesia",
    tags: ["React", "Redux", "Material UI", "JavaScript", "ArcGIS", "Node JS"],
    imageUrl: jaki,
  },
  {
    title: "Carbon Calculator & Disclosure Apps",
    description:
      "Build Platform that clients can Manage Their Carbon Footprint & Achieve Their ESG Goals",
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Ant Design",
      "TypeScript",
      "Material UI",
      "GCP",
    ],
    imageUrl: sp,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "GraphQL",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Ant Design",
  "Material UI",
  ".NET Framework",
  "C#",
  "Wordpress",
  "Oxygen",
  "Elementor",
  "Docker",
  "Google Cloud Platform",
  "HTML",
  "CSS",
  "Jira",
  "Git",
  "Figma",
] as const;
