import { useState } from "react"
import { Menu, X } from "lucide-react"

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
      {/* DESKTOP NAVBAR */}
      <nav className="hidden lg:block fixed top-4 md:top-6 left-1/2 z-50 -translate-x-1/2">
        <div
          className="
            flex items-center gap-6 md:gap-8 lg:gap-12
            px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl
            bg-slate-950/55 backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan-400 via-sky-400 to-orange-300" />
            <div className="text-left">
              <p className="text-sm font-semibold tracking-tight text-white">Dashovia</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-slate-400">
                Product Studio
              </p>
            </div>
          </div>

          {/* NAV ITEMS */}
          <div className="flex gap-6 md:gap-8 lg:gap-12">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="lg:hidden fixed top-4 left-4 right-4 z-50">
        <div
          className="
            flex items-center justify-between
            px-5 py-4 rounded-xl
            bg-slate-950/60 backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-sky-400 to-orange-300" />
            <span className="text-sm font-semibold tracking-tight text-white">Dashovia</span>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white/80" />
            ) : (
              <Menu className="w-6 h-6 text-white/80" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
              mt-2 py-4 rounded-xl
              bg-slate-950/70 backdrop-blur-xl
              border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              animate-in slide-in-from-top-2 duration-300
            "
          >
            <div className="flex flex-col gap-1 px-2">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                />
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
      className="
        relative text-base md:text-lg font-medium text-white/80
        transition-all duration-300
        hover:text-white
        group
      "
    >
      {label}

      {/* underline */}
      <span
        className="
          absolute -bottom-2 left-1/2 h-[2px] w-0
          bg-white rounded-full
          transition-all duration-300
          group-hover:w-full group-hover:left-0
        "
      />
    </a>
  )
}

function MobileNavItem({ label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        px-4 py-3 rounded-lg
        text-base font-medium text-white/80
        transition-all duration-200
        hover:bg-white/5 hover:text-white
        active:bg-white/10
      "
    >
      {label}
    </a>
  )
}
