import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Preview from "./components/Preview"

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Explore />
      <Preview />
    </div>
  )
}
