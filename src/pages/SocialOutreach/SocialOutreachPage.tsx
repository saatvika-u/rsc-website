import { PageShell } from "../../components/RouteChrome"

const programs = [
  {
    title: "Electronics and Robotics Workshops",
    date: "June–July 2024",
    dateTime: "2024-06",
    location: "Camp Education Society School",
    summary:
      "Empowering 9th and 10th-grade students with technological knowledge.",
    highlights: [
      "Conducted two to three sessions every week",
      "Covered electronics and robotics fundamentals",
      "Provided hands-on learning experiences",
      "Introduced sensor-based applications",
      "Motivated students towards STEM disciplines",
    ],
    facilitators: [
      "Tejas Nirwan",
      "Laya Kshetrapal",
      "Kavish Patil",
      "Saatvika Udayakumar",
    ],
  },
  {
    title: "Mathematics Day Robotics Demonstration",
    date: "December 22nd, 2022",
    dateTime: "2022-12-22",
    location: "COEP",
    summary: "Exploring the intersection of mathematics and robotics.",
    highlights: [
      "Showcased the NAO humanoid robot, Genibo robot and a drone",
      "Demonstrated mathematical principles in robotics",
      "Highlighted applications across various industries",
      "Inspired students to explore STEM careers",
      "Provided an interactive learning experience",
    ],
    facilitators: ["Ayush Amborkar", "Atharv Neglur"],
  },
  {
    title: "Community Outreach Program – Mangaon, Raigad",
    date: "October 15th, 2022",
    dateTime: "2022-10-15",
    location: "Mangaon, Raigad",
    summary:
      "A transformative initiative to bridge technological gaps in rural communities.",
    highlights: [
      "Collaborated with NSS at COEP",
      "Demonstrated advanced robots including the NAO-6 humanoid, RoboSapien and Genibo",
      "Provided hands-on interaction with cutting-edge robotics",
      "Inspired local students about the potential of AI and robotics",
      "Connected the technical community with rural areas",
    ],
    facilitators: [
      "Koustubh Anturkar",
      "Chinmay Patil",
      "Ayush Amborkar",
      "Atharv Neglur",
    ],
  },
]

export default function SocialOutreachPage() {
  return (
    <PageShell
      eyebrow="Community outreach"
      title="Technology shared beyond the lab."
      intro="Hands-on programs, demonstrations and workshops that make robotics education accessible to students and communities."
      className="outreach-route"
    >
      <section className="outreach-intro">
        <span>Community outreach</span>
        <h2>Learning becomes meaningful when it reaches everyone.</h2>
      </section>

      <section className="outreach-programs" aria-label="Outreach programs">
        {programs.map((program, index) => (
          <article key={program.title}>
            <div className="outreach-program-meta">
              <span>{String(programs.length - index).padStart(2, "0")}</span>
              <time dateTime={program.dateTime}>{program.date}</time>
              <p>{program.location}</p>
            </div>

            <div className="outreach-program-content">
              <h2>{program.title}</h2>
              <p className="outreach-program-summary">{program.summary}</p>
              <ul className="outreach-highlights">
                {program.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="outreach-facilitators">
                <h3>Facilitators</h3>
                <ul>
                  {program.facilitators.map((facilitator) => (
                    <li key={facilitator}>{facilitator}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
