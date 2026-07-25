import { motion } from "framer-motion"
import { portfolioStats } from "../data/products"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pb-20 pt-36 sm:px-6 lg:px-8"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto w-full max-w-5xl text-center"
      >
        <motion.span
          variants={item}
          className="neo-inset inline-block rounded-full px-4 py-2 text-xs font-medium tracking-[0.2em] text-[var(--ink-soft)] uppercase"
        >
          Product Studio
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl"
        >
          APIs and extensions, built to be launched and sold.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg"
        >
          A single, honest catalog of the live FastAPI products and editor
          extensions already built across the Dashovia portfolio.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#apis"
            className="neo-accent inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold"
          >
            Explore APIs
          </a>
          <a
            href="#extensions"
            className="neo-interactive inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-[var(--ink)]"
          >
            Browse Extensions
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6"
        >
          <StatCard value={portfolioStats.apiCount} label="Live APIs" />
          <StatCard value={portfolioStats.extensionCount} label="Extensions" />
          <StatCard value={portfolioStats.totalCount} label="Products" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="neo-raised rounded-2xl px-4 py-6">
      <span className="block text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
        {value}
      </span>
      <span className="mt-2 block text-xs font-medium tracking-[0.12em] text-[var(--ink-soft)] uppercase">
        {label}
      </span>
    </div>
  )
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}
