import { GradientBackground } from "./components/GradientBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceProjects } from "./components/ExperienceProjects";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <GradientBackground />
      <nav style={{
        position: "fixed",
        top: "1.25rem",
        right: "1.75rem",
        display: "flex",
        gap: "1.25rem",
        zIndex: 100,
      }}>
        <a
          href="https://github.com/Kwasiga"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.8rem",
            opacity: 0.55,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
        >
          GitHub ↗
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.8rem",
            opacity: 0.55,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
        >
          Resume ↗
        </a>
      </nav>
      <main style={{ position: "relative" }}>
        <Hero />
        <About />
        <ExperienceProjects />
      </main>
      <Analytics />
    </div>
  )
}

export default App
