import type { CompanyId } from "../data/experience";

interface LogoProps {
  width?: number;
  height?: number;
}

interface LogoTileProps extends LogoProps {
  src: string;
  bg: string;
  alt: string;
  pad?: number;
}

const LogoTile: React.FC<LogoTileProps> = ({
  src,
  bg,
  width = 64,
  height = 64,
  alt,
  pad = 8,
}) => (
  <div
    style={{
      width,
      height,
      borderRadius: Math.max(8, Math.round(Math.min(width, height) * 0.18)),
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: `calc(100% - ${pad * 2}px)`,
        height: `calc(100% - ${pad * 2}px)`,
        objectFit: "contain",
        display: "block",
      }}
      draggable={false}
    />
  </div>
);

export const COMPANY_LOGOS: Record<CompanyId, React.FC<LogoProps>> = {
  essent: (p) => <LogoTile {...p} src="assets/logos/essent.png" bg="#ffffff" alt="Essent" pad={10} />,
  webcraft: (p) => <LogoTile {...p} src="assets/logos/webcraft.png" bg="#0b0f1a" alt="WebCraft Innovations" pad={4} />,
  vwpfs: (p) => <LogoTile {...p} src="assets/logos/vwpfs.png" bg="#ffffff" alt="Volkswagen Pon Financial Services" pad={6} />,
  monks: (p) => <LogoTile {...p} src="assets/logos/monks.png" bg="#0a0a0a" alt="Formula.Monks" pad={4} />,
  jumbo: (p) => <LogoTile {...p} src="assets/logos/jumbo.png" bg="#ffffff" alt="Jumbo" pad={6} />,
  klm: (p) => <LogoTile {...p} src="assets/logos/klm.png" bg="#00A1DE" alt="KLM" pad={4} />,
  techifide: (p) => <LogoTile {...p} src="assets/logos/techifide.png" bg="#ffffff" alt="Techifide" pad={8} />,
  gft: (p) => <LogoTile {...p} src="assets/logos/gft.png" bg="#ffffff" alt="GFT Technologies" pad={8} />,
  sascar: (p) => <LogoTile {...p} src="assets/logos/sascar.png" bg="#ffffff" alt="Sascar (Michelin)" pad={6} />,
};
