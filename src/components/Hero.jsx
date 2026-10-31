import { ArrowDownRight } from "lucide-react"
import { appProducts, portfolioStats } from "../data/products"

export default function Hero() {
  const stats = [
    { value: portfolioStats.appCount, label: "Apps" },
    { value: portfolioStats.appStoreCount, label: "On the App Store" },
    { value: portfolioStats.extensionCount, label: "Extensions" },
  ]

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
        <p className="kicker text-tomato">Independent product studio</p>

        <div className="relative">
          <h1 className="mt-5 max-w-[11ch] text-[clamp(3.2rem,10vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink">
            Small tools, shipped <span className="accent text-tomato-bright">for real.</span>
          </h1>

          <Stamp count={portfolioStats.liveCount} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="max-w-[46ch] text-lg leading-8 text-ink-soft sm:text-xl sm:leading-9">
              Dashovia makes iPhone, iPad, Mac and web apps, plus extensions for VS Code. Each one does
              one job properly, and most of them are live right now.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#apps" className="btn btn-tomato">
                See the apps
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#extensions" className="btn">
                Extensions
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-3 border-y-[1.5px] border-line">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-5 pr-3 ${index > 0 ? "border-l-[1.5px] border-line pl-4 sm:pl-6" : ""}`}
              >
                <dd className="text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">{stat.value}</dd>
                <dt className="kicker mt-2 text-ink-soft">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Ticker />
    </section>
  )
}

function Stamp({ count }) {
  return (
    <div
      className="absolute right-0 top-2 hidden h-36 w-36 rotate-[10deg] items-center justify-center rounded-full border-[1.5px] border-line bg-tomato text-center text-cream shadow-[4px_4px_0_var(--color-ink)] lg:flex"
      aria-hidden="true"
    >
      <div>
        <div className="text-5xl font-extrabold leading-none tracking-[-0.05em]">{count}</div>
        <div className="kicker mt-1.5 text-[11px]">live now</div>
      </div>
    </div>
  )
}

function Ticker() {
  const names = appProducts.map((app) => app.name.split(":")[0])
  const row = [...names, ...names]

  return (
    <div className="ticker-wrap overflow-hidden border-y-[1.5px] border-line bg-denim py-4 text-cream" aria-hidden="true">
      <div className="ticker">
        {row.map((name, index) => (
          <span key={`${name}-${index}`} className="flex items-center whitespace-nowrap text-2xl font-bold tracking-[-0.02em]">
            <span className="px-6">{name}</span>
            <span className="h-2.5 w-2.5 rounded-full bg-tomato-bright" />
          </span>
        ))}
      </div>
    </div>
  )
}
