import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Preview from "./components/Preview"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--surface)] text-[var(--ink)]">
      <Navbar />
      <Hero />
      <Explore />
      <Preview />
      <Contact />
    </div>
  )
}
