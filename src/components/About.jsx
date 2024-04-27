import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-3/4 pb-24 md:pb-52 bg-gradient-to-b from-gray-800 to-black text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl ">
          With a strong background in HTML, CSS, JavaScript, TypeScript and React, I am well-equipped to develop 
          websites that are responsive, fast, and accessible. I have experience in creating dynamic 
          user interfaces and have a solid understanding of web accessibility standards. I have also 
          worked with various CSS frameworks such as TailwindCss, Styled Components, and SCSS.  I enjoy collaborating with designers, developers, and project managers to work together and build something stunning.
        </p>

        <br />
        <p className="text-xl">
          Whether I'm working on a new project or brainstorming with my team, I believe that every 
          challenge is an opportunity to create something truly innovative and unique. I bring this 
          spirit of creativity and experimentation to everything I do, and I'm always seeking new and 
          better ways to solve problems and bring amazing ideas to life.
        </p>

        <br />
        <p className="text-xl">
          If you'd like to work together or just chat about development, feel free to reach out! I'm  
          looking forward to connecting with you.
        </p>
      </div>
    </div>
  );
};

export default About;
