import { PageShell } from "../../components/RouteChrome"
import useScrollProgress from "../../hooks/useScrollProgress"

const events = [
  [
    "2004",
    "Five students. One mission.",
    "RSC begins as a shared space for learning robotics through making.",
  ],
  [
    "2017",
    "National champions",
    "The team earns the opportunity to represent India on the international stage.",
  ],
  [
    "2017",
    "Tokyo, Japan",
    "RSC finishes sixth at International ROBOCON and receives the Nagase Award.",
  ],
  [
    "Today",
    "The next build",
    "New members continue a two-decade culture of experimentation and excellence.",
  ],
]

export default function JourneyPage() {
  const { elementRef: timelineRef, progress } =
    useScrollProgress<HTMLElement>()

  return (
    <PageShell
      eyebrow="Our journey"
      title="Our story starts here."
      intro="RSC was started by five students with the same mission. Two decades later, that mission keeps moving."
    >
      <section className="route-timeline" ref={timelineRef}>
        <div
          className="route-timeline-progress"
          style={{ height: `${progress * 100}%` }}
          aria-hidden="true"
        />
        {events.map(([year, title, copy], index) => (
          <article
            className={
              progress >= index / (events.length - 1) ? "is-lit" : undefined
            }
            key={`${year}-${title}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <time>{year}</time>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
