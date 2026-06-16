import FadeIn from './FadeIn'

const SOURCES = [
  {
    n: 1,
    text: 'GIVA FY25 Financial Results. Revenue, store count, and online-offline split',
    linkText: 'entrackr.com',
    url: 'https://entrackr.com/fintrackr/givas-revenue-jumps-89-to-rs-518-cr-in-fy25-11103039',
  },
  {
    n: 2,
    text: 'Creaegis Series C Announcement. Everyday wear fine jewellery positioning',
    linkText: 'indianjeweller.in',
    url: 'https://www.indianjeweller.in/Indian-Jewellery-News/15508/giva-secures-rs.530-cr-in-series-c-funding-led-by-creaegis,-eyes-expansion-in-lab-grown-diamonds-and-retail',
  },
  {
    n: 3,
    text: 'Outlook Business Interview with Ishendra Agarwal. Gifting forte and repurchase cycle',
    linkText: 'outlookbusiness.com',
    url: 'https://www.outlookbusiness.com/interviews/indian-mens-demand-for-jewellery-is-surging-says-giva-founder',
  },
  {
    n: 4,
    text: 'Klaviyo 2024 Email Benchmarks. Post-purchase flows generate up to 30x more revenue per recipient',
    linkText: 'klaviyo.com',
    url: 'https://www.klaviyo.com/marketing-resources/email-benchmarks-by-industry-2024',
  },
  {
    n: 5,
    text: 'Academic research on gift purchases as brand relationship catalysts. 63% downstream sales increase after a gifter makes a self-purchase',
    linkText: 'AMA Journals via SlideShare',
    url: 'https://www.slideshare.net/AMA-Journals/gift-purchases-as-catalysts-for-strengthening-customerbrand-relationships',
  },
]

export default function Sources() {
  return (
    <section id="sources" style={{ background: '#FDFAF7' }}>
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '32px 40px',
          borderTop: '1px solid #F0E8EC',
        }}
      >
        <FadeIn>
          <p
            style={{
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.15em',
              color: '#9E8E93',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            Sources
          </p>

          {SOURCES.map((s) => (
            <p
              key={s.n}
              style={{
                lineHeight: 1.8,
                margin: '0 0 8px',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#C94A6E',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                [{s.n}]{' '}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#6B6B6B',
                }}
              >
                {s.text}.{' '}
              </span>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#C94A6E',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
              >
                {s.linkText}
              </a>
            </p>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
