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
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09111a] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,196,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,169,112,0.16),transparent_24%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-left text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Want one of these products live under its own offer?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We can package individual APIs, extension launches, private demos, or
            branded deployments. Reach out if you want to sell one product, bundle
            several together, or spin up a dedicated landing flow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:meetjethwa2147@gmail.com?subject=Dashovia%20Product%20Inquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Email Dashovia
            </a>
            <a
              href="https://github.com/Meet2147/Dashovia.git"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Repo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-[#0f1b29] p-8 text-left text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-orange-300">
            Buyer Paths
          </p>
          <div className="mt-6 space-y-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
