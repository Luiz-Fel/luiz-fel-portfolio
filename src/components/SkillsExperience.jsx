import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import typescript from "../assets/typescript.png";
import sass from "../assets/sass.png";
import php from "../assets/php.png";
import nodejs from "../assets/nodejs.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwind.png";
import wordpress from "../assets/wordpress.png";

import Divider from "./Divider";

const Experience = () => {
  

  const works = [
    {
      id: 0,
      title: "Front-end Developer",
      company: "Cubos Academy",
      start: "August 2022",
      startYear: "2022",
      end: "Present",
    },
    {
      id: 1,
      title: "Front-end Developer",
      company: "Freelancer",
      start: "October 2021",
      startYear: "2021",
      end: "August 2022",
    }
  ];
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      background: "bg-white",
    },
    {
      id: 7,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-orange-500",
      background: "bg-white",
    },
    {
      id: 10,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
    {
      id: 11,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: php,
      title: "PHP",
      style: "shadow-purple-500",
    },

  ];

  return (
    <div
      name="skills&Exp."
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto pt-96 md:pt-4 p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills & Experience
          </p>
          <p className="py-8"></p>
        </div>
        <div 
          className="flex flex-col lg:flex-row justify-between items-center w-full pt-12 lg:pt-0"
        >

          <motion.div className="">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
              {techs.map((item, key) => {
                return (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-4 relative"
                    key={key}
                    
                  >
                    <motion.div
                      className={``}
                    >

                      <motion.img
                        src={item.src}
                        alt={item.title}
                        className={`w-24 p-4 ${item.background}} rounded-full ${item.style} bg-slate-900 shadow`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </motion.div>
                    <p className="text-center">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>
            </motion.div>
            <motion.div>

            <div className="flex w-full">
              <div>

              {
                works.map((item, key) => {
                  return (
                    <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex  w-full mb-12"
                    key={item.id}
                    >
                      <div>
                        <p className="text-sky-800 font-bold text-xl ">{item.startYear}</p>
                      </div>
                      <Divider />
                      <div>
                        <p className="pt-1 text-lg">{item.title}</p>
                        <p className="text-sm text-slate-400">{item.company}</p>
                      </div>
                    </motion.div>
                  )
                })
              }
              </div>
            </div>
              </motion.div>
              
          
        </div>

      </div>
    </div>
  );
};

export default Experience;
