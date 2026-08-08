import { Check, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'
import { pricingPlans } from '../data/siteConfig.js'

function PlanCard({ plan, index }) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <div
        className={`relative flex h-full flex-col rounded-2xl p-7 ${
          plan.highlighted
            ? 'border-gradient shadow-glow'
            : 'card-surface'
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-signal-indigo to-signal-violet px-4 py-1 font-mono text-[11px] font-medium tracking-wide text-white">
            MOST POPULAR
          </span>
        )}

        <h3 className="font-display text-xl font-semibold text-mist-100">{plan.name}</h3>
        <p className="mt-2 text-sm text-mist-500">{plan.description}</p>

        <div className="mt-6">
          {plan.price ? (
            <div className="flex items-baseline gap-1.5">
              {plan.priceNote && <span className="text-xs text-mist-700">{plan.priceNote}</span>}
              <span className="font-display text-3xl font-semibold text-mist-100">{plan.price}</span>
            </div>
          ) : (
            <span className="font-display text-2xl font-semibold text-gradient">Get a Custom Quote</span>
          )}
        </div>

        <ul className="mt-7 flex-1 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-mist-300">
              <Check size={16} className="mt-0.5 shrink-0 text-signal-cyan" strokeWidth={2.2} />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={`mt-8 w-full ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
        >
          Discuss Your Project
        </a>
      </div>
    </RevealOnScroll>
  )
}

function Pricing() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Engagement."
          subtitle="Every project is different, so pricing is tailored to your specific needs."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="glass mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-2xl px-6 py-5 text-center sm:text-left">
            <Sparkles size={18} className="hidden shrink-0 text-signal-amber sm:block" />
            <p className="text-sm text-mist-500">
              Every project is different. Contact me with your requirements and I'll provide a
              suitable quote.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Pricing
