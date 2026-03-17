export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Java", "Python", "APIs REST", "SQL"],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    skills: ["Docker", "Git", "Cloud Computing (Azure)"],
  },
  {
    id: "security",
    title: "Security",
    skills: ["Cibersegurança", "DevSecOps", "Boas práticas"],
  },
  {
    id: "softskills",
    title: "Soft Skills",
    skills: ["Trabalho em equipe", "Resolução de problemas", "Aprendizado contínuo", "Comunicação"],
  },
];
