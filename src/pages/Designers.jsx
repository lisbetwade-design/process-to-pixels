import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ClientCarousel from '../components/ClientCarousel'
import useScrollReveal from '../hooks/useScrollReveal'

// Purple theme for designers page
const RESOURCES = [
  {
    badge: 'Guide',
    title: 'The Complete Claude AI Guide for UX/UI Designers',
    desc: 'A beginner-friendly introduction to using Claude AI in your design workflow — covering practical prompts for research, ideation, and three learning paths from basic setup through building with code.',
    tag: 'Guide',
    price: 'Free',
    url: 'https://pixelandprocess.gumroad.com/l/claudeguide',
    wide: true,
    includes: ['What Claude is & how designers can use it', 'Practical prompts for research & ideation', '3 learning paths from beginner to advanced', 'Building with code — no dev background needed', 'Free to download, no email required'],
  },
  {
    badge: 'Toolkit',
    title: 'UX/UI AI Library',
    desc: '10+ Custom GPT Assistants for research planning, ideation, copywriting, and design feedback — with prompt libraries and structured workflows.',
    tag: 'Toolkit',
    price: '$5',
    url: 'https://pixelandprocess.gumroad.com/l/aipowereddesign',
  },
  {
    badge: 'Notion',
    title: 'UX/UI Learning Resources',
    desc: '100+ curated resources for UX/UI designers — articles, books, courses, newsletters, and YouTube channels covering research, systems, and writing.',
    tag: 'Notion',
    price: 'Free',
    url: 'https://pixelandprocess.gumroad.com/l/uxuiresources',
  },
  {
    badge: 'Notion',
    title: 'User Research Question Bank',
    desc: '50+ expert-crafted questions organised by category, research type, and project stage — ready for discovery interviews, usability testing, and screening sessions.',
    tag: 'Notion + PDF',
    price: 'Free',
    url: 'https://pixelandprocess.gumroad.com/l/uxrquestions',
  },
  {
    badge: 'Figma',
    badgeClass: 'figma',
    title: 'UX Strategy Template',
    desc: 'A Figma community template for planning and documenting your UX strategy — structure your thinking before jumping into screens.',
    tag: 'Template',
    price: 'Free',
    url: 'https://www.figma.com/community/file/1574775956496353641/ux-strategy-template',
  },
  {
    badge: 'Figma',
    badgeClass: 'figma',
    title: 'Usability Testing Insights & Analysis',
    desc: 'Move from raw research notes to strategic, prioritised insights using a five-step process — analyse findings systematically, not reactively.',
    tag: 'Template',
    price: 'Free',
    url: 'https://www.figma.com/community/file/1500967805449223311/usability-testing-insights-analysis-template',
  },
]

const CATEGORIES = [
  {
    num: '01',
    title: 'Figma Templates',
    desc: 'Free templates on Figma Community',
    items: ['UX Strategy Template', 'Usability Testing Insights & Analysis'],
  },
  {
    num: '02',
    title: 'AI Resources',
    desc: 'Guides & toolkits for AI-powered design',
    items: ['The Complete Claude AI Guide', 'UX/UI AI Library'],
  },
  {
    num: '03',
    title: 'Notion Resources',
    desc: 'Ready-to-use Notion databases',
    items: ['UX/UI Learning Resources', 'User Research Question Bank'],
  },
]

