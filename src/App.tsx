import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/SkillsExperience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

function App() {
  const refs = {
    homeRef: useRef(),
    aboutRef: useRef(),
    portfolioRef: useRef(),
    skillExperienceRef: useRef(),
    contactRef: useRef()
  };
  return (
    <div>
      <NavBar refs={refs} />
      <Home ref={refs.homeRef} />
      <About ref={refs.aboutRef} />
      <Portfolio ref={refs.portfolioRef} />
      <Experience ref={refs.skillExperienceRef} />
      <Contact ref={refs.contactRef} />
      <SocialLinks />
      <ToastContainer />
    </div>
  );
}

export default App;
