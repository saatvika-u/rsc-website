import { ReactNode, useEffect, useState } from "react"
import { Link } from "react-router"

const navLinks = [
  ["/journey", "Journey"],
  ["/team", "Team"],
  ["/projects", "Projects"],
  ["/robocon", "ROBOCON"],
  ["/competitions", "Competitions"],
  ["/sponsors", "Sponsors"],
  ["/awards", "Achievements"],
]

export function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function PageLogo() {
  return (
    <Link
      className="landing-nav-logo"
      to="/"
      aria-label="COEP Technological University and Robot Study Circle home"
    >
      <img
        src="/images/coepwhitelogo.png"
        alt="COEP Tech and Robot Study Circle"
      />
    </Link>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d={open ? "M5 5l14 14M19 5 5 19" : "M3 7h18M3 12h18M3 17h18"}
      />
    </svg>
  )
}

export function PageHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="navbar">
      <PageLogo />
      <nav
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
      >
        {navLinks.map(([to, label]) => (
          <Link key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          className="nav-contact"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact us
        </Link>
      </nav>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={open} />
      </button>
    </header>
  )
}

function PageFooter() {
  return (
    <footer className="route-footer">
      <Link
        className="footer-rsc-logo"
        to="/"
        aria-label="Robot Study Circle home"
      >
        <img src="/images/rsc_footer.png" alt="Robot Study Circle" />
      </Link>
      <div className="route-footer-motto">
        <p>Explore. Learn. Build. Share.</p>
        <span>© 2026 Robot Study Circle</span>
      </div>
    </footer>
  )
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow?: string
  title: string
  intro: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className ? `route-page ${className}` : "route-page"}>
      <PageHeader />
      <main>
        <section className="route-hero">
          {eyebrow && <span>{eyebrow}</span>}
          <h1>{title}</h1>
          <p>{intro}</p>
        </section>
        <div className="route-content">{children}</div>
      </main>
      <PageFooter />
    </div>
  )
}

export function InterimPage({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro: string
}) {
  return (
    <PageShell eyebrow={eyebrow} title={title} intro={intro}>
      <section className="interim">
        <span>RSC archive</span>
        <h2>This page now has its own module and permanent URL.</h2>
        <p>
          The route is ready for its complete media and project archive to be
          connected independently.
        </p>
        <Link to="/contact">
          Contact RSC <Arrow />
        </Link>
      </section>
    </PageShell>
  )
}
