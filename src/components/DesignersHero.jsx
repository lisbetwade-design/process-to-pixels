import { useState } from 'react'

const RESOURCE_CARDS = [
  {
    badge: 'Claude AI Guide',
    title: 'Claude for designers',
    blurb: 'A complete guide to using Claude in your design workflow — research, ideation, code prototyping.',
    promise: 'Free · No email required',
    tone: 'navy',
  },
  {
    badge: 'Notion Library',
    title: 'UX/UI learning hub',
    blurb: '100+ curated articles, books, courses, and newsletters covering research, systems, and writing.',
    promise: 'Free · Updated monthly',
    tone: 'cream',
  },
  {
    badge: 'Figma Template',
    title: 'UX strategy template',
    blurb: 'A Figma community template for planning and documenting your UX strategy before screens.',
    promise: 'Free on Figma Community',
    tone: 'purple',
  },
]

const ACCENT = '#5C3AFF'
const OLIVE_BG = '#D9E2BD'
const STACK_HEIGHT = 540

const POSITIONS = [
  { top: 4,   xOff: -10, rot: -2.2, w: 86 },
  { top: 120, xOff: 18,  rot: 1.4,  w: 88 },
  { top: 236, xOff: -2,  rot: -1.1, w: 92 },
]

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
          animation: 'dhPulse 2.4s ease-in-out infinite',
        }}
      />
      <span className="hero-label" style={{ fontSize: 10.5, letterSpacing: '.14em' }}>
        6 free resources
      </span>
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

function ResourceCard({ r, pos, isActive, onActivate }) {
  const tones = {
    navy:   { bg: 'var(--ink)', fg: '#F4F1E8',     sub: 'rgba(244,241,232,.65)', badge: 'rgba(244,241,232,.12)' },
    cream:  { bg: '#F7F3E6',    fg: 'var(--ink)',  sub: '#3a3550',               badge: 'rgba(26,23,48,.08)' },
    purple: { bg: ACCENT,       fg: '#fff',        sub: 'rgba(255,255,255,.78)', badge: 'rgba(255,255,255,.18)' },
  }
  const styles = tones[r.tone]

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
        transition: 'transform .42s cubic-bezier(.3,.7,.4,1), box-shadow .3s ease',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600, letterSpacing: '.02em', background: styles.badge, color: styles.fg, marginBottom: 14 }}>
        {r.badge}
      </span>
      <h3 className="hero-display" style={{ margin: '0 0 10px', fontSize: 22, letterSpacing: '-.03em', lineHeight: 1.1 }}>{r.title}</h3>
      <p style={{ margin: '0 0 12px', fontSize: 13.5, lineHeight: 1.5, color: styles.sub, maxWidth: 380 }}>{r.blurb}</p>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 600, color: styles.fg }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: styles.fg, opacity: 0.7 }} />
        {r.promise}
      </div>
    </article>
  )
}

function StackedResources() {
  const [activeIdx, setActiveIdx] = useState(2)

  return (
    <div
      onMouseLeave={() => setActiveIdx(2)}
      style={{ position: 'relative', width: '100%', height: STACK_HEIGHT, overflow: 'visible' }}
    >
      {RESOURCE_CARDS.map((r, i) => (
        <ResourceCard
          key={r.title}
          r={r}
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

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginBottom: 38, flexWrap: 'wrap' }}>
        <div className="hero-label" style={{ color: '#6c6580' }}>※ Free UX/UI Resources & Guides</div>
        <StatusPill />
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
          Resources to
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.08em' }}>
          <span>elevate your practice</span>
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
        Free templates, frameworks, and guides from 6+ years of working across SaaS, healthcare, fashion, and beyond. Built to help you ship better work, faster.
      </p>

      <div style={{ position: 'relative', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          href="#resources"
          onClick={(e) => { e.preventDefault(); document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' }) }}
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
          Browse resources
          <Arrow />
        </a>
        <a
          href="#newsletter"
          onClick={(e) => { e.preventDefault(); document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }) }}
          style={{
            textDecoration: 'none',
            color: 'var(--ink)',
            padding: '14px 20px 15px',
            borderRadius: 12,
            background: 'transparent',
            border: '1.5px solid rgba(26,23,48,.18)',
            fontSize: 14.5,
            fontWeight: 600,
            letterSpacing: '-.005em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            whiteSpace: 'nowrap',
          }}
        >
          Join newsletter
        </a>
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
        <StackedResources />
      </div>
    </div>
  )
}

export default function DesignersHero() {
  return (
    <section style={{ borderBottom: '1px solid var(--cream-dark)', minHeight: 'calc(100vh - var(--nav-height, 52px))', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes dhPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(141,170,68,.18); }
          50%      { box-shadow: 0 0 0 7px rgba(141,170,68,.05); }
        }
        .designers-hero-grid {
          display: grid;
          grid-template-columns: 1.18fr 1fr;
          gap: 0;
          flex: 1;
        }
        @media (max-width: 900px) {
          .designers-hero-grid { grid-template-columns: 1fr; }
          .designers-hero-grid > div:first-child { border-right: none; border-bottom: 1px solid var(--cream-dark); }
        }
      `}</style>
      <div className="designers-hero-grid">
        <LeftColumn />
        <RightColumn />
      </div>
    </section>
  )
}
