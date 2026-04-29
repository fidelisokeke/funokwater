import { useEffect, useRef } from 'react'
import { ArrowDown, Play, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '4', label: 'Global Partners' },
  { value: '100%', label: 'Client Satisfaction' },
]

const highlights = [
  'Borehole Drilling & Rehabilitation',
  'Irrigation & Dam Construction',
  'Water Supply Engineering',
]

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('div')
      const size = Math.random() * 6 + 2
      dot.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255,255,255,${Math.random() * 0.4 + 0.1});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 4 + 4}s ease-in-out ${Math.random() * 2}s infinite;
      `
      container.appendChild(dot)
    }
    return () => { if (container) container.innerHTML = '' }
  }, [])

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex flex-col justify-center">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Geometric decoration */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-green-400/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/8" />

      {/* SVG Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.08"
          />
          <path
            d="M0,80 C480,20 960,120 1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Nigeria's Premier Water Engineering Firm</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Funok
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
                Water
              </span>
              <span className="block text-4xl sm:text-5xl font-light text-white/80">Engineering</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Modern approaches to water supply and engineering, delivering excellence
              across Nigeria for over <strong className="text-white">30 years</strong>.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-sky-700 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all shadow-2xl hover:-translate-y-1 hover:shadow-white/30"
              >
                Become Our Partner
              </a>
              <a
                href="#works"
                className="flex items-center gap-2 glass-card text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                View Our Works
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-8 animate-float">
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-6">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-white mb-1 gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission snippet */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-white/80 text-sm italic leading-relaxed">
                "Construction tomorrow for today" — our vision that drives every project,
                every partnership, every drop of water delivered.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-sky-400/30 rounded-full flex items-center justify-center">
                  <span className="text-sky-200 text-xs font-bold">FW</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Funok Water & Engineering</p>
                  <p className="text-white/50 text-xs">Enugu, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors group"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
