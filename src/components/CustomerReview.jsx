import { StarRating } from './shared.jsx'

const REVIEWS = [
  {
    id: 1,
    name: 'Main Joel',
    initials: 'MJ',
    rating: 5,
    gradient: 'linear-gradient(135deg, #4a9e5a 0%, #1a5e2a 100%)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 2,
    name: 'Alina Thakur',
    initials: 'AT',
    rating: 4,
    gradient: 'linear-gradient(135deg, #7ab87a 0%, #3a7a3a 100%)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 3,
    name: 'Max Malvena',
    initials: 'MM',
    rating: 5,
    gradient: 'linear-gradient(135deg, #5aaa7a 0%, #2a6a4a 100%)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam et dolore.',
  },
]

function ReviewCard({ review }) {
  return (
    <div
      className="glass-card glass-card-hover"
      style={{ borderRadius: '18px', padding: '1.5rem' }}
    >
      {/* Reviewer info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: review.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.85rem',
            flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <p style={{ color: '#fff', fontWeight: 500, fontSize: '0.93rem', marginBottom: '4px' }}>
            {review.name}
          </p>
          <StarRating rating={review.rating} />
        </div>
      </div>

      <p style={{ color: '#7a9e7a', fontSize: '0.85rem', lineHeight: 1.7 }}>
        {review.text}
      </p>
    </div>
  )
}

export default function CustomerReview() {
  return (
    <section id="reviews" style={{ background: '#1a2d1a', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section heading */}
        <div className="section-heading">
          <h2>Customer Review</h2>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {REVIEWS.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
