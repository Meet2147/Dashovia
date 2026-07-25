import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { apiProducts } from "../data/products"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Explore() {
  return (
    <section id="apis" className="relative px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="APIs"
          title="API products with a route, a use case, and a buyer story."
          body="Each Dashovia API is positioned as a standalone product — a specific market angle, a public route, and a practical entry point for integrations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {apiProducts.map((product) => (
            <motion.article
              key={product.slug}
              variants={cardVariants}
              className="neo-raised flex flex-col rounded-3xl p-7 text-left"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-[var(--ink-soft)] uppercase">
                  <span className="neo-dot h-2 w-2 rounded-full bg-[var(--accent)]" />
                  {product.status}
                </span>
                <span className="text-xs font-medium tracking-[0.12em] text-[var(--ink-faint)] uppercase">
                  {product.platform}
                </span>
              </div>

              <p className="mt-6 text-xs font-medium tracking-[0.14em] text-[var(--ink-faint)] uppercase">
                {product.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--ink)]">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                {product.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-sm text-[var(--ink-soft)]"
                  >
                    <span className="neo-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-faint)]" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-7">
                <a
                  href={product.primaryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-accent inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold"
                >
                  {product.primaryLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={product.secondaryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-interactive inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-[var(--ink)]"
                >
                  {product.secondaryLabel}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl"
    >
      <span className="neo-inset inline-block rounded-full px-4 py-2 text-xs font-medium tracking-[0.2em] text-[var(--ink-soft)] uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
        {body}
      </p>
    </motion.div>
  )
}
