const CLIENTS = ['Hunch', 'Telescope Ltd.', 'o.xyz', 'delvify', 'Moonchild', 'StupidFish', 'Byte', 'StndBy']

export default function ClientCarousel() {
  // Duplicate for seamless loop
  const items = [...CLIENTS, ...CLIENTS]

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <span className="marquee-label">Trusted by</span>
        {items.map((name, i) => (
          <span key={i} className="marquee-item">{name}</span>
        ))}
      </div>
    </div>
  )
}
