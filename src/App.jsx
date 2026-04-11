import { GradientBackground } from "./components/GradientBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceProjects } from "./components/ExperienceProjects";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <GradientBackground />
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
