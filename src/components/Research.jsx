import { researchProjects } from "../data/researchProjects";

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3h8v6a4 4 0 0 1-8 0V3Z" />
      <path d="M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 2v6m-4 2h8m-6-2h4" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7" />
    </svg>
  );
}

function ProjectMedia({ project }) {
  const { media } = project;
  if (media.src) {
    return media.type === "video" ? (
      <video
        className="research-project-video"
        src={media.src}
        muted
        autoPlay
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={media.alt}
      />
    ) : (
      <img className="research-project-image" src={media.src} alt={media.alt} loading="lazy" />
    );
  }

  return (
    <div className="research-project-cover">
      {project.id === "eliminate-the-virus" ? (
<svg className="research-cover-icon" viewBox="0 0 160 160" aria-hidden="true">
        <g fill="none" stroke="#cd5151" strokeWidth="8" strokeLinecap="round">
          <path d="M80 26v22m0 64v22M26 80h22m64 0h22M42 42l16 16m44 44 16 16M42 118l16-16m44-44 16-16" />
          <circle cx="80" cy="80" r="35" fill="#ed8580" />
        </g>
        <g fill="#b83d46"><circle cx="68" cy="70" r="6" /><circle cx="96" cy="77" r="7" /><circle cx="77" cy="98" r="5" /></g>
      </svg>
) : (
<svg className="research-cover-icon" viewBox="0 0 160 160" aria-hidden="true">
          <rect x="22" y="22" width="50" height="50" rx="8" fill="#92b8d6" />
          <rect x="88" y="22" width="50" height="50" rx="8" fill="#c1d4bc" />
          <rect x="22" y="88" width="50" height="50" rx="8" fill="#c1d4bc" />
          <rect x="88" y="88" width="50" height="50" rx="8" fill="#92b8d6" />
          <path d="M72 47h16M47 72v16m66-16v16m-41 25h16" fill="none" stroke="#507597" strokeWidth="5" />
        </svg>
)}
      <span className="research-cover-label">{project.id === "eliminate-the-virus" ? "Educational FPS Game" : "Research Project"}</span>
      <span className="research-cover-title">{project.title}</span>
    </div>
  );
}

function HighlightedText({ text, phrases = [] }) {
  if (phrases.length === 0) return text;
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp("(" + escaped.join("|") + ")", "g"));
  return parts.map((part, index) =>
    phrases.includes(part) ? <strong key={index}>{part}</strong> : part,
  );
}

export default function Research() {
  const visibleProjects = researchProjects.filter((project) => project.visible);

  return (
    <section className="page-section research-section">
      <header className="research-page-header">
        <span className="page-badge">RESEARCH</span>
        <h1 className="page-heading">Experience</h1>
      </header>
      <div className="research-project-list">
        {visibleProjects.map((project) => {
          const links = project.links.filter((link) => link.href.trim());
          return (
            <article className="research-project" key={project.id} aria-labelledby={project.id + "-title"}>
              <header className="research-project-header">
                <h2 className="research-project-title" id={project.id + "-title"}>{project.title}</h2>
                {project.subtitle && <p className="research-project-subtitle">{project.subtitleItalic ? <em>{project.subtitle}</em> : project.subtitle}</p>}
              </header>
              <div className="research-project-layout">
                <div className="research-project-media"><ProjectMedia project={project} /></div>
                <div className="research-project-details">
                  <div className="research-project-meta">
                    <h3 className="research-project-institution">{project.institution}</h3>
                    <p className="research-project-period">{[project.role, project.period].filter(Boolean).join(" · ")}</p>
                    {project.advisor && <p className="research-project-advisor">Advisor: {project.advisor}</p>}
                  </div>
                  {project.description.map((paragraph, index) => (
                    <p className="research-project-description" key={project.id + "-paragraph-" + index}><HighlightedText text={paragraph} phrases={project.highlights} /></p>
                  ))}
                  {project.contribution && (
                    <p className="research-project-contribution"><strong>{project.contribution}</strong></p>
                  )}
                  {(project.award || links.length > 0) && (
                    <div className="research-project-actions">
                      {project.award && <span className="research-project-award"><TrophyIcon />{project.award}</span>}
                      {links.map((link) => (
                        <a className="research-project-link" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon />{link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="page-bottom-spacer" aria-hidden="true" />
    </section>
  );
}
