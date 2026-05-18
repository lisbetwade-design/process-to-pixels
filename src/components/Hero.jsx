import { useState } from 'react'

const SERVICES = [
  {
    n: '01',
    title: 'UX Research & Strategy',
    blurb: 'Interviews, usability testing, competitive analysis, information architecture.',
    promise: 'Validate before you build.',
    price: '$2,499',
    duration: '1—2 wks',
    tone: 'navy',
  },
  {
    n: '02',
    title: 'Product Design',
    blurb: 'Wireframes, hi-fi prototypes, design systems, responsive UI, usability testing.',
    promise: '+30—50% conversion & engagement.',
    price: '$6,499',
    duration: '4—6 wks',
    tone: 'cream',
    featured: true,
  },
  {
    n: '03',
    title: 'Design Partner',
    blurb: 'Embedded, ongoing design partnership — strategy, product design, design systems.',
    promise: 'A senior designer on call, every week.',
    price: '$4,499',
    duration: 'ongoing',
    tone: 'purple',
  },
]

const ACCENT = '#5C3AFF'
const OLIVE_BG = '#D9E2BD'

function hexA(hex, a) {
  const m = hex.replace('#', '')
  const v = m.length === 3 ? m.split('').map((c) => c + c).join('') : m
  const r = parseInt(v.slice(0, 2), 16)
  const g = parseInt(v.slice(2, 4), 16)
  const b = parseInt(v.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${a})`
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatusPill() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 11px 6px 9px',
        borderRadius: 999,
        background: 'rgba(141,170,68,.14)',
        border: '1px solid rgba(141,170,68,.4)',
        color: '#3f5a18',
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: 'var(--olive)',
          boxShadow: '0 0 0 4px rgba(141,170,68,.18)',
          animation: 'heroPulse 2.4s ease-in-out infinite',
        }}
      />
      <span className="hero-label" style={{ fontSize: 10.5, letterSpacing: '.14em' }}>
        Bookings for Summer
      </span>
    </div>
  )
}

function Stat({ n, lbl }) {
  return (
    <div>
      <div className="hero-display" style={{ fontSize: 24, letterSpacing: '-.03em', lineHeight: 1, color: 'var(--ink)' }}>{n}</div>
      <div className="hero-label" style={{ marginTop: 6, color: '#6c6580' }}>{lbl}</div>
    </div>
  )
}

function PixelGridBg() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(26,23,48,.09) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        maskImage: 'linear-gradient(180deg,transparent,#000 18%,#000 78%,transparent)',
        WebkitMaskImage: 'linear-gradient(180deg,transparent,#000 18%,#000 78%,transparent)',
      }}
    />
  )
}

function CornerStamp() {
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', top: 18, right: 18, width: 46, height: 46, opacity: 0.4 }} viewBox="0 0 46 46">
      <g fill="#3f5a18">
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={`t${i}`} cx={3 + i * 6} cy={3} r="1.2" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={`r${i}`} cx={43} cy={3 + i * 6} r="1.2" />
        ))}
      </g>
    </svg>
  )
}

const POSITIONS = [
  { top: 4,   xOff: -10, rot: -2.2, w: 86 },
  { top: 120, xOff: 18,  rot: 1.4,  w: 88 },
  { top: 236, xOff: -2,  rot: -1.1, w: 92 },
]

function ServiceCardOffset({ s, pos, isActive, onActivate }) {
  const tones = {
    navy:   { bg: 'var(--ink)', fg: '#F4F1E8',     sub: 'rgba(244,241,232,.65)' },
    cream:  { bg: '#F7F3E6',    fg: 'var(--ink)',  sub: '#3a3550' },
    purple: { bg: ACCENT,       fg: '#fff',        sub: 'rgba(255,255,255,.78)' },
  }
  const styles = tones[s.tone]

  return (
    <article
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      style={{
        position: 'absolute',
        top: pos.top,
        left: '50%',
        width: `calc(${pos.w}% - 16px)`,
        transform: `translateX(calc(-50% + ${pos.xOff}px)) rotate(${pos.rot}deg)${isActive ? ' translateY(-4px) scale(1.015)' : ''}`,
        transformOrigin: '50% 50%',
        zIndex: isActive ? 10 : 1,
        background: styles.bg,
        color: styles.fg,
        borderRadius: 18,
        padding: '24px 22px 20px',
        boxShadow: isActive
          ? '0 18px 44px rgba(31,43,8,.28), 0 2px 0 rgba(255,255,255,.4) inset'
          : '0 12px 32px rgba(31,43,8,.18), 0 2px 0 rgba(255,255,255,.4) inset',
        transition: 'top .42s cubic-bezier(.3,.7,.4,1), left .42s cubic-bezier(.3,.7,.4,1), width .42s cubic-bezier(.3,.7,.4,1), transform .42s cubic-bezier(.3,.7,.4,1), box-shadow .3s ease',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      <h3 className="hero-display" style={{ margin: '0 0 10px', fontSize: 22, letterSpacing: '-.03em', lineHeight: 1.1 }}>{s.title}</h3>
      <p style={{ margin: '0 0 12px', fontSize: 13.5, lineHeight: 1.5, color: styles.sub, maxWidth: 380 }}>{s.blurb}</p>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 600, color: styles.fg }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: styles.fg, opacity: 0.7 }} />
        {s.promise}
      </div>
    </article>
  )
}

const STACK_HEIGHT = 420

function StackedCards() {
  const [activeIdx, setActiveIdx] = useState(2)

  return (
    <div
      onMouseLeave={() => setActiveIdx(2)}
      style={{ position: 'relative', width: '100%', height: STACK_HEIGHT, overflow: 'visible' }}
    >
      {SERVICES.map((s, i) => (
        <ServiceCardOffset
          key={s.n}
          s={s}
          pos={POSITIONS[i]}
          isActive={i === activeIdx}
          onActivate={() => setActiveIdx(i)}
        />
      ))}
    </div>
  )
}

function LeftColumn() {
  return (
    <div
      style={{
        position: 'relative',
        padding: '42px 56px 36px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--cream)',
        overflow: 'hidden',
        borderRight: '1px solid var(--cream-dark)',
      }}
    >
      <PixelGridBg />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, marginBottom: 38 }}>
        <StatusPill />
        <div className="hero-label" style={{ color: '#6c6580' }}>※ Fractional Design Partner for Seed-Stage Startups</div>
      </div>

      <div
        className="hero-display"
        style={{
          position: 'relative',
          fontSize: 'clamp(36px, 4.4vw, 64px)',
          color: 'var(--ink)',
          marginBottom: 34,
          lineHeight: 1.5,
          letterSpacing: '-.035em',
        }}
      >
        <div style={{ whiteSpace: 'nowrap' }}>
          End-to-end design
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.08em' }}>
          <span>&amp; strategy</span>
          <span style={{ display: 'inline-block', width: '.22em', height: '.22em', borderRadius: '3px', background: ACCENT, marginLeft: '.05em', transform: 'translateY(-.05em)' }} />
        </div>
      </div>

      <p
        style={{
          position: 'relative',
          margin: '0 0 36px',
          maxWidth: 560,
          fontSize: 17,
          lineHeight: 1.55,
          color: '#3a3550',
          fontWeight: 400,
        }}
      >
        Senior design thinking and flexibility to work directly in your stack — prototyping in code, collaborating in your dev workflow, or shipping directly when speed matters more than process.
      </p>

      <div style={{ position: 'relative', display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
        <a
          href="https://cal.com/elizaveta-demchenko-oz4d4o/15min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            background: ACCENT,
            color: '#fff',
            padding: '15px 22px 16px',
            borderRadius: 12,
            fontSize: 14.5,
            fontWeight: 600,
            letterSpacing: '-.005em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            whiteSpace: 'nowrap',
            boxShadow: `0 1px 0 rgba(255,255,255,.4) inset, 0 8px 24px ${hexA(ACCENT, 0.28)}`,
          }}
        >
          Book a 15 min call
          <Arrow />
        </a>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          paddingTop: 28,
          borderTop: '1px solid var(--cream-dark)',
        }}
      >
        <Stat n="6+" lbl="Years experience" />
        <Stat n="15+" lbl="Products shipped" />
        <Stat n="50%" lbl="Avg. conv. lift" />
        <Stat n="10" lbl="Industry verticals" />
      </div>
    </div>
  )
}

function RightColumn() {
  return (
    <div
      style={{
        position: 'relative',
        background: OLIVE_BG,
        padding: '36px 36px 28px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <CornerStamp />

      <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: STACK_HEIGHT + 40 }}>
        <StackedCards />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ borderBottom: '1px solid var(--cream-dark)', minHeight: 'calc(100vh - var(--nav-height, 94px))', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(141,170,68,.18); }
          50%      { box-shadow: 0 0 0 7px rgba(141,170,68,.05); }
        }
        @keyframes heroMarq {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-label {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 10.5px;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .hero-display {
          font-family: "Boldonse", "Bricolage Grotesque", "Cabinet Grotesk", sans-serif;
          font-optical-sizing: auto;
        }
        .hero-serif-it {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 500;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.18fr 1fr;
          gap: 0;
          flex: 1;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-grid > div:first-child { border-right: none; border-bottom: 1px solid var(--cream-dark); }
        }
      `}</style>
      <div className="hero-grid">
        <LeftColumn />
        <RightColumn />
      </div>
    </section>
  )
}
