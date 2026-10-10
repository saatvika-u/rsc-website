import { Link, useLocation } from "react-router"
import { PageHeader } from "../../components/RouteChrome"
import StlViewer from "../../components/StlViewer"

const heroImage = "/images/hero.jpg"
const teamImage =
  "https://images.unsplash.com/photo-1581092333322-31d2fd38a35e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400"

const sponsors = [
  {
    name: "Altium",
    logo: "/images/sponsor-home/altium-designer.png",
    href: "https://www.altium.com/in",
  },
  {
    name: "SolidWorks",
    logo: "/images/sponsor-home/SolidWorks.png",
    href: "https://www.solidworks.com/",
  },
  {
    name: "Robotex",
    logo: "/images/sponsor-home/robotex.png",
    href: "https://www.robotex-india.in/",
  },
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
            <span className="eyebrow">Industry Partners</span>
          </div>
          <div className="sponsor-window">
            <div className="sponsor-track">
              {[0, 1].map((group) => (
                <div
                  className="sponsor-group"
                  key={group}
                  aria-hidden={group === 1}
                >
                  {sponsors.map((sponsor) => (
                    <a
                      className="sponsor-item"
                      href={sponsor.href}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={group === 1 ? -1 : undefined}
                      aria-label={`Visit ${sponsor.name}`}
                      key={`${group}-${sponsor.name}`}
                    >
                      <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                    </a>
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
            <Link to="/projects" className="text-link">
              Explore our work <Arrow />
            </Link>
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

        <section className="cad-showcase" id="cad-viewer">
          <div className="cad-copy">
            <h2>
              Join us on our <Link to="/robocon">ROBOCON</Link> journey.
            </h2>
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
            <h2>Explore our Workshops.</h2>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>
            Power our
            <br />
            <span className="accent-text">next</span> breakthrough.
          </h2>
          <Link to="/contact" className="contact-link">
            Get in touch <Arrow />
          </Link>
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
          <span>© 2026 Robot Study Circle</span>
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
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
