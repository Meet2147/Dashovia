import { motion } from "framer-motion"

export default function SectionHeader({ eyebrow, title, body }) {
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
