import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe';
import ContactMe from '../components/ContactMe/ContactMe'
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
        <Hero />
      {/* </Section> */}
      <Projects />
      <Technologies />
      <AboutMe />
      <Acomplishments />
      <ContactMe />
    </Layout>
  );
};

export default Home;
