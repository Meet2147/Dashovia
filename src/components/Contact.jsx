import { ArrowUpRight } from "lucide-react"
import { Wordmark } from "./Navbar"

const EMAIL = "meetjethwa2147@gmail.com"

export default function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="rounded-[28px] border-[1.5px] border-line bg-tomato p-8 text-cream shadow-[6px_6px_0_var(--color-ink)] sm:p-12 lg:p-16">
          <p className="kicker">03 / Contact</p>
          <h2 className="mt-5 max-w-[14ch] text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
            Want one of these <span className="accent">under your name?</span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-8 text-cream/90">
            Any app or extension here can be packaged on its own, demoed privately or built as a branded version for
            your business. Tell us what you need.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={`mailto:${EMAIL}?subject=Dashovia%20inquiry`} className="btn btn-ink">
              Email Dashovia
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Dashovia%20inquiry`}
              className="font-mono text-sm break-all underline decoration-cream/50 underline-offset-4 hover:decoration-cream"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-[1.5px] border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Wordmark />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
            <a href="#apps" className="hover:text-ink">Apps</a>
            <a href="#extensions" className="hover:text-ink">Extensions</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>
          <p className="kicker text-ink-faint">© 2026 Dashovia Innovations</p>
        </div>
      </footer>
    </>
  )
}
