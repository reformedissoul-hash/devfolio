import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll.jsx'
import { siteConfig } from '../data/siteConfig.js'
import { techStack } from '../data/services.js'

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="glow-orb absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-signal-cyan/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Avatar / visual */}
          <RevealOnScroll className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="glow-orb absolute inset-0 rounded-full bg-signal-indigo/30" />
              <div className="glass-strong relative flex h-56 w-56 items-center justify-center rounded-3xl sm:h-64 sm:w-64">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-signal-indigo/20 to-signal-violet/20">
                  <span className="font-display text-6xl font-semibold text-mist-100/90">
                    {siteConfig.developerName.charAt(0)}
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-card sm:-right-6"
              >
                <Code2 size={16} className="text-signal-cyan" />
                <span className="font-mono text-xs text-mist-100">Available</span>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Copy */}
          <div>
            <RevealOnScroll>
              <span className="section-eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
                About
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="font-display text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl md:text-5xl">
                Hey, I'm {siteConfig.developerName}.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-mist-500 sm:text-lg">
                I'm a web developer who enjoys turning ideas into useful, beautiful and functional
                digital experiences. I work with modern web technologies and focus on clean design,
                performance and usability — building websites and applications that feel as good to
                use as they look.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist-500 sm:text-lg">
                Whether it's a business website, a landing page, or a full-stack web application, my
                goal is the same: build something fast, reliable and genuinely tailored to what you
                need.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.24}>
              <div className="mt-8">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-mist-700">
                  Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-mist-700/30 bg-ink-800/60 px-3.5 py-1.5 font-mono text-xs text-mist-300 transition-colors duration-200 hover:border-signal-indigo/50 hover:text-mist-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
