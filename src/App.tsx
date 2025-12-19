import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import InteractiveBackground from './components/InteractiveBackground'
import './App.css'
import 'lenis/dist/lenis.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    })
    
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="portfolio-app">
      <InteractiveBackground />
      <Hero />
      <Projects />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p>&copy; {new Date().getFullYear()} uhwebm. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
