import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', href: '#hero', icon: HomeIcon },
  { label: 'Projects', href: '#projects', icon: GridIcon },
  { label: 'Skills', href: '#skills', icon: CodeIcon },
  { label: 'Contact', href: '#contact', icon: MailIcon },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [active, setActive] = useState('hero')
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={[
        'fixed left-0 top-0 h-screen w-56 flex flex-col z-50',
        'border-r',
        dark
          ? 'bg-black/60 border-white/10 backdrop-blur-md'
          : 'bg-white/60 border-black/10 backdrop-blur-md',
      ].join(' ')}
    >
      {/* Logo / Name */}
      <div className="px-6 pt-10 pb-8">
        <span
          className={[
            'text-lg font-bold tracking-tight',
            dark ? 'text-cyan-400' : 'text-cyan-700',
          ].join(' ')}
        >
          Jose Troncoso
        </span>
        <p className={['text-xs mt-1', dark ? 'text-gray-500' : 'text-gray-400'].join(' ')}>
          Software Engineer
        </p>
      </div>

      {/* Nav links */}
      <ul className="flex-1 flex flex-col gap-1 px-3">
        {NAV_LINKS.map(({ label, href, icon: Icon }) => {
          const isActive = active === href.slice(1)
          const isHovered = hoveredLink === label

          return (
            <li key={label}>
              <a
                href={href}
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
                className={[
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium',
                  'transition-all duration-200',
                  isHovered ? 'animate-shake' : '',
                  isActive
                    ? dark
                      ? 'bg-cyan-400/15 text-cyan-400'
                      : 'bg-cyan-600/10 text-cyan-700'
                    : dark
                      ? 'text-gray-400 hover:bg-white/10 hover:text-white'
                      : 'text-gray-500 hover:bg-black/10 hover:text-gray-900',
                ].join(' ')}
              >
                <Icon
                  className={[
                    'w-4 h-4 shrink-0',
                    isActive ? (dark ? 'text-cyan-400' : 'text-cyan-700') : '',
                  ].join(' ')}
                />
                {label}
                {isActive && (
                  <span
                    className={[
                      'ml-auto w-1.5 h-1.5 rounded-full',
                      dark ? 'bg-cyan-400' : 'bg-cyan-600',
                    ].join(' ')}
                  />
                )}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Theme toggle */}
      <div className="px-6 pb-10 pt-4">
        <button
          onClick={toggle}
          className={[
            'flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium',
            'transition-all duration-200',
            dark
              ? 'text-gray-400 hover:bg-white/10 hover:text-white'
              : 'text-gray-500 hover:bg-black/10 hover:text-gray-900',
          ].join(' ')}
        >
          {dark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          {dark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </nav>
  )
}

function HomeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function GridIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )
}

function CodeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  )
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}
