import { useState } from 'react'
import { SearchIcon, CartIcon, MenuIcon, CloseIcon } from './shared.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: "Plant Type's", href: '#', hasDropdown: true },
  { label: 'More', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(2)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(20, 38, 20, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* ── Logo ── */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>🌱</span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}
          >
            Planto.
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <nav
          className="hide-mobile"
          style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', flex: 1, justifyContent: 'center' }}
        >
          {NAV_LINKS.map(({ label, href, hasDropdown }) => (
            <a key={label} href={href} className="nav-link">
              {label}
              {hasDropdown && (
                <span style={{ marginLeft: '4px', fontSize: '0.7rem', opacity: 0.7 }}>▾</span>
              )}
            </a>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#d4e8d4' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              transition: 'background 0.2s, color 0.2s',
              display: 'flex',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4e8d4' }}
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              transition: 'background 0.2s, color 0.2s',
              display: 'flex',
              position: 'relative',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4e8d4' }}
            aria-label="Cart"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '1px',
                  right: '1px',
                  width: '16px',
                  height: '16px',
                  background: '#7cb87c',
                  color: '#0f1f0f',
                  borderRadius: '50%',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="hide-desktop"
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
            }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav Drawer ── */}
      {mobileOpen && (
        <div
          className="hide-desktop"
          style={{
            padding: '1rem 1.5rem 1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: '#d4e8d4',
                textDecoration: 'none',
                padding: '0.65rem 0.75rem',
                borderRadius: '10px',
                fontSize: '0.95rem',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4e8d4' }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
