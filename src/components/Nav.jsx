import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'The Brand', href: '#the-brand' },
  { label: 'The Problem', href: '#the-problem' },
  { label: 'The Insight', href: '#the-insight' },
  { label: 'Now For You', href: '#now-for-you' },
  { label: 'Roadmap', href: '#roadmap' },
]

const SECTION_IDS = ['the-brand', 'the-problem', 'the-insight', 'now-for-you', 'roadmap']

export default function Nav() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '56px',
          background: 'rgba(253,250,247,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #F0E8EC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <span
            style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#C94A6E',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            GIVA
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '1px',
              height: '14px',
              background: '#E8D5DA',
              margin: '0 12px',
            }}
          />
          <span
            style={{
              fontSize: '13px',
              color: '#9E8E93',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
            }}
          >
            Now For You: A Product Brief by Tanvi Mannapur
          </span>
        </div>

        <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#C94A6E' : '#6B6B6B',
                  fontWeight: isActive ? 500 : 400,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C94A6E' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? '#C94A6E' : '#6B6B6B' }}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          aria-label="Open menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '20px',
                height: '2px',
                background: '#1A1A1A',
                borderRadius: '1px',
              }}
            />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="slide-in"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: '#1A0A0E',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              lineHeight: 1,
            }}
            aria-label="Close menu"
          >
            x
          </button>

          <span
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '28px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: '#F5E6C8',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            GIVA
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '32px',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '24px 0',
                  width: '100%',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
