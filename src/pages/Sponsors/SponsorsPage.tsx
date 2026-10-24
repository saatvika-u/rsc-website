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
  {
    name: "Wipro Pari",
    logo: "/images/sponsors-all/wipro-pari.png",
    href: "https://wipropari.com/",
  },
  {
    name: "Pepperl + Fuchs",
    logo: "/images/sponsors-all/pepperl+fuchs.png",
    href: "https://www.pepperl-fuchs.com/en-in",
  },
  {
    name: "Janatics",
    logo: "/images/sponsors-all/janatics-pneumatic.jpeg",
    href: "https://www.janatics.com/",
  },
  {
    name: "Siemens",
    logo: "/images/sponsors-all/siemens.jpg",
    href: "https://www.siemens.com/en-us/company/about/businesses/digital-industries/",
  },
]

export default function SponsorsPage() {
  return (
    <PageShell
      className="sponsor-route"
      eyebrow="Industry collaborators"
      title="Partners power the next build."
    >
      <section className="sponsor-section" aria-labelledby="current-sponsors">
        <div className="sponsor-section-heading">
          <span id="current-sponsors">Current sponsors</span>
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
          <span id="past-sponsors">Past sponsors</span>
        </div>
        <div className="current-partner-grid past-logo-grid">
          {pastSponsors.map((sponsor) => (
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

    </PageShell>
  )
}
