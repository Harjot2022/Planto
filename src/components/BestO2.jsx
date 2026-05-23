import { useState } from 'react'
import { DotIndicator, ChevronLeftIcon, ChevronRightIcon, IMAGES } from './shared.jsx'

const SLIDES = [
  {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection's",
    body1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    body2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: IMAGES.bestO2,
  },
  {
    id: 2,
    title: 'Fresh Air Plants For Your Living Space',
    body1:
      'Discover our exclusive collection of air-purifying plants that transform your home into a natural sanctuary.',
    body2:
      'Each plant is carefully selected for maximum oxygen production and minimal maintenance requirements.',
    img: IMAGES.trendy1,
  },
]

export default function BestO2() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]

  const prev = () => setActive(a => (a === 0 ? SLIDES.length - 1 : a - 1))
  const next = () => setActive(a => (a === SLIDES.length - 1 ? 0 : a + 1))

  return (
    <section id="best-o2" style={{ background: '#152515', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section heading */}
        <div className="section-heading">
          <h2>Our Best o2</h2>
        </div>

        {/* Feature card */}
        <div
          className="glass-card"
          style={{
            borderRadius: '28px',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: '340px',
          }}
        >
          {/* Left — plant image */}
          <div
            style={{
              width: '280px',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={slide.img}
              alt={slide.title}
              key={slide.id}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                minHeight: '300px',
                transition: 'opacity 0.4s ease',
              }}
            />
            {/* gradient overlay */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to right, transparent 50%, rgba(19,38,19,0.7) 100%)',
              }}
            />
          </div>

          {/* Right — text content */}
          <div
            style={{
              flex: 1,
              padding: '2.5rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: '240px',
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: 500,
                lineHeight: 1.4,
                marginBottom: '1.1rem',
              }}
            >
              {slide.title}
            </h3>

            <p
              style={{
                color: '#8aaa8a',
                fontSize: '0.88rem',
                lineHeight: 1.75,
                marginBottom: '0.75rem',
              }}
            >
              {slide.body1}
            </p>

            <p
              style={{
                color: '#8aaa8a',
                fontSize: '0.88rem',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
              }}
            >
              {slide.body2}
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn-outline"
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                }}
              >
                Explore
              </button>

              {/* Prev / Next controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  className="btn-ghost"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                  }}
                  onClick={prev}
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon size={16} />
                </button>
                <button
                  className="btn-ghost"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                  }}
                  onClick={next}
                  aria-label="Next slide"
                >
                  <ChevronRightIcon size={16} />
                </button>
              </div>
            </div>

            {/* Dot indicator */}
            <div style={{ marginTop: '1.25rem' }}>
              <DotIndicator total={SLIDES.length} active={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
