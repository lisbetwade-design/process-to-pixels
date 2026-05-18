import { useEffect } from 'react'
import Nav from '../components/Nav'
import DesignersHero from '../components/DesignersHero'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'
import useSEO from '../hooks/useSEO'

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://processtopixels.studio/designers#page',
  name: 'Free UX/UI Design Resources, Templates & Guides',
  description: 'Free Figma templates, UX research question banks, AI design guides, and Notion resources for UX/UI designers and design teams.',
  url: 'https://processtopixels.studio/designers',
  author: { '@type': 'Person', name: 'Lisa Demchenko', url: 'https://processtopixels.studio' },
  hasPart: [
    { '@type': 'CreativeWork', name: 'The Complete Claude AI Guide for UX/UI Designers', url: 'https://pixelandprocess.gumroad.com/l/claudeguide', isAccessibleForFree: true },
    { '@type': 'CreativeWork', name: 'UX/UI AI Library', url: 'https://pixelandprocess.gumroad.com/l/aipowereddesign' },
    { '@type': 'CreativeWork', name: 'AI-Powered UX Design Workflows Guide', url: 'https://pixelandprocess.gumroad.com/l/aipowereddesignguide' },
    { '@type': 'CreativeWork', name: 'UX/UI Learning Resources', url: 'https://pixelandprocess.gumroad.com/l/uxuiresources', isAccessibleForFree: true },
    { '@type': 'CreativeWork', name: 'User Research Question Bank', url: 'https://pixelandprocess.gumroad.com/l/uxrquestions', isAccessibleForFree: true },
    { '@type': 'CreativeWork', name: 'UX Strategy Template', url: 'https://www.figma.com/community/file/1574775956496353641/ux-strategy-template', isAccessibleForFree: true },
    { '@type': 'CreativeWork', name: 'Usability Testing Insights & Analysis Template', url: 'https://www.figma.com/community/file/1500967805449223311/usability-testing-insights-analysis-template', isAccessibleForFree: true },
  ],
}

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
    badge: 'Guide',
    title: 'AI-Powered UX Design Workflows Guide',
    desc: 'A practical guide to embedding AI across your UX workflow — from research synthesis and ideation to design exploration and developer handoff.',
    tag: 'Guide',
    price: '$15',
    url: 'https://pixelandprocess.gumroad.com/l/aipowereddesignguide',
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
    items: ['The Complete Claude AI Guide', 'UX/UI AI Library', 'AI-Powered UX Design Workflows Guide'],
  },
  {
    num: '03',
    title: 'Notion Resources',
    desc: 'Ready-to-use Notion databases',
    items: ['UX/UI Learning Resources', 'User Research Question Bank'],
  },
]

export default function Designers() {
  useSEO({
    title: 'Free UX/UI Design Resources, Templates & Guides | Process to Pixels',
    description: 'Free Figma templates, UX research question banks, Claude AI guides, and Notion databases for UX/UI designers and design teams. Curated by Lisa Demchenko.',
    path: '/designers',
    structuredData: STRUCTURED_DATA,
  })

  useEffect(() => {
    document.documentElement.style.setProperty('--nav-height', '52px')
  }, [])

  useScrollReveal()

  const regularResources = RESOURCES.filter(r => !r.wide)
  const featuredResource = RESOURCES.find(r => r.wide)

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <DesignersHero />


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
      <section id="resources" className="section" style={{ background: '#D9E2BD' }}>
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)', marginBottom: '0' }}>
          Everything you need to{' '}
          <em className="text-accent" style={{ fontStyle: 'normal' }}>grow</em>
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
                <h3 style={{ fontFamily: '"Boldonse", "Playfair Display", Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '16px' }}>
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
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
          Browse by <em className="text-accent" style={{ fontStyle: 'normal' }}>topic</em>
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
      <section id="newsletter" className="section newsletter-section ghost-grid" style={{ position: 'relative', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '640px', position: 'relative', zIndex: 1 }}>
          <p className="label-sm reveal" style={{ color: 'var(--ink-faint)', marginBottom: '20px' }}>
            Newsletter
          </p>
          <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
            Design insights,{' '}
            <em className="text-accent" style={{ fontStyle: 'normal' }}>monthly</em>
          </h2>
          <p className="reveal" style={{ marginTop: '20px', fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '0' }}>
            Practical UX tips, career advice, new resources, and honest reflections from working in design for 6+ years. No spam, ever.
          </p>

          <form className="reveal" onSubmit={e => e.preventDefault()} style={{ marginTop: '32px' }}>
            <div className="nl-form">
              <input type="email" className="nl-input" style={{ background: 'rgba(26,23,48,.04)', border: '1px solid rgba(26,23,48,.15)', color: 'var(--ink)' }} placeholder="your@email.com" />
              <input type="text" className="nl-input" style={{ background: 'rgba(26,23,48,.04)', border: '1px solid rgba(26,23,48,.15)', color: 'var(--ink)' }} placeholder="First Name" />
            </div>
            <div style={{ marginTop: '12px' }}>
              <button type="submit" className="btn btn-accent" style={{ color: '#fff' }}>
                Subscribe →
              </button>
            </div>
          </form>

          <p className="reveal" style={{ marginTop: '20px', fontSize: '12px', color: 'var(--ink-faint)' }}>
            Join 500+ designers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
