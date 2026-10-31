import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Apps", href: "#apps" },
  { label: "Extensions", href: "#extensions" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-line bg-oat/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navItems.slice(0, 2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-sm btn-tomato">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-line md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav aria-label="Main" className="border-t-[1.5px] border-line px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-line/15 py-3 text-lg font-semibold last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export function Wordmark() {
  return (
    <a href="#top" className="flex items-center" aria-label="Dashovia home">
      <img src="/brand/dashovia-lockup.svg" alt="Dashovia" width="150" height="57" className="h-11 w-auto" />
    </a>
  )
}
