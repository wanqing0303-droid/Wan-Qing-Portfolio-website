import { useRef, useState } from "react";

const asset = (name: string) => `/assets/${name}`;

const projects = [
  {
    number: "01",
    year: "2025",
    title: "Seijo",
    subtitle: "Product & Branding",
    client: "WAN QING STUDIO",
    role: "CREATIVE DIRECTOR",
    status: "INACTIVE",
    coords: "38.9067° N, 1.4206° E",
    description:
      "Monumental live event stage architecture, generative lighting systems, and dynamic crowd scenography engineered for Ibiza open-air pavilions.",
    image: asset("c124a.png"),
  },
  {
    number: "02",
    year: "2026",
    title: "ION",
    subtitle: "How to improve ION's SEO",
    client: "ION ORCHARD",
    role: "UI/UX DESI",
    status: "INDEXED",
    coords: "38.7223° N, 9.1393° W",
    description:
      "Exploration into functionalist web standard frameworks, architectural Lisbon cathedral drafts, and high-contrast responsive layouts.",
    image: asset("d3722.png"),
  },
  {
    number: "03",
    year: "2025",
    title: "Chateraise",
    subtitle: "Research & UI/UX Heuristics",
    client: "FESTIVAL ARCHIVE",
    role: "SPATIAL BRANDING",
    status: "CATALOGUED",
    coords: "52.3676° N, 4.9041° E",
    description:
      "Atmospheric canal dockscapes and celestial astronomical line work deployed across structural signage and physical urban installations.",
    image: asset("14ff5.png"),
  },
  {
    number: "04",
    year: "2026",
    title: "L'oreal",
    subtitle: "BRUTALIST ARCHITECTURAL PAVILION GEOMETRY",
    client: "CULTURE FOUNDATION",
    role: "EDITORIAL DESIGN",
    status: "PUBLISHED",
    coords: "52.3792° N, 4.8994° E",
    description:
      "Monochrome spatial monograph studying raw concrete brutalism, rectilinear cantilevers, and high-density editorial grid typologies.",
    image: asset("500d6.png"),
  },
  {
    number: "05",
    year: "2024",
    title: "PORTFOLIO ITEM 05",
    subtitle: "MODERN SPATIAL INSTALLATION & GALLERY INTERIOR",
    client: "WAN QING LAB",
    role: "PACKAGING & CMF",
    status: "PROTOTYPED",
    coords: "19.0760° N, 72.8777° E",
    description:
      "Atmospheric gallery environments, luminous spatial reflections, and tactile packaging hardware prototypes designed for contemporary craft.",
    image: asset("8d6a6.png"),
  },
  {
    number: "06",
    year: "2024",
    title: "PORTFOLIO ITEM 06",
    subtitle: "MONOGRAPHIC ARCHIVE & MONOLITHIC TYPOGRAPHY",
    client: "WAN QING PRIVATE COLL.",
    role: "ARCHIVAL DIRECTION",
    status: "ARCHIVED",
    coords: "34.6037° S, 58.3816° W",
    description:
      "High-contrast graphic poster archive, computational typography catalog, and permanent specimen preservation over a multi-year cycle.",
    image: asset("f0196.png"),
  },
];

