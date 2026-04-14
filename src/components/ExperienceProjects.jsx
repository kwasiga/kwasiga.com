import { useState } from "react";

export const ExperienceProjects = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id={activeTab}
      className="exp-section"
      style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <button
          onClick={() => setActiveTab("experience")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: activeTab === "experience" ? "inherit" : "rgba(255,255,255,0.25)",
            borderBottom: activeTab === "experience" ? "2px solid currentColor" : "2px solid transparent",
            paddingBottom: "0.25rem",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: activeTab === "projects" ? "inherit" : "rgba(255,255,255,0.25)",
            borderBottom: activeTab === "projects" ? "2px solid currentColor" : "2px solid transparent",
            paddingBottom: "0.25rem",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          Projects
        </button>
      </div>

      <div style={{ maxWidth: "960px", width: "100%" }}>
        {activeTab === "experience" && (
          <div key="experience" className="tab-content" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <div className="exp-card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                <h3 style={{ fontFamily: "var(--mono)", fontSize: "0.9rem", fontWeight: 600, margin: 0, color: "var(--text-h)" }}>
                  Persol Systems Limited
                </h3>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", opacity: 0.45, whiteSpace: "nowrap", marginLeft: "1rem" }}>
                  May – Aug 2021
                </span>
              </div>
              <p style={{ fontFamily: "var(--mono)", margin: "0 0 0.75rem", fontSize: "0.75rem", opacity: 0.5, letterSpacing: "0.04em"}}>
                Software Engineer Intern
              </p>
              <p style={{ fontFamily: "var(--mono)", margin: "0 0 0.75rem", fontSize: "0.88rem", lineHeight: 1.9, color: "var(--text-h)" }}>
                Contributed to the development of an enterprise HR and payroll management platform serving 260+ client organizations across West Africa.
              </p>
              <ul style={{ fontFamily: "var(--mono)", margin: 0, paddingLeft: "1.2rem", fontSize: "0.88rem", lineHeight: 1.9, color: "var(--text-h)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Built REST API endpoints for managing employee records, payroll processing, and database interactions.</li>
                <li>Designed and implemented SQL database schemas with indexing, reducing average query response time and improving system performance.</li>
                <li>Added input validation and error handling, decreasing back-end service errors and improving data integrity for payroll operations.</li>
                <li>Collaborated with senior engineers to review architecture decisions and align with best practices for enterprise data modeling.</li>
              </ul>
              <p style={{ fontFamily: "var(--mono)", margin: "0.75rem 0 0", fontSize: "0.7rem", opacity: 0.5 }}>
                .NET · C# · Python · SQL
              </p>
            </div>
          </div>
        )}
        {activeTab === "projects" && (
          <div key="projects" className="tab-content" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div>
              <div className="exp-card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                <h3 style={{ fontFamily: "var(--mono)", fontSize: "0.9rem", fontWeight: 600, margin: 0, color: "var(--text-h)" }}>
                  PawPath — AI Dog Walking App
                </h3>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", opacity: 0.45, whiteSpace: "nowrap", marginLeft: "1rem" }}>
                  RamHack '26 · 1st in Track
                </span>
              </div>
              <p style={{ fontFamily: "var(--mono)", margin: "0 0 0.75rem", fontSize: "0.7rem", opacity: 0.5 }}>
                FastAPI · Gemini AI · Google Maps API · Supabase
              </p>
              <p style={{ fontFamily: "var(--mono)", margin: 0, fontSize: "0.88rem", lineHeight: 1.9, color: "var(--text-h)" }}>
                A dog walking app that generates optimized walking routes and real-time pet care recommendations based on user preferences, local weather, and park conditions.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <p style={{ fontFamily: "var(--mono)", margin: 0, fontSize: "0.7rem", opacity: 0.5 }}>
                  Python · React · SQL
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a
                    href="https://github.com/Kwasiga06/pawpath"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", opacity: 0.55, textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://devpost.com/software/pawpath?ref_content=my-projects-tab&ref_feature=my_projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", opacity: 0.55, textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                  >
                    Devpost ↗
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="exp-card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                <h3 style={{ fontFamily: "var(--mono)", fontSize: "0.9rem", fontWeight: 600, margin: 0, color: "var(--text-h)" }}>
                  Weekli — AI Study Companion
                </h3>
              </div>
              <p style={{ fontFamily: "var(--mono)", margin: "0 0 0.75rem", fontSize: "0.7rem", opacity: 0.5 }}>
                Claude AI · Supabase
              </p>
              <p style={{ fontFamily: "var(--mono)", margin: 0, fontSize: "0.88rem", lineHeight: 1.9, color: "var(--text-h)" }}>
                An AI-powered study companion that generates personalized weekly study plans, practice questions, and learning resources based on user goals and progress.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <p style={{ fontFamily: "var(--mono)", margin: 0, fontSize: "0.7rem", opacity: 0.5 }}>
                  Tailwind CSS · TypeScript · SQL · React
                </p>
                <a
                  href="https://github.com/Kwasiga06/Weekli"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", opacity: 0.55, textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
