import { useState } from 'react'
import { CartIcon, IMAGES } from './shared.jsx'

const TOP_SELLING = [
  { id: 1, name: 'Calathea plant',   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',     price: 'Rs. 309/-', img: IMAGES.sell1 },
  { id: 2, name: 'Desk plant',       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',     price: 'Rs. 359/-', img: IMAGES.sell2 },
  { id: 3, name: 'Calathea ai plant',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',     price: 'Rs. 399/-', img: IMAGES.sell3 },
  { id: 4, name: 'Cal 874 plant',    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',     price: 'Rs. 259/-', img: IMAGES.sell4 },
  { id: 5, name: 'Show plant',       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',     price: 'Rs. 759/-', img: IMAGES.sell5 },
  { id: 6, name: 'Calat O2 plant',   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',     price: 'Rs. 659/-', img: IMAGES.sell6 },
]

function ProductCard({ plant }) {
  const [hovered, setHovered] = useState(false)
  const [inCart, setInCart] = useState(false)

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '20px',
        padding: '1.25rem',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        borderColor: hovered ? 'rgba(124,184,124,0.3)' : 'rgba(255,255,255,0.09)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.35)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Plant image */}
 <div
  style={{
    position: 'relative',
    height: '130px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: '10px',
    overflow: 'visible',
  }}
>
  <img
    src={plant.img}
    alt={plant.name}
    style={{
      width: '180px',
      height: '180px',
      objectFit: 'contain',

      position: 'absolute',
      top: '-55px',

      transform: hovered
        ? 'scale(1.08)'
        : 'scale(1)',

      transition: 'all .4s ease',
      filter: 'drop-shadow(0 18px 22px rgba(0,0,0,.45))',
      zIndex: 2,
    }}
  />
</div>
      <h4
        style={{
          color: '#fff',
          fontSize: '0.95rem',
          fontWeight: 500,
          marginBottom: '0.3rem',
        }}
      >
        {plant.name}
      </h4>

      <p style={{ color: '#6e9a6e', fontSize: '0.8rem', lineHeight: 1.55, marginBottom: '0.85rem' }}>
        {plant.desc}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
          {plant.price}
        </span>
        <button
          className="btn-ghost"
          style={{
            padding: '0.42rem 0.6rem',
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            color: inCart ? '#7cb87c' : '#fff',
            borderColor: inCart ? 'rgba(124,184,124,0.5)' : undefined,
          }}
          onClick={e => { e.stopPropagation(); setInCart(c => !c) }}
          aria-label="Add to cart"
        >
          <CartIcon size={16} />
        </button>
      </div>
    </div>
  )
}

export default function TopSelling() {
  return (
    <section id="top-selling" style={{ background: '#1a2d1a', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section heading */}
        <div className="section-heading">
          <h2>Our Top Selling</h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {TOP_SELLING.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  )
}
