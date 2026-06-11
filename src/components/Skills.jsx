import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SectionHeader } from './Projects'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML / CSS', 'Vite'],
  },
  {
    category: 'Backend & Data',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'],
  },
  {
    category: 'Tools & Infra',
    skills: ['Git', 'VS Code', 'Jest'],
  },
]

export default function Skills() {
  const { dark } = useTheme()

  return (
    <section id="skills" className="pt-24 pb-16">
      <SectionHeader dark={dark} label="What I work with" title="Skills" />

      <div className="mt-10 grid grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group, i) => (
          <SkillGroup key={group.category} group={group} dark={dark} index={i} />
        ))}
      </div>
    </section>
  )
}

function SkillGroup({ group, dark, index }) {
  const [ref, visible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={[
        'rounded-xl border p-5 transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        dark ? 'bg-white/5 border-white/10' : 'bg-black/4 border-black/10',
      ].join(' ')}
    >
      <h3 className={['text-xs font-mono uppercase tracking-widest mb-4', dark ? 'text-cyan-400' : 'text-cyan-600'].join(' ')}>
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={[
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150',
              dark
                ? 'bg-white/8 text-gray-200 hover:bg-white/15 hover:text-white'
                : 'bg-black/6 text-gray-700 hover:bg-black/12 hover:text-gray-900',
            ].join(' ')}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
