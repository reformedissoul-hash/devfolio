import { ExternalLink, Github } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import RevealOnScroll from './RevealOnScroll.jsx'
import { projects } from '../data/projects.js'

function ProjectMockup({ project }) {
  // Placeholder visual: gradient "browser window" mockup.
  // Swap in `project.image` (a real screenshot) once available — see projects.js.
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        className="h-full w-full object-cover"
      />
    )
  }

  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{
        background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}22)`,
      }}
    >
      {/* fake browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
      </div>
      {/* fake content blocks */}
      <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
        <div
          className="h-2.5 w-2/5 rounded-full opacity-70"
          style={{ background: project.accentFrom }}
        />
        <div className="h-5 w-4/5 rounded-md bg-white/15" />
        <div className="h-5 w-3/5 rounded-md bg-white/10" />
        <div className="mt-3 flex gap-2">
          <div
            className="h-8 w-24 rounded-full opacity-80"
            style={{ background: project.accentFrom }}
          />
          <div className="h-8 w-20 rounded-full border border-white/20" />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <RevealOnScroll delay={(index % 2) * 0.1}>
      <div className="group card-surface flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-signal-indigo/40">
        {/* Visual */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
            <ProjectMockup project={project} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] text-mist-100">
            {project.number}
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col p-6">
          <span className="font-mono text-[11px] uppercase tracking-wider text-signal-cyan">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-xl font-semibold text-mist-100">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-mist-700/30 bg-ink-700/40 px-2.5 py-1 font-mono text-[11px] text-mist-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.link}
              className="btn-secondary flex-1 !px-4 !py-2.5 text-sm"
            >
              View Project
              <ExternalLink size={14} />
            </a>
            {project.github && (
              <a
                href={project.github}
                aria-label={`${project.title} GitHub repository`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mist-700/60 bg-ink-800/50 text-mist-300 transition-colors duration-300 hover:border-signal-cyan/50 hover:text-signal-cyan"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Things I've Built."
          subtitle="A selection of project concepts showcasing different types of web builds. Real project details coming soon."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
