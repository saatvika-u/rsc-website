import AnimatedCount from "../../components/AnimatedCount"
import { PageShell } from "../../components/RouteChrome"

const patents = [
  {
    title:
      "An Arrangement to Maintain Stability of a Body Mounted on a Rocker-Bogie Mechanism",
    registrationLabel: "Patent No",
    registration: "362205 (2212/MUM/2014)",
    date: "07.07.2014",
    letter: "SI. No. 022112492 Dt 19th March 2021",
    caption: "Patented Rocker Bogie Mechanism",
  },
  {
    title: "An Autonomous In-Pipe Inspection Robotic System",
    registrationLabel: "Application No",
    registration: "202121031359",
    date: "13.07.2021",
    caption: "In-Pipe Inspection Robot",
  },
  {
    title: "Non-Conventional Calibration System for Industrial Robots",
    registrationLabel: "Application No",
    registration: "202121012080",
    date: "22.03.2021",
    caption: "Calibration System for Industrial Robots",
  },
  {
    title: "An Automatic Bone Alignment System",
    registrationLabel: "Application No",
    registration: "202121047545",
    date: "19.10.2021",
    caption: "Bone Alignment System",
  },
]

function PatentMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64">
      <path d="M20 8h19l9 9v39H20z" />
      <path d="M39 8v10h9M27 29h14M27 37h14M27 45h9" />
    </svg>
  )
}

export default function PatentsPage() {
  return (
    <PageShell
      className="research-route patent-route"
      title={
        <>
          Patents published: <AnimatedCount value={patents.length} inline />
        </>
      }
    >
      <section className="patent-list" aria-label="RSC patents">
        {patents.map((patent) => (
          <article key={patent.registration}>
            <div className="patent-index">
              <PatentMark />
              <strong>{patent.caption}</strong>
            </div>
            <div className="patent-content">
              <h2>{patent.title}</h2>
              <dl>
                <div>
                  <dt>{patent.registrationLabel}</dt>
                  <dd>{patent.registration}</dd>
                </div>
                <div>
                  <dt>Date</dt>
                  <dd>{patent.date}</dd>
                </div>
                {patent.letter && (
                  <div>
                    <dt>Letters No</dt>
                    <dd>{patent.letter}</dd>
                  </div>
                )}
              </dl>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
