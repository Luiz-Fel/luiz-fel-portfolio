import { React, Tailwindcss, Sanity, Nextdotjs, Typescript, Stripe, Html5, Css, Javascript, Firebase, Astro as AstroIcon } from 'simple-icons-astro';

import creamIce from "./assets/portfolio/creamIce.png";
import shopnow from "./assets/portfolio/shopnow.png";
import shareNow from "./assets/portfolio/shareNow.png";
import ignews from "./assets/portfolio/ignews.png";
import portfolioImage from "./assets/portfolio/portfolio.png";

import javascript from "./assets/skillIcons/javascript.png";
import reactImage from "./assets/skillIcons/react.png";
import typescript from "./assets/skillIcons/typescript.png";
import figma from "./assets/skillIcons/figma.png";
import tailwind from "./assets/skillIcons/tailwind.png";
import redux from "./assets/skillIcons/redux.png";
import mui from "./assets/skillIcons/mui.png";
import jest from "./assets/skillIcons/jest.png";

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
    description: "Full-stack social media platform for sharing and discovering images with real-time feed, user authentication, and content management powered by Sanity.io",
    demo: "https://sharenow-luiz-fel.netlify.app/login",
    code: "https://github.com/Luiz-Fel/sharenow",
    technologies: [{
      name: "React.js",
      IconComponent: React,
      colorClass: "text-tech-react"
    },
    {
      name: "Tailwind CSS",
      IconComponent: Tailwindcss,
      colorClass: "text-tech-tailwind"
    },
    {      name: "Sanity.io",
      IconComponent: Sanity,
      colorClass: "text-tech-sanity"
    }
  
  ],
  },
  {
    id: 1,
    src: ignews,
    title: "Ignews",
    description:
      "Subscription-based newsletter platform featuring Stripe payment integration, GitHub OAuth authentication, and serverless architecture for React ecosystem content",
    demo: "https://ignews-luiz-fel.vercel.app/",
    code: "https://github.com/Luiz-Fel/ignews",
    technologies: [{
      name: "Next.js",
      IconComponent: Nextdotjs,
      colorClass: "text-tech-nextjs"
   },
    {
      name: "Typescript",
      IconComponent: Typescript,
      colorClass: "text-tech-typescript"
    },
    {
      name: "Stripe",
      IconComponent: Stripe,
      colorClass: "text-tech-stripe"
    }],
  },
  {
    id: 2,
    src: creamIce,
    title: "Cream Ice",
    description:
      "Fully responsive website for an ice cream parlor built with vanilla JavaScript, featuring interactive UI elements and mobile-first design approach",
    demo: "https://luiz-fel.github.io/CreamIce/",
    code: "https://github.com/Luiz-Fel/CreamIce",
    technologies: [{
      name: "HTML5",
      IconComponent: Html5,
      colorClass: "text-tech-html5"
    },
    {
      name: "CSS3",
      IconComponent: Css,
      colorClass: "text-tech-css3"
    },
    {
      name: "JavaScript",
      IconComponent: Javascript,
      colorClass: "text-tech-javascript"
    }
  ]
  },
  {
    id: 3,
    src: shopnow,
    title: "ShopNow",
    description: "An e-commerce website front page.",
    demo: null,
    code: "https://github.com/Luiz-Fel/Shopnow",
    technologies: [{
      name: "React.js",
      IconComponent: React,
      colorClass: "text-tech-react"
    },
    {
      name: "Next.js",
      IconComponent: Nextdotjs,
      colorClass: "text-tech-nextjs"
    }],
  },
  {
    id: 4,
    src: portfolioImage, // TODO: Add portfolio screenshot
    title: "Portfolio",
    description: "Performance-focused portfolio built with minimal JavaScript and a minimalist monochromatic design. Leverages Astro's static generation for optimal load times.",
    demo: null, // Add your deployed URL here
    code: "https://github.com/Luiz-Fel/luiz-fel-portfolio",
    technologies: [{
      name: "Astro",
      IconComponent: AstroIcon,
      colorClass: "text-tech-astro"
    },
    {
      name: "TypeScript",
      IconComponent: Typescript,
      colorClass: "text-tech-typescript"
    },
    {
      name: "Tailwind CSS",
      IconComponent: Tailwindcss,
      colorClass: "text-tech-tailwind"
    }],
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
