export interface NavLink {
  href: string;
  labelKey: string;
}

export const navLinks: NavLink[] = [
  { href: "#home", labelKey: "home" },
  { href: "#projects", labelKey: "projects" },
  { href: "#expertise", labelKey: "expertise" },
  { href: "#skills", labelKey: "skills" },
  { href: "#experience", labelKey: "experience" },
  { href: "#about", labelKey: "about" },
  { href: "#certificates", labelKey: "certificates" },
  { href: "#contact", labelKey: "contact" },
];
