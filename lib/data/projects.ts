/**
 * Project categories for filtering and display.
 */
export const PROJECT_CATEGORIES = [
  "All",
  "Web",
  "Full Stack",
  "Cloud",
  "Security",
  "Experimental",
  "Product",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  /** URL-safe identifier for future detail pages */
  slug: string;
  title: string;
  /** Short one-liner for cards and previews */
  summary: string;
  /** Full description for case-study context */
  description: string;
  /** What problem or opportunity this addresses */
  problem?: string;
  /** How the solution was approached */
  solution?: string;
  /** Technology stack */
  stack: string[];
  /** Key technical or product highlights */
  highlights?: string[];
  /** Primary category for filtering */
  category: Exclude<ProjectCategory, "All">;
  /** Additional categories for filter matching */
  tags: string[];
  /** Featured on homepage */
  featured: boolean;
  /** Flagship: large case-study treatment on /projects */
  flagship: boolean;
  year?: string;
  status: "live" | "prototype" | "archived" | "concept";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  /**
   * When present, the UI can show a LinkedIn-style choice that routes
   * to academic vs personal GitHub repositories.
   */
  linkedinChoice?: {
    academicGithubUrl: string;
    personalGithubUrl: string;
  };
}

/** Helper to derive legacy props for ProjectCard / homepage */
export function toLegacyProject(p: Project) {
  return {
    title: p.title,
    description: p.summary,
    href: p.liveUrl ?? "#",
    githubHref: p.githubUrl,
    linkedinChoice: p.linkedinChoice,
    tags: p.stack,
    image: p.image,
    featured: p.featured,
  };
}

