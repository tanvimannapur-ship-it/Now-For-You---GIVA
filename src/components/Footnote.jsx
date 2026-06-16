export default function Footnote({ n }) {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('sources')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <sup
      onClick={handleClick}
      style={{
        fontSize: '10px',
        color: '#C94A6E',
        fontWeight: 600,
        cursor: 'pointer',
        verticalAlign: 'super',
        marginLeft: '1px',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
      onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
    >
      [{n}]
    </sup>
  )
}
