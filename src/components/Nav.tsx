export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-black/60 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(21,5,41,0.8)]">
      <div className="text-2xl font-black italic bg-gradient-to-b from-white via-slate-400 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(255,45,123,0.5)]">
        PORTFOLIO OS
      </div>
      <div className="hidden md:flex gap-10 items-center font-['Newsreader'] italic uppercase tracking-wider">
        <a className="text-[#00f0ff] border-b-2 border-[#00f0ff] pb-1 shadow-[0_5px_15px_rgba(0,240,255,0.4)]" href="#profile">SYSTEM</a>
        <a className="text-slate-400 font-mono text-xs tracking-tighter hover:text-white transition-colors" href="#mixtape">TERMINAL</a>
        <a className="text-slate-400 font-mono text-xs tracking-tighter hover:text-white transition-colors" href="#arcade">ARCADE</a>
        <a className="text-slate-400 font-mono text-xs tracking-tighter hover:text-white transition-colors" href="#vhs">ARCHIVE</a>
        <a className="text-slate-400 font-mono text-xs tracking-tighter hover:text-white transition-colors" href="#education">CREDITS</a>
        <a className="text-slate-400 font-mono text-xs tracking-tighter hover:text-white transition-colors" href="#contact">COORDINATES</a>
      </div>
      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-[#ff2d7b] hover:brightness-125 transition-all cursor-pointer">settings_ethernet</span>
        <span className="material-symbols-outlined text-[#ff2d7b] hover:brightness-125 transition-all cursor-pointer">power_settings_new</span>
      </div>
      <div className="bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
}
