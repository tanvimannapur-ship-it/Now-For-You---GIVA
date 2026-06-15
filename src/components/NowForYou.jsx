import FadeIn from './FadeIn'
import PhoneFrame from './PhoneFrame'
import Surface01Phone from './Surface01Phone'
import Surface02Phone from './Surface02Phone'
import Surface03Phone from './Surface03Phone'
import Surface04Phone from './Surface04Phone'

function SurfaceSection({ bg, reverse, label, headline, boldSentence, icons, phone, hintText = 'Tap to explore', subHint = '' }) {
  return (
    <section style={{ background: bg, padding: '48px 24px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '64px',
        }}
        className={`surface-row${reverse ? ' surface-reverse' : ''}`}
      >
        {!reverse ? (
          <>
            <div style={{ flex: 1, minWidth: 0 }}>
              <FadeIn>
                <p style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em', color: '#C94A6E', textTransform: 'uppercase', margin: '0 0 4px' }}>
                  {label}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 32px)', color: '#1A1A1A', margin: '0 0 10px', lineHeight: 1.2 }}>
                  {headline}
                </h3>
                <p style={{ fontSize: '17px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#1A1A1A', margin: '0 0 16px', lineHeight: 1.5, maxWidth: '480px' }}>
                  {boldSentence}
                </p>
                <div style={{ display: 'flex', gap: '24px', paddingTop: '20px', borderTop: '1px solid #F0E8EC', flexWrap: 'wrap' }}>
                  {icons.map(({ emoji, label: iconLabel }) => (
                    <div key={iconLabel} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '20px' }}>{emoji}</div>
                      <div style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9E8E93', marginTop: '4px' }}>
                        {iconLabel}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15} className="surface-phone">
              <PhoneFrame hint={hintText} subHint={subHint}>
                {phone}
              </PhoneFrame>
            </FadeIn>
          </>
        ) : (
          <>
            <FadeIn className="surface-phone surface-phone-left">
              <PhoneFrame hint={hintText} subHint={subHint}>
                {phone}
              </PhoneFrame>
            </FadeIn>
            <div style={{ flex: 1, minWidth: 0 }}>
              <FadeIn delay={0.15}>
                <p style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em', color: '#C94A6E', textTransform: 'uppercase', margin: '0 0 4px' }}>
                  {label}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 32px)', color: '#1A1A1A', margin: '0 0 10px', lineHeight: 1.2 }}>
                  {headline}
                </h3>
                <p style={{ fontSize: '17px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#1A1A1A', margin: '0 0 16px', lineHeight: 1.5, maxWidth: '480px' }}>
                  {boldSentence}
                </p>
                <div style={{ display: 'flex', gap: '24px', paddingTop: '20px', borderTop: '1px solid #F0E8EC', flexWrap: 'wrap' }}>
                  {icons.map(({ emoji, label: iconLabel }) => (
                    <div key={iconLabel} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '20px' }}>{emoji}</div>
                      <div style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9E8E93', marginTop: '4px' }}>
                        {iconLabel}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default function NowForYou() {
  return (
    <div id="now-for-you">
      <section
        style={{
          background: '#1A0A0E',
          padding: '48px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 8px)',
            gap: '12px',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} style={{ fontSize: '8px', color: 'rgba(201,74,110,0.15)' }}>&#9670;</span>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(120px, 20vw, 280px)',
              color: 'rgba(255,255,255,0.04)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            NOW
          </span>
        </div>

        <FadeIn>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: '#F5E6C8',
              margin: '0 0 8px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            GIVA
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'rgba(245,230,200,0.6)',
              margin: '0 0 16px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Introducing
          </p>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px, 8vw, 72px)',
              color: '#FFFFFF',
              margin: '0 0 20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Now For You
          </h2>

          <div
            style={{
              width: '80px',
              height: '1px',
              background: '#C94A6E',
              margin: '0 auto 20px',
              position: 'relative',
              zIndex: 1,
            }}
          />

          <p
            style={{
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 24px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            One intervention. Four expressions. Zero incremental CAC.
          </p>

          <p
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '17px',
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Now For You is a deliberate product moment that appears after every gifting purchase across four surfaces.
            Each expression is calibrated to what that surface can do.
            Together, they create the first moment in GIVA's experience that says: this one is for you.
          </p>
        </FadeIn>
      </section>

      <SurfaceSection
        bg="#FDFAF7"
        reverse={false}
        label="SURFACE 01 · ORDER CONFIRMATION"
        headline="The first mirror"
        boldSentence="A self-purchase prompt appears the moment the gift order is confirmed, before the tab closes."
        icons={[
          { emoji: '🎯', label: 'Intent captured' },
          { emoji: '💾', label: 'Wishlist seeded' },
          { emoji: '⚡', label: 'Zero new spend' },
        ]}
        phone={<Surface01Phone />}
      />

      <SurfaceSection
        bg="#FDF0F4"
        reverse={true}
        label="SURFACE 02 · CONFIRMATION EMAIL"
        headline="The reinforcement"
        boldSentence="Sent within the hour. The email confirms the order, then adds a curated personal edit below."
        icons={[
          { emoji: '📧', label: 'Within the hour' },
          { emoji: '🪄', label: 'Affinity picks' },
          { emoji: '📌', label: 'Save for Yourself CTA' },
        ]}
        phone={<Surface02Phone />}
        hintText="Scroll inside to explore"
        subHint="visual mockup"
      />

      <SurfaceSection
        bg="#FDFAF7"
        reverse={false}
        label="SURFACE 03 · PHYSICAL PACKAGE INSERT"
        headline="The high-emotion moment"
        boldSentence="A beautifully designed card inside every gifting order with a QR code to a personal style lookbook."
        icons={[
          { emoji: '📦', label: 'Physical touch' },
          { emoji: '🔗', label: 'QR to lookbook' },
          { emoji: '✨', label: 'Zero competition' },
        ]}
        phone={<Surface03Phone />}
        hintText="Tap card to flip"
      />

      <SurfaceSection
        bg="#FDF0F4"
        reverse={true}
        label="SURFACE 04 · IN-STORE ASSOCIATE"
        headline="The human layer"
        boldSentence="One question from the associate captures a style profile that powers every future digital touchpoint."
        icons={[
          { emoji: '🏪', label: 'Store as data' },
          { emoji: '🏷️', label: '3 preference tags' },
          { emoji: '🔄', label: 'Feeds CRM' },
        ]}
        phone={<Surface04Phone />}
        hintText="Tap through the flow"
      />

      <style>{`
        @media (max-width: 768px) {
          .surface-row {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .surface-reverse {
            flex-direction: column-reverse !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  )
}
