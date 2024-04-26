import { motion } from "framer-motion";

import javascript from "../assets/skillIcons/javascript.png";
import reactImage from "../assets/skillIcons/react.png";
import typescript from "../assets/skillIcons/typescript.png";
import figma from "../assets/skillIcons/figma.png";
import tailwind from "../assets/skillIcons/tailwind.png";
import redux from "../assets/skillIcons/redux.png";
import mui from "../assets/skillIcons/mui.png";
import jest from "../assets/skillIcons/jest.png"

import Divider from "./Divider";

const Experience = () => {


  const works = [
    {
      id: 0,
      title: "Front-end Developer",
      company: "Nova Tendência",
      start: "May 2023",
      startYear: "2023",
      endYear: "Present",
      end: "Present",
      stacks: "React, Redux, TypeScript, MUI, Jest"
    },
    {
      id: 1,
      title: "Front-end Developer",
      company: "Softeam",
      start: "September 2021",
      endYear: "2023",
      startYear: "2021",
      end: "May 2023",
      stacks: "React, TypeScript, Tailwind, Figma"
    },
  ];
  const techs = [
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

  return (
    <div
      name="skills&Exp."
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-full "
    >
      <div className="max-w-screen-lg mx-auto  md:pt-4 p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skillset & Experience
          </p>
          <p className="py-8"></p>
        </div>
        <div
          className="flex flex-col lg:flex-row justify-between items-center w-full pt-12 lg:pt-0"
        >

          <motion.div className="mb-20">
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
                      className={`${item.background}} rounded-full ${item.style} bg-slate-900 shadow`}
                    >

                      <motion.img
                        src={item.src}
                        alt={item.title}
                        className={`w-24 p-4   `}
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
                        className=""
                        key={item.id}
                      >
                        <div className=" flex w-full mb-12">

                        <div className="flex flex-col justify-between">

                          <div className="flex justify-end min-w-20">
                            <p className="text-sky-800 font-bold text-xl font-mono">{item.endYear}</p>
                          </div>
                          <div className="flex justify-end min-w-20">
                            <p className="text-sky-800 font-bold text-xl font-mono">{item.startYear}</p>
                          </div>
                        </div>
                          <Divider />
                          <div>
                            <p className="pt-1 text-lg font-semibold">{item.title}</p>
                            <p className=" text-slate-400">{item.company}</p>
                            <br />
                            <p className="font-light"><span className="font-semibold">Techs used: </span>{item.stacks}</p>
                          </div>
                          
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
