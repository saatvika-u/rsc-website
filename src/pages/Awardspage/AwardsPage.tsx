import { Link } from "react-router"
import { Arrow, PageShell } from "../../components/RouteChrome"

export default function AwardsPage() {
  return (
    <PageShell
      eyebrow="Awards & achievements"
      title="Measured in more than medals."
      intro="Recognition earned through hard problems, disciplined engineering and teams that keep showing up."
    >
      <section className="award-grid">
        <article>
          <span>2017</span>
          <strong>6th</strong>
          <h2>International ROBOCON</h2>
          <p>Tokyo, Japan</p>
        </article>
        <article>
          <span>2017</span>
          <strong>Winner</strong>
          <h2>Nagase Award</h2>
          <p>International ROBOCON</p>
        </article>
        <article>
          <span>2017</span>
          <strong>Champion</strong>
          <h2>National ROBOCON</h2>
          <p>Represented India internationally</p>
        </article>
      </section>
      <div className="route-more">
        <Link to="/distinguished-alumni">
          Meet distinguished alumni <Arrow />
        </Link>
      </div>
    </PageShell>
  )
}
