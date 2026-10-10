import { FormEvent, useState } from "react"
import { Arrow, PageShell } from "../../components/RouteChrome"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <PageShell
      className="contact-route"
      eyebrow="Contact us"
      title="Let's collaborate."
      intro="Explore our CSR initiatives and connect with the Robotics & Automation Lab for sponsorships, workshops, and collaboration opportunities."
    >
      <section className="contact-layout">
        <div className="contact-details">
          <span className="contact-label">Visit the lab</span>
          <address>
            Robotics &amp; Automation Lab,
            <br />
            Production Department,
            <br />
            College of Engineering Pune,
            <br />
            Wellesley Road, Shivajinagar, Pune — 411 005
          </address>
          <div className="contact-methods">
            <div>
              <span>Telephone</span>
              <a href="tel:02025507366">020-25507366</a>
            </div>
            <div>
              <span>Secretary</span>
              <div>
                <strong>Shreya Muley</strong>
                <a href="tel:+919527424416">+91 9527424416</a>
              </div>
            </div>
            <div>
              <span>Mail</span>
              <a href="mailto:rsc@coep.ac.in">rsc@coep.ac.in</a>
            </div>
          </div>
          <div className="faculty-advisor">
            <b className="contact-label">Faculty advisor</b>
            <strong>Dr. S. S. Ohol</strong>
            <p>
              Department of Mechanical Engineering
            </p>
            <a href="tel:02025507229">020-25507229</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h2>Send us a message</h2>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={6}
              placeholder="How can we help?"
            />
          </label>
          <button type="submit">
            {sent ? "Message ready to send" : "Send message"} <Arrow />
          </button>
          {sent && (
            <p>
              Please email the message to{" "}
              <a href="mailto:rsc@coep.ac.in">rsc@coep.ac.in</a>.
            </p>
          )}
        </form>
      </section>
    </PageShell>
  )
}
