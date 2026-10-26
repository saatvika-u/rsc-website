import { Link } from "react-router"
import { Arrow, PageShell } from "../../components/RouteChrome"

const projects = [
  [
    "01",
    "Drones",
    "Autonomous aerial systems built for perception, navigation and demanding real-world environments.",
  ],
  [
    "02",
    "Railway Track Surveillance Robot",
    "A mobile inspection platform designed to help identify risks across railway infrastructure.",
  ],
  [
    "03",
    "Bomb Disposal Robots",
    "Remotely operated machines designed to investigate and handle hazardous situations.",
  ],
  [
    "04",
    "Badminton Playing Robots",
    "Fast, precise competition machines combining motion planning, control and rapid actuation.",
  ],
]

export default function ProjectsPage() {
  return (
    <PageShell
      className="projects-route"
      title="Machines made for the real world."
    >
      <section className="route-projects">
        {projects.map(([number, title, copy]) => (
          <article key={number}>
            <h2>{title}</h2>
            <p>{copy}</p>
            <Link to="/contact" aria-label={`Ask about ${title}`}>
              <Arrow />
            </Link>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
