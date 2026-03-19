export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "SYSTEM", href: "#profile" },
  { label: "TERMINAL", href: "#mixtape" },
  { label: "ARCADE", href: "#arcade" },
  { label: "ARCHIVE", href: "#vhs" },
  { label: "CREDITS", href: "#education" },
  { label: "COORDINATES", href: "#contact" },
];
