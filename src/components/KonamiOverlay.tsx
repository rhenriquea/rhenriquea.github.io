interface KonamiOverlayProps {
  isActive: boolean;
  onDismiss: () => void;
}

export default function KonamiOverlay({ isActive, onDismiss }: KonamiOverlayProps) {
  return (
    <div className={`konami-overlay${isActive ? " show" : ""}`}>
      <div className="konami-title">YOU WIN!</div>
      <div className="konami-text">
        You found the easter egg!<br />I like the way you think. Let's talk.
      </div>
      <a
        href="mailto:rafa.almeida.js@gmail.com"
        className="bg-[#00f0ff] text-black px-8 py-4 font-label font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,240,255,0.6)] no-underline mt-4"
      >
        Send me an email
      </a>
      <div className="konami-close" onClick={onDismiss}>
        press any key to close
      </div>
    </div>
  );
}
