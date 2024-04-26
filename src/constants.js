import creamIce from "./assets/portfolio/creamIce.png";
import shopnow from "./assets/portfolio/shopnow.png";
import shareNow from "./assets/portfolio/shareNow.png";
import ignews from "./assets/portfolio/ignews.png";

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
      description: "A vanilla responsive javascript website for an ice cream parlor",
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