import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'
import { siteConfig, projectTypeOptions, budgetRangeOptions } from '../data/siteConfig.js'

const initialFormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.projectType) errors.projectType = 'Please select a project type.'
  if (!values.message.trim()) {
    errors.message = 'Please tell me a bit about your project.'
  } else if (values.message.trim().length < 12) {
    errors.message = 'Please add a little more detail (at least 12 characters).'
  }
  return errors
}

function FieldError({ message }) {
  if (!message) return null
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
      <AlertCircle size={12} />
      {message}
    </p>
  )
}

const inputClasses =
  'w-full rounded-xl border border-mist-700/30 bg-ink-800/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-700 transition-colors duration-200 focus:border-signal-indigo/60 focus:outline-none focus:ring-1 focus:ring-signal-indigo/40'

function Contact() {
  const [values, setValues] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (field) => (e) => {
    const val = e.target.value
    setValues((v) => ({ ...v, [field]: val }))
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: val }))
    }
  }

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({
      name: true,
      email: true,
      projectType: true,
      message: true,
    })

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('https://formsubmit.co/ajax/reformedissoul@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: new URLSearchParams({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          projectType: values.projectType,
          budget: values.budget,
          message: values.message.trim(),
          _subject: `New project inquiry from ${values.name.trim()}`,
          _template: 'table',
          replyto: values.email.trim(),
        }).toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      setValues(initialFormState)
      setTouched({})
      setErrors({})
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="glow-orb absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-signal-indigo/15" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have a Project in Mind?"
          subtitle="Tell me what you're building and let's turn your idea into a website."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left: contact info */}
          <RevealOnScroll>
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-signal-indigo/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-indigo/15 text-signal-indigo">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-xs text-mist-700">Email</p>
                  <p className="text-sm font-medium text-mist-100">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-green-500/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                  <MessageCircle size={19} />
                </div>
                <div>
                  <p className="text-xs text-mist-700">WhatsApp</p>
                  <p className="text-sm font-medium text-mist-100">{siteConfig.whatsappDisplay}</p>
                </div>
              </a>

              <div className="flex gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="glass flex h-12 flex-1 items-center justify-center rounded-xl text-mist-300 transition-colors hover:text-mist-100"
                >
                  <Github size={18} />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="glass flex h-12 flex-1 items-center justify-center rounded-xl text-mist-300 transition-colors hover:text-mist-100"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={siteConfig.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest profile"
                  className="glass flex h-12 flex-1 items-center justify-center rounded-xl text-mist-300 transition-colors hover:text-mist-100"
                >
                  {/* lucide-react has no Pinterest icon; simple inline glyph */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.164-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.412 0-5.417 2.561-5.417 5.207 0 1.031.397 2.138.893 2.738.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.436-2.85-2.436-4.601 0-3.744 2.735-7.191 7.891-7.191 4.142 0 7.365 2.953 7.365 6.897 0 4.115-2.595 7.428-6.199 7.428-1.211 0-2.348-.629-2.738-1.373 0 0-.599 2.281-.744 2.842-.269 1.037-1.001 2.339-1.488 3.132C9.475 23.833 10.71 24 12.017 24c6.62 0 11.982-5.367 11.982-11.987C24 5.366 18.638 0 12.017 0z" />
                  </svg>
                </a>
              </div>

              <p className="text-xs leading-relaxed text-mist-700">
                Prefer email or WhatsApp? Reach out directly, or use the form and I'll get back to
                you as soon as possible.
              </p>
            </div>
          </RevealOnScroll>

          {/* Right: form */}
          <RevealOnScroll delay={0.1}>
            <div className="card-surface relative overflow-hidden p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-mist-100">
                      Thanks — message sent!
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-mist-500">
                      I've received your project inquiry and will get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="btn-secondary mt-6 !px-5 !py-2.5 text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-mist-300">
                          Name <span className="text-signal-cyan">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={handleChange('name')}
                          onBlur={handleBlur('name')}
                          placeholder="Jane Doe"
                          className={inputClasses}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {touched.name && <FieldError message={errors.name} />}
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-mist-300">
                          Email <span className="text-signal-cyan">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange('email')}
                          onBlur={handleBlur('email')}
                          placeholder="jane@company.com"
                          className={inputClasses}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {touched.email && <FieldError message={errors.email} />}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-mist-300">
                        Business / Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={handleChange('company')}
                        placeholder="Optional"
                        className={inputClasses}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectType" className="mb-1.5 block text-xs font-medium text-mist-300">
                          Project Type <span className="text-signal-cyan">*</span>
                        </label>
                        <select
                          id="projectType"
                          value={values.projectType}
                          onChange={handleChange('projectType')}
                          onBlur={handleBlur('projectType')}
                          className={`${inputClasses} appearance-none`}
                          aria-invalid={!!errors.projectType}
                        >
                          <option value="" disabled>
                            Select a type
                          </option>
                          {projectTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {touched.projectType && <FieldError message={errors.projectType} />}
                      </div>

                      <div>
                        <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-mist-300">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          value={values.budget}
                          onChange={handleChange('budget')}
                          className={`${inputClasses} appearance-none`}
                        >
                          <option value="">Prefer not to say</option>
                          {budgetRangeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-mist-300">
                        Message <span className="text-signal-cyan">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={values.message}
                        onChange={handleChange('message')}
                        onBlur={handleBlur('message')}
                        placeholder="Tell me a bit about your project, timeline and goals..."
                        className={`${inputClasses} resize-none`}
                        aria-invalid={!!errors.message}
                      />
                      {touched.message && <FieldError message={errors.message} />}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or email me directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Project Inquiry
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Contact
