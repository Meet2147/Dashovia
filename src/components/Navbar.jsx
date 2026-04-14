import { useState } from "react"
import { Menu, X } from "lucide-react"

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
            bg-white/70 backdrop-blur-xl
            border border-black/10
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          "
        >
          {/* LOGO */}
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
          </div>

          {/* NAV ITEMS */}
          <div className="flex gap-6 md:gap-8 lg:gap-12">
            <NavItem label="Home" />
            <NavItem label="Products" />
            <NavItem label="About us" />
            <NavItem label="Contact" />
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="lg:hidden fixed top-4 left-4 right-4 z-50">
        <div
          className="
            flex items-center justify-between
            px-5 py-4 rounded-xl
            bg-white/70 backdrop-blur-xl
            border border-black/10
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          "
        >
          {/* LOGO */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black/80" />
            ) : (
              <Menu className="w-6 h-6 text-black/80" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
              mt-2 py-4 rounded-xl
              bg-white/70 backdrop-blur-xl
              border border-black/10
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
              animate-in slide-in-from-top-2 duration-300
            "
          >
            <div className="flex flex-col gap-1 px-2">
              <MobileNavItem label="Home" onClick={() => setIsOpen(false)} />
              <MobileNavItem label="Products" onClick={() => setIsOpen(false)} />
              <MobileNavItem label="About us" onClick={() => setIsOpen(false)} />
              <MobileNavItem label="Contact" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

function NavItem({ label }) {
  return (
    <a
      href="#"
      className="
        relative text-base md:text-lg font-medium text-black/80
        transition-all duration-300
        hover:text-black
        group
      "
    >
      {label}

      {/* underline */}
      <span
        className="
          absolute -bottom-2 left-1/2 h-[2px] w-0
          bg-black rounded-full
          transition-all duration-300
          group-hover:w-full group-hover:left-0
        "
      />
    </a>
  )
}

function MobileNavItem({ label, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="
        px-4 py-3 rounded-lg
        text-base font-medium text-black/80
        transition-all duration-200
        hover:bg-black/5 hover:text-black
        active:bg-black/10
      "
    >
      {label}
    </a>
  )
}