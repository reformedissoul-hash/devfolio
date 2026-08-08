import { motion } from 'framer-motion'

/**
 * Wraps children in a fade+rise animation that triggers once when scrolled
 * into view. Use `delay` (seconds) to stagger multiple siblings.
 */
function RevealOnScroll({ children, delay = 0, y = 24, className = '', once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
