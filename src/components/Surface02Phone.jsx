const PRODUCTS_EMAIL = [
  { id: 'A', name: 'Silver Chain Bracelet', price: 'Rs.2,499', emoji: '💎' },
  { id: 'C', name: 'Black Cord Necklace', price: 'Rs.1,999', emoji: '⚡' },
]

export default function Surface02Phone() {
  return (
    <div
      className="scrollbar-hide"
      style={{
        position: 'absolute',
        inset: 0,
        overflowY: 'auto',
        background: '#F0F0F0',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          background: '#F5F5F5',
          borderBottom: '1px solid #E0E0E0',
          padding: '8px 12px',
          zIndex: 5,
        }}
      >
        <p style={{ fontSize: '10px', color: '#9E8E93', margin: 0, fontFamily: 'Inter, sans-serif' }}>
          From: GIVA &lt;orders@giva.co&gt;
        </p>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: '#1A1A1A',
            margin: '2px 0 0',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Re: Order confirmed
        </p>
      </div>

      <div style={{ padding: '16px 12px', background: 'white', minHeight: '100%' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 800,
            letterSpacing: '0.15em',
            color: '#C94A6E',
            textAlign: 'center',
            margin: 0,
          }}
        >
          GIVA
        </p>

        <p
          style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1A1A1A',
            textAlign: 'center',
            margin: '12px 0 0',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Order Confirmed
        </p>

        <div
          style={{
            background: '#F9F6F3',
            borderRadius: '8px',
            padding: '12px',
            margin: '12px 0',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#1A1A1A',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Men's Silver Name Bracelet
          </p>
          <p
            style={{
              fontSize: '12px',
              color: '#9E8E93',
              margin: '4px 0 0',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Rs.3,499 &middot; Est. delivery Thu 18 Jun
          </p>
        </div>

        <div style={{ height: '1px', background: '#F0E8EC', margin: '12px 0' }} />

        <div
          style={{
            background: '#FDF0F4',
            borderRadius: '12px',
            padding: '16px',
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
            While his gift is on its way
          </p>
          <p
            style={{
              fontSize: '13px',
              color: '#9E8E93',
              margin: '4px 0 0',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            We noticed what you picked. Here is what suits you.
          </p>

          {PRODUCTS_EMAIL.map((p) => (
            <div
              key={p.id}
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '10px',
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{p.emoji}</span>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#1A1A1A',
                      margin: 0,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#C94A6E',
                      fontWeight: 600,
                      margin: '2px 0 0',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {p.price}
                  </p>
                </div>
              </div>
              <button
                style={{
                  width: '100%',
                  border: '1px solid #C94A6E',
                  color: '#C94A6E',
                  background: 'transparent',
                  borderRadius: '6px',
                  padding: '6px 0',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'default',
                  textAlign: 'center',
                }}
              >
                Save for Yourself
              </button>
            </div>
          ))}

          <p
            style={{
              fontSize: '11px',
              color: '#9E8E93',
              textAlign: 'center',
              margin: '12px 0 0',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic',
            }}
          >
            Your taste. Your wishlist. Whenever you are ready.
          </p>
        </div>

        <p
          style={{
            fontSize: '10px',
            color: '#9E8E93',
            textAlign: 'center',
            margin: '16px 0 0',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          GIVA &middot; Bengaluru, India
        </p>
      </div>
    </div>
  )
}
