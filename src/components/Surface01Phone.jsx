import { useState, useEffect, useRef } from 'react'

const PRODUCTS = [
  { id: 'A', name: 'Silver Chain Bracelet', price: 'Rs.2,499', emoji: '💎' },
  { id: 'B', name: "Men's Gold Ring", price: 'Rs.3,999', emoji: '🔱' },
  { id: 'C', name: 'Black Cord Necklace', price: 'Rs.1,999', emoji: '⚡' },
  { id: 'D', name: 'Silver Kada', price: 'Rs.2,799', emoji: '⭕' },
  { id: 'E', name: 'Oxidised Ring', price: 'Rs.1,699', emoji: '✨' },
]

const SCREEN_1 = 'confirmation'
const SCREEN_3 = 'wishlist'

export default function Surface01Phone() {
  const [screen, setScreen] = useState(SCREEN_1)
  const [saved, setSaved] = useState(new Set())
  const [nfyVisible, setNfyVisible] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastExiting, setToastExiting] = useState(false)
  const [showWishlistBtn, setShowWishlistBtn] = useState(false)
  const [slideDir, setSlideDir] = useState('none')
  const toastTimerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setNfyVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleHeart = (productId) => {
    if (saved.has(productId)) return
    setSaved((prev) => new Set([...prev, productId]))

    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToastExiting(false)
    setToastVisible(true)

    toastTimerRef.current = setTimeout(() => {
      setToastExiting(true)
      setTimeout(() => {
        setToastVisible(false)
        setShowWishlistBtn(true)
      }, 300)
    }, 2000)
  }

  const goToWishlist = () => {
    setSlideDir('forward')
    setTimeout(() => setScreen(SCREEN_3), 10)
  }

  const goBack = () => {
    setSlideDir('back')
    setTimeout(() => setScreen(SCREEN_1), 10)
  }

  const screenStyle = (active) => ({
    position: 'absolute',
    inset: 0,
    overflowY: 'auto',
    transition: 'transform 0.3s ease',
    transform: active ? 'translateX(0)' : slideDir === 'forward' ? 'translateX(-100%)' : 'translateX(100%)',
    background: '#FDFAF7',
  })

  const savedList = PRODUCTS.filter((p) => saved.has(p.id))
  const suggestions = PRODUCTS.filter((p) => !saved.has(p.id)).slice(0, 2)

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={screenStyle(screen === SCREEN_1)}>
        <div style={{ padding: '0 10px 16px' }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#C94A6E',
              textAlign: 'center',
              paddingTop: '10px',
              margin: 0,
            }}
          >
            GIVA
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                background: '#E8F5E9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#4CAF50',
              }}
            >
              &#10003;
            </div>
          </div>

          <p
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1A1A1A',
              textAlign: 'center',
              margin: '8px 0 0',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Order Confirmed
          </p>
          <p
            style={{
              fontSize: '12px',
              color: '#9E8E93',
              textAlign: 'center',
              margin: '2px 0 0',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Your gift is on its way
          </p>

          <div
            style={{
              background: '#F9F6F3',
              borderRadius: '12px',
              padding: '12px',
              margin: '12px 0',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <div style={{ fontWeight: 600, color: '#1A1A1A' }}>
              <span style={{ marginRight: '6px' }}>💎</span>
              Men's Silver Name Bracelet
            </div>
            <div style={{ color: '#C94A6E', fontWeight: 600, marginTop: '4px' }}>Rs.3,499</div>
            <div style={{ color: '#9E8E93', fontSize: '11px', marginTop: '4px' }}>
              For: Arjun &middot; Est. delivery: Thu 18 Jun
            </div>
          </div>

          <div style={{ height: '1px', background: '#F0E8EC', margin: '12px 0' }} />

          <div
            style={{
              opacity: nfyVisible ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          >
            <p
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.12em',
                color: '#C94A6E',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Now For You
            </p>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#1A1A1A',
                margin: '4px 0 0',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              You picked something great for him.
            </p>
            <p
              style={{
                fontSize: '12px',
                color: '#9E8E93',
                margin: '2px 0 0',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Here is something we think you would love.
            </p>

            <div
              className="scrollbar-hide"
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '4px',
                marginTop: '12px',
              }}
            >
              {PRODUCTS.slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: saved.has(p.id) ? '#FDF0F4' : 'white',
                    border: '1px solid #F0E8EC',
                    borderRadius: '12px',
                    padding: '10px',
                    minWidth: '110px',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                >
                  <div style={{ fontSize: '28px', textAlign: 'center' }}>{p.emoji}</div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#1A1A1A',
                      marginTop: '4px',
                      fontFamily: 'Inter, sans-serif',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#C94A6E',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      marginTop: '2px',
                    }}
                  >
                    {p.price}
                  </div>
                  <button
                    onClick={() => handleHeart(p.id)}
                    style={{
                      width: '28px',
                      height: '28px',
                      border: '1px solid #F0E8EC',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '8px',
                      cursor: 'pointer',
                      background: 'white',
                      fontSize: '14px',
                      color: saved.has(p.id) ? '#C94A6E' : '#9E8E93',
                      transition: 'color 0.2s',
                    }}
                    aria-label="Save to wishlist"
                  >
                    {saved.has(p.id) ? '♥' : '♡'}
                  </button>
                </div>
              ))}
            </div>

            {showWishlistBtn && (
              <button
                onClick={goToWishlist}
                style={{
                  width: '100%',
                  background: '#C94A6E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginTop: '8px',
                  animation: 'fadeInUp 0.3s ease',
                }}
              >
                View My Wishlist
              </button>
            )}

            <button
              style={{
                width: '100%',
                border: '1px solid #C94A6E',
                color: '#C94A6E',
                background: 'transparent',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                cursor: 'pointer',
                marginTop: '8px',
              }}
            >
              Save for Yourself
            </button>
          </div>
        </div>

        {toastVisible && (
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '10px',
              right: '10px',
              background: '#1A1A1A',
              borderRadius: '12px',
              padding: '12px',
              transform: toastExiting ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.3s ease',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                margin: 0,
              }}
            >
              Saved to your wishlist
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                margin: '4px 0 0',
              }}
            >
              We will remind you when the time feels right.
            </p>
          </div>
        )}
      </div>

      <div style={screenStyle(screen === SCREEN_3)}>
        <div style={{ padding: '10px 12px 16px' }}>
          <button
            onClick={goBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#C94A6E',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            &larr; Back
          </button>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1A1A1A',
              margin: '8px 0 2px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Your Style, Saved
          </p>
          <p
            style={{
              fontSize: '12px',
              color: '#9E8E93',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Items you are keeping for yourself
          </p>

          <div style={{ marginTop: '12px' }}>
            {savedList.length === 0 ? (
              <p style={{ fontSize: '12px', color: '#9E8E93', fontFamily: 'Inter, sans-serif' }}>
                No items saved yet. Go back and tap a heart.
              </p>
            ) : (
              savedList.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: '#FDF0F4',
                    border: '1px solid #F0E8EC',
                    borderRadius: '12px',
                    padding: '10px',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{p.emoji}</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#C94A6E', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                      {p.price}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div style={{ height: '1px', background: '#F0E8EC', margin: '12px 0' }} />
          <p
            style={{
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              color: '#9E8E93',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 10px',
            }}
          >
            You might also like
          </p>

          {suggestions.map((p) => (
            <div
              key={p.id}
              style={{
                background: 'white',
                border: '1px solid #F0E8EC',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                marginBottom: '8px',
              }}
            >
              <span style={{ fontSize: '24px' }}>{p.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 500, color: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '12px', color: '#C94A6E', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  {p.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
