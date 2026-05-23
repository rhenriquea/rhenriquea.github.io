import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">
        Rafael<span className="dot" />
      </a>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <a
          href="assets/Rafael_Almeida_CV.pdf"
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
          style={{ padding: "10px 18px", fontSize: 13 }}
        >
          Résumé
        </a>
        <div className="nav-menu" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="18" height="18">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
