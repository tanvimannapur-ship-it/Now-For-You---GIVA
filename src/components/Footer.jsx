const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', padding: '32px 40px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '18px',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
          }}
        >
          Now For You
        </p>

        <p
          style={{
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(255,255,255,0.5)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Built by Tanvi Mannapur &middot; Product Manager
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a
            href="https://www.linkedin.com/in/tanvi-mannapur-b7a382211/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:tanvi_mannapur@pg26.mesaschool.co"
            style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: '16px',
          paddingTop: '16px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(255,255,255,0.3)',
            margin: 0,
          }}
        >
          This is an independent product brief created as part of a job application. All brand references are for illustrative purposes.
        </p>
      </div>
    </footer>
  )
}
