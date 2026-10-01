import { useRef, useState } from "react";

const asset = (name: string) => `/assets/${name}`;

const projects = [
  {
    number: "01",
    year: "2026",
    title: "MEDITERRANEAN MONOLITH",
    subtitle: "ARCHITECTURAL STUDY & VISUAL SYSTEM",
    image: asset("c124a.png"),
  },
  {
    number: "02",
    year: "2026",
    title: "LISBON CATHEDRAL",
    subtitle: "DIGITAL INTERFACE & HISTORIC SPACES",
    image: asset("d3722.png"),
  },
  {
    number: "03",
    year: "2025",
    title: "CELESTIAL DOCKS",
    subtitle: "INDUSTRIAL CANAL HARBOR SYSTEM",
    image: asset("14ff5.png"),
  },
  {
    number: "04",
    year: "2025",
    title: "EDITORIAL PAVILION",
    subtitle: "BRUTALIST FORM & TYPOGRAPHY",
    image: asset("500d6.png"),
  },
  {
    number: "05",
    year: "2024",
    title: "ARCHIVE STUDIES",
    subtitle: "VISUAL RESEARCH & DOCUMENTATION",
    image: asset("8d6a6.png"),
  },
  {
    number: "06",
    year: "2024",
    title: "FIELD NOTES",
    subtitle: "OBJECTS, PLACES & OBSERVATIONS",
    image: asset("f0196.png"),
  },
];

const experience = [
  ["STUDIO MONOLITH", "MAR - 26", "c124a.png"],
  ["ATELIER BRUT", "OCT - 25", "d3722.png"],
  ["HYPERFRAME LABS", "JUN - 24", "14ff5.png"],
  ["CREATIVE ENG. LAB", "JAN - 23", "c2927.png"],
  ["OFFICE OF FORM", "AUG - 22", "8d6a6.png"],
  ["ARCHIVE PROTOCOL", "NOV - 21", "58e16.png"],
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
  const [modalOpen, setModalOpen] = useState(true);
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
            {experience.map(([company, date, image]) => (
              <article className="experience-card" key={company}>
                <div>
                  <img src={asset(image)} alt="" />
                  <span className="shade" />
                  <p>
                    <strong>{company}</strong>
                    <strong>{date}</strong>
                  </p>
                </div>
                <Corners small />
              </article>
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
            <p>Hi, I&apos;m Wan Qing</p>
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
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Portfolio item details">
          <article className="case-modal">
            <header>
              <span><i /> WAN QING // CASE STUDY [02]</span>
              <button onClick={() => setModalOpen(false)}>[CLOSE ✕]</button>
            </header>
            <div className="case-content">
              <div className="case-heading">
                <label>UI/UX SYSTEM // ARCHIVE SPEC</label>
                <h2>PORTFOLIO ITEM 02</h2>
                <p>DIGITAL INTERFACE &amp; HISTORIC CATHEDRAL SPACES</p>
              </div>
              <div className="case-meta">
                <span><label>CLIENT</label>ATELIER WAN QING</span>
                <span><label>YEAR</label>2026</span>
                <span><label>ROLE</label>UI/UX SYSTEM</span>
                <span><label>STATUS</label>INDEXED</span>
              </div>
              <figure>
                <img src={asset("d3722.png")} alt="Lisbon cathedral historic city watercolor" />
                <figcaption>
                  <span>FIG 01. PRIMARY VIEW // HERO ARCHIVE COMPOSITION</span>
                  <span>38.7223° N, 9.1393° W</span>
                </figcaption>
              </figure>
            </div>
            <Corners />
          </article>
        </div>
      )}
    </div>
  );
}
