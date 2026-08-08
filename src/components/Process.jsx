import * as Icons from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'
import { processSteps } from '../data/services.js'

function ProcessStep({ step, index, isLast }) {
  const Icon = Icons[step.icon] || Icons.CheckCircle2
  const isEven = index % 2 === 1

  return (
    <div className="relative grid grid-cols-[auto_1fr] gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-8">
      {/* Left content (desktop) */}
      <div className={`hidden md:block ${isEven ? 'order-1' : 'order-1 text-right'}`}>
        {!isEven && (
          <RevealOnScroll delay={0.1}>
            <StepContent step={step} align="right" />
          </RevealOnScroll>
        )}
      </div>

      {/* Center node + line */}
      <div className="order-2 flex flex-col items-center">
        <RevealOnScroll delay={0.05}>
          <div className="glass-strong relative z-10 flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-signal-indigo/30">
            <Icon size={20} className="text-signal-cyan" strokeWidth={1.8} />
          </div>
        </RevealOnScroll>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-mist-700/40 to-transparent" style={{ minHeight: '3rem' }} />
        )}
      </div>

      {/* Right content (desktop) / all content (mobile) */}
      <div className={`order-3 ${isEven ? 'md:order-3' : 'md:order-3'}`}>
        <RevealOnScroll delay={0.1}>
          <StepContent step={step} align="left" mobileVisible />
        </RevealOnScroll>
        {isEven && (
          <div className="hidden" />
        )}
      </div>
    </div>
  )
}

function StepContent({ step, align, mobileVisible }) {
  return (
    <div className={`${align === 'right' ? 'md:text-right' : ''} ${!mobileVisible ? 'hidden md:block' : 'pb-10 md:pb-16'}`}>
      <span className="font-mono text-xs tracking-wider text-signal-indigo/70">{step.number}</span>
      <h3 className="mt-1 font-display text-xl font-semibold text-mist-100">{step.title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-mist-500 md:inline-block">
        {step.description}
      </p>
    </div>
  )
}

function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I Work"
          title="From Idea to Launch."
          subtitle="A clear, structured process so you always know what's happening and when."
        />

        <div className="flex flex-col">
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
