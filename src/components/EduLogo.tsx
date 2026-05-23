import type { SVGProps } from "react";
import type { EduLogoId } from "../data/education";

type LogoProps = SVGProps<SVGSVGElement>;

const Illinois: React.FC<LogoProps> = (p) => (
  <svg viewBox="0 0 64 64" {...p}>
    <rect width="64" height="64" rx="12" fill="#13294B" />
    <path d="M0 48 L64 16 L64 64 L0 64 Z" fill="#E84A27" opacity="0.18" />
    <path
      d="M20 16 H44 V22 H36 V42 H44 V48 H20 V42 H28 V22 H20 Z"
      fill="#E84A27"
    />
    <rect
      x="6"
      y="6"
      width="52"
      height="52"
      rx="8"
      fill="none"
      stroke="#E84A27"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
  </svg>
);

const Byu: React.FC<LogoProps> = (p) => (
  <svg viewBox="0 0 64 64" {...p}>
    <rect width="64" height="64" rx="12" fill="#006EB6" />
    <circle cx="32" cy="32" r="22" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.4" />
    <text
      x="32"
      y="30"
      textAnchor="middle"
      fontFamily="Archivo, sans-serif"
      fontWeight="800"
      fontSize="14"
      fill="#fff"
      letterSpacing="0.5"
    >
      BYU
    </text>
    <line x1="18" y1="36" x2="46" y2="36" stroke="#fff" strokeWidth="1" opacity=".5" />
    <text
      x="32"
      y="48"
      textAnchor="middle"
      fontFamily="Archivo, sans-serif"
      fontWeight="700"
      fontSize="9"
      fill="#fff"
      letterSpacing="2"
    >
      IDAHO
    </text>
  </svg>
);

export const EDU_LOGOS: Record<EduLogoId, React.FC<LogoProps>> = {
  illinois: Illinois,
  byu: Byu,
};
