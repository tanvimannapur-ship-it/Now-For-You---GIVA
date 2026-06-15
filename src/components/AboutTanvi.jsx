import FadeIn from './FadeIn'

export default function AboutTanvi() {
  return (
    <section style={{ background: '#FDFAF7' }}>
      <div
        style={{
          maxWidth: '480px',
          margin: '0 auto',
          padding: '48px 24px',
          textAlign: 'center',
          borderTop: '1px solid #F0E8EC',
        }}
      >
        <FadeIn>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#F0E8EC',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                color: '#C94A6E',
              }}
            >
              TM
            </span>
          </div>

          <p
            style={{
              fontSize: '18px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              color: '#1A1A1A',
              margin: '0 0 6px',
            }}
          >
            Tanvi Mannapur
          </p>

          <p
            style={{
              fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              color: '#9E8E93',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Product Manager &middot; Mesa School of Business
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              marginTop: '20px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.linkedin.com/in/tanvi-mannapur-b7a382211/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid #C94A6E',
                color: '#C94A6E',
                background: 'transparent',
                borderRadius: '20px',
                padding: '8px 20px',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#FDF0F4' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:tanvi_mannapur@pg26.mesaschool.co"
              style={{
                border: '1px solid #C94A6E',
                color: '#C94A6E',
                background: 'transparent',
                borderRadius: '20px',
                padding: '8px 20px',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#FDF0F4' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              Send an email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
