import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Hero() {
  const { dark } = useTheme()
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div
        ref={ref}
        className={[
          'transition-all duration-700',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ].join(' ')}
      >
        {/* Greeting */}
        <p className={['text-sm font-mono mb-3', dark ? 'text-cyan-400' : 'text-cyan-600'].join(' ')}>
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          className={[
            'text-6xl font-bold tracking-tight mb-4',
            dark ? 'text-white' : 'text-gray-900',
          ].join(' ')}
        >
          Jose Troncoso
        </h1>

        {/* Role */}
        <h2
          className={[
            'text-3xl font-semibold mb-6',
            dark ? 'text-gray-400' : 'text-gray-500',
          ].join(' ')}
        >
          Software Engineer
        </h2>

        {/* Bio */}
        <p
          className={[
            'text-lg max-w-xl leading-relaxed mb-10',
            dark ? 'text-gray-400' : 'text-gray-600',
          ].join(' ')}
        >
          I build thoughtful software — from full-stack web apps to data tools — with a focus on
          clean code, good UX, and systems that scale. Always curious, always learning.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className={[
              'px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200',
              dark
                ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                : 'bg-cyan-600 text-white hover:bg-cyan-700',
            ].join(' ')}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={[
              'px-6 py-3 rounded-lg font-medium text-sm border transition-all duration-200',
              dark
                ? 'border-white/20 text-gray-300 hover:border-white/50 hover:text-white'
                : 'border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-900',
            ].join(' ')}
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5 mt-12">
          <SocialLink href="https://github.com/troncosojose22" label="GitHub" dark={dark}>
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/jose-troncoso7/" label="LinkedIn" dark={dark}>
            <LinkedInIcon />
          </SocialLink>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, dark, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        'w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200',
        dark
          ? 'border-white/15 text-gray-400 hover:border-white/40 hover:text-white'
          : 'border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-900',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
