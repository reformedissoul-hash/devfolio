import * as Icons from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'
import { services } from '../data/services.js'

function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Code2

  return (
    <RevealOnScroll delay={(index % 4) * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group card-surface relative h-full overflow-hidden p-6 transition-colors duration-300 hover:border-signal-indigo/40"
      >
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-signal-indigo/0 blur-2xl transition-all duration-500 group-hover:bg-signal-indigo/20" />

        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-signal-indigo/15 to-signal-violet/15 ring-1 ring-inset ring-mist-700/20 transition-all duration-300 group-hover:ring-signal-indigo/40">
          <Icon size={22} className="text-signal-cyan" strokeWidth={1.8} />
        </div>

        <h3 className="relative mt-5 font-display text-lg font-semibold text-mist-100">
          {service.title}
        </h3>
        <p className="relative mt-2.5 text-sm leading-relaxed text-mist-500">{service.description}</p>

        <div className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-mist-700 transition-all duration-300 group-hover:gap-2.5 group-hover:text-signal-cyan">
          Learn more
          <ArrowUpRight size={15} />
        </div>
      </motion.div>
    </RevealOnScroll>
  )
}

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need to Build on the Web."
          subtitle="From a single landing page to a full-stack platform — here's what I can build for you."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
