import { PageShell } from "../../components/RouteChrome"
import ImageArchive, {
  ArchiveItem,
} from "../../components/ImageArchive"

const roboconArchive: ArchiveItem[] = [
  {
    image: "/images/robocon/robocon-24.jpg",
    title: "ABU ROBOCON",
    year: 2024,
    alt: "Robot Study Circle at ABU ROBOCON 2024",
  },
  {
    image: "/images/robocon/Robocon_2023.png",
    title: "ABU ROBOCON",
    year: 2023,
    alt: "Robot Study Circle at ABU ROBOCON 2023",
  },
  {
    image: "/images/robocon/Robocon_2019.png",
    title: "ABU ROBOCON",
    year: 2019,
    alt: "Robot Study Circle at ABU ROBOCON 2019",
  },
  {
    image: "/images/robocon/Robocon%202019.png",
    title: "ABU ROBOCON",
    year: 2019,
    alt: "ROBOCON 2019 team and robot",
  },
  {
    image: "/images/robocon/Robocon2017.jpg",
    title: "International ROBOCON",
    year: 2017,
    alt: "Robot Study Circle representing India at ROBOCON 2017",
  },
  {
    image: "/images/robocon/Robocon-2017.png",
    title: "ABU ROBOCON",
    year: 2017,
    alt: "ABU ROBOCON 2017 competition",
  },
  {
    image: "/images/robocon/Robocon-17.png",
    title: "ABU ROBOCON",
    year: 2017,
    alt: "Robot Study Circle at ROBOCON 2017",
  },
  {
    image: "/images/robocon/Robocon17.png",
    title: "ABU ROBOCON",
    year: 2017,
    alt: "ROBOCON 2017 event",
  },
  {
    image: "/images/robocon/Robocon2016.jpg",
    title: "ABU ROBOCON",
    year: 2016,
    alt: "Robot Study Circle at ABU ROBOCON 2016",
  },
  {
    image: "/images/robocon/Robocon-2016.png",
    title: "ABU ROBOCON",
    year: 2016,
    alt: "ROBOCON 2016 competition",
  },
  {
    image: "/images/robocon/Robocon_2015.png",
    title: "ABU ROBOCON",
    year: 2015,
    alt: "Robot Study Circle at ABU ROBOCON 2015",
  },
  {
    image: "/images/robocon/Robocon_09.png",
    title: "ABU ROBOCON",
    year: 2009,
    alt: "Robot Study Circle at ABU ROBOCON 2009",
  },
  {
    image: "/images/robocon/Robocon_07.png",
    title: "ABU ROBOCON",
    year: 2007,
    alt: "Robot Study Circle at ABU ROBOCON 2007",
  },
]

export default function RoboconPage() {
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
        <h2>Latest moments from the arena.</h2>
      </section>
      <ImageArchive items={roboconArchive} label="ROBOCON years" />
    </PageShell>
  )
}
