import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()
  const isDesigners = pathname === '/designers'

  const links = isDesigners
    ? ['Resources', 'Categories', 'Newsletter']
    : ['Services', 'Process', 'Pricing', 'About', 'Contact']

  return (
    <footer className="footer">
      <p className="label-sm" style={{ color: 'var(--ink-faint)' }}>
        © 2025 Lisa Demchenko. All rights reserved. — processtopixels.studio
      </p>
      <nav className="footer-links">
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={e => {
              e.preventDefault()
              document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {l}
          </a>
        ))}
      </nav>
    </footer>
  )
}
