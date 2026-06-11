import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-56 flex-1 min-h-screen">
        <div className="max-w-3xl mx-auto px-12 py-24">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}
