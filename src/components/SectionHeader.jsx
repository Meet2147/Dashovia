export default function SectionHeader({ number, eyebrow, title, accent, body, tone = "light" }) {
  const soft = tone === "dark" ? "text-cream/70" : "text-ink-soft"
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
      <div>
        <p className={`kicker ${tone === "dark" ? "text-tomato" : "text-tomato"}`}>
          {number} / {eyebrow}
        </p>
        <h2 className="mt-4 text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
          {title} {accent ? <span className="accent text-tomato-bright">{accent}</span> : null}
        </h2>
      </div>
      {body ? <p className={`max-w-[44ch] text-lg leading-8 ${soft} lg:justify-self-end`}>{body}</p> : null}
    </div>
  )
}
