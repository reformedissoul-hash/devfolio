import * as Icons from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'
import { whyMeFeatures, statHighlights } from '../data/services.js'

function FeatureCard({ feature, index }) {
  const Icon = Icons[feature.icon] || Icons.Sparkles
  return (
    <RevealOnScroll delay={(index % 3) * 0.08}>
      <div className="flex h-full gap-4 rounded-2xl border border-mist-700/15 bg-ink-800/30 p-6 transition-colors duration-300 hover:border-mist-700/30 hover:bg-ink-800/50">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-700/60 ring-1 ring-mist-700/20">
          <Icon size={18} className="text-signal-violet" strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-mist-100">{feature.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-mist-500">{feature.description}</p>
        </div>
      </div>
    </RevealOnScroll>
  )
}

function WhyMe() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="glow-orb absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-signal-violet/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Not Just a Website. A Better Online Presence."
        />

        {/* Stat highlights strip */}
        <RevealOnScroll>
          <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {statHighlights.map((stat) => {
              const Icon = Icons[stat.icon] || Icons.Sparkles
              return (
                <div
                  key={stat.label}
                  className="glass flex flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center"
                >
                  <Icon size={20} className="text-signal-cyan" strokeWidth={1.8} />
                  <span className="font-display text-sm font-semibold text-mist-100 sm:text-base">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyMeFeatures.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMe
