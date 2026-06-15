const TEXT = 'Gifting is the acquisition moat · Everyday wear is the LTV play · One intervention · Four surfaces · Zero incremental CAC · Now For You · '

export default function MarqueeBanner() {
  const repeated = TEXT + TEXT + TEXT

  return (
    <div
      style={{
        background: '#C94A6E',
        height: '48px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div className="marquee-track" style={{ willChange: 'transform' }}>
        <span
          style={{
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            color: 'white',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  )
}
