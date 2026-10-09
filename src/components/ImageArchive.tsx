import { useState } from "react"

export type ArchiveItem = {
  image: string
  title: string
  year: number
  alt: string
}

export default function ImageArchive({
  items,
  label,
}: {
  items: ArchiveItem[]
  label: string
}) {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = expanded ? items : items.slice(0, 3)

  return (
    <>
      <div className="event-gallery">
        {visibleItems.map((item, index) => (
          <article className="event-card" key={`${item.image}-${index}`}>
            <div className="event-card-heading">
              <span>{item.year}</span>
              <h2>{item.title}</h2>
              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>
            <div className="event-card-image">
              <img src={item.image} alt={item.alt} />
            </div>
          </article>
        ))}
      </div>
      {items.length > 3 && (
        <div className="archive-actions">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? "Show latest three" : `See more ${label}`}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
        </div>
      )}
    </>
  )
}
