import ArchiveImageSlider, {
  ArchiveImage,
} from "../../components/ArchiveImageSlider"
import { PageShell } from "../../components/RouteChrome"

const mindspark2025Images: ArchiveImage[] = [
  {
    src: "/images/mindspark/mindspark-2025-search-destroy-award.webp",
    alt: "Search and Destroy award winners at Mindspark 2025",
  },
  {
    src: "/images/mindspark/mindspark-2025-robots-awards.webp",
    alt: "Mindspark 2025 robots, trophies and certificates",
  },
  {
    src: "/images/mindspark/mindspark-2025-team.webp",
    alt: "Mindspark 2025 team with robots and awards",
  },
  {
    src: "/images/mindspark/mindspark-2025-robots-team.webp",
    alt: "Mindspark 2025 participants with their robots",
  },
  {
    src: "/images/mindspark/mindspark-2025-roboroyale-award.webp",
    alt: "Robo Royale award presentation at Mindspark 2025",
  },
]

const mindspark2024Images: ArchiveImage[] = [
  {
    src: "/images/mindspark/mindspark-2024-roboroyale-winners.jpeg",
    alt: "Robo-Royale winners at Mindspark 2024",
  },
  {
    src: "/images/mindspark/mindspark-2024-team.png",
    alt: "Mindspark 2024 award-winning team",
  },
]

const mindspark2023Images: ArchiveImage[] = [
  {
    src: "/images/mindspark/mindspark-2023-team.webp",
    alt: "Robot Study Circle team at Mindspark 2023",
  },
]

export default function MindsparkPage() {
  return (
    <PageShell
      className="mindspark-route"
      title="Mindspark"
    >
      <div className="robocon-history">
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2025</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={mindspark2025Images}
              label="Mindspark 2025 gallery"
            />
          </div>
        </article>
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2024</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={mindspark2024Images}
              label="Mindspark 2024 gallery"
            />
          </div>
        </article>
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2023</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={mindspark2023Images}
              label="Mindspark 2023 gallery"
            />
          </div>
        </article>
      </div>
    </PageShell>
  )
}
