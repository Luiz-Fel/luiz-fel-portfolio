import React from "react";
import { AiFillEye, AiFillGithub, AiFillEyeInvisible } from "react-icons/ai";

import { portfolios } from "../constants.js"



const Portfolio = () => {
  

  /*const [filter, setFilter] = React.useState("All");

  const handleWorkFilter = (item) => {
    setFilter(item);
  };*/

  const [hoverItem, setHoverItem] = React.useState(null);

  return (
    <div
      name="portfolio"
      className="px-4 bg-gradient-to-b from-black to-gray-800 w-full text-white pb-24 md:pb-44"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/*
        <div className="flex items-center justify-center mb-8">
          {["All", "React.js", "Next.js", "Backend"].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`${
                  filter === item ? "bg-gray-500" : "bg-gray-700"
                } text-white font-bold py-2 px-4 rounded-full m-2 transition-all ease-in-out`}
              >
                {item}
              </button>
            );
          })}
        </div>
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4">
          {portfolios.map((item, key) => {
            return (
              <div
                className="flex flex-col items-center justify-center relative"
                key={key}
                onMouseEnter={() => setHoverItem(key)}
                onMouseLeave={() => setHoverItem(null)}
              >
                <div className="w-full  bg-gray-800 rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="rounded-2xl w-full"
                  />
                </div>

                <div
                  className={`${
                    hoverItem === key ? "opacity-95" : "opacity-0"
                  } flex flex-col item items-center  justify-center absolute w-full h-full t-0 l-0 r-0 b-0 bg-white rounded-2xl transition-all duration-200 ease-in`}
                >
                  <p
                    className={`text-black text-xl font-bold ${
                      item.description.length > 50 ? "mb-4" : "mb-6"
                    }}`}
                  >
                    {item.title}
                  </p>
                  <p className="text-black mb-4 px-2 text-center">
                    {item.description}
                  </p>
                  <div className="max-w-md flex flex-wrap justify-center">
                    {item.technologies.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-black bg-gray-100 rounded-full px-4 py-2 m-2 text-sm"
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  
                    <div className="flex items-center justify-around w-2/4">
                      {item.demo ? (
                        <a href={hoverItem === key ? item.demo : null}>
                          <AiFillEye
                            className="bg-gray-100 rounded-full p-2"
                            size={40}
                            color="#000"
                          />
                        </a>
                      ) : (
                        <AiFillEyeInvisible
                          className="bg-gray-100 rounded-full p-2"
                          size={40}
                          color="#808080"
                        />
                      )}

                      <a href={hoverItem === key ? item.code : null}>
                        <AiFillGithub
                          className="bg-gray-100 rounded-full p-2"
                          size={40}
                          color="#000"
                        />
                      </a>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
