import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ClientCarousel from '../components/ClientCarousel'
import useScrollReveal from '../hooks/useScrollReveal'
import useSEO from '../hooks/useSEO'

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://processtopixels.studio/#business',
      name: 'Process to Pixels',
      url: 'https://processtopixels.studio',
      description: 'Strategic product design studio offering UX research, product design, design systems, and service design.',
      founder: { '@type': 'Person', name: 'Lisa Demchenko' },
      areaServed: 'Worldwide',
      knowsAbout: ['UX Research', 'Product Design', 'Design Systems', 'Service Design', 'AI-Powered Design'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Design Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UX Research & Strategy', description: 'Deep user research and strategic planning to align business goals with user needs.', price: '2499', priceCurrency: 'USD' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Design', description: 'End-to-end product design from concept to high-fidelity prototypes.', price: '6499', priceCurrency: 'USD' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design Partner', description: 'Ongoing UX consultation and design partnership.', price: '4499', priceCurrency: 'USD' } },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://processtopixels.studio/#lisa',
      name: 'Lisa Demchenko',
      jobTitle: 'Strategic Design Partner',
      url: 'https://processtopixels.studio',
      knowsAbout: ['UX Design', 'Product Design', 'Design Systems', 'User Research', 'SaaS', 'AI-Powered Apps', 'Healthcare Tech'],
      hasCredential: { '@type': 'EducationalOccupationalCredential', description: '6+ years of UX design and strategy experience across 8+ industries' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://processtopixels.studio/#website',
      url: 'https://processtopixels.studio',
      name: 'Process to Pixels',
      description: 'Strategic product design, pixel by pixel.',
    },
  ],
}

