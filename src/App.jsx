import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Preview from "./components/Preview"
import Apps from "./components/Apps"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--surface)] text-[var(--ink)]">
      <Navbar />
      <Hero />
      <Preview />
      <Apps />
      <Contact />
    </div>
  )
}
