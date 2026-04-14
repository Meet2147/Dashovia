import { motion } from "framer-motion"
import { useRef } from "react"

const products = [
  { id: 1, name: "Google Translate", desc: "Translate text instantly across languages." },
  { id: 2, name: "Spotify", desc: "Search music, browse playlists and control playback." },
  { id: 3, name: "Arc Browser", desc: "Navigate tabs and spaces effortlessly." },
  { id: 4, name: "TinyPNG", desc: "Compress images directly from your workflow." },
  { id: 5, name: "FocusFlow", desc: "Stay focused and eliminate distractions." },
]

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function Explore() {
  const carouselRef = useRef(null)

  return (
    <section className="relative min-h-screen bg-black py-16 sm:py-20">

      {/* HEADER */}
      <div className="relative z-10 px-6 text-center max-w-6xl mx-auto mb-14 sm:mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            font-medium tracking-tight text-balance
            bg-gradient-to-b from-white to-white/70
            bg-clip-text text-transparent
            leading-[1.15]
            text-[clamp(2.4rem,5vw,4.8rem)]
            sm:text-[clamp(3rem,6vw,5.6rem)]
          "
        >
          There’s an extension for that.
        </motion.h1>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div
        ref={carouselRef}
        className="
          relative
          flex items-center
          overflow-x-hidden
          overflow-y-visible
        "
      >
        <motion.div
          drag="x"
          dragConstraints={carouselRef}
          dragElastic={0.08}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            flex gap-4 sm:gap-6 lg:gap-10
            px-6 sm:px-10 md:px-16 lg:px-28
            pt-10 pb-16
            cursor-grab active:cursor-grabbing
          "
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 60px 120px rgba(0,0,0,0.8)",
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative shrink-0"
            >
              {/* GLOW */}
              <div className="absolute -inset-[4px] rounded-[32px] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-transparent blur-xl opacity-60" />

              {/* CARD */}
              <div
                className="
                  relative z-10
                  w-[240px] h-[420px]
                  sm:w-[280px] sm:h-[480px]
                  md:w-[320px] md:h-[540px]
                  lg:w-[360px] lg:h-[600px]
                  xl:w-[380px] xl:h-[620px]
                  rounded-[30px]
                  bg-gradient-to-br from-white/12 to-white/5
                  backdrop-blur-xl
                  border border-white/10
                  shadow-[0_40px_90px_rgba(0,0,0,0.65)]
                  p-6 sm:p-7 lg:p-8
                  flex flex-col justify-between
                  text-white
                "
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 mb-6" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Productivity</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="text-xs text-white/60">Swipe to explore</span>
          <span className="text-white/60">→</span>
        </div>
      </motion.div>

    </section>
  )
}
