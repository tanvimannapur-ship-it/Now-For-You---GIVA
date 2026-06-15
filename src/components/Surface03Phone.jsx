import { useState } from 'react'

const QR_PATTERN = [
  [1,1,1,0,1],
  [1,0,1,1,0],
  [1,1,1,0,1],
  [0,0,1,1,1],
  [1,1,0,0,1],
]

export default function Surface03Phone() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#F5F0EC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <p
        style={{
          fontSize: '10px',
          fontFamily: 'Inter, sans-serif',
          color: '#9E8E93',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: 0,
        }}
      >
        {flipped ? 'Card flipped' : 'Tap card to flip'}
      </p>

      <div
        className="card-flip-container"
        style={{ width: '220px', height: '130px', cursor: 'pointer' }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`card-flip-inner${flipped ? ' flipped' : ''}`}>
          <div
            className="card-face"
            style={{
              background: '#1A0A0E',
              border: '1px solid rgba(201,156,110,0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '14px 12px',
            }}
          >
            <p
              style={{
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.15em',
                color: '#F5E6C8',
                textTransform: 'uppercase',
                margin: '0 0 8px',
              }}
            >
              GIVA
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '16px',
                fontStyle: 'italic',
                color: '#FDFAF7',
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              You have great taste.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center',
                margin: '3px 0 0',
              }}
            >
              Here is proof.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 6px)',
                gridTemplateRows: 'repeat(5, 6px)',
                gap: '1px',
                marginTop: '8px',
              }}
            >
              {QR_PATTERN.flat().map((filled, i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    background: filled ? '#F5E6C8' : '#1A0A0E',
                    borderRadius: '1px',
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize: '7px',
                fontFamily: 'Inter, sans-serif',
                color: 'rgba(245,230,200,0.6)',
                textAlign: 'center',
                margin: '4px 0 0',
              }}
            >
              Scan for your personal edit
            </p>
          </div>

          <div
            className="card-face card-face-back"
            style={{
              background: '#FDFAF7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '14px 12px',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '16px',
                color: '#C94A6E',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Now For You
            </p>
            <p
              style={{
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif',
                color: '#9E8E93',
                textAlign: 'center',
                margin: '4px 0 0',
                lineHeight: 1.4,
              }}
            >
              Based on what you gifted, we curated this for you.
            </p>

            <div style={{ marginTop: '8px', width: '100%' }}>
              {[
                'Silver Chain Bracelet for Men',
                "Men's Gold Ring",
                'Black Cord Necklace',
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    fontSize: '9px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#1A1A1A',
                    margin: '4px 0',
                    textAlign: 'center',
                  }}
                >
                  &bull; {item}
                </p>
              ))}
            </div>

            <p
              style={{
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif',
                color: '#C94A6E',
                margin: '8px 0 0',
                textAlign: 'center',
              }}
            >
              Your wishlist is at giva.co/me
            </p>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: '#C94A6E',
                marginTop: '6px',
              }}
            >
              GIVA
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
