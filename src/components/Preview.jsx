import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { extensionProducts } from "../data/products"
import { SectionHeader } from "./Explore"

export default function Preview() {
  return (
    <section id="extensions" className="relative px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Extensions"
          title="Editor and browser extensions, listed as real products."
          body="The VS Code and Chrome tools already built under Dashovia — the real product surface, not generic placeholders."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {extensionProducts.map((product) => {
            const primaryExternal = product.primaryUrl.startsWith("http")
            return (
              <motion.article
                key={product.slug}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="neo-raised flex flex-col rounded-3xl p-7 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.14em] text-[var(--ink-soft)] uppercase">
                    {product.stage}
                  </span>
                  <span className="text-xs font-medium tracking-[0.12em] text-[var(--ink-faint)] uppercase">
                    {product.type}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-[var(--ink)]">
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
                    target={primaryExternal ? "_blank" : undefined}
                    rel={primaryExternal ? "noreferrer" : undefined}
                    className="neo-accent inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold"
                  >
                    {product.primaryLabel}
                    {primaryExternal ? <ArrowUpRight className="h-4 w-4" /> : null}
                  </a>
                  <a
                    href={product.secondaryUrl}
                    className="neo-interactive inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-[var(--ink)]"
                  >
                    {product.secondaryLabel}
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