export default function Designers() {
  useEffect(() => {
    document.title = 'Process to Pixels — For Designers'
    document.documentElement.style.setProperty('--nav-height', '52px')
  }, [])

  useScrollReveal()

  const regularResources = RESOURCES.filter(r => !r.wide)
  const featuredResource = RESOURCES.find(r => r.wide)

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section style={{ borderBottom: '1px solid var(--cream-dark)' }}>
        <div className="designers-hero">
          {/* Left */}
          <div className="designers-hero-left">
            <span className="hero-eyebrow animate-fsu anim-d1">For Designers</span>

            <h1 className="display-xl animate-fsu anim-d2" style={{ color: 'var(--ink)', marginBottom: '28px' }}>
              Resources to{' '}
              <em className="text-accent" style={{ fontStyle: 'italic' }}>elevate</em>{' '}
              your practice
            </h1>

            <p className="animate-fsu anim-d3" style={{ fontSize: '17px', color: 'var(--ink-mid)', lineHeight: '1.75', maxWidth: '480px', marginBottom: '40px' }}>
              Free templates, frameworks, and guides from 6+ years of working across SaaS, healthcare, fashion, and beyond.
            </p>

            <div className="animate-fsu anim-d4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="#resources" className="btn btn-dark"
                onClick={e => { e.preventDefault(); document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Browse Resources
              </a>
              <a href="#newsletter" className="btn btn-outline"
                onClick={e => { e.preventDefault(); document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Join Newsletter
              </a>
            </div>

            <div className="animate-fsu anim-d5" style={{ display: 'flex', gap: '0', border: '1px solid var(--cream-dark)' }}>
              {[
                { label: 'Resources', value: '6' },
                { label: 'Format', value: 'Free' },
                { label: 'Updates', value: 'Monthly' },
              ].map((m, i) => (
                <div key={m.label} style={{
                  flex: 1, padding: '16px 20px',
                  borderRight: i < 2 ? '1px solid var(--cream-dark)' : 'none',
                }}>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '4px' }}>{m.label}</p>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="designers-hero-right" style={{ background: 'var(--cream-dark)', padding: '56px' }}>
            {regularResources.slice(0, 3).map((r, i) => (
              <div key={r.title} className="animate-fsu" style={{
                animationDelay: `${0.2 + i * 0.15}s`,
                opacity: 0,
                background: 'var(--cream)',
                padding: '28px 28px',
                border: '1px solid var(--cream-dark)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}>
                <span className={`resource-badge ${r.badgeClass || ''}`}>{r.badge}</span>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>{r.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: '1.65' }}>{r.desc.slice(0, 80)}…</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Format strip ── */}
      <div className="format-strip">
        {['All', 'Figma Templates', 'Guides', 'AI', 'Notion'].map((f, i) => (
          <span key={f} className={`format-item ${i === 0 ? 'active' : ''}`}>
            {i === 0 && <span className="format-dot" />}
            {f}
          </span>
        ))}
      </div>

      {/* ── Resources ── */}
      <section id="resources" className="section">
        <p className="section-marker reveal" style={{ marginBottom: '16px' }}>Resources</p>
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)', marginBottom: '0' }}>
          Everything you need to{' '}
          <em className="text-accent" style={{ fontStyle: 'italic' }}>grow</em>
        </h2>

        <div className="resources-grid reveal">
          {/* Featured wide card */}
          {featuredResource && (
            <a
              href={featuredResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card wide"
              style={{ textDecoration: 'none' }}
            >
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
                  <span className={`resource-badge ${featuredResource.badgeClass || ''}`} style={{ margin: 0 }}>
                    {featuredResource.badge}
                  </span>
                  <span className="resource-badge free" style={{ margin: 0 }}>Featured</span>
                  <span className="resource-badge free" style={{ margin: 0 }}>{featuredResource.price}</span>
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>
                  {featuredResource.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: '1.75' }}>{featuredResource.desc}</p>
                <div style={{ marginTop: '28px' }}>
                  <span className="btn btn-dark">Get it free →</span>
                </div>
              </div>
              <div>
                <p className="label-sm" style={{ color: 'var(--ink-faint)', marginBottom: '16px' }}>What's included</p>
                <ul className="resource-includes">
                  {featuredResource.includes.map(inc => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>
              </div>
            </a>
          )}

          {/* Regular cards */}
          {regularResources.map(r => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
              style={{ textDecoration: 'none' }}
            >
              <span className="resource-arrow">→</span>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span className={`resource-badge ${r.badgeClass || ''}`} style={{ margin: 0 }}>{r.badge}</span>
                {r.price && (
                  <span className="resource-badge free" style={{ margin: 0 }}>{r.price}</span>
                )}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
                {r.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: '1.7' }}>{r.desc}</p>
              <div style={{ marginTop: '20px' }}>
                <span className="tag">{r.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="section" style={{ paddingTop: 0 }}>
        <p className="section-marker reveal">Categories</p>
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
          Browse by <em className="text-accent" style={{ fontStyle: 'italic' }}>topic</em>
        </h2>

        <div className="categories-grid reveal">
          {CATEGORIES.map(c => (
            <div key={c.num} className="category-card">
              <span className="category-num">{c.num}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>{c.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', marginBottom: '16px' }}>{c.desc}</p>
                <ul className="category-items">
                  {c.items.map(item => (
                    <li key={item}>
                      <span>{item}</span>
                      <span style={{ color: 'var(--ink-faint)', fontSize: '12px' }}>→</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section id="newsletter" className="section newsletter-section ghost-grid" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '640px', position: 'relative', zIndex: 1 }}>
          <p className="label-sm reveal" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
            Newsletter
          </p>
          <h2 className="display-lg reveal" style={{ color: '#fff' }}>
            Design insights,{' '}
            <em className="text-accent-on-dark" style={{ fontStyle: 'italic' }}>monthly</em>
          </h2>
          <p className="reveal" style={{ marginTop: '20px', fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '0' }}>
            Practical UX tips, career advice, new resources, and honest reflections from working in design for 6+ years. No spam, ever.
          </p>

          <form className="reveal" onSubmit={e => e.preventDefault()} style={{ marginTop: '32px' }}>
            <div className="nl-form">
              <input type="email" className="nl-input" placeholder="your@email.com" />
              <input type="text" className="nl-input" placeholder="First Name" />
            </div>
            <div style={{ marginTop: '12px' }}>
              <button type="submit" className="btn btn-accent" style={{ color: '#fff' }}>
                Subscribe →
              </button>
            </div>
          </form>

          <p className="reveal" style={{ marginTop: '20px', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            Join 500+ designers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
