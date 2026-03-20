export interface Language {
  flag: string;
  name: string;
}

import type { IconType } from "react-icons";
import { MdTerminal, MdDataObject, MdMail } from "react-icons/md";

export interface SocialLink {
  icon: IconType;
  label: string;
  href: string;
  external?: boolean;
}

export const languages: Language[] = [
  { flag: "🇧🇷", name: "Portuguese — Native" },
  { flag: "🇬🇧", name: "English — C1" },
  { flag: "🇳🇱", name: "Dutch — B1" },
  { flag: "🇪🇸", name: "Spanish — Basic" },
];

export const socialLinks: SocialLink[] = [
  { icon: MdTerminal, label: "GITHUB", href: "https://github.com/rhenriquea", external: true },
  { icon: MdDataObject, label: "LINKEDIN", href: "https://www.linkedin.com/in/rhenriquea", external: true },
  { icon: MdMail, label: "EMAIL", href: "mailto:rafa.almeida.js@gmail.com" },
];
