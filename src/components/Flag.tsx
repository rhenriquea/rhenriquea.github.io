import type { SVGProps } from "react";
import type { FlagId } from "../data/languages";

type FlagProps = SVGProps<SVGSVGElement>;

const FlagBR: React.FC<FlagProps> = (p) => (
  <svg viewBox="0 0 60 42" {...p}>
    <rect width="60" height="42" fill="#009c3b" />
    <polygon points="30,6 54,21 30,36 6,21" fill="#ffdf00" />
    <circle cx="30" cy="21" r="8.4" fill="#002776" />
    <path d="M21.9 19.2a12 12 0 0 1 16.2 3" stroke="#fff" strokeWidth="1.2" fill="none" />
  </svg>
);

const FlagGB: React.FC<FlagProps> = (p) => (
  <svg viewBox="0 0 60 42" {...p}>
    <rect width="60" height="42" fill="#012169" />
    <path d="M0 0 60 42 M60 0 0 42" stroke="#fff" strokeWidth="7" />
    <path d="M0 0 60 42 M60 0 0 42" stroke="#C8102E" strokeWidth="3.5" />
    <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="10" />
    <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="5.5" />
  </svg>
);

const FlagNL: React.FC<FlagProps> = (p) => (
  <svg viewBox="0 0 60 42" {...p}>
    <rect width="60" height="14" fill="#AE1C28" />
    <rect y="14" width="60" height="14" fill="#fff" />
    <rect y="28" width="60" height="14" fill="#21468B" />
  </svg>
);

const FlagES: React.FC<FlagProps> = (p) => (
  <svg viewBox="0 0 60 42" {...p}>
    <rect width="60" height="10.5" fill="#AA151B" />
    <rect y="10.5" width="60" height="21" fill="#F1BF00" />
    <rect y="31.5" width="60" height="10.5" fill="#AA151B" />
  </svg>
);

export const FLAGS: Record<FlagId, React.FC<FlagProps>> = {
  br: FlagBR,
  gb: FlagGB,
  nl: FlagNL,
  es: FlagES,
};
