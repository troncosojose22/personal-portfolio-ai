import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import projects from '../data/projects'

export default function Projects() {
  const { dark } = useTheme()

  return (
    <section id="projects" className="pt-24 pb-16">
      <SectionHeader dark={dark} label="Selected Work" title="Projects" />

      <div className="mt-10 flex flex-col gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} dark={dark} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, dark, index }) {
  const [ref, visible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={[
        'rounded-xl border p-6 transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        dark
          ? 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8'
          : 'bg-black/4 border-black/10 hover:border-black/25 hover:bg-black/6',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={[
            'text-lg font-semibold',
            dark ? 'text-white' : 'text-gray-900',
          ].join(' ')}
        >
          {project.title}
        </h3>

        <div className="flex gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={['text-xs font-medium transition-colors duration-150', dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'].join(' ')}
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={['text-xs font-medium transition-colors duration-150', dark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'].join(' ')}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className={['mt-2 text-sm leading-relaxed', dark ? 'text-gray-400' : 'text-gray-600'].join(' ')}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={[
              'px-2.5 py-1 rounded-md text-xs font-medium',
              dark ? 'bg-white/10 text-gray-300' : 'bg-black/8 text-gray-600',
            ].join(' ')}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SectionHeader({ dark, label, title }) {
  const [ref, visible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={['transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'].join(' ')}
    >
      <p className={['text-xs font-mono uppercase tracking-widest mb-1', dark ? 'text-cyan-400' : 'text-cyan-600'].join(' ')}>
        {label}
      </p>
      <h2 className={['text-3xl font-bold', dark ? 'text-white' : 'text-gray-900'].join(' ')}>
        {title}
      </h2>
      <div className={['mt-3 h-px w-12', dark ? 'bg-cyan-400/50' : 'bg-cyan-600/50'].join(' ')} />
    </div>
  )
}
