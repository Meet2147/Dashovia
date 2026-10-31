import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { appFilters, appProducts } from "../data/products"
import SectionHeader from "./SectionHeader"

export default function Apps() {
  const [filterId, setFilterId] = useState("all")
  const filter = appFilters.find((item) => item.id === filterId) ?? appFilters[0]
  const visible = appProducts.filter(filter.test)

  return (
    <section id="apps" className="border-b-[1.5px] border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          number="01"
          eyebrow="Apps"
          title="Things you can"
          accent="use today."
          body="Apps for iPhone, iPad, Mac, Apple Watch and the web. Tap one to see it in action, or jump straight to the store."
        />

        <div className="mt-12 flex flex-wrap gap-2.5" role="group" aria-label="Filter apps">
          {appFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className="chip"
              aria-pressed={item.id === filterId}
              onClick={() => setFilterId(item.id)}
            >
              {item.label}
              <span className="count">{appProducts.filter(item.test).length}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {visible.map((app, index) => (
            <AppCard key={app.slug} app={app} number={appProducts.indexOf(app) + 1} flip={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function statusStyle(status) {
  if (status === "Coming soon") return "border-line text-ink-soft"
  if (status === "Beta" || status === "Pre-order") return "border-denim bg-denim text-cream"
  return "border-tomato bg-tomato text-cream"
}

function AppCard({ app, number, flip }) {
  const hasMedia = Boolean(app.video || app.poster)
  // A single phone shot reads better tucked onto the preview than as a strip of one.
  const phoneShot = hasMedia && app.screenshots?.length === 1 ? app.screenshots[0] : null
  const strip = phoneShot ? [] : (app.screenshots ?? [])
  const primary = app.appStoreUrl
    ? { href: app.appStoreUrl, label: "App Store" }
    : app.webUrl
      ? { href: app.webUrl, label: "Visit site" }
      : null

  return (
    <article id={app.slug} className="overflow-hidden rounded-[22px] border-[1.5px] border-line bg-cream">
      <div className={`grid gap-8 p-6 sm:p-8 ${hasMedia ? "lg:grid-cols-2 lg:items-center" : ""}`}>
        <div className={flip && hasMedia ? "lg:order-2" : ""}>
          <div className="flex items-center gap-3">
            <span className="kicker text-ink-faint">{String(number).padStart(2, "0")}</span>
            <span className={`kicker rounded-full border-[1.5px] px-2.5 py-1 text-[11px] ${statusStyle(app.status)}`}>
              {app.status}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <img
              src={app.icon}
              alt=""
              width="64"
              height="64"
              className="h-16 w-16 shrink-0 rounded-[18px] border-[1.5px] border-line bg-oat object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl">{app.name}</h3>
              <p className="mt-1 text-[15px] text-ink-soft">{app.tagline}</p>
            </div>
          </div>

          <p className="mt-6 max-w-[54ch] text-base leading-7 text-ink-soft">{app.summary}</p>

          <ul className="mt-5 space-y-2">
            {app.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[15px] leading-6">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-tomato-bright" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <p className="kicker mt-6 text-ink-faint">
            {app.category} · {app.platforms.join(" · ")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {primary ? (
              <a href={primary.href} target="_blank" rel="noreferrer" className="btn btn-sm btn-ink">
                {primary.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            <SmallLinks app={app} />
          </div>
        </div>

        {hasMedia ? (
          <div className={flip ? "lg:order-1" : ""}>
            <div className={`relative ${phoneShot ? "pb-8 pr-6 sm:pr-10" : ""}`}>
              <div className="overflow-hidden rounded-2xl border-[1.5px] border-line bg-ink">
                {app.video ? (
                  <video
                    src={app.video}
                    poster={app.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${app.name} preview`}
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <img
                    src={app.poster}
                    alt={`${app.name} preview`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top"
                  />
                )}
              </div>
              {phoneShot ? (
                <img
                  src={phoneShot.src}
                  alt={phoneShot.alt}
                  loading="lazy"
                  className="absolute bottom-0 right-0 aspect-[390/844] w-[24%] rounded-[14px] border-[1.5px] border-line bg-cream object-cover object-top shadow-[4px_4px_0_var(--color-ink)]"
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {strip.length ? (
        <div className="strip overflow-x-auto border-t-[1.5px] border-line bg-oat px-6 py-6 sm:px-8">
          <div className="flex w-max gap-4">
            {strip.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-72 w-auto rounded-xl border-[1.5px] border-line bg-cream sm:h-80"
              />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  )
}

function SmallLinks({ app }) {
  const links = [
    app.privacyUrl ? { href: app.privacyUrl, label: "Privacy" } : null,
    app.termsUrl ? { href: app.termsUrl, label: "Terms", external: true } : null,
    { href: app.supportUrl ?? `mailto:${app.supportEmail}`, label: "Support" },
  ].filter(Boolean)

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 pl-1">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          className="text-sm font-medium text-ink-soft underline decoration-ink/30 underline-offset-4 hover:text-ink hover:decoration-tomato"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
