export interface Language {
  flag: string;
  name: string;
}

export interface SocialLink {
  icon: string;
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
  { icon: "terminal", label: "GITHUB", href: "https://github.com/rhenriquea", external: true },
  { icon: "data_object", label: "LINKEDIN", href: "https://www.linkedin.com/in/rhenriquea", external: true },
  { icon: "mail", label: "EMAIL", href: "mailto:rafa.almeida.js@gmail.com" },
];
