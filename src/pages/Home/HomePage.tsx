import { useState } from "react"
import { Link, useLocation } from "react-router"
import { PageHeader } from "../../components/RouteChrome"
import StlViewer from "../../components/StlViewer"

const heroImage = "/images/hero.jpg"

// Edit each workshop title and paragraph here.
const workshopSlides = [
  {
    image: "/images/workshop/workshop-robot-simulation-bootcamp.jpeg",
    title: "Robotics Simulation Bootcamp",
    text: "A focused bootcamp where students explored professional robotics simulation tools, digital environments and industry-led approaches to building smarter robotic systems.",
    alt: "Students and facilitators at the Robotics Simulation Bootcamp",
  },
  {
    image: "/images/workshop/workshop-nugenix.jpeg",
    title: "Mobile Manipulator Workshop",
    text: "An expert-led workshop introducing mobile manipulators, sensor integration and open-source software through live demonstrations of advanced robotic arms.",
    alt: "Live mobile manipulator demonstration during the Nugenix workshop",
  },
  {
    image: "/images/workshop/workshop-alumni.jpeg",
    title: "Distinguished Alumni Session",
    text: "A conversation with an RSC alumnus connecting classroom engineering with real-world robotics, automation and the lessons learned while building a career in technology.",
    alt: "Distinguished Robot Study Circle alumnus receiving a commemorative plaque",
  },
  {
    image: "/images/workshop/workshop-campedusociety.png",
    title: "School Robotics Workshop",
    text: "A hands-on outreach workshop where school students learned electronics and robotics fundamentals before bringing their ideas to life through a working robot.",
    alt: "Students presenting their robot at Camp Education Society School",
  },
]

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
  const [activeWorkshop, setActiveWorkshop] = useState(0)
  const workshop = workshopSlides[activeWorkshop]

  const showWorkshop = (offset: number) => {
    setActiveWorkshop(
      (current) =>
        (current + offset + workshopSlides.length) % workshopSlides.length,
    )
  }

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
                {["Robot", "Study", "Circle"].map((word) => (
                  <span
                    className="hero-title-word"
                    aria-label={word}
                    key={word}
                  >
                    {[...word].map((letter, index) => (
                      <span aria-hidden="true" key={`${letter}-${index}`}>
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
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
            <figure className="intro-team-image">
              <img
                src="/images/robocon/robocon26-team.jpeg"
                alt="Robot Study Circle's ROBOCON 2026 team"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="intro-copy">
            <p className="lead">
              Robot Study Circle, known as <strong>RSC</strong>, is the
              prestigious Robotics Club of COEP and one of the best robotics
              clubs in India.
            </p>
            <p className="intro-legacy">22 years of legacy…</p>
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

        <section className="team" aria-label="Workshops">
          <div className="team-image">
            <div
              className="workshop-slider-track"
              style={{ transform: `translateX(-${activeWorkshop * 100}%)` }}
            >
              {workshopSlides.map((slide, index) => (
                <div className="workshop-slide" key={slide.image}>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
            <div className="workshop-image-arrows">
              <button
                type="button"
                aria-label="Previous workshop"
                onClick={() => showWorkshop(-1)}
              >
                <Arrow />
              </button>
              <button
                type="button"
                aria-label="Next workshop"
                onClick={() => showWorkshop(1)}
              >
                <Arrow />
              </button>
            </div>
          </div>
          <div className="team-copy">
            <h2>Explore our Workshops.</h2>
            <h3>{workshop.title}</h3>
            <p className="workshop-description">{workshop.text}</p>
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
      </footer>
    </div>
  )
}
