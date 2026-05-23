import { motion } from "framer-motion"
import { portfolioStats } from "../data/products"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111a] px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >

      {/* ================= MESH GRADIENT BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Animated mesh orb 1 - Top Left */}
        <motion.div
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "15%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(64, 196, 255, 0.34) 0%, rgba(64, 196, 255, 0.16) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Animated mesh orb 2 - Top Right */}
        <motion.div
          animate={{ 
            x: [0, -60, 40, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "20%",
            right: "15%",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, rgba(255, 169, 112, 0.28) 0%, rgba(255, 169, 112, 0.12) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Animated mesh orb 3 - Center */}
        <motion.div
          animate={{ 
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(103, 232, 249, 0.26) 0%, rgba(103, 232, 249, 0.14) 35%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Animated mesh orb 4 - Bottom Left */}
        <motion.div
          animate={{ 
            x: [0, 40, -50, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden sm:block"
          style={{
            bottom: "10%",
            left: "20%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(129, 140, 248, 0.22) 0%, rgba(129, 140, 248, 0.1) 40%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />

        {/* Animated mesh orb 5 - Bottom Right */}
        <motion.div
          animate={{ 
            x: [0, -40, 50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.85, 1]
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden sm:block"
          style={{
            bottom: "15%",
            right: "10%",
            width: "380px",
            height: "380px",
            background: "radial-gradient(circle, rgba(244, 114, 182, 0.18) 0%, rgba(244, 114, 182, 0.08) 40%, transparent 70%)",
            filter: "blur(65px)",
          }}
        />

        {/* Subtle overlay gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(7, 17, 26, 0.26) 100%)",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 px-2 sm:px-4 lg:grid-cols-[1.15fr_0.85fr] lg:px-0"
      >
        <div className="text-left">
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-300"
          >
            Dashovia Product Portfolio
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]"
          >
            APIs and extensions built to be launched, packaged, and sold.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            Dashovia now brings the real catalog onto the site: live FastAPI
            products, VS Code extensions, Chrome tools, and workflow software
            already built across the portfolio.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#apis"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              Explore APIs
            </a>
            <a
              href="#extensions"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Browse Extensions
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <StatCard value={portfolioStats.apiCount} label="Live APIs" />
            <StatCard value={portfolioStats.extensionCount} label="Extensions" />
            <StatCard value={portfolioStats.totalCount} label="Products Listed" />
          </motion.div>
        </div>

        <motion.aside
          variants={item}
          className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-orange-300">
            What’s on this page
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A catalog built for actual buyer conversations.
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              Product cards for the live Dashovia API lineup with working routes.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-300" />
              The full extension portfolio across VS Code and Chrome.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-300" />
              Clear paths for docs, demos, private access, and product inquiries.
            </li>
          </ul>
        </motion.aside>
      </motion.div>

      {/* ================= NOISE ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <span className="block text-3xl font-semibold text-white sm:text-4xl">{value}</span>
      <span className="mt-2 block font-mono text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
        {label}
      </span>
    </div>
  )
}

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}