export const projects: Project[] = [
  {
    slug: "todogreen",
    title: "TodoGreen — Portal de Colaboradores & Academy",
    summary:
      "Portal interno para colaboradores e plataforma de academy da TodoGreen, empresa de mobilidade sustentável em São Paulo.",
    description:
      "Desenvolvido para a TodoGreen (empresa de entregas elétricas e mobilidade sustentável), o projeto engloba um portal para colaboradores e uma academy de treinamento. O portal centraliza informações, comunicados e ferramentas operacionais; a academy oferece trilhas de capacitação para a equipe.",
    problem:
      "Empresas em crescimento precisam de um hub digital para engajar colaboradores e padronizar treinamentos. Soluções genéricas não atendem fluxos específicos de operação e onboarding.",
    solution:
      "Desenvolvimento de portal customizado com autenticação, módulo de academy (trilhas, certificados), painel administrativo e integração com ferramentas existentes. Interface responsiva e foco em usabilidade.",
    stack: ["React", "Node.js", "Tailwind", "Gemini AI API", "Auth", "Database", "SQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Portal de colaboradores com autenticação",
      "Academy com trilhas e certificados",
      "Interface responsiva e administrável",
    ],
    category: "Full Stack",
    tags: ["Web", "Product"],
    featured: true,
    flagship: true,
    year: "2024",
    status: "live",
    liveUrl: "https://todoproject.net",
    image: "/images/todo/Captura de tela 2026-02-26 180302.png",
  },
  {
    slug: "fyora",
    title: "Fyora App",
    summary:
      "Aplicativo de apoio contra o vício em apostas, com gamificação, diário de emoções e suporte à recuperação.",
    description:
      "Fyora é um app gratuito criado para apoiar pessoas com uso compulsivo de apostas. Combina tecnologia, gamificação simbólica (mascote Fyora) e suporte psicológico leve para recuperação de autonomia e qualidade de vida.",
    problem:
      "Pessoas com comportamento compulsivo em apostas precisam de ferramentas de autocontrole, registro e apoio emocional acessíveis.",
    solution:
      "App com radar de hábitos, metas de autocontrole, diário de emoções, meditações guiadas, alertas e conteúdo educativo. Projeto acadêmico FIAP em evolução.",
    stack: ["React Native", "TypeScript", "Expo"],
    highlights: [
      "Registro de hábitos e metas de autocontrole",
      "Mascote gamificada (Fyora) como espelho do progresso",
      "Diário de emoções e conteúdo educativo",
    ],
    category: "Product",
    tags: ["Web", "Experimental"],
    featured: true,
    flagship: true,
    year: "2025",
    status: "prototype",
    githubUrl: "https://github.com/tavares-fiap/fyora-app",
    liveUrl: "https://github.com/tavares-fiap/fyora-app",
    image: "/images/fyora/image.png",
  },
  {
    slug: "neurorace",
    title: "NeuroRace",
    summary:
      "Jogo controlado por neurofeedback em tempo real com sensor NeuroSky — onde sua mente é o controle.",
    description:
      "NeuroRace é uma experiência imersiva que lê ondas cerebrais via sensor NeuroSky. Quanto maior a concentração do jogador, melhor o desempenho. Projeto finalista do Future Makers no NEXT FIAP.",
    problem:
      "Demonstrar o potencial do neurofeedback para treino de foco e atenção de forma lúdica.",
    solution:
      "Integração com NeuroSky, visualização em tempo real da concentração e gamificação para engajamento no evento NEXT FIAP.",
    stack: ["JavaScript", "NeuroSky", "Web"],
    highlights: [
      "Neurofeedback em tempo real",
      "Finalista Future Makers — NEXT FIAP",
      "Demonstração no stand NEXT 25",
    ],
    category: "Experimental",
    tags: ["Web", "Product"],
    featured: true,
    flagship: true,
    year: "2025",
    status: "live",
    liveUrl: "https://neurorace-app.web.app/site.html",
    image: "/images/neurorace/Captura de tela 2026-03-17 183155.png",
  },
  {
    slug: "projeto-academico-fiap",
    title: "Projeto Acadêmico — Cloud & Integração",
    summary:
      "Projeto acadêmico FIAP envolvendo cloud computing, automação e integração entre sistemas.",
    description:
      "Projeto de grande porte desenvolvido no contexto acadêmico da FIAP, explorando arquiteturas em cloud, automação de processos e integração entre diferentes sistemas e APIs.",
    problem:
      "Sistemas legados e processos manuais limitam escalabilidade e geram retrabalho. Integrações ad-hoc são frágeis e difíceis de manter.",
    solution:
      "Arquitetura baseada em cloud (Azure), pipelines de automação e APIs REST para integração entre módulos. Uso de boas práticas de desenvolvimento e documentação.",
    stack: ["Python", "Java", "React", "Azure", "Docker", "REST API"],
    highlights: [
      "Arquitetura cloud (Azure)",
      "Automação e pipelines",
      "Integração entre sistemas via APIs",
    ],
    category: "Cloud",
    tags: ["Full Stack", "Web"],
    featured: false,
    flagship: false,
    year: "2024",
    status: "prototype",
  },
  {
    slug: "whatif",
    title: "WhatIF",
    summary:
      "Projeto interativo “E SE...” — narrativa e escolhas com foco em experiência e imersão.",
    description:
      "WhatIF é um projeto interativo com foco em narrativa: cada escolha traz ganhos e custos invisíveis, guiando o usuário em uma experiência imersiva para explorar diferentes caminhos.",
    stack: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Narrativa interativa com escolhas",
      "Interface responsiva",
      "Design de experiência e imersão",
    ],
    category: "Product",
    tags: ["Web", "Product"],
    featured: false,
    flagship: false,
    year: "2025",
    status: "live",
    liveUrl: "https://tourmaline-bombolone-575d2e.netlify.app",
    image: "/images/WhatIF/image.png",
  },
  {
    slug: "synerh",
    title: "Synerh (Mobile 2030+)",
    summary:
      "Aplicativo e dashboard mobile da “Rede Profissional do Futuro” (2030+), com experiência gamificada e recursos de IA.",
    description:
      "Projeto voltado à experiência mobile e a uma jornada interativa dentro da rede profissional do futuro, com gamificação, etapas e recomendações para apoiar a evolução do usuário.",
    stack: ["Mobile", "Dashboard", "IA", "Gamificação"],
    highlights: [
      "Experiência gamificada e evolução por etapas",
      "Painel/dashboards com métricas e progressos",
      "Recomendações e suporte por IA",
    ],
    category: "Product",
    tags: ["Web", "Product"],
    featured: false,
    flagship: false,
    year: "2025",
    status: "live",
    liveUrl: "https://synerh.netlify.app",
    image: "/images/Synerh/image.png",
  },
  {
    slug: "unreal-metaverso",
    title: "Projeto Unreal (Disciplina de Metaverso)",
    summary: "Projeto em Unreal Engine desenvolvido na disciplina de Metaverso (ano passado).",
    description:
      "Projeto em Unreal Engine desenvolvido na disciplina de Metaverso (ano passado). Clique no card para assistir ao vídeo e, pelo botão do LinkedIn, escolha o GitHub acadêmico ou pessoal.",
    stack: ["Unreal Engine", "Metaverso"],
    highlights: ["Unreal Engine", "Experiência em Metaverso"],
    category: "Experimental",
    tags: ["Unreal Engine", "Metaverso"],
    featured: false,
    flagship: false,
    year: "2025",
    status: "live",
    liveUrl: "https://www.youtube.com/watch?v=lj-duEsnKv8",
    image: "/images/metaverso/metaverso.jpeg",
    linkedinChoice: {
      academicGithubUrl: "https://github.com/Breqsz",
      personalGithubUrl: "https://github.com/Breq1337",
    },
  },
];

/** Projects for homepage featured section */
export const featuredProjects = projects.filter((p) => p.featured).map(toLegacyProject);

/** Flagship projects for /projects showcase */
export const flagshipProjects = projects.filter((p) => p.flagship);

/** All projects for archive / filter */
export const allProjects = projects;

/** Projects for /projects/academic (non-featured, academic & personal) */
export const academicProjects = projects.filter((p) => !p.featured);
