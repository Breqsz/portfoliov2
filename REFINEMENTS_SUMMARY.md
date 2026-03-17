# Portfolio Refinements Summary — Recruiter-Facing Bilingual (PT-BR / EN)

## 1. Summary of changes

### Availability / Hero
- **PT:** Availability value set to **"Disponível"** (exact).
- **EN:** Kept **"Open"**.
- Availability label made more premium: status-style treatment with a small glowing green dot and semibold tracking.
- Applied in both desktop and mobile Hero tiles.

### Selected Work section
- **Identity chips:** Added **"FullStack"** next to Web, Cloud, DevSecOps in the hero.
- **Section title:** PT = **"Projetos"**, EN = **"Selected Work"** (via `projects.selectedWork`).
- **Removed** all "View all" and "Mais…" CTAs from this section.
- **Grid:** Secondary projects use a 2-column grid (`sm:grid-cols-2`) so Fyora and NeuroRace sit side by side with equal width and balanced layout.

### TodoGreen project tags / stack
- **Stack** updated to include: **Tailwind**, **Gemini AI API**, **Auth**, **Database** (plus existing React, Node.js, SQL, HTML, CSS, JavaScript).
- **Bilingual tags:** PT shows **"Banco de Dados"** and **"IA Gemini API"**; EN shows **"Database"** and **"Gemini AI API"** via `projectTags` in i18n.
- ProjectCard uses `tagLabel(tag)` so these tags are translated when displayed.

### About section
- **Title:** PT = **"Sobre"**, EN = **"About"** (section and nav).
- **Image:** Placed **directly below** the "About" / "Sobre" title in the left column.
- **No card:** Image sits on section background with no card/border.
- **Premium effect:** Gradient aura (blue/purple), soft blur behind, circular crop, light scale-in animation.

### About copy
- **New recruiter-focused copy** with clear focus on web development and openness to backend/cloud.
- **PT:** *"Atuo com foco em desenvolvimento web, criando interfaces modernas, experiências bem estruturadas e produtos digitais com atenção à performance e usabilidade. Mantenho abertura para backend, cloud e outras tecnologias quando o projeto exige."*
- **EN:** *"I focus on web development: building modern interfaces, well-structured experiences, and digital products with attention to performance and usability. I stay open to backend, cloud, and other technologies when the project demands it."*
- **Emphasis:** Key phrases (e.g. desenvolvimento web, backend, cloud) use gradient accent (blue–purple) via `highlightPhrases()` and `__phrase__` markers in translations.

### Text contrast / readability
- **Body:** `ds-body` from `text-neutral-400` to **`text-neutral-300`**.
- **Muted:** `ds-body-muted` from `text-neutral-500` to **`text-neutral-400`**; `ds-caption` to **`text-neutral-400`**.
- **CSS variables:** `--ds-fg-muted` and `--ds-fg-muted-alt` lightened for better contrast while keeping the dark theme.

### Contact section
- **Message:** PT = *"Respondo rapidamente"*; EN = *"Fast response"* (replacing “24 horas” / “24 hours”).
- **CV downloads:** Two clear CTAs in the contact block:
  - **PT:** "Baixar currículo (PT)" → `/images/curriculo_guilherme_portugues.pdf`
  - **EN:** "Download CV (EN)" → `/images/cv_guilherme_en.pdf`
- **Layout:** CV buttons above the main “Vamos conversar” / “Let’s Connect” CTA; icons set to `size-11`; spacing and hover states adjusted for a more recruiter-oriented look.

### Visual / UI
- Hero location and availability text use slightly brighter neutrals where it helps hierarchy.
- Contact links use `text-neutral-300` and `font-medium` for clearer hierarchy.
- No changes to animation style; readability and contrast improved without altering the premium look.

---

## 2. New copy (PT-BR and EN)

### Hero – Availability
| Context | PT-BR | EN |
|--------|--------|-----|
| Value  | Disponível | Open |

### Projects section title
| Context | PT-BR | EN |
|--------|--------|-----|
| Title  | Projetos | Selected Work |

### About – section title
| Context | PT-BR | EN |
|--------|--------|-----|
| Section + nav | Sobre | About |

### About – main positioning paragraph (paragraphWeb)
- **PT-BR:** *"Atuo com foco em __desenvolvimento web__, criando interfaces modernas, experiências bem estruturadas e produtos digitais com atenção à performance e usabilidade. Mantenho abertura para __backend__, __cloud__ e outras tecnologias quando o projeto exige."*
- **EN:** *"I focus on __web development__: building modern interfaces, well-structured experiences, and digital products with attention to performance and usability. I stay open to __backend__, __cloud__, and other technologies when the project demands it."*  
  (Underscore-marked segments are rendered with gradient emphasis.)

### Contact
| Key | PT-BR | EN |
|-----|--------|-----|
| subhead | … Mande uma mensagem — **respondo rapidamente**. | … Reach out—**fast response**. |
| downloadCVPt | Baixar currículo (PT) | Download CV (PT) |
| downloadCVEn | Download CV (EN) | Download CV (EN) |

### TodoGreen tags (display)
| Key | PT-BR | EN |
|-----|--------|-----|
| Database | Banco de Dados | Database |
| Gemini AI API | IA Gemini API | Gemini AI API |

---

## 3. Suggested optional enhancements

- **Testimonials / quote:** Short recruiter or client quote above or below About to add social proof.
- **“Why work with me” strip:** One line (e.g. fast learner, clean code, communication) as a subtle strip or badges.
- **Project metrics:** Where relevant, add one metric per project (e.g. “X users”, “Y% performance gain”) for impact.
- **Blog or “Notes” link:** Even a single “Thinking” or “Notes” link can signal communication and depth.
- **Accessibility:** Run a full pass with axe or similar; ensure focus order and CV download links are keyboard-friendly and announced by screen readers.
- **SEO:** Ensure meta description and OG tags are bilingual or locale-aware so recruiters see the right language in search/social previews.
