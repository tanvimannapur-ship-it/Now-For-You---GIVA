import FadeIn from './FadeIn'
import Footnote from './Footnote'

const SCENARIOS = [
  {
    label: 'CONSERVATIVE CASE',
    lift: '15% relative lift',
    purchasers: '~3,750 new self-purchasers',
    gmv: 'Rs.94 L',
    reframe: '~23x return on Phase 1 build cost',
    highlight: false,
  },
  {
    label: 'BASE CASE',
    lift: '30% relative lift',
    purchasers: '~7,500 new self-purchasers',
    gmv: 'Rs.1.9 Cr',
    reframe: '~47x return on Phase 1 build cost',
    highlight: true,
  },
  {
    label: 'OPTIMISTIC CASE',
    lift: '50% relative lift',
    purchasers: '~12,500 new self-purchasers',
    gmv: 'Rs.3.1 Cr',
    reframe: '~75x return on Phase 1 build cost',
    highlight: false,
  },
]

const ASSUMPTIONS = [
  {
    text: 'Cohort: ~5 lakh unique gifting-entry customers per year, derived from Rs.518 Cr revenue at an estimated Rs.3,500 average gifting AOV with 40% repeat-gifter adjustment',
    footnote: 1,
  },
  {
    text: 'Baseline: estimated ~5% self-purchase conversion among gifting-entry customers today, consistent with no active product mechanism',
    footnote: null,
  },
  {
    text: 'Lift range: 15-50% relative improvement, anchored to Klaviyo post-purchase flow benchmarks showing up to 30x revenue per recipient uplift',
    footnote: 4,
  },
  {
    text: 'LTV note: published research shows gift purchasers who make a self-purchase show 63% higher downstream sales vs matched non-gift purchasers. Year 1 GMV understates total impact',
    footnote: 5,
  },
  {
    text: 'Phase 1 build cost: estimated at Rs.4 lakhs (approximately 2 to 3 weeks of one senior engineer\'s time). ROI multiples above are calculated against this figure.',
    footnote: null,
  },
]

export default function TheOpportunity() {
  return (
    <section
      id="the-opportunity"
      style={{
        background: '#1A0A0E',
        padding: '64px 40px',
      }}
      className="opportunity-section"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <FadeIn>
          <p
            style={{
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.15em',
              color: '#C94A6E',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '0 0 16px',
            }}
          >
            The Opportunity
          </p>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(34px, 5vw, 48px)',
              color: '#FFFFFF',
              fontWeight: 500,
              textAlign: 'center',
              margin: '0 0 8px',
              lineHeight: 1.2,
            }}
          >
            What moving the needle looks like in numbers
          </h2>

          <p
            style={{
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              margin: '0 0 40px',
            }}
          >
            Built from public GIVA data and industry benchmarks. Every assumption is labelled.
          </p>
        </FadeIn>

        <div
          className="opportunity-cards"
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {SCENARIOS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="opportunity-card-wrap">
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: s.highlight ? '1px solid rgba(201,74,110,0.5)' : '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <p
                  style={{
                    fontSize: '10px',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    margin: 0,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    color: '#C94A6E',
                    margin: '8px 0 0',
                  }}
                >
                  {s.lift}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: '8px',
                    margin: '8px 0 0',
                  }}
                >
                  {s.purchasers}
                </p>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '16px 0' }} />

                <p
                  style={{
                    fontSize: '10px',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    margin: 0,
                  }}
                >
                  EST. INCREMENTAL GMV &middot; YEAR 1
                </p>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '36px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    margin: '4px 0 0',
                  }}
                >
                  {s.gmv}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    color: '#C94A6E',
                    textAlign: 'center',
                    marginTop: '6px',
                    marginBottom: '4px',
                  }}
                >
                  {s.reframe}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(255,255,255,0.4)',
                    margin: '2px 0 0',
                  }}
                >
                  from first-purchase impact alone
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '20px 24px',
              marginTop: '24px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                margin: '0 0 12px',
              }}
            >
              Assumption stack
            </p>

            {ASSUMPTIONS.map((a, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: i < ASSUMPTIONS.length - 1 ? '10px' : 0,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#C94A6E',
                    flexShrink: 0,
                    marginTop: '6px',
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {a.text}
                  {a.footnote && <Footnote n={a.footnote} />}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.4)',
              textAlign: 'center',
              margin: '20px 0 0',
            }}
          >
            These are estimates, not commitments. They exist to show the order of magnitude and to define what a successful experiment looks like before we run it.
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .opportunity-section {
            padding: 48px 24px !important;
          }
          .opportunity-cards {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}
