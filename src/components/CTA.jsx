import { ArrowRight } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll.jsx'

function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="border-gradient relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* ambient glow */}
            <div className="glow-orb absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-indigo/25 animate-pulse-glow" />
            <div className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

            <div className="relative">
              <h2 className="font-display text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl md:text-5xl">
                Your Next Website{' '}
                <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift">
                  Starts Here.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base text-mist-500 sm:text-lg">
                Let's build something that makes your business stand out.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary group mt-9 !px-9 !py-4 text-base"
              >
                Let's Work Together
                <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default CTA
