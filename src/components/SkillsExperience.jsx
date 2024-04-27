import { motion } from "framer-motion";
import { works, techs } from "../constants";

import Divider from "./Divider";

const Experience = () => {



  return (
    <div
      name="skills&Exp."
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-full py-24 md:pb-44"
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
