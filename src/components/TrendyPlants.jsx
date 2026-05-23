import { CartIcon, IMAGES } from './shared.jsx'

function TrendyCard({ image, name, price, reverse = false }) {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '22px',
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '0',
        overflow: 'hidden',
      }}
    >
      {/* Plant image */}
      <div
        style={{
          flexShrink: 0,
          width: '220px',
          height: '220px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* soft gradient fade into card */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: reverse
              ? 'linear-gradient(to left, rgba(22,42,22,0.6) 0%, transparent 60%)'
              : 'linear-gradient(to right, rgba(22,42,22,0.6) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Text content */}
      <div style={{ flex: 1, padding: '1.75rem 2rem' }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 500,
            marginBottom: '0.65rem',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: '#8aaa8a',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            marginBottom: '1rem',
            maxWidth: '380px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        <p
          style={{
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 700,
            marginBottom: '1.25rem',
            letterSpacing: '-0.01em',
          }}
        >
          {price}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            className="btn-outline"
            style={{ padding: '0.55rem 1.4rem', borderRadius: '10px', fontSize: '0.88rem' }}
          >
            Buy Now
          </button>
          <button
            className="btn-ghost"
            style={{
              padding: '0.55rem 0.75rem',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Add to cart"
          >
            <CartIcon size={17} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function TrendyPlants() {
  return (
    <section
      id="trendy"
      style={{ background: '#1a2d1a', padding: '0 0 4rem' }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        <TrendyCard
          image={IMAGES.trendy1}
          name="For Small Desk Ai Plant"
          price="Rs. 599/-"
          reverse={false}
        />
        <TrendyCard
          image={IMAGES.trendy2}
          name="For Fresh Decs Ai Plat"
          price="Rs. 579/-"
          reverse={true}
        />
      </div>
    </section>
  )
}