export default function Home() {
  useSEO({
    title: 'Lisa Demchenko — Strategic UX & Product Design Partner | Process to Pixels',
    description: 'Strategic product design partner helping startups and businesses create products users love — through UX research, product design, and scalable design systems. 6+ years, 30+ products shipped.',
    path: '/',
    structuredData: STRUCTURED_DATA,
  })

  useEffect(() => {
    document.documentElement.style.setProperty('--nav-height', '94px')
  }, [])

  useScrollReveal()

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section style={{ borderBottom: '1px solid var(--cream-dark)' }}>
        <div className="hero">
          {/* Left */}
          <div className="hero-left">
            <span className="hero-eyebrow animate-fsu anim-d1">Strategic Design Partner</span>

            <h1 className="display-xl animate-fsu anim-d2" style={{ color: 'var(--ink)' }}>
              Strategic Product Design,{' '}
              <em className="text-accent" style={{ fontStyle: 'italic' }}>Pixel by Pixel</em>
            </h1>

            <div className="hero-meta animate-fsu anim-d3">
              <div className="hero-meta-item">
                <p className="hero-meta-label">Services</p>
                <p className="hero-meta-value">UX / Product / Systems</p>
              </div>
              <div className="hero-meta-item">
                <p className="hero-meta-label">Experience</p>
                <p className="hero-meta-value">6+ Years</p>
              </div>
              <div className="hero-meta-item">
                <p className="hero-meta-label">Availability</p>
                <p className="hero-meta-value accent">Q2 2026</p>
              </div>
            </div>

            <p className="animate-fsu anim-d4" style={{ fontSize: '17px', color: 'var(--ink-mid)', lineHeight: '1.75', maxWidth: '480px', marginBottom: '40px' }}>
              Design partner helping businesses create products users love — through research-driven strategy, end-to-end product design, and scalable design systems.
            </p>

            <div className="flex gap-4 animate-fsu anim-d5" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://cal.com/elizaveta-demchenko-oz4d4o/15min" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Book a 15 min call
              </a>
              <a href="#services" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View Services
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-right ghost-grid">
            <div className="status-pill animate-fsu anim-d1">
              <span className="status-dot" />
              1 Spot Available for Q2
            </div>

            <ul className="hero-service-list animate-fsu anim-d2">
              {['UX Research & Strategy', 'Product Design', 'Design Systems', 'Service Design'].map((s, i) => (
                <li key={s} className="hero-service-item">
                  <span className="hero-service-num">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>

            <p className="hero-credit animate-fsu anim-d4">
              Your design partner —{' '}
              <span>Lisa Demchenko</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Client Carousel ── */}
      <ClientCarousel />

      {/* ── Work Grid ── */}
      <div className="work-grid-section">
        {[
          {
            dir: 'up',
            speed: 30,
            items: [
              '/images/Crypto app - light mode.png',
              '/images/Oooff.png',
              '/images/Screening.png',
              '/images/Board.png',
            ],
          },
          {
            dir: 'down',
            speed: 24,
            items: [
              '/images/Kidzhero.png',
              '/images/Energy Data Overview Dashboard.png',
              '/images/Ledger.png',
              '/images/SP app.png',
            ],
          },
          {
            dir: 'up',
            speed: 34,
            items: [
              '/images/Stndby.png',
              '/images/Portfolio bento exploration.png',
              '/images/Peekaboost - Web design.png',
              '/images/SF.png',
            ],
          },
          {
            dir: 'down',
            speed: 27,
            items: [
              '/images/Spray path landing page.png',
              '/images/Medical.png',
              '/images/Modern Optics Website.png',
              '/images/Pixelo.png',
            ],
          },
        ].map((col, ci) => (
          <div
            key={ci}
            className={`work-col work-col-${col.dir}`}
            style={{ animationDuration: `${col.speed}s` }}
          >
            {[...col.items, ...col.items].map((src, ii) => (
              <img
                key={ii}
                src={src}
                alt=""
                className="work-grid-item"
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>

      {/* ── Services ── */}
      <section id="services" className="section">
        <div className="section-header reveal">
          <div>
            <p className="section-marker">Services 01 / 04</p>
            <h2 className="display-lg" style={{ color: 'var(--ink)' }}>
              How I can <em className="text-accent" style={{ fontStyle: 'italic' }}>help</em>
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.75', maxWidth: '360px', alignSelf: 'flex-end' }}>
            Strategic design services that bridge the gap between user needs and business objectives.
          </p>
        </div>

        <div className="services-grid reveal">
          {[
            {
              title: 'UX Research & Strategy',
              desc: 'Deep user research and strategic planning to align business goals with user needs and drive measurable ROI. Reduce risk, validate assumptions, and ensure product-market fit.',
              result: '→ Validate before you build',
              tags: ['User Interviews', 'Competitive Analysis', 'Roadmapping'],
            },
            {
              title: 'Product Design',
              desc: 'End-to-end product design from concept to high-fidelity prototypes that solve real business problems. Increase conversion rates and user engagement by 30–50%.',
              result: '→ +30–50% conversion lift',
              tags: ['Wireframing', 'Prototyping', 'Design Systems'],
            },
            {
              title: 'Service Design',
              desc: 'Holistic service blueprinting and journey mapping to optimize every touchpoint. Improve customer satisfaction and operational efficiency.',
              result: '→ Optimize every touchpoint',
              tags: ['Journey Mapping', 'Blueprints', 'Workshops'],
            },
          ].map((s, i) => (
            <div key={s.title} className="service-card">
              <div>
                <h3 className="display-sm" style={{ marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: '1.7' }}>{s.desc}</p>
                <p className="service-result">{s.result}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <p className="section-marker reveal" style={{ marginBottom: '16px' }}>Client Reviews</p>
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
          Trusted by founders <em className="text-accent" style={{ fontStyle: 'italic' }}>& leaders</em>
        </h2>

        <div className="reviews-grid">
          {/* Featured */}
          <div className="review-card featured reveal" style={{ gridRow: 'span 2' }}>
            <p className="review-quote">
              "Lisa took my chaotic app vision and turned it into something clear and beautiful. She built a full Figma system that brought it to life and made the process enjoyable. She's sharp, fast, and great at balancing structure with creativity."
            </p>
            <div>
              <p className="review-author-name">Morgan Melto</p>
              <p className="review-author-role">Founder & CEO — StndBy</p>
            </div>
          </div>

          {[
            { name: 'Marina Romero', role: 'CMO — o.xyz', text: '"Lisa was truly amazing to work with. She was thoughtful, thorough, and the quality of her work was great. She has amazing attention to detail and is really hard working. Would recommend working with her!"' },
            { name: 'Ashok Srinivasan', role: 'Founder — Byte', text: '"Lisa is a great friend more than a design partner! She understands the client deeply, asks the right questions, and does the changes with a smile. I will surely recommend her."' },
            { name: 'Katrin S.', role: 'Director of Marketing — Thrombosis Ireland', text: '"Lisa has strong creative abilities and could support our charity with her mission focused attitude. She has done an outstanding job and brought excellent ideas to our Design and Marketing teams."' },
          ].map(r => (
            <div key={r.name} className="review-card reveal">
              <p className="review-text">{r.text}</p>
              <div>
                <p className="review-author-name">{r.name}</p>
                <p className="review-author-role">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="section" style={{ paddingTop: 0 }}>
        <div className="section-header reveal">
          <div>
            <p className="section-marker">Process 02 / 04</p>
            <h2 className="display-lg" style={{ color: 'var(--ink)' }}>
              How I <em className="text-accent" style={{ fontStyle: 'italic' }}>work</em>
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.75', maxWidth: '360px', alignSelf: 'flex-end' }}>
            A proven, user-driven methodology that transforms research into strategic design solutions.
          </p>
        </div>

        <div className="process-grid reveal">
          {[
            {
              step: '01',
              title: 'Discovery & Research',
              desc: 'We start by understanding your users, business goals, and competitive landscape. Stakeholder interviews, user surveys, behavioral analytics, market opportunity mapping.',
            },
            {
              step: '02',
              title: 'Strategic Planning',
              desc: 'Transform insights into actionable strategy with clear priorities and measurable success metrics tied directly to your business KPIs.',
            },
            {
              step: '03',
              title: 'Design & Prototyping',
              desc: 'Create user-centered designs from wireframes to fully interactive, developer-ready prototypes — maintaining brand consistency throughout.',
            },
            {
              step: '04',
              title: 'Testing & Iteration',
              desc: 'Validate designs with real users and iterate based on data-driven insights. No guesswork — only evidence-backed decisions that ship with confidence.',
            },
          ].map(p => (
            <div key={p.step} className="process-card">
              <span className="process-step-num">{p.step}</span>
              <h3 className="display-sm" style={{ marginBottom: '16px', paddingRight: '60px' }}>{p.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: '1.7' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Me ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <p className="section-marker reveal">Why Choose Me 03 / 04</p>
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
          More than just a <em className="text-accent" style={{ fontStyle: 'italic' }}>designer</em>
        </h2>
        <p className="reveal" style={{ marginTop: '16px', fontSize: '16px', color: 'var(--ink-soft)', maxWidth: '560px' }}>
          A strategic partner who understands that great UX is about business impact, not just aesthetics.
        </p>

        <div className="why-layout">
          <div className="why-grid reveal">
            {[
              { icon: '◆', title: 'Business-First', desc: 'Every design decision ties back to your business KPIs — revenue, cost reduction, and growth.' },
              { icon: '⚡', title: 'Fast Execution', desc: 'Lean methodology meets design excellence — focused sprints without sacrificing quality.' },
              { icon: '◉', title: 'Real Research', desc: 'Actual user interviews, usability tests, and behavioral analysis — not assumptions.' },
              { icon: '⊘', title: 'Risk Mitigation', desc: 'Validate concepts with real users before full development to avoid costly mistakes.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <p className="why-icon">{w.icon}</p>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: 'var(--ink)' }}>{w.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: '1.65' }}>{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="why-stats reveal">
            {[
              { num: '6+', label: 'Years of UX design and strategy experience' },
              { num: '15+', label: 'Products designed and shipped across 8 industries' },
              { num: '50%', label: 'Average increase in conversion rates and engagement' },
              { num: '8', label: 'Industry verticals: SaaS, Healthcare, Fashion, Energy, Sports, Crypto, and more' },
            ].map(s => (
              <div key={s.num} className="stat-item">
                <p className="stat-num">{s.num}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="section" style={{ paddingTop: 0 }}>
        <p className="section-marker reveal">Pricing 04 / 04</p>
        <div className="services-layout" style={{ alignItems: 'end' }}>
          <div className="reveal">
            <h2 className="display-lg" style={{ color: 'var(--ink)' }}>
              Transparent <em className="text-accent" style={{ fontStyle: 'italic' }}>pricing</em>
            </h2>
            <p style={{ marginTop: '24px', fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.75' }}>
              Flexible engagement models to match your needs and budget. All packages include project management, regular check-ins, and unlimited revisions.
            </p>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Research Sprint */}
          <div className="pricing-card">
            <p className="pricing-price">$2,499</p>
            <p className="pricing-period">/ project</p>
            <p className="pricing-duration">Duration: 1–2 weeks</p>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '20px' }}>UX Research Sprint</h3>
            <div className="pricing-divider" />
            {['User interviews (5–8)', 'Competitive analysis', 'User personas & journey maps', 'Strategic recommendations', 'Research report & presentation'].map(f => (
              <div key={f} className="pricing-feature">
                <span className="pricing-check">✓</span>
                {f}
              </div>
            ))}
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Get Started →
              </a>
            </div>
          </div>

          {/* UX/UI Design — featured */}
          <div className="pricing-card featured">
            <span className="pricing-badge">Most Popular</span>
            <p className="pricing-price">$6,499</p>
            <p className="pricing-period" style={{ color: 'rgba(255,255,255,0.5)' }}>/ project</p>
            <p className="pricing-duration" style={{ color: 'rgba(255,255,255,0.3)' }}>Duration: 4–6 weeks</p>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>UX/UI Design</h3>
            <div className="pricing-divider" style={{ background: 'rgba(255,255,255,0.08)' }} />
            {['Everything in Research Sprint', 'Complete UX/UI design', 'Interactive prototypes', 'Usability testing rounds', 'Design system foundation', 'Developer handoff package'].map(f => (
              <div key={f} className="pricing-feature" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <span className="pricing-check" style={{ color: 'var(--accent-on-dark)' }}>✓</span>
                {f}
              </div>
            ))}
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Get Started →
              </a>
            </div>
          </div>

          {/* Design Partner */}
          <div className="pricing-card">
            <p className="pricing-price">$4,499</p>
            <p className="pricing-period">/ month</p>
            <p className="pricing-duration">Ongoing engagement</p>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '20px' }}>Design Partner</h3>
            <div className="pricing-divider" />
            {['Ongoing UX consultation', 'Regular user testing', 'Analytics & insights', 'Flexible engagement model', 'Priority support access'].map(f => (
              <div key={f} className="pricing-feature">
                <span className="pricing-check">✓</span>
                {f}
              </div>
            ))}
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Get Started →
              </a>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div style={{ marginTop: '64px' }}>
          <p className="label-sm" style={{ color: 'var(--ink-faint)', marginBottom: '24px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Also available</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

            {/* Landing Page */}
            <div className="pricing-card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>Landing Page</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                <p className="pricing-price" style={{ fontSize: '36px' }}>$2,000</p>
                <p className="pricing-period">/ project</p>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--ink-faint)', marginBottom: '20px' }}>10 days</p>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: '1.6', marginBottom: '20px' }}>High-converting landing page designed to impress</p>
              <div className="pricing-divider" />
              {['2–3 design concepts', 'Responsive design', 'Developer-ready handoff'].map(f => (
                <div key={f} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </div>
              ))}
              <div style={{ marginTop: '28px' }}>
                <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  Get Started →
                </a>
              </div>
            </div>

            {/* Design Systems */}
            <div className="pricing-card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>Design Systems</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                <p className="pricing-price" style={{ fontSize: '36px' }}>$3,499</p>
                <p className="pricing-period">/ project</p>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--ink-faint)', marginBottom: '20px' }}>8 – 12 weeks</p>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: '1.6', marginBottom: '20px' }}>Scalable component library & documentation</p>
              <div className="pricing-divider" />
              {['Complete design system', 'Component library', 'Design tokens & guidelines', 'Accessibility standards', 'Developer documentation', 'Training & handoff'].map(f => (
                <div key={f} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </div>
              ))}
              <div style={{ marginTop: '28px' }}>
                <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  Get Started →
                </a>
              </div>
            </div>

            {/* UX Audit */}
            {(() => {
              const [quickAudit, setQuickAudit] = useState(false)
              return (
                <div className="pricing-card" style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>UX Audit</h3>
                    <div className="audit-toggle">
                      <button
                        className={`audit-toggle-btn${!quickAudit ? ' active' : ''}`}
                        onClick={() => setQuickAudit(false)}
                      >Full</button>
                      <button
                        className={`audit-toggle-btn${quickAudit ? ' active' : ''}`}
                        onClick={() => setQuickAudit(true)}
                      >Quick</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                    <p className="pricing-price" style={{ fontSize: '36px' }}>{quickAudit ? '$400' : '$1,299'}</p>
                    <p className="pricing-period">/ project</p>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--ink-faint)', marginBottom: '20px' }}>
                    {quickAudit ? '48 hours' : '1 – 2 weeks'}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {quickAudit
                      ? 'Fast, focused review of your key user flows'
                      : 'Expert review of your existing product experience'}
                  </p>
                  <div className="pricing-divider" />
                  {(quickAudit
                    ? ['Evaluation of main user flows', 'Usability issue report', 'Prioritised suggestions', 'Delivered in 48 hours']
                    : ['Heuristic evaluation', 'Usability issue report', 'Priority fix recommendations', 'Quick-win opportunities', 'Recorded walkthrough', 'Action plan & next steps']
                  ).map(f => (
                    <div key={f} className="pricing-feature">
                      <span className="pricing-check">✓</span>
                      {f}
                    </div>
                  ))}
                  <div style={{ marginTop: '28px' }}>
                    <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}
                      onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                      Get Started →
                    </a>
                  </div>
                </div>
              )
            })()}

          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section" style={{ paddingTop: 0 }}>
        <p className="section-marker reveal">About</p>

        <div className="about-layout reveal">
          <div className="about-left">
            <h2 className="display-lg" style={{ color: 'var(--ink)', marginBottom: '28px' }}>
              Hey, I'm <em className="text-accent" style={{ fontStyle: 'italic' }}>Lisa</em>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '20px' }}>
              A strategic design partner who believes great products start with understanding people. With over 6 years of experience in UX design and strategy, I've helped startups and established companies create products that users love and businesses grow.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '20px' }}>
              My approach combines rigorous user research, strategic thinking, and beautiful design to create solutions that are both functional and delightful. The best design emerges from deep understanding — of your users, your business, and your unique challenges.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '32px' }}>
              When I'm not designing, you'll find me mentoring emerging designers, sharing my thoughts online, or exploring new ways to bridge the gap between design and engineering.
            </p>
            <p className="label-sm" style={{ color: 'var(--ink-faint)', marginBottom: '12px' }}>Tools & Methods</p>
            <div className="about-tools">
              {['Figma', 'FigJam', 'Maze', 'Optimal Workshop', 'Notion', 'Figma Make', 'Cursor', 'Claude', 'Paper'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-right ghost-grid">
            <div>
              <p className="about-right-label" style={{ marginBottom: '16px' }}>Industry Experience</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                {['SaaS & B2B Tech', 'Healthcare Tech', 'Fashion Tech', 'Energy Tech', 'Sports', 'Crypto', 'HR', 'Gen AI', 'AI Powered Apps'].map(ind => (
                  <span key={ind} style={{
                    fontSize: '12px',
                    padding: '5px 12px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.6)',
                    borderRadius: '2px',
                  }}>{ind}</span>
                ))}
              </div>
            </div>
            {[
              { label: 'Response Time', value: '6–24 hours' },
              { label: 'Initial Consultation', value: 'Free, no pressure' },
              { label: 'Next Availability', value: 'Q2 2026' },
            ].map(item => (
              <div key={item.label} className="about-right-item">
                <p className="about-right-label">{item.label}</p>
                <p className="about-right-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="section cta-section">
        <div className="cta-layout">
          <div className="reveal">
            <p className="label-sm" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
              Let's work together
            </p>
            <h2 className="display-lg" style={{ color: '#fff' }}>
              Ready to create something{' '}
              <em className="text-accent-on-dark" style={{ fontStyle: 'italic' }}>great?</em>
            </h2>
            <p style={{ marginTop: '24px', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', maxWidth: '440px' }}>
              Book a free 15-minute discovery call to discuss your project. No commitment, no sales pitch — just an honest conversation about how I can help.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
              <a href="https://cal.com/elizaveta-demchenko-oz4d4o/15min" target="_blank" rel="noopener noreferrer" className="btn btn-light">Book a 15 min call</a>
              <button className="btn btn-outline" style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.15)' }}>
                Send an Email
              </button>
            </div>
            <div className="cta-meta">
              {[
                { label: 'Response', value: '6–24h' },
                { label: 'First Call', value: 'Free' },
                { label: 'Sales Pressure', value: 'Zero' },
              ].map(m => (
                <div key={m.label} className="cta-meta-item">
                  <p className="cta-meta-label">{m.label}</p>
                  <p className="cta-meta-value">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-input" placeholder="Lisa Demchenko" />
              </div>
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="you@company.com" />
              </div>
              <div className="form-field">
                <label className="form-label">Tell me about your project</label>
                <textarea className="form-input" placeholder="Brief description of your project..." />
              </div>
              <button type="submit" className="btn btn-light" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
