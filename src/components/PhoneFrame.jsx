import { useState, useEffect } from 'react'

export default function PhoneFrame({ children, hint = 'Tap to explore', subHint = '' }) {
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleInteraction = () => setShowHint(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        onClick={handleInteraction}
        style={{
          background: '#1A1A1A',
          borderRadius: '40px',
          width: '280px',
          height: '560px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          padding: '12px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: '#FDFAF7',
            borderRadius: '32px',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '20px',
              background: '#1A1A1A',
              borderRadius: '0 0 10px 10px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 10,
            }}
          />
          <div style={{ position: 'absolute', top: '20px', left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
            {children}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '12px',
          textAlign: 'center',
          transition: 'opacity 0.5s',
          opacity: showHint ? 1 : 0,
        }}
      >
        <p style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', color: '#9E8E93', margin: 0 }}>
          {hint}
        </p>
        {subHint && (
          <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#C0B0B5', margin: '2px 0 0' }}>
            {subHint}
          </p>
        )}
      </div>
    </div>
  )
}
