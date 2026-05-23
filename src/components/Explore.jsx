import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { apiProducts } from "../data/products"

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
  return (
    <section
      id="apis"
      className="relative overflow-hidden bg-[#060d15] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            max-w-4xl font-medium tracking-tight text-balance
            bg-gradient-to-b from-white to-white/70
            bg-clip-text text-transparent
            leading-[1.05]
            text-[clamp(2.5rem,5vw,4.9rem)]
          "
        >
          API products that already have a route, a use case, and a buyer story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"
        >
          These are the Dashovia APIs currently positioned as products: each one
          has a specific market angle, public route, and practical entry point for
          integrations or standalone offers.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {apiProducts.map((product) => (
          <motion.article
            key={product.slug}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.accent}`} />
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-emerald-300">
                {product.status}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                {product.platform}
              </span>
            </div>

            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-cyan-300">
              {product.category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {product.name}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-200">{product.summary}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{product.description}</p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={product.primaryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {product.primaryLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={product.secondaryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {product.secondaryLabel}
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
