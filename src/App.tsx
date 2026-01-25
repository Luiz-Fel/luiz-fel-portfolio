// import About from "./components/About";
// import Contact from "./components/Contact/Contact";
// import Experience from "./components/SkillsExperience";
// import Home from "./components/Home";
// import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";
// import SocialLinks from "./components/SocialLinks"
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Portfólio Migrado para Astro</h1>
      <p>
        O setup inicial do Astro foi concluído.
      </p>
      <p>
        <strong>Nota:</strong> Os componentes originais (About, Home, etc.) e bibliotecas (react-toastify) 
        estão comentados no arquivo <code>src/App.tsx</code> pois não foram encontrados no projeto ou no package.json.
      </p>
      <p>
        Você pode começar a recriar seus componentes no diretório <code>src/components</code> (em Astro ou React) e descomentar as linhas conforme necessário.
      </p>
      
      {/* 
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact /> 
      <SocialLinks />
      <ToastContainer />
      */}
    </div>
  );
}

export default App;
