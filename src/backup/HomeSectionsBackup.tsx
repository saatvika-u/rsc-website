import { Arrow } from "../components/RouteChrome"

const roverImage =
  "https://images.unsplash.com/photo-1612338762643-298feee70520?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400"

const projects = [
  {
    number: "01",
    title: "Drones",
    label: "Aerial Systems",
    description:
      "Autonomous aerial platforms designed for perception, navigation and real-world operations.",
  },
  {
    number: "02",
    title: "Railway Track Surveillance Robot",
    label: "Inspection Robotics",
    description:
      "A mobile robotic platform engineered to inspect railway infrastructure and identify risk.",
  },
  {
    number: "03",
    title: "Bomb Disposal Robots",
    label: "Safety Systems",
    description:
      "Remotely operated machines that help experts investigate and handle hazardous situations.",
  },
  {
    number: "04",
    title: "Badminton Playing Robots",
    label: "Competition Robotics",
    description:
      "Fast, precise machines combining motion planning, control and rapid mechanical actuation.",
  },
]

const milestones = [
  [
    "2004",
    "The circle begins",
    "A student-led space for building, testing and sharing robotics.",
  ],
  [
    "2017",
    "Represented India",
    "RSC competes at International ROBOCON in Tokyo, Japan.",
  ],
  [
    "2017",
    "Nagase Award",
    "Sixth internationally, along with the prestigious Nagase Award.",
  ],
  [
    "Today",
    "Building forward",
    "New members continue a two-decade culture of ambitious engineering.",
  ],
]

export default function HomeSectionsBackup() {
  return (
    <>
      <section className="journey" id="journey">
        <div className="section-title">
          <div>
            <span className="eyebrow">Our journey</span>
            <h2>
              Built over time.
              <br />
              Focused on what&apos;s next.
            </h2>
          </div>
          <p>
            Two decades of learning in public, competing at the highest level
            and sharing every lesson with the next generation.
          </p>
        </div>
        <div className="timeline">
          {milestones.map(([year, title, body], index) => (
            <article key={`${year}-${title}`}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <time>{year}</time>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature" id="robocon">
        <div className="feature-image">
          <img src={roverImage} alt="A student testing a robotic vehicle" />
          <span>National Champions</span>
        </div>
        <div className="feature-content" id="achievements">
          <span className="eyebrow">The defining achievement</span>
          <p className="feature-year">2017</p>
          <h2>
            India to
            <br />
            the world.
          </h2>
          <p>
            RSC represented India at International ROBOCON 2017 in Tokyo,
            Japan—finishing sixth internationally and winning the prestigious
            <strong> Nagase Award</strong>.
          </p>
          <div className="achievement-grid">
            <div>
              <b>01</b>
              <span>
                National
                <br />
                Champion
              </span>
            </div>
            <div>
              <b>06</b>
              <span>
                International
                <br />
                Position
              </span>
            </div>
            <div>
              <b>01</b>
              <span>
                Nagase
                <br />
                Award
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-title">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>
              Machines made
              <br />
              for the real world.
            </h2>
          </div>
          <p>
            We work across mechanics, electronics, software and control to take
            ambitious systems from first principles to field tests.
          </p>
        </div>
        <div className="project-list" id="competitions">
          {projects.map((project) => (
            <article key={project.number}>
              <span className="project-number">{project.number}</span>
              <div>
                <span className="project-label">{project.label}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <a href="#contact" aria-label={`Learn about ${project.title}`}>
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
