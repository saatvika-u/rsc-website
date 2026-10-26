import { useState } from "react"
import { PageShell } from "../../components/RouteChrome"

const programs = [
  {
    title: "School Connect",
    date: "January 13th, 2025",
    dateTime: "2025-01-13",
    location: "Main Auditorium, COEP-TU",
    summary:
      "An introduction to robotics with live demonstrations using the NAO humanoid robot.",
    images: [
      "/images/community/Bishops-2.jpeg",
      "/images/community/Bishop-1.jpeg",
    ],
    facilitators: [
      "Chandan Rathore",
      "Saatvika Udayakumar",
      "Tejas Nirwan",
      "Vedant Kawarkhe",
    ],
  },
  {
    title: "Exhibit at Pune Start-Up Fest",
    date: "January 2025",
    dateTime: "2025-01",
    location: "Pune",
    summary: "",
    images: [
      "/images/community/psf-rsc-bannerimage.jpeg",
      "/images/community/rsc-at-psf.jpeg",
    ],
    facilitators: [
      "Saleel Mutalik",
      "Shishir Shiragave",
      "Saatvika Udayakumar",
      "Laya Kshetrapal",
    ],
  },
  {
    title: "Electronics and Robotics Workshops",
    date: "June–July 2024",
    dateTime: "2024-06",
    location: "Camp Education Society School",
    summary:
      "Empowering 9th and 10th-grade students from CES school in electronics, coding, and robotics.",
    images: [
      "/images/community/CampEduSOciety.jpeg",
      "/images/community/CES-ElectronicsWorkshop2.jpeg",
      "/images/community/CES-ElectronicsWorkshop.jpeg",
    ],
    facilitators: [
      "Tejas Nirwan",
      "Laya Kshetrapal",
      "Kavish Patil",
      "Saatvika Udayakumar",
    ],
  },
  {
    title: "3-Day Line Follower Workshop",
    date: "March 2024",
    dateTime: "2024-03",
    location: "COEPTU",
    summary:
      "An end-to-end line follower workshop for FY RAI students covering PCB design and PID.",
    images: ["/images/community/3day-line-follower.jpeg"],
    facilitators: [
      "Tejas Nirwan",
      "Laya Kshetrapal",
      "Kavish Patil",
      "Saatvika Udayakumar",
      "Dhiraj Patil",
    ],
  },
  {
    title: "Mathematics Day Robotics Demonstration",
    date: "December 22nd, 2022",
    dateTime: "2022-12-22",
    location: "COEP",
    summary: "Exploring the intersection of mathematics and robotics.",
    images: ["/images/community/mathematics-day.jpeg"],
    facilitators: ["Ayush Amborkar", "Atharv Neglur"],
  },
  {
    title: "Community Outreach Program – Mangaon, Raigad",
    date: "October 15th, 2022",
    dateTime: "2022-10-15",
    location: "Mangaon, Raigad",
    summary:
      "A transformative initiative to bridge technological gaps in rural communities.",
    images: [
      "/images/community/Outreach-2022-01.png",
      "/images/community/outreach2022.png",
    ],
    facilitators: [
      "Koustubh Anturkar",
      "Chinmay Patil",
      "Ayush Amborkar",
      "Atharv Neglur",
    ],
  },
]

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M24 43s13-12.4 13-25a13 13 0 1 0-26 0c0 12.6 13 25 13 25Z" />
      <circle cx="24" cy="18" r="4.5" />
    </svg>
  )
}

function SliderArrow() {
  return (
    <svg aria-hidden="true" className="icon-arrow" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function ImagePlaceholder() {
  return (
    <div className="outreach-image-placeholder" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <rect x="8" y="11" width="48" height="42" rx="2" />
        <circle cx="23" cy="25" r="5" />
        <path d="m12 47 14-13 9 8 7-7 10 12" />
      </svg>
      <span>Event image</span>
    </div>
  )
}

function EventMedia({ images, title }: { images: string[] title: string }) {
  const [activeImage, setActiveImage] = useState(0)

  if (images.length === 0) {
    return <ImagePlaceholder />
  }

  const showImage = (offset: number) => {
    setActiveImage(
      (current) => (current + offset + images.length) % images.length,
    )
  }

  return (
    <div className="outreach-event-media">
      <div
        className="workshop-slider-track"
        style={{ transform: `translateX(-${activeImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="workshop-slide" key={image}>
            <img
              src={image}
              alt={`${title}, image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="workshop-image-arrows">
          <button
            type="button"
            aria-label={`Previous image for ${title}`}
            onClick={() => showImage(-1)}
          >
            <SliderArrow />
          </button>
          <button
            type="button"
            aria-label={`Next image for ${title}`}
            onClick={() => showImage(1)}
          >
            <SliderArrow />
          </button>
        </div>
      )}
    </div>
  )
}

export default function SocialOutreachPage() {
  return (
    <PageShell
      eyebrow="Community outreach"
      intro={[
        "At RSC, we believe technology is most powerful when shared.",
        "Through hands-on workshops, robotics demonstrations, and educational initiatives, we bring STEM closer to young minds.",
      ]}
      className="outreach-route"
    >
      <section className="outreach-programs" aria-label="Outreach programs">
        {programs.map((program) => (
          <article key={program.title}>
            <EventMedia images={program.images} title={program.title} />
            <div className="outreach-program-content">
              <time dateTime={program.dateTime}>{program.date}</time>
              <h2>{program.title}</h2>
              {program.location && (
                <div className="outreach-location">
                  <LocationIcon />
                  <p>{program.location}</p>
                </div>
              )}
              {program.summary && (
                <p className="outreach-program-summary">{program.summary}</p>
              )}

              <div className="outreach-facilitators">
                <h3>Facilitators</h3>
                <p>{program.facilitators.join(", ")}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
