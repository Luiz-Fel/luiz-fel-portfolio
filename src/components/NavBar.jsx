import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../constants";
import logoWhite from "../assets/logoWhite.svg";

const NavBar = ({ refs }) => {
  const [nav, setNav] = useState(false);


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
      <div>
        <a href="/">
          <img
            src={logoWhite}
            alt="luiz-fel"
            className="mt-2 w-14 md:w-20 sm:p-2 "
          />
        </a>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, linkName }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-gray-200 hover:scale-105 duration-200"
            onClick={() => {
              refs[link + "Ref"].current?.scrollIntoView({
                behavior: "smooth",
              }); 
            }}
          >
            {linkName}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
