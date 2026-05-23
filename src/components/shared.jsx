import heroImage from "../assets/heroImage.png";

import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

import bg from "../assets/bg.png";

// ─── SVG Icon Components ─────────────────────────────
export const SearchIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

export const CartIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

export const MenuIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="15" y2="18" />
  </svg>
)

export const CloseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export const ChevronRightIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export const ChevronLeftIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

export const PlayIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
)

// ─── Star Rating ──────────────────────────────────────
export const StarRating = ({ rating = 5 }) => (
  <div className="stars flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ color: i < rating ? '#f59e0b' : 'rgba(255,255,255,0.2)' }}>★</span>
    ))}
  </div>
)

// ─── Dot Indicators ───────────────────────────────────
export const DotIndicator = ({ total = 2, active = 0 }) => (
  <div className="flex gap-1 items-center">
    {[...Array(total)].map((_, i) => (
      <span key={i} className={i === active ? 'dot-active' : 'dot-inactive'} />
    ))}
  </div>
)

// ─── Image URLs ───────────────────────────────────────
// Replace these with your own product images as needed
export const IMAGES = {
  // Hero background — large round leafy bush
  heroBg: bg,

  // Hero floating product card plant
  heroCard: heroImage,

  // Trendy section — horizontal cards
  trendy1: image8,
  trendy2: image7,

  // Top Selling grid (6 plants)
  sell1: image6,
  sell2: image8,
  sell3: image4,
  sell4: image3,
  sell5: image2,
  sell6: image5,

  // Best O2 feature section
  bestO2: image3,

  // Reviewer avatars (initials-based, no real photos needed)
}
