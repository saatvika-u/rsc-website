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
      eyebrow="Selected projects"
      title="Machines made for the real world."
      intro="Mechanics, electronics and software brought together in systems designed to move, perceive and respond."
    >
      <section className="route-projects">
        {projects.map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
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
