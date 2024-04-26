import { forwardRef, useRef } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = forwardRef(({}, ref) => {
  return (
    <div
      ref={ref}
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-28 sm:pt-0"
    >
      <div className="max-w-screen-lg mx-auto gap-12 flex flex-col items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi there!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm Luiz, a web developer with a passion for crafting beautiful and functional websites.
            I love staying on top of the latest advancements in the field, 
            and I especially enjoy coming up with new ideas and using my expertise 
            to bring them to life.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto sm:w-full md:w-4/6"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;
