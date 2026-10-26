import { useState } from "react"

export type ArchiveImage = {
  src: string
  alt: string
}

function SliderArrow() {
  return (
    <svg aria-hidden="true" className="icon-arrow" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

export default function ArchiveImageSlider({
  images,
  label,
}: {
  images: ArchiveImage[]
  label: string
}) {
  const [activeImage, setActiveImage] = useState(0)

  const showImage = (offset: number) => {
    setActiveImage(
      (current) => (current + offset + images.length) % images.length,
    )
  }

  return (
    <div className="archive-slider" aria-label={label}>
      <div
        className="workshop-slider-track"
        style={{ transform: `translateX(-${activeImage * 100}%)` }}
      >
        {images.map((image) => (
          <div className="workshop-slide" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="workshop-image-arrows">
          <button
            type="button"
            aria-label={`Previous ${label} image`}
            onClick={() => showImage(-1)}
          >
            <SliderArrow />
          </button>
          <button
            type="button"
            aria-label={`Next ${label} image`}
            onClick={() => showImage(1)}
          >
            <SliderArrow />
          </button>
        </div>
      )}
    </div>
  )
}
