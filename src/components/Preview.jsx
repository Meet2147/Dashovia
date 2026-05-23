import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { extensionProducts } from "../data/products"

export default function Preview() {
  return (
    <section
      id="extensions"
      className="relative overflow-hidden bg-[#f3f6fb] px-4 py-20 text-slate-900 sm:px-6 lg:px-8"
    >

      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[320px] w-[320px] rounded-full bg-sky-300/35 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-orange-200/50 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Extensions across VS Code and Chrome, all listed as real Dashovia products.
        </motion.h2>

        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          This section gathers the editor tools, browser utilities, and workflow
          extensions already built under Dashovia so the site reflects the real
          product surface instead of generic placeholders.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {extensionProducts.map((product, index) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.24), ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-6 text-left shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.accent}`} />
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white">
                  {product.stage}
                </span>
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-slate-500">
                  {product.type}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                {product.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{product.summary}</p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-500">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900/60" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={product.primaryUrl}
                  target={product.primaryUrl.startsWith("http") ? "_blank" : undefined}
                  rel={product.primaryUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {product.primaryLabel}
                  {product.primaryUrl.startsWith("http") ? <ArrowUpRight className="h-4 w-4" /> : null}
                </a>
                <a
                  href={product.secondaryUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
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
