import { useEffect, useRef } from "react";

interface KonamiOverlayProps {
  isActive: boolean;
  onDismiss: () => void;
}

const KonamiOverlay: React.FC<KonamiOverlayProps> = ({ isActive, onDismiss }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive && closeRef.current) {
      closeRef.current.focus();
    }
  }, [isActive]);

  // Trap focus within the overlay when active
  useEffect(() => {
    if (!isActive) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const overlay = closeRef.current?.closest(".konami-overlay");
        if (!overlay) return;

        const focusable = overlay.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isActive]);

  return (
    <div
      className={`konami-overlay${isActive ? " show" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg: You win!"
    >
      <div className="konami-title">YOU WIN!</div>
      <div className="konami-text">
        You found the easter egg!<br />I like the way you think. Let's talk.
      </div>
      <a
        href="mailto:rafa.almeida.js@gmail.com"
        className="bg-accent-cyan text-black px-8 py-4 font-label font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,240,255,0.6)] no-underline mt-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Send me an email
      </a>
      <button
        ref={closeRef}
        className="konami-close"
        onClick={onDismiss}
        type="button"
      >
        press any key to close
      </button>
    </div>
  );
};

export default KonamiOverlay;
