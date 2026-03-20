import { MdOpenInNew } from "react-icons/md";
import { languages, socialLinks } from "../data/footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Footer: React.FC = () => {
  const footerRef = useScrollReveal<HTMLElement>();

  return (
    <footer
      className="bg-surface-container-lowest py-24 border-t border-white/5"
      id="contact"
      ref={footerRef}
    >
      <div className="w-full flex flex-col items-center justify-center gap-10 px-4 text-center">
        <div
          className="text-accent-yellow font-black tracking-[0.4em] text-2xl chrome-text italic"
          aria-hidden="true"
        >
          RAFAEL_ALMEIDA
        </div>
        <h2 className="sr-only">Contact</h2>

        <div className="reveal">
          <a
            href="mailto:rafa.almeida.js@gmail.com"
            className="text-accent-cyan font-mono text-sm hover:text-white transition-colors drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
          >
            rafa.almeida.js@gmail.com
          </a>
          <div className="font-mono text-xs text-on-surface-variant mt-2">
            Sittard, Limburg, NL
          </div>
        </div>

        <div className="flex gap-12 justify-center font-mono text-xs uppercase tracking-[0.2em] reveal">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="text-slate-400 hover:text-accent-cyan hover:tracking-[0.3em] transition-all duration-500 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              href={link.href}
              {...(link.external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${link.label} (opens in new tab)`,
                  }
                : {})}
            >
              <link.icon className="text-sm" />
              {link.label}
              {link.external && (
                <MdOpenInNew
                  className="text-[8px] opacity-60"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </div>

        <div
          className="footer-langs reveal"
          role="list"
          aria-label="Languages spoken"
        >
          {languages.map((lang) => (
            <div key={lang.name} className="lang-badge" role="listitem">
              <span className="lang-flag" aria-hidden="true">
                {lang.flag}
              </span>{" "}
              {lang.name}
            </div>
          ))}
        </div>

        <div
          className="bg-black p-10 border-2 border-accent-pink/20 text-center max-w-md w-full shadow-[0_0_50px_rgba(255,45,123,0.1)] relative overflow-hidden group reveal"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-accent-pink/5 to-transparent" />
          <div className="relative z-10">
            <div className="font-label text-xs text-accent-yellow mb-4 uppercase tracking-[0.3em] font-black">
              Secret Command Required
            </div>
            <div className="font-chrome italic text-white text-xl opacity-80 group-hover:opacity-100 transition-opacity tracking-widest">
              ↑ ↑ ↓ ↓ ← → ← → B A
            </div>
          </div>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.2em] leading-relaxed text-slate-400 max-w-2xl">
          Built with coffee and synthwave
          <br />
          <span className="text-accent-pink font-black mt-4 block">
            REACT_EDITION — POWERED BY VITE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
