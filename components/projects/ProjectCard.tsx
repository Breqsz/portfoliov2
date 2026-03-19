"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { Github, ExternalLink, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLocale } from "@/lib/i18n/context";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  githubHref?: string;
  linkedinChoice?: {
    academicGithubUrl: string;
    personalGithubUrl: string;
  };
  tags?: string[];
  image?: string;
  className?: string;
  featured?: boolean;
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function ProjectCard({
  title,
  description,
  href = "#",
  githubHref,
  linkedinChoice,
  tags = [],
  image,
  className,
  featured = false,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const tagLabel = (tag: string) => {
    const key = "projectTags." + tag;
    const translated = t(key);
    return translated !== key ? translated : tag;
  };
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const springConfig = {
    stiffness: 320,
    damping: 28,
  };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const openLinkedinGithubChoiceTab = useCallback(() => {
    if (!linkedinChoice) return;

    const choiceTitle = t("projects.metaverso.githubChoiceTitle");
    const academicLabel = t("projects.metaverso.githubChoiceAcademic");
    const personalLabel = t("projects.metaverso.githubChoicePersonal");
    const htmlLang = locale === "en" ? "en" : "pt-BR";

    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;

    const html = `<!doctype html>
<html lang="${htmlLang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>GitHub</title>
    <style>
      body {
        margin: 0;
        padding: 24px;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
          "Segoe UI Emoji";
        background: #0a0a0a;
        color: #fff;
      }
      h1 { font-size: 20px; line-height: 1.3; margin: 0 0 12px; }
      p { margin: 0 0 18px; color: rgba(255,255,255,0.75); }
      .row { display: flex; gap: 12px; flex-wrap: wrap; }
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        border-radius: 12px;
        text-decoration: none;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.06);
        color: #fff;
        font-weight: 600;
      }
      .btn:hover { border-color: rgba(59,130,246,0.5); background: rgba(59,130,246,0.14); }
    </style>
  </head>
  <body>
    <h1>${escapeHtml(choiceTitle)}</h1>
    <div class="row">
      <a class="btn" href="${linkedinChoice.academicGithubUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(
        academicLabel
      )}</a>
      <a class="btn" href="${linkedinChoice.personalGithubUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(
        personalLabel
      )}</a>
    </div>
  </body>
</html>`;

    w.document.open();
    w.document.write(html);
    w.document.close();
  }, [linkedinChoice, t, locale]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (!reducedMotion) {
        const percentX = (e.clientX - centerX) / (rect.width / 2);
        const percentY = (e.clientY - centerY) / (rect.height / 2);
        setRotateY(percentX * -3);
        setRotateX(percentY * 3);
      }

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y, opacity: 1 });
    },
    [reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  }, []);

  const CardTop = () => (
    <>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          featured
            ? "aspect-[21/9] rounded-t-2xl"
            : "aspect-video rounded-t-xl"
        )}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 transition-opacity duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30"
          aria-hidden
        />
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02]">
            <div className="flex gap-1 opacity-40">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-white/10 px-2 py-1 text-xs text-white"
                >
                  {tagLabel(tag)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={cn("relative", featured ? "p-8" : "p-6")}>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            featured ? "rounded-b-2xl" : "rounded-b-xl"
          )}
          aria-hidden
        />
        <h3 className={cn("font-semibold text-white", featured ? "text-2xl" : "text-lg")}>
          {title}
        </h3>
        <p
          className={cn(
            "ds-body mt-2",
            featured ? "line-clamp-3 text-base" : "line-clamp-2 text-sm"
          )}
        >
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="ds-caption rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/5"
              >
                {tagLabel(tag)}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const CardButtons = () => (
    <div
      className={cn(
        "mt-4 flex gap-3 opacity-0 transition-opacity duration-400 delay-75 group-hover:opacity-100",
        featured ? "px-8 pb-8" : "px-6 pb-6"
      )}
    >
      {githubHref && (
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white ds-body-muted"
        >
          <Github className="size-4" />
          GitHub
        </a>
      )}
      {linkedinChoice && (
        <button
          type="button"
          onClick={openLinkedinGithubChoiceTab}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white ds-body-muted"
        >
          <Linkedin className="size-4" />
          {t("projects.metaverso.ctaLinkedin")}
        </button>
      )}
      {href && href !== "#" && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm text-blue-400 transition-all duration-300 hover:bg-blue-500/20 hover:scale-[1.02] hover:text-blue-300"
        >
          {t("projects.viewProject")}
          <ExternalLink className="size-3" />
        </a>
      )}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      {...(href && href !== "#" ? { "data-cursor": "project" as const } : {})}
      className={cn("group", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: motionConfig.duration.normal,
        ease: motionConfig.easing.soft,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: reducedMotion ? 0 : rotateXSpring,
        rotateY: reducedMotion ? 0 : rotateYSpring,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--ds-surface)]",
          "transition-[border-color,box-shadow] duration-500 ease-out",
          "hover:border-white/[0.1] hover:shadow-glow-card",
          featured ? "rounded-2xl" : "rounded-xl"
        )}
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={motionConfig.easing.springSoft}
      >
        {/* Pointer-follow spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: spotlight.opacity * 0.5,
            background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(59,130,246,0.06), transparent 60%)`,
          }}
          aria-hidden
        />
        {href && href !== "#" ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="block">
            <CardTop />
          </a>
        ) : (
          <CardTop />
        )}
        <CardButtons />
      </motion.div>
    </motion.div>
  );
}
