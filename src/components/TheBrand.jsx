import FadeIn from './FadeIn'
import Footnote from './Footnote'

const CARDS = [
  {
    num: '01',
    headline: 'The Wedge',
    stat: '2019',
    statFootnote: null,
    context: 'No organised brand owned silver. GIVA stepped in.',
    contextFootnote: null,
  },
  {
    num: '02',
    headline: 'The Engine',
    stat: 'Rs.518 Cr',
    statFootnote: 1,
    context: 'Built almost entirely on gifting occasions in FY25.',
    contextFootnote: 1,
  },
  {
    num: '03',
    headline: 'The Ambition',
    stat: 'Series C',
    statFootnote: 2,
    context: 'Creaegis bet explicitly on everyday wear, not on gifting.',
    contextFootnote: 2,
  },
]

const STATS = [
  { value: '300+', label: 'stores nationwide', footnote: 1 },
  { value: '50/50', label: 'online to offline split', footnote: 1 },
  { value: '5 to 6 months', label: 'gifting repurchase cycle', footnote: 3 },
  { value: 'Rs.518 Cr', label: 'FY25 revenue', footnote: 1 },
]

function CardHover({ children, style = {} }) {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #F0E8EC',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        ...style,
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
      {children}
    </div>
  )
}

export default function TheBrand() {
  return (
    <section
      id="the-brand"
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
            The Brand
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 500,
              color: '#1A1A1A',
              lineHeight: 1.15,
              margin: '0 0 24px',
              maxWidth: '700px',
            }}
          >
            How GIVA earned India's trust and what it cost them
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {CARDS.map((card, i) => (
            <FadeIn key={card.num} delay={i * 0.1}>
              <CardHover>
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '64px',
                    fontWeight: 300,
                    color: '#E8D5DA',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  {card.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    margin: '4px 0 0',
                  }}
                >
                  {card.headline}
                </h3>
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '40px',
                    color: '#C94A6E',
                    marginTop: '8px',
                    lineHeight: 1,
                  }}
                >
                  {card.stat}
                  {card.statFootnote && <Footnote n={card.statFootnote} />}
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#6B6B6B',
                    marginTop: '4px',
                    margin: '4px 0 0',
                  }}
                >
                  {card.context}
                  {card.contextFootnote && <Footnote n={card.contextFootnote} />}
                </p>
              </CardHover>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', margin: '0 auto 24px', maxWidth: '700px' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px',
                fontStyle: 'italic',
                color: '#C94A6E',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Customers come back every five to six months, driven by gifting occasions
              <Footnote n={3} />.
            </p>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                color: '#9E8E93',
                marginTop: '12px',
              }}
            >
              Ishendra Agarwal, Founder, GIVA
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              background: 'white',
              border: '1px solid #F0E8EC',
              borderRadius: '16px',
              padding: '20px 28px',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 0,
              }}
              className="stats-grid"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: 'center',
                    padding: '0 16px',
                    borderRight: i < STATS.length - 1 ? '1px solid #F0E8EC' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '28px',
                      color: '#1A1A1A',
                      fontWeight: 500,
                    }}
                  >
                    {s.value}
                    <Footnote n={s.footnote} />
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontFamily: 'Inter, sans-serif',
                      color: '#9E8E93',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginTop: '6px',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #F0E8EC;
          }
          .stats-grid > div:last-child,
          .stats-grid > div:nth-last-child(2) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  )
}
