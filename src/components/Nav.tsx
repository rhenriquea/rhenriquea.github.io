import { useMemo } from "react";
import { MdSettingsEthernet, MdPowerSettingsNew } from "react-icons/md";
import { navLinks } from "../data/nav";
import { useActiveSection } from "../hooks/useActiveSection";

const Nav: React.FC = () => {
  const sectionIds = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-black/90 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(21,5,41,0.8)]"
    >
      <div className="text-2xl font-black italic nav-logo-text drop-shadow-[0_2px_2px_rgba(255,45,123,0.5)]">
        RHENRIQUEA
      </div>
      <div className="hidden md:flex gap-10 items-center font-['Newsreader'] italic uppercase tracking-wider">
        {navLinks.map((link) => {
          const isActive = `#${activeId}` === link.href;
          return (
            <a
              key={link.href}
              className={
                isActive
                  ? "text-accent-cyan border-b-2 border-accent-cyan pb-1 shadow-[0_5px_15px_rgba(0,240,255,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan transition-all duration-300"
                  : "text-slate-400 font-mono text-xs tracking-normal hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              }
              href={link.href}
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="p-2 text-accent-pink text-2xl">
          <MdSettingsEthernet />
        </span>
        <span className="p-2 text-accent-pink text-2xl">
          <MdPowerSettingsNew />
        </span>
      </div>
      <div
        className="bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent h-[1px] w-full absolute bottom-0"
        aria-hidden="true"
      />
    </nav>
  );
};

export default Nav;
