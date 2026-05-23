import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconCloud: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 2A3.5 3.5 0 0 0 6.5 19h11z" />
  </svg>
);

export const IconCode: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
    <path d="m14 5-4 14" />
  </svg>
);

export const IconHex: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2 3 7v10l9 5 9-5V7z" />
    <path d="M12 22V12" />
    <path d="m3 7 9 5 9-5" />
  </svg>
);

export const IconActivity: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const IconStar: React.FC<IconProps> = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2 3 7 7 .5-5.5 4.8L18 22l-6-3.8L6 22l1.5-7.7L2 9.5 9 9z" />
  </svg>
);

export const IconUser: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const IconArrow: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMail: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconPhone: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 20 20 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A20 20 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.6 3a2 2 0 0 1-.6 2L7.8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.6l3 .6a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const IconLinkedIn: React.FC<IconProps> = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4 4h4v4H4zm0 6h4v10H4zm7 0h4v2c.7-1.3 2.1-2.3 4-2.3 3 0 5 2 5 5.3V20h-4v-6c0-1.7-.7-2.7-2-2.7s-2 1-2 2.7v6h-4z" />
  </svg>
);

export const IconGitHub: React.FC<IconProps> = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
);

export const IconPdf: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

export const IconClose: React.FC<IconProps> = (p) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const IconChevronLeft: React.FC<IconProps> = (p) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const IconChevronRight: React.FC<IconProps> = (p) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconMenu: React.FC<IconProps> = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const SKILL_ICONS = {
  code: IconCode,
  hex: IconHex,
  cloud: IconCloud,
  activity: IconActivity,
} as const;
