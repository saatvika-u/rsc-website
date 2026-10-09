import { Arrow, PageShell } from "../../components/RouteChrome"

const sponsors = [
  "Siemens PLM",
  "Volkswagen",
  "Janatics",
  "Schmalz",
  "P&F",
  "Robolab Technologies",
]

export default function SponsorsPage() {
  return (
    <PageShell
      eyebrow="Industry collaborators"
      title="Partners power the next build."
      intro="Industry support gives student engineers access to better tools, deeper expertise and bigger possibilities."
    >
      <section className="partner-grid">
        {sponsors.map((sponsor, index) => (
          <div key={sponsor}>
            <span>0{index + 1}</span>
            <strong>{sponsor}</strong>
          </div>
        ))}
      </section>
      <div className="route-more">
        <a href="mailto:rsc@coep.ac.in">
          Become a partner <Arrow />
        </a>
      </div>
    </PageShell>
  )
}
