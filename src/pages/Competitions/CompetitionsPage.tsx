import { Link } from "react-router"
import { Arrow, PageShell } from "../../components/RouteChrome"
import ImageArchive, {
  ArchiveItem,
} from "../../components/ImageArchive"

const competitionArchive: ArchiveItem[] = [
  {
    image: "/images/competitions/Roboroyale2024.jpeg",
    title: "Roboroyale",
    year: 2024,
    alt: "Robot Study Circle at Roboroyale 2024",
  },
  {
    image: "/images/competitions/Roboroyale24.jpeg",
    title: "Roboroyale",
    year: 2024,
    alt: "Roboroyale 2024 competition arena",
  },
  {
    image: "/images/competitions/Firefighters-2024.jpeg",
    title: "Firefighters",
    year: 2024,
    alt: "Firefighters robotics competition in 2024",
  },
  {
    image: "/images/competitions/FireFighter-2024.jpeg",
    title: "Firefighter",
    year: 2024,
    alt: "Robot Study Circle team at the Firefighter competition",
  },
  {
    image: "/images/competitions/Sumo-2023.jpeg",
    title: "Robot Sumo",
    year: 2023,
    alt: "Robot Sumo competition in 2023",
  },
  {
    image: "/images/competitions/Line-Follower-2019.png",
    title: "Line Follower",
    year: 2019,
    alt: "Line Follower competition in 2019",
  },
  {
    image: "/images/competitions/Mindspark-2018.png",
    title: "Mindspark",
    year: 2018,
    alt: "Robot Study Circle at Mindspark 2018",
  },
  {
    image: "/images/competitions/DRDO-2018.png",
    title: "DRDO",
    year: 2018,
    alt: "Robot Study Circle at the DRDO competition in 2018",
  },
  {
    image: "/images/competitions/Search-&-Destroy-2017.png",
    title: "Search & Destroy",
    year: 2017,
    alt: "Search and Destroy robotics competition in 2017",
  },
  {
    image: "/images/competitions/IRC-2016.png",
    title: "IRC",
    year: 2016,
    alt: "IRC robotics competition in 2016",
  },
]

export default function CompetitionsPage() {
  return (
    <PageShell
      eyebrow="Competitions"
      title="Built to perform under pressure."
      intro="Competition turns engineering decisions into measurable outcomes and every result into a lesson."
    >
      <section className="archive-intro">
        <div>
          <span>Competition archive</span>
          <h2>Every arena leaves a lesson.</h2>
        </div>
        <div>
          <p>
            Explore RSC&apos;s competition history from the newest field tests
            to the events that shaped the team.
          </p>
          <Link to="/robocon">
            Explore the separate ROBOCON archive <Arrow />
          </Link>
        </div>
      </section>
      <ImageArchive items={competitionArchive} label="competitions" />
    </PageShell>
  )
}
