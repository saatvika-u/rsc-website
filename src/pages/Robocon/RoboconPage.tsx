import { useState } from "react"
import { PageShell } from "../../components/RouteChrome"
import { roboconEvents } from "../../data/robocon"

export default function RoboconPage() {
  const [expanded, setExpanded] = useState(false)
  const visibleEvents = expanded ? roboconEvents : roboconEvents.slice(0, 3)

  return (
    <PageShell
      eyebrow="ABU ROBOCON"
      title="India to the world."
      intro="A defining arena for RSC—where rigorous engineering, teamwork and strategy meet under pressure."
    >
      <section className="achievement-feature">
        <div>
          <span>International ROBOCON</span>
          <strong>2017</strong>
        </div>
        <div>
          <h2>Tokyo, Japan</h2>
          <p>
            Robot Study Circle represented India at International ROBOCON 2017,
            finishing in sixth position and receiving the prestigious Nagase
            Award.
          </p>
          <ul>
            <li>
              <b>01</b> National Champion
            </li>
            <li>
              <b>06</b> International position
            </li>
            <li>
              <b>01</b> Nagase Award
            </li>
          </ul>
        </div>
      </section>
      <section className="archive-heading">
        <span>ROBOCON through the years</span>
        <h2>Every challenge. Every arena.</h2>
      </section>
      <div className="robocon-history">
        {visibleEvents.map((event, index) => (
          <article className="robocon-entry" key={event.year}>
            <div className="robocon-entry-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{event.year}</strong>
              <p>{event.location}</p>
            </div>
            <div className="robocon-entry-content">
              <span>Theme</span>
              <h2>{event.theme}</h2>
              <p>{event.description}</p>
              {event.achievement && (
                <div className="robocon-result">
                  <span>Event details</span>
                  <p>{event.achievement}</p>
                </div>
              )}
              {event.images.length > 0 && (
                <div
                  className={`robocon-images robocon-images-${Math.min(event.images.length, 3)}`}
                >
                  {event.images.map((image) => (
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      key={image.src}
                    />
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="archive-actions">
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show latest three" : "See all ROBOCON years"}
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
      </div>
    </PageShell>
  )
}