const experience = [
  {
    company: "STUDIO MONOLITH",
    date: "MAR - 26",
    role: "LEAD ART DIRECTOR & PRINCIPAL DESIGNER",
    period: "2025 – PRESENT",
    location: "SINGAPORE",
    domain: "IDENTITY & SPATIAL",
    status: "ACTIVE ENGAGEMENT",
    image: "c124a.png",
    description:
      "Directing overarching creative strategy and spatial typography for international architecture practices and contemporary galleries across Asia-Pacific.",
    bullets: [
      "Full identity redesign and physical environmental wayfinding systems.",
      "Archival publication series and limited-edition monographs.",
      "Cross-functional system stewardship with engineering teams.",
    ],
  },
  {
    company: "ATELIER BRUT",
    date: "OCT - 25",
    role: "SENIOR SPATIAL & INTERACTION DESIGNER",
    period: "2024 – 2025",
    location: "BERLIN / TOKYO",
    domain: "SPATIAL & INTERACTIVE",
    status: "COMPLETED ARCHIVE",
    image: "d3722.png",
    description:
      "Bridged interactive kinetic interfaces with tangible gallery surfaces. Built bespoke exhibition navigation and interactive kinetic installations.",
    bullets: [
      "Spatial interactive installations with responsive sound-reactive sensors.",
      "Exhibition catalog and visual collateral for 12,000+ visitors.",
      "Digital archive portal engineered for long-term collection preservation.",
    ],
  },
  {
    company: "HYPERFRAME LABS",
    date: "JUN - 24",
    role: "UI/UX SYSTEM ARCHITECT",
    period: "2023 – 2024",
    location: "AMSTERDAM",
    domain: "DIGITAL FRAMEWORKS",
    status: "COMPLETED ARCHIVE",
    image: "14ff5.png",
    description:
      "Researched and constructed scalable design systems, token architectures, and brutalist UI component standards deployed across desktop and mobile.",
    bullets: [
      "Multi-brand token architecture with mathematical spacing systems.",
      "Micro-interaction library with strict performance benchmarks.",
      "Technical documentation for 40+ engineering contributors.",
    ],
  },
  {
    company: "CREATIVE ENG. LAB",
    date: "JAN - 23",
    role: "RESEARCH FELLOW",
    period: "2022 – 2023",
    location: "LONDON",
    domain: "TYPOGRAPHY & CODE",
    status: "FELLOWSHIP RECORD",
    image: "c2927.png",
    description:
      "Interdisciplinary fellowship investigating generative grid systems, early web archival aesthetics, and functionalist editorial structures.",
    bullets: [
      "Published papers on generative layout matrices and variable typography.",
      "Exhibited open-source typographic specimens at London Design Week.",
      "Co-founded the Monospaced Web Standard working initiative.",
    ],
  },
  {
    company: "OFFICE OF FORM",
    date: "AUG - 22",
    role: "COMMUNICATION DESIGNER",
    period: "2021 – 2022",
    location: "SINGAPORE",
    domain: "EDITORIAL & PRINT",
    status: "COMPLETED ARCHIVE",
    image: "8d6a6.png",
    description:
      "Editorial design, custom typography, and physical publication bindings produced for visual arts institutions and independent publishers.",
    bullets: [
      "Designed six hardbound artist monographs and catalog raisonnés.",
      "CMF specification and paper selection with European master printers.",
      "Identity guidelines for contemporary craft and ceramics studios.",
    ],
  },
  {
    company: "ARCHIVE PROTOCOL",
    date: "NOV - 21",
    role: "FOUNDING INITIATOR",
    period: "2020 – 2021",
    location: "REMOTE",
    domain: "ARCHIVAL THEORY",
    status: "PERMANENT ARCHIVE",
    image: "58e16.png",
    description:
      "Self-initiated experimental research repository recording physical ephemera into immutable semantic markdown and monochrome vector schemas.",
    bullets: [
      "Digital preservation of over 300 industrial design artifacts.",
      "Open-source archival metadata framework compliant with ISO standards.",
      "Foundation repository for the current Wan Qing Archive 2026.",
    ],
  },
];

function Corners({ small = false }: { small?: boolean }) {
  return (
    <>
      <i className={`corner tl ${small ? "small" : ""}`} />
      <i className={`corner tr ${small ? "small" : ""}`} />
      <i className={`corner bl ${small ? "small" : ""}`} />
      <i className={`corner br ${small ? "small" : ""}`} />
    </>
  );
}

