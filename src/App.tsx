import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Tracklist from "./components/Tracklist";
import Skills from "./components/Skills";
import ImpactTape from "./components/ImpactTape";
import Education from "./components/Education";
import Footer from "./components/Footer";
import KonamiOverlay from "./components/KonamiOverlay";
import { useKonamiCode } from "./hooks/useKonamiCode";

const App: React.FC = () => {
  const { isActive, dismiss } = useKonamiCode();

  return (
    <>
      {/* CRT Overlay */}
      <div className="fixed inset-0 z-[100] crt-scanlines opacity-50 pointer-events-none" />

      <Nav />
      <Hero />
      <Profile />
      <Tracklist />
      <Skills />
      <ImpactTape />
      <Education />
      <Footer />
      <KonamiOverlay isActive={isActive} onDismiss={dismiss} />
    </>
  );
};

export default App;
