import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import SkillsMarquee from "./components/SkillsMarquee"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <About />
      <SkillsMarquee />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}

