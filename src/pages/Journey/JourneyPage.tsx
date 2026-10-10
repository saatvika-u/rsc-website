import { useRef, useState } from "react"
import { PageShell } from "../../components/RouteChrome"
import { JourneySlide, journeyEvents } from "../../data/journey"
import useScrollProgress from "../../hooks/useScrollProgress"

function JourneyCarousel({
  slides,
  year,
}: {
  slides: JourneySlide[]
  year: number
}) {
  const [activeSlide, setActiveSlide] = useState(0)
  const pointerStart = useRef<number | null>(null)

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length)
  }

  return (
    <div
      className="journey-carousel"
      aria-label={`${year} image gallery`}
      onPointerDown={(event) => {
        pointerStart.current = event.clientX
      }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return
        const distance = event.clientX - pointerStart.current
        if (Math.abs(distance) > 45) {
          showSlide(activeSlide + (distance < 0 ? 1 : -1))
        }
        pointerStart.current = null
      }}
      onPointerCancel={() => {
        pointerStart.current = null
      }}
    >
      <div
        className="journey-carousel-track"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="journey-slide" key={slide.label}>
            {slide.image ? (
              <img src={slide.image} alt={slide.alt} loading="lazy" />
            ) : (
              <div className="journey-slide-placeholder" role="img" aria-label={slide.alt}>
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <rect x="5" y="8" width="38" height="32" rx="1" />
                  <circle cx="17" cy="19" r="4" />
                  <path d="m8 35 9-9 6 6 5-5 12 8" />
                </svg>
                <span>{year}</span>
                <strong>{slide.label}</strong>
                <small>Image placeholder</small>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="journey-carousel-controls">
        <div>
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "is-active" : undefined}
              aria-label={`Show ${slide.label}`}
              aria-pressed={index === activeSlide}
              onClick={() => showSlide(index)}
              key={slide.label}
            />
          ))}
        </div>
        <div>
          <button
            type="button"
            aria-label={`Previous ${year} image`}
            onClick={() => showSlide(activeSlide - 1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label={`Next ${year} image`}
            onClick={() => showSlide(activeSlide + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function JourneyPage() {
  const { elementRef: timelineRef, progress } =
    useScrollProgress<HTMLElement>()

  return (
    <PageShell
      className="journey-route"
      title="Our story starts here."
      intro="RSC was started by five students with the same mission. Two decades later, that mission keeps moving."
    >
      <section className="route-timeline" ref={timelineRef}>
        <div
          className="route-timeline-progress"
          style={{ height: `${progress * 100}%` }}
          aria-hidden="true"
        />
        {journeyEvents.map((event, index) => (
          <article
            className={
              progress >= index / (journeyEvents.length - 1)
                ? "is-lit"
                : undefined
            }
            key={event.year}
          >
            <time>{event.year}</time>
            <div className="route-timeline-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <JourneyCarousel slides={event.slides} year={event.year} />
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
