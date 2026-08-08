import RevealOnScroll from './RevealOnScroll.jsx'

/**
 * Consistent eyebrow + heading + optional subtext pattern used across sections.
 */
function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClasses = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col ${alignClasses} mb-14 md:mb-20`}>
      {eyebrow && (
        <RevealOnScroll>
          <span className="section-eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
            {eyebrow}
          </span>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.08}>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] text-mist-100 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll delay={0.16}>
          <p className="mt-5 max-w-2xl text-base text-mist-500 md:text-lg">{subtitle}</p>
        </RevealOnScroll>
      )}
    </div>
  )
}

export default SectionHeading
