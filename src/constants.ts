import { React, Tailwindcss, Sanity, Nextdotjs, Typescript, Stripe, Html5, Css, Javascript, Firebase, Astro as AstroIcon, Github } from 'simple-icons-astro';
import { Mail } from '@lucide/astro';

import creamIce from "./assets/portfolio/creamIce.png";
import shopnow from "./assets/portfolio/shopnow.png";
import shareNow from "./assets/portfolio/shareNow.png";
import ignews from "./assets/portfolio/ignews.png";
import portfolioImage from "./assets/portfolio/portfolio.png";

import Linkedin from "./assets/linkedin.svg";

export const portfolios = [
  {
    id: 0,
    src: shareNow,
    title: "Sharenow",
    description: "Full-stack social media platform for sharing and discovering images with real-time feed, user authentication, and content management powered by Sanity.io",
    ptBr: {
      title: "Sharenow",
      description: "Plataforma full-stack de mídia social para compartilhamento e descoberta de imagens com feed em tempo real, autenticação de usuário e gerenciamento de conteúdo alimentado por Sanity.io"
    },
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
    ptBr: {
      title: "Ignews",
      description: "Plataforma de newsletter baseada em assinatura com integração de pagamento Stripe, autenticação OAuth do GitHub e arquitetura serverless para conteúdo do ecossistema React"
    },
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
    ptBr: {
      title: "Cream Ice",
      description: "Site totalmente responsivo para uma sorveteria construído com JavaScript puro, apresentando elementos de interface interativos e abordagem de design mobile-first"
    },
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
    description: "E-commerce landing page demo with responsive layout implementation with React and Next.js",
    ptBr: {
      title: "ShopNow",
      description: "Página de demo de comércio eletrônico com layout responsivo implementado com React e Next.js"
    },
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
    ptBr: {
      title: "Portfolio",
      description: "Portfólio focado em desempenho construído com JavaScript mínimo e um design monocromático minimalista. Aproveita a geração estática do Astro para tempos de carregamento ideais."
    },
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

export const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Luiz-Fel",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/Luiz-Fel",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:luizfelipesantospereira01@gmail.com",
      icon: Mail,
    },
  ];