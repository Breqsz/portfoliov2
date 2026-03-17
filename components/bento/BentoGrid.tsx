"use client";

import { motion } from "framer-motion";
import { Box, Server, Shield, Container, Users } from "lucide-react";
import Link from "next/link";
import { BentoTile, SectionHeading, ContentContainer } from "@/components/primitives";
import { skillCategories } from "@/lib/data/skills";

const icons = [Box, Server, Container, Shield, Users];

export function BentoGrid() {
  return (
    <section
      id="expertise"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="expertise-heading"
    >
      <ContentContainer>
        <SectionHeading
          number="02"
          title="Expertise & focus"
          className="mb-12"
          headingId="expertise-heading"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = icons[i];
            return (
            <BentoTile key={category.id} span="default" index={i}>
              <div className="flex h-full flex-col">
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/5 text-neutral-400 transition-colors duration-300 group-hover:bg-blue-500/10 group-hover:text-blue-400/80">
                  {Icon && <Icon className="size-6" aria-hidden />}
                </div>
                <h3 className="mt-4 font-semibold text-white">{category.title}</h3>
                <p className="ds-body-muted mt-2">
                  {category.title === "Frontend" && "React, Next.js, Tailwind, TypeScript. Interfaces performáticas e experiências polidas."}
                  {category.title === "Backend" && "Node.js, Java, Python, APIs REST, SQL. Arquiteturas escaláveis e camadas de dados."}
                  {category.title === "DevOps & Cloud" && "Docker, Git, Azure. Infraestrutura cloud e observabilidade. Disponível para suporte em infraestrutura e atuação como Técnico de TI."}
                  {category.title === "Security" && "Cibersegurança, DevSecOps e boas práticas de segurança em desenvolvimento."}
                  {category.title === "Soft Skills" && "Trabalho em equipe, resolução de problemas, aprendizado contínuo e comunicação."}
                </p>
              </div>
            </BentoTile>
          );
          })}

          <BentoTile span="lg" index={5}>
            <div className="flex h-full flex-col justify-center">
              <p className="max-w-2xl text-lg italic leading-relaxed text-neutral-400">
                &ldquo;Foco em entregar soluções que combinam experiência do desenvolvedor com segurança e escalabilidade. Construir sistemas que crescem e permanecem confiáveis.&rdquo;
              </p>
            </div>
          </BentoTile>

          <BentoTile span="sm" index={6}>
            <Link href="#projects" data-cursor="link" className="flex h-full flex-col justify-between transition-colors duration-300 hover:text-blue-400">
              <p className="text-sm font-medium text-white">Selected work</p>
              <span className="mt-4 inline-flex items-center text-sm text-blue-400">View projects →</span>
            </Link>
          </BentoTile>
        </div>
      </ContentContainer>
    </section>
  );
}
