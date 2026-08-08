import { Quote } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'

// ----------------------------------------------------------------------------
// No real testimonials exist yet. These are intentionally empty placeholders —
// replace the `quote`, `name` and `role` fields once you have real client
// feedback. Do not fill these with invented reviews.
// ----------------------------------------------------------------------------
const testimonialSlots = [
  { id: 1, quote: null, name: null, role: null },
  { id: 2, quote: null, name: null, role: null },
  { id: 3, quote: null, name: null, role: null },
]

function TestimonialCard({ slot, index }) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <div className="card-surface flex h-full flex-col p-7">
        <Quote size={26} className="text-mist-700" strokeWidth={1.5} />
        <p className="mt-4 flex-1 text-sm italic leading-relaxed text-mist-700">
          {slot.quote || 'Your testimonial will appear here.'}
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-mist-700/15 pt-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-700/60 ring-1 ring-mist-700/20">
            <span className="font-display text-sm text-mist-700">?</span>
          </div>
          <div>
            <p className="text-sm font-medium text-mist-500">{slot.name || 'Client Name'}</p>
            <p className="text-xs text-mist-700">{slot.role || 'Role, Company'}</p>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}

function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say."
          subtitle="Real feedback from clients will appear here as projects are completed."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonialSlots.map((slot, i) => (
            <TestimonialCard key={slot.id} slot={slot} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
