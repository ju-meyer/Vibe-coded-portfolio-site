import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { portfolioData } from './portfolioData'

export default function App() {
  return (
    <div className="app-shell">
      <Hero personal={portfolioData.personal} summary={portfolioData.heroSummary} />
      <main>
        <About aboutText={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Contact email={portfolioData.personal.email} cta={portfolioData.contactCta} />
      </main>
    </div>
  )
}
