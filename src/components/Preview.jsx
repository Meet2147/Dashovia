import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const apps = [
  {
    id: "dashboard",
    name: "Dashboard",
    color: "from-blue-600 to-cyan-500",
    icon: "📊",
  },
  {
    id: "analytics",
    name: "Analytics",
    color: "from-purple-600 to-pink-500",
    icon: "📈",
  },
  {
    id: "music",
    name: "Music",
    color: "from-green-600 to-emerald-500",
    icon: "🎧",
  },
  {
    id: "productivity",
    name: "Productivity",
    color: "from-orange-500 to-red-500",
    icon: "⚡",
  },
]

export default function Preview() {
  const [activeApp, setActiveApp] = useState(apps[0])

  return (
    <section className="relative min-h-screen bg-[#f6f7f9] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">

      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-blue-400/20 blur-[100px] md:blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-cyan-400/20 blur-[100px] md:blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center w-full">

        {/* SECTION HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 px-4"
        >
          See it in action
        </motion.h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          Switch between apps and preview how everything works together.
        </p>

        {/* LAPTOP MOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex justify-center px-4"
        >
          <div className="relative w-full max-w-[1200px]">

            {/* GLOW */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-transparent blur-2xl md:blur-3xl" />

            {/* LAPTOP BODY */}
            <div className="relative rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] bg-gray-900 p-2 sm:p-3 md:p-4 shadow-[0_20px_80px_rgba(0,0,0,0.3)] md:shadow-[0_40px_140px_rgba(0,0,0,0.4)]">

              {/* SCREEN */}
              <div className="relative w-full aspect-[16/9] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] bg-black overflow-hidden">

                {/* APP PREVIEW */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeApp.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-br ${activeApp.color}`}
                  >
                    <span className="text-center px-4">
                      {activeApp.name} Preview
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* APP ICON BAR */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  {apps.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setActiveApp(app)}
                      className={`
                        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                        rounded-lg sm:rounded-xl 
                        flex items-center justify-center 
                        text-sm sm:text-base md:text-xl
                        transition-all
                        ${
                          activeApp.id === app.id
                            ? "bg-white text-black scale-110 shadow-lg"
                            : "bg-white/20 text-white hover:bg-white/30 active:bg-white/40"
                        }
                      `}
                    >
                      {app.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LAPTOP BASE */}
            <div className="mx-auto mt-1.5 sm:mt-2 md:mt-3 w-[60%] sm:w-[55%] md:w-[50%] h-[12px] sm:h-[14px] md:h-[18px] rounded-b-[12px] sm:rounded-b-[16px] md:rounded-b-[24px] bg-gray-800" />
          </div>
        </motion.div>

        {/* APP SELECTOR (MOBILE ALTERNATIVE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 lg:hidden"
        >
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveApp(app)}
              className={`
                px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
                text-xs sm:text-sm font-medium
                transition-all duration-300
                ${
                  activeApp.id === app.id
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                }
              `}
            >
              <span className="mr-2">{app.icon}</span>
              {app.name}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}