import creamIce from "./assets/portfolio/creamIce.png";
import shopnow from "./assets/portfolio/shopnow.png";
import shareNow from "./assets/portfolio/shareNow.png";
import ignews from "./assets/portfolio/ignews.png";

import javascript from "./assets/skillIcons/javascript.png";
import reactImage from "./assets/skillIcons/react.png";
import typescript from "./assets/skillIcons/typescript.png";
import figma from "./assets/skillIcons/figma.png";
import tailwind from "./assets/skillIcons/tailwind.png";
import redux from "./assets/skillIcons/redux.png";
import mui from "./assets/skillIcons/mui.png";
import jest from "./assets/skillIcons/jest.png"

export const links = [
  {
    id: 1,
    link: "home",
    linkName: "home",
  },
  {
    id: 2,
    link: "about",
    linkName: "about",
  },
  {
    id: 3,
    link: "portfolio",
    linkName: "portfolio",
  },
  {
    id: 4,
    link: "skillExperience",
    linkName: "skills&Exp.",
  },
  {
    id: 5,
    link: "contact",
    linkName: "contact",
  },
];

export const portfolios = [
  {
    id: 0,
    src: shareNow,
    title: "Sharenow",
    description: "Image-based social media app",
    demo: "https://sharenow-luiz-fel.netlify.app/login",
    code: "https://github.com/Luiz-Fel/sharenow",
    technologies: ["React.js", "Tailwind CSS", "Sanity.io"],
  },
  {
    id: 1,
    src: ignews,
    title: "Ignews",
    description:
      "A newsletter on react-related topics with a subscription method and social media login",
    demo: "https://ignews-luiz-fel.vercel.app/",
    code: "https://github.com/Luiz-Fel/ignews",
    technologies: ["Next.js", "Typescript", "Stripe"],
  },
  {
    id: 2,
    src: creamIce,
    title: "Cream Ice",
    description:
      "A vanilla responsive javascript website for an ice cream parlor",
    demo: "https://luiz-fel.github.io/CreamIce/",
    code: "https://github.com/Luiz-Fel/CreamIce",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    src: shopnow,
    title: "ShopNow",
    description: "An e-commerce website front page.",
    demo: null,
    code: "https://github.com/Luiz-Fel/Shopnow",
    technologies: ["React.js", "Next.js", "Firebase"],
  },
];

export const works = [
  {
    id: 0,
    title: "Front-end Developer",
    company: "Nova Tendência",
    start: "May 2023",
    startYear: "2023",
    endYear: "Present",
    end: "Present",
    stacks: "React, Redux, TypeScript, MUI, Jest",
  },
  {
    id: 1,
    title: "Front-end Developer",
    company: "Softeam",
    start: "September 2021",
    endYear: "2023",
    startYear: "2021",
    end: "May 2023",
    stacks: "React, TypeScript, Tailwind, Figma",
  },
];
export const techs = [
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-400",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind CSS",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: mui,
    title: "Material UI",
    style: "shadow-blue-600",
    background: "",
  },
  {
    id: 9,
    src: figma,
    title: "Figma",
    style: "shadow-orange-500",
    background: "bg-white",
  },

  {
    id: 11,
    src: typescript,
    title: "TypeScript",
    style: "shadow-blue-500",
  },
  {
    id: 1,
    src: redux,
    title: "Redux",
    style: "shadow-purple-500",
  },
  {
    id: 10,
    src: jest,
    title: "Jest",
    style: "shadow-red-500",
  },
];
