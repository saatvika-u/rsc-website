import { useState } from "react"
import { Arrow, PageShell } from "../../components/RouteChrome"
import { roboconEvents } from "../../data/robocon"

export default function RoboconPage() {
  const [expanded, setExpanded] = useState(false)
  const visibleEvents = expanded ? roboconEvents : roboconEvents.slice(0, 3)

  return (
    <PageShell
      className="robocon-route"
      title="ROBOCON"
    >
      <div className="robocon-theme-strip">
        <a
          className="robocon-theme-link"
          href="https://ddrobocon.iitd.ac.in/"
          target="_blank"
          rel="noreferrer"
        >
          ROBOCON 2027 theme <Arrow />
        </a>
      </div>
      <section className="achievement-feature">
        <div className="achievement-video">
          <iframe
            src="https://www.youtube.com/embed/aYvgPKKYnk8"
            title="International ROBOCON 2017"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
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