function SectionTitle({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside: React.ReactNode;
}) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      <div>{aside}</div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const current = projects[active];

  const moveProject = (direction: number) => {
    setActive((value) => (value + direction + projects.length) % projects.length);
  };

  const scrollExperience = (direction: number) => {
    experienceRef.current?.scrollBy({ left: direction * 374, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#portfolio" aria-label="Wan Qing archive home">
          <img src={asset("33c6c.svg")} alt="Wan Qing" />
          <span>// ARCHIVE 2026</span>
        </a>
        <nav aria-label="Primary navigation">
          <a className="active-link" href="#portfolio">
            <span /> PORTFOLIO [6]
          </a>
          <a href="#experience">
            <span /> EXPERIENCE
          </a>
          <a href="#about">
            <span /> ABOUT ME
          </a>
        </nav>
        <div className="header-status">
          <span>[SYSTEM 2026]</span>
          <strong>
            <i /> AVAILABLE
          </strong>
        </div>
      </header>

      <main>
        <section className="portfolio" id="portfolio">
          <div className="index-line">
            <span>
              <i /> INDEX / WAN QING ARCHIVE 2026
            </span>
            <span>SELECTED WORKS &amp; SYSTEMS</span>
            <span>STATUS: AVAILABLE</span>
          </div>

          <h1>
            <i /> WAN QING ARCHIVE <i />
          </h1>

          <div className="project-stage">
            <aside className="project-index">
              <h3>SELECTED WORKS</h3>
              <div>
                {projects.map((project, index) => (
                  <button
                    className={index === active ? "selected" : ""}
                    key={project.number}
                    onClick={() => setActive(index)}
                  >
                    <i /> PORTFOLIO ITEM {project.number}
                  </button>
                ))}
              </div>
              <p>NAV: [CLICK / SCROLL]</p>
            </aside>

            <div className="project-reel">
              <button className="peek" onClick={() => moveProject(-1)}>
                <img src={projects[(active + 5) % 6].image} alt="" />
                <span>▲ PORTFOLIO ITEM {projects[(active + 5) % 6].number} // PREVIOUS WORK</span>
              </button>
              <button className="featured-project" onClick={() => setModalOpen(true)}>
                <img src={current.image} alt={current.subtitle} />
                <span className="shade" />
                <span className="featured-copy">
                  <strong>PORTFOLIO ITEM {current.number}</strong>
                  <small>{current.subtitle}</small>
                  <b>CLICK TO VIEW ↳</b>
                </span>
                <Corners />
              </button>
              <button className="peek" onClick={() => moveProject(1)}>
                <img src={projects[(active + 1) % 6].image} alt="" />
                <span>▼ PORTFOLIO ITEM {projects[(active + 1) % 6].number} // NEXT WORK</span>
              </button>
            </div>

            <aside className="project-years">
              <h3>YEAR // METADATA</h3>
              <div>
                {projects.map((project, index) => (
                  <button
                    className={index === active ? "selected" : ""}
                    key={project.number}
                    onClick={() => setActive(index)}
                  >
                    WORK {project.number} // {project.year}
                  </button>
                ))}
              </div>
              <p>NAV: [CLICK / SCROLL]</p>
            </aside>
          </div>
        </section>

        <section className="experience" id="experience">
          <SectionTitle
            aside={
              <div className="section-controls">
                <span>[SCROLL OR CLICK TO NAVIGATE]</span>
                <button onClick={() => scrollExperience(-1)}>[ ◄ ]</button>
                <button onClick={() => scrollExperience(1)}>[ ► ]</button>
              </div>
            }
          >
            EXPERIENCE //
          </SectionTitle>
          <div className="experience-track" ref={experienceRef}>
            {experience.map((item, index) => (
              <button
                className="experience-card"
                key={item.company}
                onClick={() => setSelectedExperience(index)}
              >
                <div>
                  <img src={asset(item.image)} alt="" />
                  <span className="shade" />
                  <p>
                    <strong>{item.company}</strong>
                    <strong>{item.date}</strong>
                  </p>
                </div>
                <Corners small />
              </button>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <SectionTitle aside="[PROFILE // 01-WQ-2026] SINGAPORE // UTC+8">
            ABOUT ME //
          </SectionTitle>

          <div className="portrait-frame">
            <img src={asset("a29fb.png")} alt="Wan Qing portrait" />
            <span className="shade" />
            <span className="portrait-dot"><i /></span>
            <span className="coordinates">1.3521° N, 103.8198° E</span>
            <svg
              className="portrait-signature"
              viewBox="0 0 500 540"
              role="img"
              aria-label="Hi I'm Wan Qing"
            >
              <defs>
                <path
                  id="signature-curve"
                  d="M 278 370 C 227 293, 270 170, 390 112 C 452 78, 516 108, 558 164"
                />
              </defs>
              <text>
                <textPath href="#signature-curve">Hi I&apos;m Wan Qing</textPath>
              </text>
            </svg>
            <Corners />
          </div>

          <div className="about-grid">
            <article className="bio-card">
              <div>
                <h3>WAN QING IN A NUTSHELL //</h3>
                <p>
                  I’m a curious and entrepreneurial person who loves turning ideas into something real.
                  I’m known for being warm, funny, and always up for trying something new. I enjoy meeting
                  interesting people, exploring new perspectives, and bringing a little creativity into
                  whatever I do.
                </p>
              </div>
              <footer>
                <span>BASE: SINGAPORE [SG]</span>
                <span>COLLABORATIONS: GLOBAL</span>
                <span>INDEX CODE: ISO-2026-WQ</span>
              </footer>
            </article>

            <article className="education-card">
              <div>
                <label>EDUCATION</label>
                <h4>BACHELORS IN BUSINESS</h4>
                <p>
                  <b>RELEVANT MODULES:</b> USER INTERFACE &amp; USER EXPERIENCE, CONSUMER BEHAVIOUR,
                  DESIGN COMMUNICATION &amp; BEHAVIOURAL CHANGE, DIGITAL MARKETING, STRATEGY
                </p>
                <div className="education-meta">
                  <span>
                    <label>LOCATION</label>SINGAPORE [UTC+8]
                  </span>
                  <span>
                    <label>STATUS</label><i /> AVAILABLE
                  </span>
                </div>
                <small>Fresh Graduate from Singapore Management University</small>
              </div>
              <a href="mailto:wanqing0303@gmail.com">GET IN TOUCH <span>↳</span></a>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span>WAN QING B.V. © 2026 ALL RIGHTS RESERVED</span>
          <span>DESIGN EXPERIENCES // CATALOGUE ARCHIVE</span>
        </div>
        <div>
          <a href="mailto:wanqing0303@gmail.com">WANQING0303@GMAIL.COM ↵</a>
          <a href="tel:+6598873940">+65 98873940 ↵</a>
        </div>
      </footer>

      <Corners small />

      {modalOpen && (
        <div
          className="modal-backdrop portfolio-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio item details"
          onClick={() => setModalOpen(false)}
        >
          <article className="case-modal portfolio-modal" onClick={(event) => event.stopPropagation()}>
            <header>
              <span><i /> WAN QING // CASE STUDY [{current.number}]</span>
              <button onClick={() => setModalOpen(false)}>[CLOSE ✕]</button>
            </header>
            <div className="case-content custom-modal-scroll">
              <div className="case-heading">
                <label>{current.role} // ARCHIVE SPEC</label>
                <h2>{current.title}</h2>
                <p>{current.subtitle}</p>
              </div>
              <div className="case-meta">
                <span><label>CLIENT</label>{current.client}</span>
                <span><label>YEAR</label>{current.year}</span>
                <span><label>ROLE</label>{current.role}</span>
                <span><label>STATUS</label>{current.status}</span>
              </div>
              <figure>
                <img src={current.image} alt={current.subtitle} />
                <figcaption>
                  <span>FIG 01. PRIMARY VIEW // HERO ARCHIVE COMPOSITION</span>
                  <span>{current.coords}</span>
                </figcaption>
              </figure>
              <div className="case-notes">
                <section>
                  <h3>01 // CURATORIAL BRIEF &amp; OBJECTIVE</h3>
                  <p>{current.description}</p>
                  <p>
                    The project questions standard web interfaces by deploying rigorous mono-spaced type
                    systems, real-time positional indexing, and continuous reel mechanisms derived from
                    archival systems.
                  </p>
                </section>
                <figure>
                  <img src={projects[(active + 1) % projects.length].image} alt="" />
                  <figcaption>
                    <span>FIG 02. PROCESS &amp; SPATIAL TYPOGRAPHIC STUDY</span>
                    <span>REF_ID // SPEC_2026</span>
                  </figcaption>
                </figure>
                <section>
                  <h3>02 // SYSTEM SPECIFICATIONS &amp; METHODOLOGY</h3>
                  <p>
                    Every layout element exists within a mathematical rhythm defined by calibrated margins
                    and crosshairs. Dynamic states trigger subtle chromatic pulses in high-visibility
                    vermilion against balanced off-white substrates.
                  </p>
                  <h4>SPECIFICATION INDEX:</h4>
                  <ul>
                    <li>TYPOGRAPHY: SPACE MONO REGULAR / BOLD</li>
                    <li>CHROMATIC CODE: CARBON / VERMILION / PLATINUM</li>
                    <li>ARCHIVAL PROTOCOL: ISO-2026 COMPLIANT SYSTEM</li>
                  </ul>
                </section>
                <figure>
                  <img src={projects[(active + 2) % projects.length].image} alt="" />
                  <figcaption>
                    <span>FIG 03. DETAIL EXECUTION &amp; STRUCTURAL DOCUMENTATION</span>
                    <span>ARCHIVE CERTIFIED</span>
                  </figcaption>
                </figure>
                <section>
                  <h3>03 // PRODUCTION REFLECTION</h3>
                  <p>
                    Documented as part of Wan Qing&apos;s ongoing exploration of brutalist design languages,
                    interactive archival structures, and contemporary digital practice.
                  </p>
                </section>
              </div>
            </div>
            <Corners />
          </article>
        </div>
      )}

      {selectedExperience !== null && (
        <div
          className="modal-backdrop portfolio-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Experience record details"
          onClick={() => setSelectedExperience(null)}
        >
          <article className="case-modal experience-modal" onClick={(event) => event.stopPropagation()}>
            <header>
              <span><i /> WAN QING // EXPERIENCE RECORD [{String(selectedExperience + 1).padStart(2, "0")}]</span>
              <button onClick={() => setSelectedExperience(null)}>[CLOSE ✕]</button>
            </header>
            <div className="case-content custom-modal-scroll">
              <div className="case-heading">
                <label>EXPERIENCE ARCHIVE // DOSSIER</label>
                <h2>{experience[selectedExperience].company}</h2>
                <p>{experience[selectedExperience].role}</p>
              </div>
              <div className="case-meta">
                <span><label>TENURE</label>{experience[selectedExperience].period}</span>
                <span><label>LOCATION</label>{experience[selectedExperience].location}</span>
                <span><label>CATEGORY</label>{experience[selectedExperience].domain}</span>
                <span><label>STATUS</label>{experience[selectedExperience].status}</span>
              </div>
              <figure>
                <img
                  src={asset(experience[selectedExperience].image)}
                  alt={`${experience[selectedExperience].company} archive`}
                />
                <figcaption>
                  <span>FIG 01. ARCHIVE ARTIFACT &amp; ENVIRONMENT DOSSIER</span>
                  <span>REF_ID // EXP-2026-{String(selectedExperience + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
              <div className="case-notes">
                <section>
                  <h3>ROLE RESPONSIBILITIES &amp; SCOPE</h3>
                  <p>{experience[selectedExperience].description}</p>
                  <h4>KEY DELIVERABLES:</h4>
                  <ul>
                    {experience[selectedExperience].bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <Corners />
          </article>
        </div>
      )}
    </div>
  );
}
