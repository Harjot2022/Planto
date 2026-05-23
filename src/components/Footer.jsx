import { useState } from 'react'

const QUICK_LINKS = ['Home', 'Types of plants', 'Contact', 'History', 'Privacy']

const SOCIAL = [
  { label: 'FB', href: '#' },
  { label: 'TW', href: '#' },
  { label: 'LI', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer style={{ background: '#0d1d0d', padding: '3.5rem 0 1.5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Three-column grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🌱</span>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                Planto.
              </span>
            </a>

            <p style={{ color: '#5a7a5a', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: '#5a7a5a',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7cb87c')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5a7a5a')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                marginBottom: '1.1rem',
                letterSpacing: '0.01em',
              }}
            >
              Quick Link's
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {QUICK_LINKS.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: '#5a7a5a',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#d4e8d4')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5a7a5a')}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                marginBottom: '1.1rem',
              }}
            >
              For Every Update's
            </h4>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '10px',
                  fontSize: '0.84rem',
                  outline: 'none',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(124,184,124,0.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  background: subscribed ? '#3a6a3a' : '#2e5a2e',
                  border: 'none',
                  color: '#d4e8d4',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.04em',
                  transition: 'background 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {subscribed ? '✓ DONE' : 'SUBSCRIBE'}
              </button>
            </div>

            {subscribed && (
              <p style={{ color: '#7cb87c', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#3a5a3a', fontSize: '0.8rem' }}>
            planto © all right reserve
          </span>
          <span style={{ color: '#3a5a3a', fontSize: '0.8rem' }}>
            Made with 🌿
          </span>
        </div>
      </div>
    </footer>
  )
}
