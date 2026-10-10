import { Link, useLocation } from "react-router"
import { PageHeader } from "../../components/RouteChrome"
import StlViewer from "../../components/StlViewer"

const heroImage = "/images/hero.jpg"
const teamImage =
  "https://images.unsplash.com/photo-1581092333322-31d2fd38a35e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400"
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

const sponsors = [
  "SIEMENS PLM",
  "VOLKSWAGEN",
  "JANATICS",
  "SCHMALZ",
  "P&F",
  "ROBOLAB",
]

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={down ? "icon-arrow icon-arrow-down" : "icon-arrow"}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

export default function HomePage() {
  const location = useLocation()

  return (
    <div className="site">
      <div className="home-entry" aria-hidden="true" key={location.key}>
        <div className="home-entry-mark">
          <div className="home-entry-pixels">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <img src="/images/rscwhitelogo.png" alt="" />
        </div>
      </div>
      <PageHeader />

      <main>
        <section className="hero" id="home">
          <img className="hero-background" src={heroImage} alt="" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-title-lockup">
              <img
                className="hero-rsc-logo"
                src="/images/rscwhitelogo.png"
                alt="Robot Study Circle"
              />
              <h1>
                <span className="hero-title-word">Robot</span>{" "}
                <span className="hero-title-word">Study</span>
                <br />
                <span className="hero-title-word">Circle</span>
              </h1>
            </div>
            <p>Explore. Learn. Build. Share.</p>
            <a href="#about" className="hero-link">
              Discover RSC <Arrow down />
            </a>
          </div>
        </section>

        <section className="sponsors" id="sponsors">
          <div className="sponsor-header">
            <span className="eyebrow">Industry collaborators</span>
            <p>Partners who help ambitious student engineering move forward.</p>
          </div>
          <div className="sponsor-window">
            <div className="sponsor-track">
              {[0, 1].map((group) => (
                <div
                  className="sponsor-group"
                  key={group}
                  aria-hidden={group === 1}
                >
                  {sponsors.map((sponsor, index) => (
                    <div className="sponsor-item" key={`${group}-${sponsor}`}>
                      <span className={`sponsor-mark mark-${index % 3}`} />
                      {sponsor}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="intro" id="about">
          <div className="section-number">01</div>
          <div className="intro-heading">
            <span className="eyebrow">About Robot Study Circle</span>
            <h2>
              Robotics is not a subject.
              <br />
              <em>It&apos;s our way of thinking.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              Robot Study Circle, known as <strong>RSC</strong>, is the
              prestigious Robotics Club of COEP and one of the best robotics
              clubs in India.
            </p>
            <p>
              It&apos;s a totally different world where club members have
              created hundreds of robots for society—from drones and railway
              track surveillance robots to bomb disposal and badminton playing
              robots.
            </p>
            <a href="#projects" className="text-link">
              Explore our work <Arrow />
            </a>
          </div>
          <div className="intro-stats">
            <div>
              <strong>20+</strong>
              <span>Years of innovation</span>
            </div>
            <div>
              <strong>100s</strong>
              <span>Robots created</span>
            </div>
            <div>
              <strong>06</strong>
              <span>International rank</span>
            </div>
          </div>
        </section>

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
              We work across mechanics, electronics, software and control to
              take ambitious systems from first principles to field tests.
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

        <section className="cad-showcase" id="cad-viewer">
          <div className="cad-copy">
            <span className="eyebrow">Interactive engineering</span>
            <h2>
              Inspect the build.
              <br />
              From every angle.
            </h2>
            <p>
              Explore a sample STL directly in the browser. Rotate, zoom and
              inspect the model just like a part on the workbench.
            </p>
            <div className="cad-file">
              <span>Loaded file</span>
              <strong>sample-rover.stl</strong>
            </div>
          </div>
          <StlViewer />
        </section>

        <section className="team">
          <div className="team-image">
            <img
              src={teamImage}
              alt="Engineering students collaborating in a robotics lab"
            />
          </div>
          <div className="team-copy">
            <span className="eyebrow">One multidisciplinary team</span>
            <h2>
              Different skills.
              <br />
              Shared ambition.
            </h2>
            <p>
              Mechanical design meets embedded systems, computer vision and
              strategy. What connects us is the willingness to make, break,
              learn and build again.
            </p>
            <a className="button" href="#contact">
              Join the circle <Arrow />
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="eyebrow">Start building with us</span>
          <h2>
            Power our
            <br />
            <span className="accent-text">next</span> breakthrough.
          </h2>
          <a href="mailto:robotics@coep.ac.in" className="contact-link">
            Get in touch <Arrow />
          </a>
          <div className="contact-orbit" aria-hidden="true">
            <span>RSC</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <Link
            className="footer-rsc-logo"
            to="/"
            aria-label="Robot Study Circle home"
          >
            <img src="/images/rsc_footer.png" alt="Robot Study Circle" />
          </Link>
          <p>Explore. Learn. Build. Share.</p>
        </div>
        <div>
          <h3>Find us</h3>
          <address>
            Robotics &amp; Automation Lab,
            <br />
            Production Dept., College of Engineering Pune,
            <br />
            Wellesly Road, Shivajinagar, Pune — 411005
          </address>
          <a href="tel:02025507366">020-2550-7366</a>
        </div>
        <div>
          <h3>Follow</h3>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Robot Study Circle</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
