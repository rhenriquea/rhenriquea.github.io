import { useRef } from "react";
import type { ExperienceEntry } from "../data/experience";
import { IconClose, IconChevronLeft, IconChevronRight } from "./Icon";

interface RoleDialogProps {
  role: ExperienceEntry;
  mono: string;
  Logo?: React.FC<{ width?: number; height?: number }>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const RoleDialog: React.FC<RoleDialogProps> = ({ role, mono, Logo, onClose, onPrev, onNext }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={overlayRef}
      className="rd-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rd-title"
    >
      <button className="rd-nav rd-nav-prev" onClick={onPrev} aria-label="Previous role">
        <IconChevronLeft width="22" height="22" />
      </button>
      <button className="rd-nav rd-nav-next" onClick={onNext} aria-label="Next role">
        <IconChevronRight width="22" height="22" />
      </button>
      <div className="rd-panel">
        <button className="rd-close" onClick={onClose} aria-label="Close">
          <IconClose width="18" height="18" />
        </button>

        <div className="rd-head">
          <div className="rd-mono">{Logo ? <Logo width={64} height={64} /> : mono}</div>
          <div className="rd-head-text">
            <div className="rd-date">
              {role.current && <span className="now">● Now</span>}
              <span>{role.date}</span>
              <span className="rd-dot">·</span>
              <span>{role.location}</span>
            </div>
            <h3 id="rd-title" className="rd-title">
              {role.company}
            </h3>
            <div className="rd-role">{role.role}</div>
          </div>
        </div>

        <div className="rd-body">
          <p className="rd-summary">{role.summary}</p>

          <div className="rd-section-title">What I did</div>
          <ul className="rd-bullets">
            {role.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>

          <div className="rd-section-title">Stack</div>
          <div className="rd-tags">
            {role.stack.map((s) => (
              <span key={s} className="rd-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDialog;
