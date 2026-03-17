import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AboutSection } from "@/components/layout/AboutSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { ExperienceSection } from "@/components/layout/ExperienceSection";
import { CertificatesSection } from "@/components/layout/CertificatesSection";
import { GlowLine } from "@/components/primitives";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <SectionReveal>
        <ProjectsSection />
      </SectionReveal>

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <SectionReveal>
        <BentoGrid />
      </SectionReveal>

      <SkillsSection />

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <SectionReveal>
        <ExperienceSection />
      </SectionReveal>

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <SectionReveal>
        <AboutSection />
      </SectionReveal>

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <SectionReveal>
        <CertificatesSection />
      </SectionReveal>

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <SectionReveal>
        <ContactSection />
      </SectionReveal>
    </>
  );
}
