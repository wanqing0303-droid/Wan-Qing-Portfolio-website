import { useEffect, useRef, useState } from "react";

const asset = (name: string) => `/assets/${name}`;

const preloadedMedia = new Set<string>();
const mediaPreloaders: Array<HTMLImageElement | HTMLVideoElement> = [];

function preloadMedia(source: string) {
  if (preloadedMedia.has(source)) return;

  preloadedMedia.add(source);

  if (source.toLowerCase().endsWith(".mp4")) {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.src = source;
    video.load();
    mediaPreloaders.push(video);
    return;
  }

  const image = new Image();
  image.decoding = "async";
  image.src = source;
  mediaPreloaders.push(image);
}

const projects = [
  {
    number: "01",
    year: "2025",
    title: "SEIJO",
    subtitle: "Entrepreneurship",
    client: "WAN QING STUDIO",
    role: "Creative Director",
    status: "INACTIVE",
    coords: "38.9067° N, 1.4206° E",
    description:
      "Monumental live event stage architecture, generative lighting systems, and dynamic crowd scenography engineered for Ibiza open-air pavilions.",
    image: asset("SEIJO_title.jpg"),
    detailImages: [
      asset("Seijo content 1.jpg"),
      asset("Seijo content 2.jpg"),
      asset("Seijo content 3.jpg"),
    ],
  },
  {
    number: "02",
    year: "2026",
    title: "ION ORCHARD",
    subtitle: "Client Consulting Project",
    client: "ION ORCHARD",
    role: "UX Research / Strategy",
    status: "INDEXED",
    coords: "38.7223° N, 9.1393° W",
    description:
      "",
    image: asset("ION front pic.jpg"),
    detailImages: [
      asset("ION Content 1.webp"),
      asset("ION content 2.webp"),
      asset("ION Content 3.webp"),
      asset("ION content 2 (2).webp"),
    ],
    detailSections: [
      {
        heading: "01 // PROJECT OBJECTIVE",
        caption: "CHOSEN OPPORTUNITY & PROJECT DIRECTION",
        text: "To understand how visitors navigate ION Orchard’s digital and physical touchpoints, identify friction in the existing journey, and develop a clearer experience strategy that supports discovery, engagement, and conversion.",
      },
      {
        heading: "02 // RESEARCH",
        caption: "SAMPLE PRIMARY RESEARCH SLIDE",
        text: "We conducted primary research and competitor analysis to understand user behaviours, identify pain points, and uncover opportunities to improve the ION Orchard website experience.",
      },
      {
        heading: "03 // UI/UX REDESIGN",
        caption: "REDESIGNED HOME PAGE DESIGN",
        text: "Based on our research and competitor analysis, we redesigned the website to strengthen ION Orchard’s brand identity by featuring its iconic architecture on the homepage, while making the experience more relevant, intuitive, and easier to navigate.",
      },
      {
        heading: "04 // RECOMMENDATIONS",
        caption: "CONCISED KEY FINDINGS",
        text: "We translated our research into simple, easy-to-digest findings and developed concrete recommendations, supported by examples, to address the key pain points identified.",
      },
    ],
  },
  {
    number: "03",
    year: "2025",
    title: "CHATERAISE",
    subtitle: "Research & UI/UX Heuristics",
    client: "-",
    role: "Digital product + UX",
    status: "INDEXED",
    coords: "52.3676° N, 4.9041° E",
    description:
      "",
    image: asset("Chateraise front pic.jpg"),
    detailImages: [
      asset("Chateraise content 1.webp"),
      asset("Chateraise content 2.webp"),
      asset("Chateraise content 3.webp"),
      asset("Chateraise content 4.webp"),
      asset("Chateraise content 5.jpg"),
    ],
    detailSections: [
      {
        heading: "01 // PROJECT OBJECTIVE",
        caption: "CHOSEN PAIN POINT",
        text: "To identify pain points in Chateraise’s existing pre-order experience and understand user needs, then develop a more intuitive and seamless digital experience that improves usability and the overall customer journey.",
      },
      {
        heading: "02 // RESEARCH",
        caption: "SECONDARY RESEARCH",
        text: "Conducted competitor analysis to benchmark existing experiences and identify gaps in Chateraise’s digital journey. Compared key features, user flows and usability to uncover opportunities for improvement.",
      },
      {
        heading: "03 // USER JOURNEY",
        caption: "PRIMARY RESEARCH",
        text: "Mapped the end-to-end Chateraise pre-order journey to understand how users interact with the existing experience at each stage. Documented key user actions, touchpoints and friction points to identify pain points and opportunities for improvement.",
      },
      {
        heading: "04 // UI/UX REDESIGN",
        caption: "BEFORE AND AFTER COMPARISONS",
        text: "Targeting on the pain points we have identified, we created a user friendly prototype that is compliance with the heuristic evaluations. We also did usability testing with our interviewees to compare data between the existing and new interface.",
      },
      {
        heading: "05 // BEHIND THE SCENES",
        caption: "FIGMA WORKSPACE",
        text: "A look into our Figma workspace, where we mapped out the user flow, designed the experience, and refined each interaction.",
      },
    ],
  },
  {
    number: "04",
    year: "2026",
    title: "L'OREAL",
    subtitle: "Client Consulting Project",
    client: "L'oreal",
    role: "Consumer Research / Product Development / Testing",
    status: "INDEXED",
    coords: "52.3792° N, 4.8994° E",
    description:
      "Monochrome spatial monograph studying raw concrete brutalism, rectilinear cantilevers, and high-density editorial grid typologies.",
    image: asset("Loreal_front_pic.jpg"),
    detailImages: [
      asset("Loreal content 1.webp"),
      asset("Loreal content 2.webp"),
      asset("Loreal content 3.mp4"),
      asset("Loreal content 4.webp"),
    ],
    detailSections: [
      {
        heading: "01 // PROJECT OBJECTIVE",
        caption: "INTRODUCTION AND CHALLENGE BRIEF",
        text: "We participated in L’Oréal Brandstorm 2026, exploring the future of luxury fragrances and how technology could transform the fragrance discovery experience.",
      },
      {
        heading: "02 // PRIMARY RESEARCH",
        caption: "PRIMARY RESEARCH STATISTICS",
        text: "We translated our research into clear, digestible insights, highlighting key consumer behaviours, preferences, and expectations.",
      },
      {
        heading: "03 // IDEATION",
        caption: "SAMPLE VR CHOICE SELECTION",
        text: "We developed a VR concept that blends technology and beauty, aligning with L’Oréal’s focus on innovation while addressing our research finding that consumers seek products that reflect their identity and fit their personal preferences.",
      },
      {
        heading: "04 // INDIVIDUAL SUBMISSION",
        caption: "ONE-PAGE SUBMISSION TO L’ORÉAL",
        text: "For my individual submission, I identified a pain point faced by travel enthusiasts and explored a solution that could make their travel experience more convenient and seamless.",
      },
    ],
  },
  {
    number: "05",
    year: "2024",
    title: "SONY",
    subtitle: "Research on Consumer Behaviour",
    client: "-",
    role: "Consumer Research",
    status: "INDEXED",
    coords: "19.0760° N, 72.8777° E",
    description:
      "Atmospheric gallery environments, luminous spatial reflections, and tactile packaging hardware prototypes designed for contemporary craft.",
    image: asset("Sony content 1.webp"),
    detailImages: [
      asset("Sony content 1.webp"),
      asset("Sony content 2.webp"),
      asset("Sony content 3.webp"),
    ],
    detailSections: [
      {
        heading: "01 // RESEARCH OBJECTIVE",
        caption: "RESEARCH OBJECTIVE",
        text: "Understanding Sony’s current brand perception, its enduring popularity, and the factors influencing consumer behaviour.",
      },
      {
        heading: "02 // MARKET RESEARCH",
        caption: "MARKET RESEARCH",
        text: "Exploring market trends, consumer behaviours, and competitive dynamics shaping the industry.",
      },
      {
        heading: "03 // SONY'S BRAND POSITIONING",
        caption: "SONY'S BRAND POSITIONING",
        text: "Examining how Sony differentiates itself and how its brand is perceived within the competitive landscape.",
      },
    ],
  },
  {
    number: "06",
    year: "2026",
    title: "ELEVER",
    subtitle: "Badminton Management Platform",
    client: "ELEVER",
    role: "UI/UX Design",
    status: "INDEXED",
    coords: "1.3521° N, 103.8198° E",
    description:
      "A streamlined digital operations platform designed to help Elever manage badminton classes, students, and coaches from one connected admin experience.",
    image: asset("Elever front pic.webp"),
    detailImages: [
      asset("Elever content 1.webp"),
      asset("Elever content 2.webp"),
      asset("Elever content 3.webp"),
    ],
    detailSections: [
      {
        heading: "01 // CLASS SCHEDULING",
        caption: "MONTHLY CLASS MANAGEMENT",
        text: "A centralised class schedule gives administrators a clear monthly overview of badminton sessions, with quick access to list views and class creation tools.",
      },
      {
        heading: "02 // STUDENT MANAGEMENT",
        caption: "STUDENT PROFILES AND GROUPS",
        text: "The student management workspace brings profiles, groups, status controls, wallet information, and attendance history into one searchable and filterable interface.",
      },
      {
        heading: "03 // COACH MANAGEMENT",
        caption: "COACH PROFILES AND AVAILABILITY",
        text: "A dedicated coach directory makes it easier to manage profiles, roles, activity status, and upcoming birthdays while keeping key administrative actions accessible.",
      },
    ],
  },
];

