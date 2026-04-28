import { useState, useEffect } from 'react'
import { Menu, X, Droplets, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#values', label: 'Our Values' },
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Our Works' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-sky-100/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
              scrolled ? 'bg-sky-500' : 'bg-white/20 border border-white/40'
            )}>
              <Droplets className={cn('w-6 h-6', scrolled ? 'text-white' : 'text-white')} />
            </div>
          </div>
          <div>
            <span className={cn(
              'font-bold text-xl tracking-tight transition-colors',
              scrolled ? 'text-sky-600' : 'text-white'
            )}>
              FUNOK
            </span>
            <span className={cn(
              'font-light text-xl tracking-tight transition-colors',
              scrolled ? 'text-slate-700' : 'text-white/90'
            )}>
              WATER
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'nav-link text-sm font-medium transition-colors',
                scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white/90 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+2348033303858"
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-all px-4 py-2 rounded-full',
              scrolled
                ? 'text-sky-600 hover:bg-sky-50'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            )}
          >
            <Phone className="w-4 h-4" />
            <span>+234 803 330 3858</span>
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:from-sky-600 hover:to-cyan-500 transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'lg:hidden p-2 rounded-lg transition-colors',
            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          )}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'lg:hidden transition-all duration-300 overflow-hidden',
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="bg-white/98 backdrop-blur-xl border-t border-slate-100 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 font-medium py-2 border-b border-slate-100 hover:text-sky-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-center font-semibold px-6 py-3 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
