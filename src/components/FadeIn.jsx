import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, className = '', as = 'div' }) {
  const Component = motion[as] || motion.div

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Component>
  )
}
