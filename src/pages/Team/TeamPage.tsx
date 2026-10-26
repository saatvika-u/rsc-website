import { PageShell } from "../../components/RouteChrome"

const btechMembers = [
  "Saatvika Udayakumar",
  "Laya Kshetrapal",
  "Vedant Kawarkhe",
  "Atharv Divekar",
  "Saleel Mutalik",
  "Tejas Nirwan",
  "Samruddhi Nighrunkar",
  "Shishir Shiragave",
  "Dhiraj Patil",
  "Chayan Nahar",
  "Chandan Rathore",
]

const thirdYearMembers = [
  "Gaurav Ghodam",
  "Vedant Pawar",
  "Suparshv Patil",
  "Sanskar Patil",
  "Shrisha Saundankar",
  "Shreyas Narade",
  "Pranav Pawar",
  "Prathamesh Kothawale",
  "Kaveri Bramhne",
  "Sumit Sonawane",
  "Pratik Suryawanshi",
  "Yadnyesh Kuware",
  "Varad Malekar",
]

const secondYearMembers = [
  "Aditya Jadhav",
  "Vedansh",
  "Pranav Sarang",
  "Amogh",
  "Shreyash",
  "Vidushi Mantoo",
  "Ayush",
  "Narayani Jawale",
  "Sanjana Ijeri",
  "Aryan Divekar",
  "Pranav C",
  "Sarvesh",
  "Riddhi Bendale",
  "Varun Godbole",
  "Aditya S",
  "Delesh",
  "Maithili",
  "Saish",
  "Prithviraj Kamble",
  "Malhar Sarve",
  "Meet Gupta",
  "Pranitee",
  "Harshal",
  "Om Shinde",
  "Janak",
  "Sarang Gaikwad",
  "Anjali Apradh",
]

function MemberGroup({
  title,
  members,
}: {
  title: string
  members: string[]
}) {
  return (
    <section className="team-member-group">
      <h3>{title}</h3>
      <ul>
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </section>
  )
}

export default function TeamPage() {
  return (
    <PageShell className="team-route">
      <section className="team-roster" aria-labelledby="team-2027">
        <header>
          <span>Current team</span>
          <h2 id="team-2027">Team 2027</h2>
        </header>
        <img
          className="team-roster-photo"
          src="/images/team/team26.jpeg"
          alt="Robot Study Circle Team 2027"
          loading="lazy"
        />
        <div className="team-advisor">
          <span>Faculty Advisor</span>
          <img
            src="/images/team/FacAdvisor-Ohol.jpg"
            alt="Dr. S. S. Ohol, Faculty Advisor"
            loading="lazy"
          />
          <strong>Dr. S. S. Ohol</strong>
        </div>
        <section className="team-member-group team-btech-group">
          <h3>B.Tech</h3>
          <div className="team-leadership">
            <div>
              <span>Secretary</span>
              <strong>Shreya Muley</strong>
            </div>
            <div>
              <span>Joint Secretary</span>
              <strong>Kavish Patil</strong>
            </div>
          </div>
          <ul>
            {btechMembers.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </section>
        <MemberGroup title="Third Year" members={thirdYearMembers} />
        <MemberGroup title="Second Year" members={secondYearMembers} />
      </section>
    </PageShell>
  )
}
