import { Terminal, Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig, navLinks } from '../data/siteConfig.js'
import { services } from '../data/services.js'

function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-mist-700/15 pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal-indigo to-signal-violet">
                <Terminal size={16} className="text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display text-base font-semibold text-mist-100">
                {siteConfig.brandName}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-500">
              {siteConfig.footerDescription}
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800/60 text-mist-500 transition-colors hover:text-mist-100"
              >
                <Github size={15} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800/60 text-mist-500 transition-colors hover:text-mist-100"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800/60 text-mist-500 transition-colors hover:text-mist-100"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-mist-700">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-mist-500 transition-colors hover:text-mist-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-mist-700">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-sm text-mist-500 transition-colors hover:text-mist-100"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-mist-700">Get in Touch</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-mist-500 transition-colors hover:text-mist-100"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-sm text-mist-500 transition-colors hover:text-mist-100"
                >
                  Start a project →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-mist-700/15 pt-8 sm:flex-row">
          <p className="text-xs text-mist-700">
            © {siteConfig.copyrightYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-mist-700">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
