import { PageShell } from "../../components/RouteChrome"

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="One circle. Many disciplines."
      intro="A community of students, faculty, industrial experts and alumni who find pleasure in robotics."
    >
      <section className="copy-grid">
        <h2>A platform for people who want to build the future.</h2>
        <div>
          <p>
            The Robot Study Circle is an undergraduate organization at College
            of Engineering, Pune. It brings like-minded people together to share
            knowledge and create futuristic automated machines.
          </p>
          <p>
            Our objective is to build international-quality robots that prove
            useful in a variety of environments, especially in industry.
          </p>
        </div>
      </section>
      <section className="requirements">
        <span>How can you join?</span>
        <h2>Curiosity is the first requirement.</h2>
        <ol>
          <li>
            <b>01</b>You must be an undergraduate student from COEP.
          </li>
          <li>
            <b>02</b>You must have a genuine interest in robotics.
          </li>
          <li>
            <b>03</b>You should clear the induction process conducted by Team
            RSC.
          </li>
        </ol>
        <p>
          You do not need to know everything about robotics when you begin.
          You&apos;ll learn throughout the year by working on projects and
          interacting with experienced members.
        </p>
      </section>
    </PageShell>
  )
}
