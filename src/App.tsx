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
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-accent-cyan focus:text-black focus:px-4 focus:py-2 focus:font-label focus:font-bold focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>

      {/* CRT Overlay */}
      <div className="fixed inset-0 z-[100] crt-scanlines opacity-50 pointer-events-none" aria-hidden="true" />

      <Nav />
      <main id="main-content">
        <Hero />
        <Profile />
        <Tracklist />
        <Skills />
        <ImpactTape />
        <Education />
      </main>
      <Footer />
      <KonamiOverlay isActive={isActive} onDismiss={dismiss} />
    </>
  );
};

export default App;
