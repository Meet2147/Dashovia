import { ArrowUpRight } from "lucide-react"
import { extensionProducts } from "../data/products"
import SectionHeader from "./SectionHeader"

export default function Preview() {
  return (
    <section id="extensions" className="border-b-[1.5px] border-line bg-denim-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          tone="dark"
          number="02"
          eyebrow="Extensions"
          title="Tools for your"
          accent="editor."
          body="VS Code and browser extensions that fix one annoying thing each. The ones on the Marketplace install in a click; ask about the rest."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[22px] border-[1.5px] border-cream/25 bg-cream/25 sm:grid-cols-2 lg:grid-cols-3">
          {extensionProducts.map((product) => {
            const installable = product.primaryUrl.startsWith("http")
            return (
              <article key={product.slug} className="flex flex-col bg-denim-deep p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="kicker text-cream/60">{product.type}</span>
                  {installable ? (
                    <span className="kicker rounded-full bg-tomato px-2.5 py-1 text-[11px] text-cream">Live</span>
                  ) : null}
                </div>

                <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em]">{product.name}</h3>
                <p className="mt-3 text-[15px] leading-6 text-cream/75">{product.summary}</p>

                <ul className="mt-4 space-y-1.5">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5 text-sm text-cream/75">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-tomato-bright" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  {installable ? (
                    <a href={product.primaryUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-tomato">
                      Install
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream underline decoration-tomato decoration-2 underline-offset-[6px]"
                    >
                      {product.primaryLabel}
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
