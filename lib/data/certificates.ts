export interface Certificate {
  name: string;
  year: string;
  issuer: string;
}

export const certificates: Certificate[] = [
  { name: "Gestão de Projetos", year: "2024", issuer: "FIAP" },
  { name: "Gestão de Infraestrutura de TI", year: "2025", issuer: "FIAP" },
  { name: "Fundamentos em React.js", year: "2024", issuer: "FIAP" },
  { name: "Certificação Java SE 7 Programmer I", year: "2024", issuer: "ALURA" },
  { name: "Desenvolvimento em Java", year: "2024", issuer: "ALURA" },
  { name: "Curso Técnico de TI N1", year: "2025", issuer: "—" },
  { name: "ChatBots", year: "2025", issuer: "FIAP" },
  { name: "Desenvolvimento Android", year: "2025", issuer: "FIAP" },
  { name: "Desenvolvimento em Python", year: "2025", issuer: "UDEMY" },
];
