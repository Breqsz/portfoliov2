export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Breq Veículos EIRELI",
    role: "Desenvolvedor Web",
    period: "2020–2023",
    description: "Locadora de Veículos",
    highlights: [
      "Gestão operacional, administrativa e digital de empresa familiar de aluguel de carros.",
      "Criação, assinatura e validação de contratos de locação, garantindo conformidade legal.",
      "Gerenciamento de compra, venda e manutenção da frota, multas e documentação.",
      "Atendimento direto ao cliente, com foco em experiência e fidelização.",
      "Desenvolvimento e manutenção do site institucional e sistema de controle interno.",
      "Implementação de formulários digitais, banco de dados para reservas e automação de tarefas.",
      "Tecnologias: HTML, CSS, JavaScript, Node.js, React, SQL.",
    ],
  },
];
