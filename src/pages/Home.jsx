import { useEffect } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
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
      description: 'Strategic product design studio offering UX research, product design, and design partnerships.',
      founder: { '@type': 'Person', name: 'Lisa Demchenko' },
      areaServed: 'Worldwide',
      knowsAbout: ['UX Research', 'Product Design', 'Design Systems', 'AI-Powered Design'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Design Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UX Research & Strategy', description: 'Deep user research and strategic planning to align business goals with user needs.', price: '2499', priceCurrency: 'USD' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Design', description: 'End-to-end product design from concept to high-fidelity prototypes.', price: '7499', priceCurrency: 'USD' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design Partner', description: 'Ongoing UX consultation and design partnership.', price: '4999', priceCurrency: 'USD' } },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://processtopixels.studio/#lisa',
      name: 'Lisa Demchenko',
      jobTitle: 'Fractional Design Partner for Seed-Stage Startups',
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
      <Hero />

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
                loading={ii < 4 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        ))}
      </div>

      {/* ── Services ── */}
      <section id="services" className="section" style={{ background: '#D9E2BD' }}>
        <div className="section-header reveal">
          <div>
            <h2 className="display-lg" style={{ color: 'var(--ink)' }}>
              How I can <em className="text-accent" style={{ fontStyle: 'normal' }}>help</em>
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.75', maxWidth: '360px', alignSelf: 'flex-end' }}>
            Strategic design, research and design engineering.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            {
              title: 'UX Research & Strategy',
              desc: "You're making product decisions every day — often without enough signal. I help you replace assumptions with evidence so every build decision moves you forward, not sideways.",
              features: ['User interviews (5–8)', 'Competitive analysis', 'User personas & journey maps', 'Strategic recommendations', 'Research report & presentation'],
              promise: 'Validate before you build',
              price: '$2,499',
              duration: '1–2 wks',
            },
            {
              title: 'Product Design',
              desc: 'From first wireframe to developer-ready prototype — and into code when it moves things faster. I design products that look and feel further along than they are, and convert better because of it. No translation layer between design and dev.',
              features: ['Starts with user research', 'Complete UX/UI design', 'Interactive prototypes', 'Code prototyping when speed matters', 'Tested before handoff', 'Figma-to-code developer handoff'],
              promise: '+30—50% conversion & engagement',
              price: '$7,499',
              duration: '4–6 wks',
            },
            {
              title: 'Design Partner',
              desc: 'I embed as your dedicated design partner — proactive, available, and invested in your product long-term. Comfortable in Figma or your dev workflow, prototyping in code or shipping directly when speed matters. No briefing overhead, no handoff gaps.',
              features: ['Embedded across every sprint', 'Prototyping in code, in your stack', 'Ongoing user validation', 'Data-informed decisions', 'Cancel or pause anytime', 'Direct access, fast turnaround'],
              promise: 'A senior designer (and engineer) on call',
              price: '$4,999',
              duration: 'per month',
              featured: true,
            },
            {
              title: 'Design Systems',
              desc: 'Your team is rebuilding the same components sprint after sprint. I create a design foundation that scales with your product — so engineering ships faster and the product stays consistent as it grows.',
              features: ['Complete design system', 'Component library', 'Design tokens & guidelines', 'Accessibility standards', 'Developer documentation', 'Training & handoff'],
              promise: 'Build once, scale forever',
              price: '$3,499',
              duration: '8–12 wks',
            },
            {
              title: 'UX Audit',
              desc: "Find out exactly what's slowing users down — and what to fix first.",
              features: ['Heuristic evaluation', 'Usability issue report', 'Priority fix recommendations', 'Quick-win opportunities', 'Recorded walkthrough', 'Action plan & next steps'],
              promise: 'Fix the friction before scaling',
              price: 'Custom',
              duration: 'starting $400',
            },
          ].map((s, i) => (
            <article key={s.title} className="reveal service-parallax" style={{ '--reveal-delay': `${i * 90}ms`, background: '#fff', borderRadius: '20px', padding: '40px 48px', boxShadow: '0 1px 3px rgba(26,23,48,.05), 0 8px 24px rgba(26,23,48,.04)', display: 'grid', gridTemplateColumns: '1fr 220px', gap: '48px', alignItems: 'stretch' }}>
              <div>
                {s.featured && (
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '999px', background: 'var(--olive)', color: 'var(--ink)', letterSpacing: '0.01em' }}>
                      ★ Most picked
                    </span>
                  </div>
                )}

                <h3 className="display-md" style={{ margin: '0 0 14px', color: 'var(--ink)' }}>
                  {s.title}<span style={{ color: 'var(--accent)' }}>.</span>
                </h3>

                <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: '680px', marginBottom: '28px' }}>
                  {s.desc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 36px', marginBottom: '28px', maxWidth: '680px' }}>
                  {s.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--ink)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>

                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '9px 16px', borderRadius: '999px', background: '#EEEEE5', fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {s.promise}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px' }}>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '10px', margin: '0 0 10px' }}>Fixed Fee</p>
                  <p className="display-md" style={{ margin: 0, lineHeight: 1, color: 'var(--ink)' }}>{s.price}</p>
                  <p style={{ fontSize: '13px', color: 'var(--ink-faint)', marginTop: '8px' }}>{s.duration}</p>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ textDecoration: 'none', background: 'var(--ink)', color: '#fff', padding: '14px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
                >
                  Start this →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
          Trusted by founders <em className="text-accent" style={{ fontStyle: 'normal' }}>& leaders</em>
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
      <section id="process" className="section" style={{ paddingTop: 0, paddingBottom: '56px' }}>
        <div className="section-header reveal">
          <div>
            <h2 className="display-lg" style={{ color: 'var(--ink)' }}>
              How I <em className="text-accent" style={{ fontStyle: 'normal' }}>work</em>
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
        <h2 className="display-lg reveal" style={{ color: 'var(--ink)' }}>
          More than just a <em className="text-accent" style={{ fontStyle: 'normal' }}>designer</em>
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
              { icon: '⌥', title: 'Design Engineering', desc: 'I bridge the gap between design and code — comfortable in your dev workflow, prototyping directly in the stack, and implementing when speed matters.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <p className="why-icon">{w.icon}</p>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: 'var(--ink)' }}>{w.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: '1.65' }}>{w.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── About ── */}
      <section id="about" className="section" style={{ paddingTop: 0 }}>
        <div className="about-layout reveal">
          <div className="about-left">
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '20px' }}>
              I'm a product designer based in Brussels. Before going independent last year, I worked in-house — first at a large company, then at a startup that grew into a scale-up. That range taught me a lot about what design actually needs to do at different stages of a company's life.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '20px' }}>
              I started as a generalist, which turned out to be the most useful thing I could have been. I learned to do the research, run the strategy, design the product, build the system, and hand it off in a way engineers could actually use. Over time, I got comfortable working directly in code too — which changes the dynamic completely. Less translation, fewer delays, more things actually shipping.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '20px' }}>
              I believe most early-stage products are further along than they look. The gap between what's been built and how it's perceived is almost always a design problem — and it's almost always fixable. That's the work I find most interesting.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '20px' }}>
              These days I also write about AI-powered design workflows for product designers — because how we work is changing fast, and I'd rather be ahead of it than catch up later.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: '1.8', marginBottom: '32px' }}>
              If you're building something and design feels like the missing piece, I'd like to hear about it.
            </p>
            <p className="label-sm" style={{ color: 'var(--ink-faint)', marginBottom: '12px' }}>Tools & Methods</p>
            <div className="about-tools">
              {['Figma', 'FigJam', 'Maze', 'Optimal Workshop', 'Notion', 'Figma Make', 'Cursor', 'Claude', 'Paper'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="profile-card">
              <div className="profile-card-image">
                <img src="/images/profile.png" alt="Lisa Demchenko" />
              </div>
              <div className="profile-card-body">
                <h2 className="display-lg profile-card-name" style={{ color: 'var(--ink)' }}>
                  Hey, I'm <em className="text-accent" style={{ fontStyle: 'normal' }}>Lisa</em>
                </h2>
                <p className="profile-card-sub">Strategic Product Designer · Founder · Brussels → World</p>
                <div className="profile-card-pills">
                  <a href="mailto:elizaveta.demchenko.ux@gmail.com" className="profile-card-pill">
                    ↗ elizaveta.demchenko.ux@gmail.com
                  </a>
                  <a href="https://processtopixels.substack.com/" target="_blank" rel="noopener noreferrer" className="profile-card-pill">
                    ↗ substack
                  </a>
                  <a href="https://cal.com/elizaveta-demchenko-oz4d4o/15min" target="_blank" rel="noopener noreferrer" className="profile-card-pill">
                    ↗ book a call
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
