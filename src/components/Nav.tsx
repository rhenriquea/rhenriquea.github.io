import { navLinks } from "../data/nav";

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-black/60 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(21,5,41,0.8)]">
      <div className="text-2xl font-black italic bg-gradient-to-b from-white via-slate-400 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(255,45,123,0.5)]">
        PORTFOLIO OS
      </div>
      <div className="hidden md:flex gap-10 items-center font-['Newsreader'] italic uppercase tracking-wider">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            className={
              i === 0
                ? "text-accent-cyan border-b-2 border-accent-cyan pb-1 shadow-[0_5px_15px_rgba(0,240,255,0.4)]"
                : "text-slate-400 font-mono text-xs tracking-tighter hover:text-white transition-colors"
            }
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-accent-pink hover:brightness-125 transition-all cursor-pointer">settings_ethernet</span>
        <span className="material-symbols-outlined text-accent-pink hover:brightness-125 transition-all cursor-pointer">power_settings_new</span>
      </div>
      <div className="bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent h-[1px] w-full absolute bottom-0" />
    </nav>
  );
};

export default Nav;
