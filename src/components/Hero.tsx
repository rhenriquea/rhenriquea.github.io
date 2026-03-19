import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const typedText = useTypewriter();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 starfield opacity-40 animate-star-pulse" />
      <div className="absolute inset-0 perspective-grid">
        <div className="grid-lines" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary shadow-[0_0_30px_#00dbe9] z-10" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="chrome-text text-6xl md:text-[10rem] tracking-tighter leading-none mb-4 italic">
          RAFAEL ALMEIDA
        </h1>
        <div className="font-label text-xl md:text-2xl text-primary tracking-[0.5em] uppercase mb-12 flex items-center justify-center gap-4 neon-flicker">
          <span className="text-[#ff2d7b]">[</span>
          <span className="text-white">{typedText}</span>
          <span className="cursor">|</span>
          <span className="text-[#ff2d7b]">]</span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="#mixtape"
            className="bg-[#00f0ff] text-black px-12 py-5 font-label font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95 no-underline text-center"
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            className="border-2 border-[#ff2d7b] text-[#ff2d7b] px-12 py-5 font-label font-bold uppercase tracking-widest hover:bg-[#ff2d7b]/10 transition-all shadow-[0_0_20px_rgba(255,45,123,0.3)] active:scale-95 no-underline text-center"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-[#ff2d7b] text-4xl">expand_more</span>
      </div>
    </section>
  );
}
