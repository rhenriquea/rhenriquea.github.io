import { languages, socialLinks } from "../data/footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Footer: React.FC = () => {
  const footerRef = useScrollReveal<HTMLElement>();

  return (
    <footer className="bg-surface-container-lowest py-24 border-t border-white/5" id="contact" ref={footerRef}>
      <div className="w-full flex flex-col items-center justify-center gap-10 px-4 text-center">
        <div className="text-accent-yellow font-black tracking-[0.4em] text-2xl chrome-text italic">
          RAFAEL_ALMEIDA
        </div>

        <div className="reveal">
          <a
            href="mailto:rafa.almeida.js@gmail.com"
            className="text-accent-cyan font-mono text-sm hover:text-white transition-colors drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            rafa.almeida.js@gmail.com
          </a>
          <div className="font-mono text-xs text-on-surface-variant mt-2">
            +31 610838984 · Sittard, Limburg, NL
          </div>
        </div>

        <div className="flex gap-12 justify-center font-mono text-[10px] uppercase tracking-[0.2em] reveal">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="text-slate-500 hover:text-accent-cyan hover:tracking-[0.3em] transition-all duration-500 flex items-center gap-2"
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="material-symbols-outlined text-sm">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-langs reveal">
          {languages.map((lang) => (
            <div key={lang.name} className="lang-badge">
              <span className="lang-flag">{lang.flag}</span> {lang.name}
            </div>
          ))}
        </div>

        <div className="bg-black p-10 border-2 border-accent-pink/20 text-center max-w-md w-full shadow-[0_0_50px_rgba(255,45,123,0.1)] relative overflow-hidden group reveal">
          <div className="absolute inset-0 bg-gradient-to-t from-accent-pink/5 to-transparent" />
          <div className="relative z-10">
            <div className="font-label text-[10px] text-accent-yellow mb-4 uppercase tracking-[0.3em] font-black">
              Secret Command Required
            </div>
            <div className="font-chrome italic text-white text-xl opacity-80 group-hover:opacity-100 transition-opacity tracking-widest">
              ↑ ↑ ↓ ↓ ← → ← → B A
            </div>
          </div>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed text-slate-500 max-w-2xl">
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
