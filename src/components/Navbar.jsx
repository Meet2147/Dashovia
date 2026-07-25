import { useState } from "react"
import { Menu, X } from "lucide-react"
import siteLogo from "../assets/brand/dashovia-logo-final-03.jpg"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "APIs", href: "#apis" },
  { label: "Extensions", href: "#extensions" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* DESKTOP */}
      <nav className="hidden lg:block fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <div className="neo-raised flex items-center gap-10 rounded-full px-8 py-3">
          <div className="flex items-center gap-3">
            <BrandMark />
            <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
              Dashovia
            </span>
          </div>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE */}
      <nav className="lg:hidden fixed top-4 left-4 right-4 z-50">
        <div className="neo-raised flex items-center justify-between rounded-2xl px-5 py-3">
          <div className="flex items-center gap-3">
            <BrandMark />
            <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
              Dashovia
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="neo-interactive flex h-10 w-10 items-center justify-center rounded-xl"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-[var(--ink)]" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--ink)]" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="neo-raised mt-3 rounded-2xl p-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-black/[0.03] hover:text-[var(--ink)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

function NavItem({ label, href }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-[var(--ink-soft)] transition-colors duration-200 hover:text-[var(--accent)]"
    >
      {label}
    </a>
  )
}

function BrandMark() {
  return (
    <div className="neo-raised-sm relative h-9 w-9 overflow-hidden rounded-xl bg-white">
      <img
        src={siteLogo}
        alt="Dashovia logo"
        className="absolute left-1/2 top-1/2 h-[205%] w-[205%] max-w-none -translate-x-1/2 -translate-y-[37%] object-cover"
      />
    </div>
  )
}
