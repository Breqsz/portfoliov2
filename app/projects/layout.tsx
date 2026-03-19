import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/config";

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Projetos em destaque: TodoGreen, Fyora e NeuroRace. Desenvolvimento web full-stack, infraestrutura cloud e soluções de segurança.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
