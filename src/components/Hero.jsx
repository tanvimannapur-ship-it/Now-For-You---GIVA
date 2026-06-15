import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FDFAF7',
        position: 'relative',
        textAlign: 'center',
        padding: '80px 24px 80px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ maxWidth: '900px', width: '100%' }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 600,
            color: '#1A1A1A',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          GIVA built Rs.518 Cr
          <br />
          teaching India to gift.
        </h1>

        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 500,
            color: '#4A4A4A',
            lineHeight: 1.2,
            marginTop: '24px',
          }}
        >
          The next chapter is teaching India
          <br />
          to treat themselves.
        </h2>

        <div
          style={{
            width: '80px',
            height: '1px',
            background: '#C94A6E',
            margin: '28px auto',
          }}
        />

        <p
          style={{
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            color: '#9E8E93',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          A product brief by Tanvi Mannapur &middot; June 2026
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="bounce-chevron" style={{ color: '#C94A6E' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#C94A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
