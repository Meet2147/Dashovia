import { motion } from "framer-motion"

const contactLinks = [
  {
    label: "Email",
    value: "meetjethwa2147@gmail.com",
    href: "mailto:meetjethwa2147@gmail.com?subject=Dashovia%20Product%20Inquiry",
  },
  {
    label: "GitHub",
    value: "Meet2147",
    href: "https://github.com/Meet2147",
  },
  {
    label: "Focus",
    value: "Deploy, demo, or white-label",
    href: "#apis",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-28 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="neo-raised mx-auto max-w-4xl rounded-[2rem] p-8 text-center sm:p-14"
      >
        <span className="neo-inset inline-block rounded-full px-4 py-2 text-xs font-medium tracking-[0.2em] text-[var(--ink-soft)] uppercase">
          Contact
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          Want one of these products live under its own offer?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
          We can package individual APIs, extension launches, private demos, or
          branded deployments — sell one product, bundle several, or spin up a
          dedicated landing flow.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:meetjethwa2147@gmail.com?subject=Dashovia%20Product%20Inquiry"
            className="neo-accent inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold"
          >
            Email Dashovia
          </a>
          <a
            href="https://github.com/Meet2147/Dashovia.git"
            target="_blank"
            rel="noreferrer"
            className="neo-interactive inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-[var(--ink)]"
          >
            View Repo
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {contactLinks.map((linkItem) => (
            <a
              key={linkItem.label}
              href={linkItem.href}
              target={linkItem.href.startsWith("http") ? "_blank" : undefined}
              rel={linkItem.href.startsWith("http") ? "noreferrer" : undefined}
              className="neo-interactive rounded-2xl px-5 py-6 text-left"
            >
              <p className="text-xs font-medium tracking-[0.16em] text-[var(--ink-faint)] uppercase">
                {linkItem.label}
              </p>
              <p className="mt-2 text-base font-medium text-[var(--ink)]">
                {linkItem.value}
              </p>
            </a>
          ))}
        </div>
      </motion.div>

      <p className="mt-14 text-center text-xs tracking-[0.12em] text-[var(--ink-faint)] uppercase">
        © Dashovia — Product Studio
      </p>
    </section>
  )
}
