import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Footer from '../components/Footer/Footer'
import AboutMe from '../components/AboutMe/AboutMe';
import { Layout } from '../layout/Layout';
import Head from 'next/head';

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
      <Footer/>
    </Layout>
    </>
  );
};

export default Home;
