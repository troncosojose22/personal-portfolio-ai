import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SectionHeader } from './Projects'

export default function Contact() {
  const { dark } = useTheme()
  const [ref, visible] = useIntersectionObserver()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = [
    'w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all duration-200',
    dark
      ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/60 focus:bg-white/8'
      : 'bg-black/4 border-black/10 text-gray-900 placeholder-gray-400 focus:border-cyan-600/50 focus:bg-black/6',
  ].join(' ')

  return (
    <section id="contact" className="pt-24 pb-32">
      <SectionHeader dark={dark} label="Say hello" title="Contact" />

      <div
        ref={ref}
        className={[
          'mt-10 transition-all duration-700',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ].join(' ')}
      >
        {submitted ? (
          <div
            className={[
              'rounded-xl border p-10 text-center',
              dark ? 'bg-white/5 border-white/10' : 'bg-black/4 border-black/10',
            ].join(' ')}
          >
            <p className={['text-2xl font-semibold mb-2', dark ? 'text-white' : 'text-gray-900'].join(' ')}>
              Thanks for reaching out!
            </p>
            <p className={['text-sm', dark ? 'text-gray-400' : 'text-gray-500'].join(' ')}>
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>
        ) : (
          <div
            className={[
              'rounded-xl border p-8',
              dark ? 'bg-white/5 border-white/10' : 'bg-black/4 border-black/10',
            ].join(' ')}
          >
            <p className={['text-sm mb-8 leading-relaxed', dark ? 'text-gray-400' : 'text-gray-600'].join(' ')}>
              Whether you have a project in mind, a question, or just want to connect — my inbox is
              open.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <textarea
                required
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={[inputClass, 'resize-none'].join(' ')}
              />
              <button
                type="submit"
                className={[
                  'self-start px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200',
                  dark
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                    : 'bg-cyan-600 text-white hover:bg-cyan-700',
                ].join(' ')}
              >
                Send Message
              </button>
            </form>

            {/* Alternate contact */}
            <div className={['mt-8 pt-6 border-t flex items-center gap-6', dark ? 'border-white/10' : 'border-black/10'].join(' ')}>
              <span className={['text-xs', dark ? 'text-gray-500' : 'text-gray-400'].join(' ')}>
                Or reach me at
              </span>
              <a
                href="mailto:troncosojose22@gmail.com"
                className={['text-sm font-medium hover:underline transition-colors', dark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'].join(' ')}
              >
                troncosojose22@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
