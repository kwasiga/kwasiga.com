import { useState } from "react";

export const ExperienceProjects = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id={activeTab}
      style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <button
          onClick={() => setActiveTab("experience")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: activeTab === "experience" ? "inherit" : "rgba(255,255,255,0.4)",
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
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: activeTab === "projects" ? "inherit" : "rgba(255,255,255,0.4)",
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
            <div
              className="exp-card"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                background: "color-mix(in srgb, var(--text) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--text) 12%, transparent)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--text-h)" }}>
                  Persol Systems Limited
                </h3>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", opacity: 0.45, whiteSpace: "nowrap", marginLeft: "1rem" }}>
                  May – Aug 2021
                </span>
              </div>
              <p style={{ fontFamily: "var(--sans)", margin: "0 0 0.75rem", fontSize: "0.85rem", opacity: 0.5, letterSpacing: "0.04em"}}>
                Software Engineer Intern
              </p>
              <ul style={{ fontFamily: "var(--sans)", margin: 0, paddingLeft: "1.2rem", fontSize: "0.95rem", lineHeight: 1.85, opacity: 0.85, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Designed and developed a REST API using C#, .NET, and MySQL to support internal business operations.</li>
                <li>Built and tested API endpoints with Postman, ensuring correctness across various request types and edge cases.</li>
                <li>Collaborated with senior engineers to review architecture decisions and implement best practices for data modeling.</li>
                <li>Wrote SQL queries and managed database schemas to support evolving application requirements.</li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === "projects" && (
          <div key="projects" className="tab-content" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              className="exp-card"
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                background: "color-mix(in srgb, var(--text) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--text) 12%, transparent)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--text-h)" }}>
                  PawPath — AI Dog Walking App
                </h3>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", opacity: 0.45, whiteSpace: "nowrap", marginLeft: "1rem" }}>
                  RamHack '26 · 1st in Track
                </span>
              </div>
              <p style={{ fontFamily: "var(--mono)", margin: "0 0 0.75rem", fontSize: "0.78rem", opacity: 0.5 }}>
                FastAPI · Gemini AI · Google Maps API · Supabase
              </p>
              <ul style={{ fontFamily: "var(--sans)", margin: 0, paddingLeft: "1.2rem", fontSize: "0.95rem", lineHeight: 1.85, opacity: 0.85, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Built AI-powered dog walking app featuring embedded Google Maps with live GPS tracking, walk history logging, and breed-specific exercise recommendations across 200+ breeds.</li>
                <li>Engineered FastAPI backend with 8+ RESTful endpoints integrating Gemini AI for photo-based breed identification, Google Maps Platform (Routes, Places, Weather) for route generation, and real-time air quality and UV index data to flag health risks.</li>
                <li>Implemented full CRUD functionality with Supabase for dog profile and walk history management, processing 5+ environmental factors (temperature, humidity, AQI, UV index, wind) to generate safety scores.</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <p style={{ fontFamily: "var(--mono)", margin: 0, fontSize: "0.78rem", opacity: 0.5 }}>
                  Python · React · SQL
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a
                    href="https://github.com/Kwasiga06/pawpath"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", opacity: 0.55, textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://devpost.com/software/pawpath?ref_content=my-projects-tab&ref_feature=my_projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", opacity: 0.55, textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                  >
                    Devpost ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
