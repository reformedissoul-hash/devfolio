import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'

const CODE_LINES = [
  { indent: 0, tokens: [{ t: 'const', c: 'text-signal-violet' }, { t: ' site ', c: 'text-mist-100' }, { t: '=', c: 'text-signal-cyan' }, { t: ' {', c: 'text-mist-500' }] },
  { indent: 1, tokens: [{ t: 'design', c: 'text-signal-cyan' }, { t: ': ', c: 'text-mist-500' }, { t: "'modern'", c: 'text-signal-amber' }, { t: ',', c: 'text-mist-500' }] },
  { indent: 1, tokens: [{ t: 'responsive', c: 'text-signal-cyan' }, { t: ': ', c: 'text-mist-500' }, { t: 'true', c: 'text-signal-violet' }, { t: ',', c: 'text-mist-500' }] },
  { indent: 1, tokens: [{ t: 'stack', c: 'text-signal-cyan' }, { t: ': ', c: 'text-mist-500' }, { t: '[', c: 'text-mist-500' }, { t: "'React'", c: 'text-signal-amber' }, { t: ', ', c: 'text-mist-500' }, { t: "'Node'", c: 'text-signal-amber' }, { t: ']', c: 'text-mist-500' }] },
  { indent: 0, tokens: [{ t: '}', c: 'text-mist-500' }] },
]

const FLOAT_BADGES = [
  { label: 'React', className: 'top-[8%] -right-2 sm:-right-6', delay: 0 },
  { label: 'Tailwind', className: 'top-[46%] -left-4 sm:-left-10', delay: 0.6 },
  { label: 'Node.js', className: 'bottom-[6%] right-[4%]', delay: 1.2 },
]

function useTypewriter(lines, speed = 22, startDelay = 400) {
  const [visibleChars, setVisibleChars] = useState(0)
  const flatText = lines.map((l) => l.tokens.map((t) => t.t).join('')).join('\n')

  useEffect(() => {
    let timeouts = []
    let started = setTimeout(() => {
      let i = 0
      const tick = () => {
        i += 1
        setVisibleChars(i)
        if (i < flatText.length) {
          timeouts.push(setTimeout(tick, speed))
        }
      }
      tick()
    }, startDelay)
    return () => {
      clearTimeout(started)
      timeouts.forEach(clearTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flatText])

  return { visibleChars, total: flatText.length }
}

function EditorWindow() {
  const { visibleChars } = useTypewriter(CODE_LINES)
  let charCount = 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      <div className="glass-strong animate-float rounded-2xl shadow-card">
        {/* Title bar */}
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-mist-700/20 bg-ink-900/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-mist-500">site.config.js</span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          {CODE_LINES.map((line, li) => {
            let lineOut = []
            let lineText = ''
            line.tokens.forEach((tok, ti) => {
              const start = charCount
              charCount += tok.t.length
              const end = charCount
              const visiblePortion = Math.max(0, Math.min(tok.t.length, visibleChars - start))
              lineText += tok.t
              lineOut.push(
                <span key={ti} className={tok.c}>
                  {tok.t.slice(0, visiblePortion)}
                </span>
              )
            })
            return (
              <div key={li} style={{ paddingLeft: `${line.indent * 1.25}rem` }} className="whitespace-pre">
                <span className="mr-3 select-none text-mist-700">{String(li + 1).padStart(2, '0')}</span>
                {lineOut}
              </div>
            )
          })}
          <span className="ml-8 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-signal-cyan" />
        </div>
      </div>

      {/* Floating tech badges */}
      {FLOAT_BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 + badge.delay }}
          className={`glass absolute hidden rounded-xl px-3 py-2 shadow-card sm:block animate-float-slow ${badge.className}`}
          style={{ animationDelay: `${badge.delay}s` }}
        >
          <span className="font-mono text-xs font-medium text-mist-100">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 sm:pt-40"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-ink-950" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:48px_48px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_20%,black,transparent)]" />
      <div className="glow-orb absolute -top-40 left-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-signal-indigo/30" />
      <div className="glow-orb absolute right-0 top-1/3 -z-10 h-[380px] w-[380px] rounded-full bg-signal-violet/20" />
      <div className="glow-orb absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-signal-cyan/10" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-cyan" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-mist-300 sm:text-xs">
              {siteConfig.availabilityBadge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist-100 sm:text-5xl md:text-6xl"
          >
            Turning Ideas Into{' '}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift">
              Fast, Modern Websites.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base text-mist-500 sm:text-lg"
          >
            I build modern, responsive and high-performing websites and web applications that help
            businesses establish a strong online presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex w-full flex-col gap-3 xs:flex-row sm:w-auto"
          >
            <a href="#contact" onClick={scrollToContact} className="btn-primary group">
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#projects" onClick={scrollToProjects} className="btn-secondary group">
              <Eye size={18} className="text-mist-500 transition-colors group-hover:text-signal-cyan" />
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-2 text-mist-700"
          >
            <Sparkles size={14} className="text-signal-cyan/60" />
            <p className="font-mono text-[11px] tracking-wide text-mist-500 sm:text-xs">
              React &nbsp;•&nbsp; JavaScript &nbsp;•&nbsp; Node.js &nbsp;•&nbsp; Tailwind CSS &nbsp;•&nbsp; REST APIs
            </p>
          </motion.div>
        </div>

        {/* Right: editor visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <EditorWindow />
        </div>
      </div>
    </section>
  )
}

export default Hero
