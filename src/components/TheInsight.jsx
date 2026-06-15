import FadeIn from './FadeIn'

const PersonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="10" r="5" stroke="#C94A6E" strokeWidth="2" />
    <path d="M5 26c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#C94A6E" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const LightningIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M16 3L7 16h8l-3 9 10-13h-8l3-9z" stroke="#C94A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DiamondIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 4L25 12L14 24L3 12L14 4z" stroke="#C94A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12h22" stroke="#C94A6E" strokeWidth="2" />
    <path d="M10 4l4 8 4-8" stroke="#C94A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CARDS = [
  {
    Icon: PersonIcon,
    headline: 'Same person, different context',
    body1: 'The gifter and the self-purchaser are the same person in different mindsets.',
    body2: "The product's job is to create the moment where one discovers the other.",
  },
  {
    Icon: LightningIcon,
    headline: 'The highest-attention moment GIVA owns',
    body1: 'The order confirmation window is the most valuable real estate GIVA has.',
    body2: 'No other brand is competing for this customer right now.',
  },
  {
    Icon: DiamondIcon,
    headline: 'Identity before transaction',
    body1: 'The customer does not need a discount to buy for themselves.',
    body2: 'They need a moment that says: your taste is worth wearing.',
  },
]

export default function TheInsight() {
  return (
    <section
      id="the-insight"
      className="section-padding"
      style={{ background: '#FDFAF7' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <FadeIn>
          <p
            style={{
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.15em',
              color: '#C94A6E',
              textTransform: 'uppercase',
              margin: '0 0 16px',
            }}
          >
            The Insight
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 500,
              color: '#1A1A1A',
              lineHeight: 1.15,
              margin: '0 0 24px',
            }}
          >
            Three things that make this solvable
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {CARDS.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: 'white',
                  border: '1px solid #F0E8EC',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: '#FDF0F4',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px',
                  }}
                >
                  <card.Icon />
                </div>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    textAlign: 'center',
                    margin: '0 0 6px',
                  }}
                >
                  {card.headline}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#6B6B6B',
                    lineHeight: 1.7,
                    textAlign: 'center',
                    margin: 0,
                  }}
                >
                  {card.body1} {card.body2}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
