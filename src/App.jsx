import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Apps from "./components/Apps"
import Preview from "./components/Preview"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Apps />
        <Preview />
      </main>
      <Contact />
    </div>
  )
}
