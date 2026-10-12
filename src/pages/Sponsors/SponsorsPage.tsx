import { PageShell } from "../../components/RouteChrome"

const currentSponsors = [
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

const pastSponsors = [
  "Janatics Pneumatic",
  "Pepperl + Fuchs",
  "Robot Technologies",
  "Siemens",
  "Schmalz",
  "Wipro Pari",
  "iRobotics",
  "Robotex",
  "ROHM Semiconductor",
  "KUKA Robotics",
  "Festo",
  "National Instruments",
  "Phoenix Contact",
  "ABB",
  "Bosch Rexroth",
  "Rockwell Automation",
]

export default function SponsorsPage() {
  return (
    <PageShell
      eyebrow="Industry collaborators"
      title="Partners power the next build."
      intro="Industry support gives student engineers access to better tools, deeper expertise and bigger possibilities."
    >
      <section className="sponsor-section" aria-labelledby="current-sponsors">
        <div className="sponsor-section-heading">
          <span>Current sponsors</span>
          <h2 id="current-sponsors">Supporting what we build today.</h2>
        </div>
        <div className="current-partner-grid">
          {currentSponsors.map((sponsor) => (
            <a
              href={sponsor.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${sponsor.name}`}
              key={sponsor.name}
            >
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
            </a>
          ))}
        </div>
      </section>

      <section className="sponsor-section past-sponsor-section" aria-labelledby="past-sponsors">
        <div className="sponsor-section-heading">
          <span>Past sponsors</span>
          <h2 id="past-sponsors">A legacy of industry support.</h2>
        </div>
        <div className="partner-grid past-partner-grid">
          {pastSponsors.map((sponsor, index) => (
            <div key={sponsor}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{sponsor}</strong>
            </div>
          ))}
        </div>
      </section>

    </PageShell>
  )
}
