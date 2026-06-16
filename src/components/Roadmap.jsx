import FadeIn from './FadeIn'

const METRICS = [
  {
    tier: 'TIER 1',
    signal: 'AWARENESS SIGNAL',
    metric: 'Self-purchase category entry rate',
    desc: 'Are gifting-entry customers navigating to everyday wear, rings, or earrings during non-occasion windows? The first sign the mental model is beginning to shift.',
    dots: 1,
    target: 'Self-purchase category entry rate rises from an estimated 12-15% baseline to 20-25% among gifting-entry customers',
  },
  {
    tier: 'TIER 2',
    signal: 'CONSIDERATION SIGNAL',
    metric: 'Unprompted browse sessions with depth',
    desc: 'Gifting-entry customers returning with no campaign trigger, spending over 90 seconds, viewing more than 3 pages. Pull behaviour, not push behaviour.',
    dots: 2,
    target: 'Unprompted browse sessions with depth rise from an estimated 5-7% baseline to 9-12%. Pull behaviour, not push',
  },
  {
    tier: 'TIER 3',
    signal: 'INTENT SIGNAL',
    metric: 'Wishlist saves in self-purchase categories',
    desc: 'An explicit statement of personal desire. Requires active intent. The strongest leading indicator before any transaction occurs.',
    dots: 3,
    target: 'Wishlist saves in self-purchase categories reach 3-5% of gifting-entry customers, up from near zero with no current mechanism',
  },
]

const PHASES = [
  {
    label: 'PHASE 1',
    time: 'Weeks 1 to 8',
    title: 'Proof of concept',
    items: [
      { done: true, text: 'Order confirmation page only' },
      { done: true, text: '50-50 split, gifting-entry cohort' },
      { done: false, text: 'Measure all 3 leading indicators' },
    ],
    active: 'full',
  },
  {
    label: 'PHASE 2',
    time: 'Weeks 9 to 16',
    title: 'Scale what works',
    items: [
      { done: false, text: 'Extend to email and package insert' },
      { done: false, text: 'Widen the cohort' },
      { done: false, text: 'Same measurement framework' },
    ],
    active: 'partial',
  },
  {
    label: 'PHASE 3',
    time: 'Weeks 17 to 24',
    title: 'Full omnichannel',
    items: [
      { done: false, text: 'In-store associate training' },
      { done: false, text: 'Style profile capture goes live' },
      { done: false, text: 'Now For You becomes permanent' },
    ],
    active: 'none',
  },
]

function DotIndicator({ filled, total }) {
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: i < filled ? '#C94A6E' : 'transparent',
            border: i < filled ? 'none' : '1px solid #E8D5DA',
          }}
        />
      ))}
    </div>
  )
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="section-padding"
      style={{ background: '#FDFAF7' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
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
            Measurement and Roadmap
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 500,
              color: '#1A1A1A',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            How we know it is working and what happens next
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              color: '#1A1A1A',
              margin: '0 0 16px',
            }}
          >
            Three leading indicators for 90 days
          </h3>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
          {METRICS.map((m, i) => (
            <FadeIn key={m.tier} delay={i * 0.1}>
              <div
                style={{
                  background: 'white',
                  border: '1px solid #F0E8EC',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#9E8E93', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                      {m.tier}
                    </p>
                    <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#C94A6E', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0' }}>
                      {m.signal}
                    </p>
                    <p style={{ fontSize: '18px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#1A1A1A', margin: '8px 0 0' }}>
                      {m.metric}
                    </p>
                    <p style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6B6B6B', margin: '6px 0 0', maxWidth: '480px', lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0, paddingTop: '4px' }}>
                    <DotIndicator filled={m.dots} total={3} />
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #F0E8EC',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '16px', color: '#C94A6E', flexShrink: 0 }}>&#9678;</span>
                  <div>
                    <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#9E8E93', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                      90-Day Target
                    </p>
                    <p style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#1A1A1A', margin: '2px 0 0', lineHeight: 1.5 }}>
                      {m.target}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div
            style={{
              background: '#FDF0F4',
              border: '1px solid #F0D5DC',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
            }}
          >
            <span style={{ fontSize: '15px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#1A1A1A' }}>
              These three metrics predict one lagging outcome:{' '}
            </span>
            <span style={{ fontSize: '15px', fontFamily: 'Inter, sans-serif', color: '#6B6B6B' }}>
              first self-purchase conversion among gifting-entry customers. That number will move 90 to 180 days after the leading indicators do. This is why the stack matters more than the outcome metric alone.
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              color: '#1A1A1A',
              margin: '0 0 40px',
            }}
          >
            The experiment roadmap
          </h3>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="roadmap-timeline-container" style={{ marginBottom: '40px' }}>
            <div
              className="roadmap-timeline"
              style={{
                display: 'flex',
                gap: '0',
                position: 'relative',
                alignItems: 'flex-start',
              }}
            >
              {PHASES.map((phase, i) => (
                <div key={phase.label} style={{ flex: 1, position: 'relative' }}>
                  {i < PHASES.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '30px',
                        left: '50%',
                        right: '-50%',
                        height: '1px',
                        background: '#F0E8EC',
                        zIndex: 0,
                      }}
                    />
                  )}

                  <div style={{ textAlign: 'center', paddingBottom: '8px' }}>
                    <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#9E8E93', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px' }}>
                      {phase.label}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1, marginBottom: '8px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: phase.active === 'full' ? '#C94A6E' : phase.active === 'partial' ? '#E8C4CE' : '#FDFAF7',
                        border: phase.active === 'none' ? '2px solid #E8D5DA' : 'none',
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                    <p style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', color: '#6B6B6B', margin: 0 }}>
                      {phase.time}
                    </p>
                  </div>

                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #F0E8EC',
                      borderRadius: '12px',
                      padding: '16px',
                      margin: '0 8px',
                    }}
                  >
                    <p style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#1A1A1A', margin: '0 0 10px' }}>
                      {phase.title}
                    </p>
                    {phase.items.map((item) => (
                      <div key={item.text} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <span style={{ fontSize: '12px', color: item.done ? '#4CAF50' : '#D0C0C4', flexShrink: 0 }}>
                          {item.done ? '✓' : '○'}
                        </span>
                        <span style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', color: item.done ? '#1A1A1A' : '#9E8E93', lineHeight: 1.4 }}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontStyle: 'italic',
              color: '#2A1A1E',
              maxWidth: '720px',
              margin: '40px auto 32px',
              lineHeight: 1.5,
              textAlign: 'center',
            }}
          >
            If the leading indicators move in 90 days, GIVA will have evidence that the same customers who built the gifting engine can become the foundation of the everyday wear one.
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .roadmap-timeline {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .roadmap-timeline > div {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
