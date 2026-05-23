import { IMAGES, StarRating, DotIndicator, PlayIcon, CartIcon } from './shared.jsx'

// ── Floating product card (top-right) ──────────────────
function HeroProductCard() {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '24px',
        padding: '1.5rem',
        width: '260px',
        flexShrink: 0,
      }}
    >
      {/* Plant image */}
      <div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '1.1rem',
          height: '185px',
          background: 'rgba(255,255,255,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={IMAGES.heroCard}
          alt="Calathea plant"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <p style={{ color: '#8aaa8a', fontSize: '0.78rem', marginBottom: '0.3rem' }}>
        Trendy House Plant
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: 500,
          }}
        >
          Calathea plant
        </span>
        <span style={{ color: '#8aaa8a', fontSize: '1rem', cursor: 'pointer' }}>›</span>
      </div>

      <button
        className="btn-outline"
        style={{
          width: '100%',
          padding: '0.55rem 1rem',
          borderRadius: '10px',
          fontSize: '0.88rem',
          fontWeight: 500,
        }}
      >
        Buy Now
      </button>

      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', marginTop: '1rem' }}>
        <DotIndicator total={3} active={0} />
      </div>
    </div>
  )
}

// ── Floating reviewer card (bottom-left) ──────────────
function HeroReviewCard() {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '18px',
        padding: '1.1rem 1.25rem',
        maxWidth: '295px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.65rem' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #5aaa5a 0%, #2a6a2a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.85rem',
            flexShrink: 0,
          }}
        >
          AP
        </div>
        <div>
          <p style={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem', marginBottom: '3px' }}>
            Alina Patel
          </p>
          <StarRating rating={4} />
        </div>
      </div>
      <p style={{ color: '#8aaa8a', fontSize: '0.8rem', lineHeight: 1.6 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt...
      </p>
    </div>
  )
}

// ── Main Hero ─────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '68px',
        background: '#1a2d1a',
      }}
    >
      {/* ── Background bush image ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img
          src={IMAGES.heroBg}
          alt=""
          style={{
            width: '62%',
            maxWidth: '680px',
            height: '80%',
            objectFit: 'cover',
            borderRadius: '50%',
            opacity: 0.55,
            filter: 'saturate(1.1) brightness(0.75)',
            position: 'absolute',
            top: '5%',
            left: '20%',
          }}
        />
        {/* subtle vignette overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 30%, #1a2d1a 75%)',
          }}
        />
      </div>

      {/* ── Main content grid ── */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1.5rem 2rem',
          width: '100%',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gridTemplateRows: '1fr auto',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* ── Left — headline & CTA ── */}
        <div style={{ gridColumn: 1, gridRow: 1, paddingTop: '2rem' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.08,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            Breath Natural
          </h1>

          <p
            style={{
              color: '#9bbf9b',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              maxWidth: '450px',
              marginBottom: '2rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              className="btn-outline"
              style={{ padding: '0.65rem 1.75rem', borderRadius: '10px', fontSize: '0.9rem' }}
            >
              Explore
            </button>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#9bbf9b',
                fontSize: '0.9rem',
              }}
            >
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  paddingLeft: '2px',
                }}
              >
                <PlayIcon size={14} />
              </span>
              Live Demo...
            </button>
          </div>
        </div>

        {/* ── Right — floating product card (desktop) ── */}
        <div
          className="hide-mobile"
          style={{
            gridColumn: 2,
            gridRow: '1 / 3',
            alignSelf: 'start',
            paddingTop: '1.5rem',
          }}
        >
          <HeroProductCard />
        </div>

        {/* ── Bottom-left — reviewer card ── */}
        <div style={{ gridColumn: 1, gridRow: 2, alignSelf: 'end', paddingBottom: '2rem' }}>
          <HeroReviewCard />
        </div>
      </div>

      {/* ── "Our Trendy plants" label ── */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          paddingBottom: '2.5rem',
          paddingTop: '1rem',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
            fontWeight: 400,
            color: '#fff',
          }}
        >
          Our Trendy plants
        </h2>
      </div>
    </section>
  )
}
