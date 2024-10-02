import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/SkillsExperience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      {/* <Contact /> */}

      <SocialLinks />
      <ToastContainer />
    </>
  );
}

export default App;
