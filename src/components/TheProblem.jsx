import FadeIn from './FadeIn'

const TENSIONS = [
  {
    bold: 'The mental model never shifts.',
    body: 'A customer who arrived buying for someone else has filed GIVA away as a gift store. Nothing in the current experience invites them to see themselves as the recipient.',
  },
  {
    bold: 'The repurchase cycle mirrors the occasion calendar.',
    body: 'Five to six months between purchases, clustered around Valentine\'s Day, Diwali, and Raksha Bandhan. That is a seasonal brand. Not an everyday luxury brand.',
  },
  {
    bold: 'The brand has been trying to solve this since 2022.',
    body: 'The Anushka Sharma campaign explicitly aimed to shift jewellery from occasion-only to everyday self-expression. Three years on, the product experience has not caught up with that intent.',
  },
]

const TODAY_NODES = [
  { label: 'Discovers GIVA', active: true },
  { label: 'Buys a Gift', active: true },
  { label: 'Great Experience', active: true },
  { label: 'Waits for Occasion', active: false },
  { label: 'Buys Next Gift', active: false },
]

const NFY_NODES = [
  { label: 'Discovers GIVA', special: false },
  { label: 'Buys a Gift', special: false },
  { label: 'Meets Now For You', special: true },
  { label: 'Explores for Self', special: false },
  { label: 'Becomes a Wearer', special: false },
]

function JourneyNode({ label, active = true, special = false, muted = false }) {
  let bg, border, textColor

  if (special) {
    bg = '#C94A6E'
    border = 'none'
    textColor = 'white'
  } else if (muted) {
    bg = 'rgba(255,255,255,0.06)'
    border = '1px solid rgba(255,255,255,0.15)'
    textColor = '#9E8E93'
  } else {
    bg = 'rgba(201,74,110,0.15)'
    border = '1px solid #C94A6E'
    textColor = '#F5C5D0'
  }

  return (
    <div
      style={{
        background: bg,
        border,
        borderRadius: '20px',
        padding: '8px 14px',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
        color: textColor,
        whiteSpace: 'nowrap',
        fontWeight: special ? 600 : 400,
        flexShrink: 0,
      }}
    >
      {special && <span style={{ marginRight: '4px' }}>&#10024;</span>}
      {label}
    </div>
  )
}

function ArrowRight({ color = 'rgba(255,255,255,0.2)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', color, flexShrink: 0 }}>
      <div style={{ width: '20px', height: '1px', background: color }} />
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" style={{ marginLeft: '-1px' }}>
        <path d="M1 1l4 3-4 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function TheProblem() {
  return (
    <section
      id="the-problem"
      className="section-padding"
      style={{ background: '#3D1520' }}
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
            The Problem
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 500,
              color: '#FDFAF7',
              lineHeight: 1.2,
              margin: '0 0 16px',
            }}
          >
            A gifting wedge is a beautiful acquisition strategy.
            <br />
            As a retention strategy, it falls apart.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontSize: '17px',
              fontFamily: 'Inter, sans-serif',
              color: '#D4B8BE',
              lineHeight: 1.8,
              maxWidth: '640px',
              margin: '0 0 24px',
            }}
          >
            GIVA's best customer arrives through gifting. They buy a bracelet for a friend's birthday,
            have a great experience, and leave with a strong impression of the brand.
            Then they wait for the next occasion.
          </p>
        </FadeIn>

        <div style={{ marginBottom: '24px' }}>
          {TENSIONS.map((t, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                style={{
                  borderLeft: '3px solid #C94A6E',
                  paddingLeft: '20px',
                  marginBottom: '32px',
                }}
              >
                <p
                  style={{
                    fontSize: '17px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    color: '#FDFAF7',
                    margin: 0,
                  }}
                >
                  {t.bold}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#D4B8BE',
                    margin: '6px 0 0',
                    lineHeight: 1.7,
                  }}
                >
                  {t.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '32px',
              overflowX: 'auto',
            }}
          >
            <p
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.15em',
                color: '#C94A6E',
                textTransform: 'uppercase',
                margin: '0 0 16px',
              }}
            >
              Today
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '16px',
                minWidth: '500px',
              }}
            >
              {TODAY_NODES.map((node, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <JourneyNode label={node.label} active={node.active} muted={!node.active} />
                  {i < TODAY_NODES.length - 1 && (
                    <ArrowRight color={node.active ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.12)'} />
                  )}
                </div>
              ))}
              <div
                style={{
                  marginLeft: '4px',
                  fontSize: '10px',
                  color: 'rgba(201,74,110,0.5)',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'italic',
                  flexShrink: 0,
                }}
              >
                loops back
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />

            <p
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.15em',
                color: '#C94A6E',
                textTransform: 'uppercase',
                margin: '0 0 16px',
              }}
            >
              With Now For You
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                minWidth: '500px',
              }}
            >
              {NFY_NODES.map((node, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <JourneyNode label={node.label} special={node.special} />
                  {i < NFY_NODES.length - 1 && (
                    <ArrowRight color={node.special || i >= 2 ? '#C94A6E' : 'rgba(201,74,110,0.4)'} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontStyle: 'italic',
                color: '#F5C5D0',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Gifting is the acquisition moat.
              <br />
              Everyday wear is the LTV expansion play.
              <br />
              Right now, GIVA has the moat. Not the play.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