function preloadProject(index: number) {
  const project = projects[index];
  [project.image, ...project.detailImages].forEach(preloadMedia);
}

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
  const detailImages =
    "detailImages" in current
      ? current.detailImages
      : [
          current.image,
          projects[(active + 1) % projects.length].image,
          projects[(active + 2) % projects.length].image,
        ];
  const detailSections =
    "detailSections" in current
      ? current.detailSections
      : detailImages.map((_, index) => ({
          heading: `${String(index + 1).padStart(2, "0")} // CONTENT STUDY`,
          caption: `${current.title} CONTENT STUDY`,
          text:
            index === 0
              ? current.description
              : `Supporting ${current.title} research and design development documenting the project's process, findings, and final experience direction.`,
        }));

  useEffect(() => {
    preloadProject(active);
  }, [active]);

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
            <span /> PORTFOLIO [{projects.length}]
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
              <i /> INDEX / WAN QING&apos;S PROJECT ARCHIVE 2026
            </span>
            <span>SELECTED WORKS &amp; SYSTEMS</span>
            <span>STATUS: AVAILABLE</span>
          </div>

          <h1>
            <i /> WAN QING&apos;S PROJECT ARCHIVE <i />
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
                    onFocus={() => preloadProject(index)}
                    onMouseEnter={() => preloadProject(index)}
                  >
                    <i /> {project.title}
                  </button>
                ))}
              </div>
              <p>NAV: [CLICK]</p>
            </aside>

            <div className="project-reel">
              <button
                className="peek"
                onClick={() => moveProject(-1)}
                onFocus={() =>
                  preloadProject((active + projects.length - 1) % projects.length)
                }
                onMouseEnter={() =>
                  preloadProject((active + projects.length - 1) % projects.length)
                }
              >
                <img
                  src={projects[(active + projects.length - 1) % projects.length].image}
                  alt=""
                  decoding="async"
                />
                <span>▲ {projects[(active + projects.length - 1) % projects.length].number} // PREVIOUS WORK</span>
              </button>
              <button className="featured-project" onClick={() => setModalOpen(true)}>
                <img
                  className={
                    active === 0
                      ? "seijo-slide-image"
                      : active === 2
                        ? "chateraise-slide-image"
                        : active === 3
                          ? "loreal-slide-image"
                          : active === 5
                            ? "elever-slide-image"
                          : ""
                  }
                  src={current.image}
                  alt={current.subtitle}
                  decoding="async"
                />
                <span className="shade" />
                <span className="featured-copy">
                  <strong> {current.title}</strong>
                  <small>{current.subtitle}</small>
                  <b>CLICK TO VIEW ↳</b>
                </span>
                <Corners />
              </button>
              <button
                className="peek"
                onClick={() => moveProject(1)}
                onFocus={() => preloadProject((active + 1) % projects.length)}
                onMouseEnter={() => preloadProject((active + 1) % projects.length)}
              >
                <img
                  src={projects[(active + 1) % projects.length].image}
                  alt=""
                  decoding="async"
                />
                <span>▼ {projects[(active + 1) % projects.length].number} // NEXT WORK</span>
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
                    onFocus={() => preloadProject(index)}
                    onMouseEnter={() => preloadProject(index)}
                  >
                    WORK {project.number} // {project.year}
                  </button>
                ))}
              </div>
              <p>NAV: [CLICK]</p>
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
            PROFESSIONAL EXPERIENCE //
          </SectionTitle>
          <div className="experience-track" ref={experienceRef}>
            {experience.map((item, index) => (
              <button
                className="experience-card"
                key={item.company}
                onClick={() => setSelectedExperience(index)}
              >
                <div>
                  <img src={asset(item.image)} alt="" loading="lazy" decoding="async" />
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
            <img
              src={asset("About_me_picture.png")}
              alt="Wan Qing portrait"
              loading="lazy"
              decoding="async"
            />
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
              <div className="case-notes">
                {detailImages.map((image, index) => {
                  const section = detailSections[index];
                  const isVideo = image.toLowerCase().endsWith(".mp4");
                  return (
                    <div className="additional-study" key={image}>
                      <figure>
                        {isVideo ? (
                          <video
                            src={image}
                            autoPlay
                            muted
                            controls
                            playsInline
                            preload="auto"
                            aria-label={`${current.title} content ${index + 1}`}
                          />
                        ) : (
                          <img
                            className={
                              current.number === "03" && index === 4 ? "chateraise-figure-five" : ""
                            }
                            src={image}
                            alt={`${current.title} content ${index + 1}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        )}
                        <figcaption>
                          <span>
                            FIG {String(index + 1).padStart(2, "0")}.{" "}
                            {section?.caption ?? `${current.title} CONTENT STUDY`}
                          </span>
                          <span>
                            {index === 0
                              ? current.coords
                              : `ARCHIVE // ${current.number}-${String(index + 1).padStart(2, "0")}`}
                          </span>
                        </figcaption>
                      </figure>
                      <section>
                        <h3>
                          {section?.heading ??
                            `${String(index + 1).padStart(2, "0")} // CONTENT STUDY`}
                        </h3>
                        <p>{section?.text ?? current.description}</p>
                      </section>
                    </div>
                  );
                })}
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
                  decoding="async"
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
