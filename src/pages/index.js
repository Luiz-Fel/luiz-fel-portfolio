import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe';
import { Layout } from '../layout/Layout';
import Head from 'next/Head';

const Home = () => {
  return (
    <>
    <Head>
      <title>Luiz-Fel | Portfólio</title>
    </Head>
    <Layout>
        <Hero />
      <Projects />
      <Technologies />
      <AboutMe />
      <Acomplishments />
    </Layout>
    </>
  );
};

export default Home;
