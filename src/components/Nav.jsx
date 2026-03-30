import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = {
  '/': [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
  ],
  '/designers': [
    { label: 'Resources', href: '#resources' },
    { label: 'Categories', href: '#categories' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
}

export default function Nav() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('')
  const links = NAV_LINKS[location.pathname] || NAV_LINKS['/']
  const isDesigners = location.pathname === '/designers'

  useEffect(() => {
    const handler = () => {
      const sections = links.map(l => l.href.replace('#', ''))
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(id)
          return
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [links])

  return (
    <nav className="nav-root">
      {/* Top bar */}
      <div className="nav-top">
        <Link to="/" className="nav-logo">
          Process to Pixels<span className="text-accent">.</span>
        </Link>
        {isDesigners ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://processtopixels.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-newsletter-link"
            >
              Newsletter
            </a>
            <Link to="/" className="nav-switcher">
              <span className="nav-switcher-dot" />
              For Founders →
            </Link>
          </div>
        ) : (
          <Link to="/designers" className="nav-switcher">
            <span className="nav-switcher-dot" />
            For Designers & Teams →
          </Link>
        )}
      </div>

      {/* Bottom bar — clients page only */}
      {!isDesigners && (
        <div className="nav-bottom">
          <ul className="nav-links">
            {links.map(({ label, href }) => {
              const id = href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === id ? 'active' : ''}
                    onClick={e => {
                      e.preventDefault()
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://processtopixels.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-newsletter-link"
            >
              Newsletter
            </a>
            <a
              href="https://cal.com/elizaveta-demchenko-oz4d4o/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Book a 15 min call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
