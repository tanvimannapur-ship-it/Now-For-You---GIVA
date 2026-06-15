import { useState } from 'react'

const ALL_TAGS = ['Minimal', 'Bold', 'Everyday', 'Occasional', 'Silver', 'Gold', 'Chains', 'Rings', 'Bracelets', 'Oxidised', 'Classic', 'Modern']

const SCREEN_1 = 'prompt'
const SCREEN_2 = 'tags'
const SCREEN_3 = 'done'

export default function Surface04Phone() {
  const [screen, setScreen] = useState(SCREEN_1)
  const [selected, setSelected] = useState(new Set())
  const [slideDir, setSlideDir] = useState('none')

  const goTo = (nextScreen, dir = 'forward') => {
    setSlideDir(dir)
    setTimeout(() => setScreen(nextScreen), 10)
  }

  const toggleTag = (tag) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) {
        next.delete(tag)
      } else {
        if (next.size >= 3) return prev
        next.add(tag)
      }
      return next
    })
  }

  const reset = () => {
    setSelected(new Set())
    goTo(SCREEN_1, 'back')
  }

  const getScreenStyle = (targetScreen) => ({
    position: 'absolute',
    inset: 0,
    overflowY: 'auto',
    transition: 'transform 0.3s ease',
    transform: screen === targetScreen
      ? 'translateX(0)'
      : slideDir === 'forward'
        ? 'translateX(-100%)'
        : 'translateX(100%)',
    background: '#F7F3F0',
  })

  const headerBar = (
    <div
      style={{
        background: '#1A1A1A',
        padding: '10px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: '11px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
        GIVA Store &middot; Jayanagar
      </span>
      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
        Priya
      </span>
    </div>
  )

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={getScreenStyle(SCREEN_1)}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {headerBar}
          <div style={{ padding: '12px', flex: 1 }}>
            <div
              style={{
                background: 'white',
                borderRadius: '10px',
                padding: '12px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  background: '#E8F5E9',
                  color: '#2E7D32',
                  fontSize: '10px',
                  borderRadius: '20px',
                  padding: '2px 8px',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px',
                }}
              >
                Order Complete
              </span>
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#1A1A1A', margin: 0, fontFamily: 'Inter, sans-serif' }}>
                Men's Silver Name Bracelet &middot; Rs.3,499
              </p>
              <p style={{ fontSize: '11px', color: '#9E8E93', margin: '4px 0 0', fontFamily: 'Inter, sans-serif' }}>
                Customer: Guest
              </p>
            </div>

            <div
              style={{
                background: 'white',
                borderLeft: '3px solid #C94A6E',
                borderRadius: '10px',
                padding: '12px',
              }}
            >
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', margin: 0, fontFamily: 'Inter, sans-serif' }}>
                Start the Now For You conversation
              </p>
              <p style={{ fontSize: '11px', fontStyle: 'italic', color: '#6B6B6B', margin: '6px 0 0', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                Ask: Would you like us to save your style preferences so we can find something for you next time?
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                <button
                  onClick={() => goTo(SCREEN_2)}
                  style={{
                    background: '#C94A6E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Customer said yes
                </button>
                <button
                  style={{
                    border: '1px solid #E8D5DA',
                    color: '#9E8E93',
                    background: 'transparent',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={getScreenStyle(SCREEN_2)}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {headerBar}
          <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', margin: '0 0 4px', fontFamily: 'Inter, sans-serif' }}>
              Style Profile
            </p>
            <p style={{ fontSize: '11px', color: '#9E8E93', margin: '0 0 12px', fontFamily: 'Inter, sans-serif' }}>
              Select up to 3 preferences
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1 }}>
              {ALL_TAGS.map((tag) => {
                const isSelected = selected.has(tag)
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    style={{
                      fontSize: '12px',
                      fontFamily: 'Inter, sans-serif',
                      border: `1px solid ${isSelected ? '#C94A6E' : '#E8D5DA'}`,
                      borderRadius: '20px',
                      padding: '6px 14px',
                      cursor: 'pointer',
                      background: isSelected ? '#C94A6E' : 'white',
                      color: isSelected ? 'white' : '#6B6B6B',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => selected.size > 0 && goTo(SCREEN_3)}
              style={{
                width: '100%',
                background: selected.size > 0 ? '#C94A6E' : '#F0E8EC',
                color: selected.size > 0 ? 'white' : '#C0A8B0',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                cursor: selected.size > 0 ? 'pointer' : 'not-allowed',
                marginTop: '16px',
                transition: 'all 0.2s',
              }}
            >
              Save to customer profile
            </button>
          </div>
        </div>
      </div>

      <div style={getScreenStyle(SCREEN_3)}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {headerBar}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: '#E8F5E9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: '#4CAF50',
                marginBottom: '16px',
              }}
            >
              &#10003;
            </div>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#1A1A1A', margin: 0, fontFamily: 'Inter, sans-serif' }}>
              Style profile saved
            </p>
            <p style={{ fontSize: '13px', color: '#6B6B6B', margin: '8px 0 0', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
              This customer will receive a personalised Now For You email within 24 hours.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px', justifyContent: 'center' }}>
              {[...selected].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: '#FDF0F4',
                    color: '#C94A6E',
                    border: '1px solid #F0D5DC',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={reset}
              style={{
                border: '1px solid #E8D5DA',
                color: '#9E8E93',
                background: 'transparent',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer',
                marginTop: '24px',
              }}
            >
              Start new transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
