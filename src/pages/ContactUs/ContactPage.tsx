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
      eyebrow="Contact us"
      title="We would love to hear from you."
      intro="Contact the Robotics & Automation Lab with membership, collaboration or sponsorship inquiries."
    >
      <section className="contact-layout">
        <div className="contact-details">
          <span>Visit the lab</span>
          <address>
            Robotics &amp; Automation Lab,
            <br />
            Production Department,
            <br />
            College of Engineering Pune,
            <br />
            Wellesley Road, Shivajinagar, Pune — 411 005
          </address>
          <a href="tel:02025507366">020-25507366</a>
          <a href="tel:+919527424416">+91 9527424416</a>
          <a href="mailto:rsc@coep.ac.in">rsc@coep.ac.in</a>
          <div>
            <b>Lab Incharge</b>
            <p>
              Dr. S. S. Ohol
              <br />
              Department of Mechanical Engineering
              <br />
              020-25507229
            </p>
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
