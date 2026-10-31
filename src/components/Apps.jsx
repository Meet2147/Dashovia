import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { appProducts } from "../data/products"
import SectionHeader from "./SectionHeader"

export default function Apps() {
  return (
    <section id="apps" className="relative px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Apps"
          title="Apps for Apple platforms and the web."
          body="iPhone, iPad, Mac, Apple Watch and web apps built under Dashovia — on the App Store, on the web and as direct Mac downloads."
        />

        <div className="mt-14 space-y-10">
          {appProducts.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AppCard({ app }) {
  return (
    <motion.article
      id={app.slug}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="neo-raised rounded-3xl p-6 text-left sm:p-8"
    >
      <div className={`grid gap-8 lg:items-center ${app.video || app.poster ? "lg:grid-cols-[1fr_1.15fr]" : ""}`}>
        <div>
          <div className="flex items-center gap-4">
            <img
              src={app.icon}
              alt=""
              width="64"
              height="64"
              className="neo-raised-sm h-16 w-16 rounded-2xl"
            />
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
                {app.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{app.tagline}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-[var(--ink-soft)] uppercase">
              <span className="neo-dot h-2 w-2 rounded-full bg-[var(--accent)]" />
              {app.status}
            </span>
            <span className="text-xs font-medium tracking-[0.12em] text-[var(--ink-faint)] uppercase">
              {app.category}
            </span>
            <span className="text-xs font-medium tracking-[0.12em] text-[var(--ink-faint)] uppercase">
              {app.platforms.join(" · ")}
            </span>
          </div>

          <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)] sm:text-base sm:leading-7">
            {app.summary}
          </p>

          <ul className="mt-5 space-y-2.5">
            {app.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-3 text-sm text-[var(--ink-soft)]"
              >
                <span className="neo-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-faint)]" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            {app.appStoreUrl ? (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-accent inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold"
              >
                App Store
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {app.webUrl ? (
              <a
                href={app.webUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-accent inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold"
              >
                Visit site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {app.privacyUrl ? (
              <a
                href={app.privacyUrl}
                className="neo-interactive inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-[var(--ink)]"
              >
                Privacy Policy
              </a>
            ) : null}
            {app.termsUrl ? (
              <a
                href={app.termsUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-interactive inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-[var(--ink)]"
              >
                Terms of Use
              </a>
            ) : null}
            <a
              href={app.supportUrl ?? `mailto:${app.supportEmail}`}
              className="neo-interactive inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-[var(--ink)]"
            >
              Support
            </a>
          </div>
        </div>

        {app.video ? (
        <div className="neo-inset overflow-hidden rounded-2xl p-2">
          <video
            src={app.video}
            poster={app.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${app.name} preview`}
            className="aspect-video w-full rounded-xl bg-black object-cover"
          />
        </div>
        ) : app.poster ? (
          <div className="neo-inset overflow-hidden rounded-2xl p-2">
            <img
              src={app.poster}
              alt={`${app.name} preview`}
              loading="lazy"
              className="aspect-video w-full rounded-xl object-cover"
            />
          </div>
        ) : null}
      </div>

      <div className="-mx-6 mt-8 overflow-x-auto px-6 pb-4 sm:-mx-8 sm:px-8">
        <div className="flex w-max gap-4">
          {app.screenshots.map((shot) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="neo-raised-sm h-80 w-auto rounded-2xl sm:h-96"
            />
          ))}
        </div>
      </div>
    </motion.article>
  )
}
