import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
