import { useEffect, useRef, useState } from 'react'
import { Droplets, MapPin, Users2, Trophy } from 'lucide-react'

const stats = [
  { icon: <Trophy className="w-7 h-7" />, value: 30, suffix: '+', label: 'Years of Experience', color: 'text-yellow-400' },
  { icon: <Droplets className="w-7 h-7" />, value: 200, suffix: '+', label: 'Projects Completed', color: 'text-sky-400' },
  { icon: <MapPin className="w-7 h-7" />, value: 12, suffix: '+', label: 'States Covered', color: 'text-green-400' },
  { icon: <Users2 className="w-7 h-7" />, value: 4, suffix: '', label: 'Global Partners', color: 'text-cyan-400' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} className="text-4xl sm:text-5xl font-black text-white">{count}{suffix}</div>
}

export default function Stats() {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-green-400/10 blur-3xl" />
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" opacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`flex justify-center mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="white" opacity="0.06" />
        </svg>
      </div>
    </section>
  )
}
