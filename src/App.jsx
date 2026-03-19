import { ThemeProvider, LanguageProvider } from './context'
import { useScrollReveal } from './hooks'
import { Navbar, Footer } from './components/layout'
import { InteractiveBackground } from './components/effects'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import './styles/globals.css'

function AppContent() {
  useScrollReveal()

  return (
    <>
      <InteractiveBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
