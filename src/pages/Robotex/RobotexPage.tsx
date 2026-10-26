import ArchiveImageSlider, {
  ArchiveImage,
} from "../../components/ArchiveImageSlider"
import { PageShell } from "../../components/RouteChrome"

const robotex2026Images: ArchiveImage[] = [
  {
    src: "/images/robotex/robotex-2026-team.jpeg",
    alt: "Robotex 2026 team with competition awards",
  },
  {
    src: "/images/robotex/robotex-2026-mega-sumo.jpeg",
    alt: "Robotex 2026 Mega Sumo award winners",
  },
  {
    src: "/images/robotex/robotex-2026-folk-race.jpeg",
    alt: "Robotex 2026 Folk Race award winners",
  },
]

const robotex2025Images: ArchiveImage[] = [
  {
    src: "/images/robotex/ff25.jpeg",
    alt: "Robotex 25 competition",
  },
  {
    src: "/images/robotex/robotex-2025-award.jpeg",
    alt: "Robotex 2025 award-winning team",
  },
]

const robotex2024Images: ArchiveImage[] = [
  {
    src: "/images/robotex/robotex-2024-team.jpeg",
    alt: "Robotex 2024 team with competition awards",
  },
  {
    src: "/images/robotex/robotex-2024-demonstration.jpeg",
    alt: "Robotex 2024 robot demonstration",
  },
]

const robotex2023Images: ArchiveImage[] = [
  {
    src: "/images/robotex/robotex-2023-sumo-award.jpeg",
    alt: "Robotex 2023 Sumo Robo award winners",
  },
  {
    src: "/images/robotex/robotex-2023-maze-solver-award.png",
    alt: "Robotex 2023 Maze Solver award winners",
  },
]

export default function RobotexPage() {
  return (
    <PageShell
      className="robotex-route"
      title="Robotex"
    >
      <div className="robocon-history">
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2026</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={robotex2026Images}
              label="Robotex 2026 gallery"
            />
          </div>
        </article>
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2025</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={robotex2025Images}
              label="Robotex 2025 gallery"
            />
          </div>
        </article>
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2024</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={robotex2024Images}
              label="Robotex 2024 gallery"
            />
          </div>
        </article>
        <article className="robocon-entry">
          <div className="robocon-entry-meta">
            <strong>2023</strong>
          </div>
          <div className="robocon-entry-content">
            <ArchiveImageSlider
              images={robotex2023Images}
              label="Robotex 2023 gallery"
            />
          </div>
        </article>
      </div>
    </PageShell>
  )
}
