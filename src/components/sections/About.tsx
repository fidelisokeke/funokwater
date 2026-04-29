import { Shield, Award, Clock, Users } from 'lucide-react'

const pillars = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: '30+ Years',
    desc: 'Decades of hands-on experience as key players in the Nigerian water sector.',
    color: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'CAC Registered',
    desc: 'Incorporated under the Companies and Allied Matters Act 1990, Federal Republic of Nigeria.',
    color: 'bg-green-50 text-green-600 border-green-100',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Quality Assured',
    desc: 'We never lose sight of delivering value, quality and timely services to every client.',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Skilled Manpower',
    desc: 'Requisite manpower and modern technology to deliver innovative, guaranteed solutions.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-sky-400" />
            Who We Are
            <span className="w-8 h-px bg-sky-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            About{' '}
            Funok Water
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              <strong className="text-slate-900">Funok Water and Engineering Services Limited</strong> (Enugu)
              was founded to represent modern approaches to addressing the problems of water supply
              and engineering engagements.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We have been doing so since our incorporation by the Corporate Affairs Commission (CAC)
              in Nigeria, applying previous experiences gathered as key players in the sector for over
              <strong className="text-sky-600"> 30 years</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              This we have done without losing sight of the fact that clients need value for their
              money with quality and timely services delivery — which is why we stand out and will
              continue to satisfy our clients professionally.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-7 py-3 rounded-full hover:from-sky-600 hover:to-cyan-600 transition-all shadow-lg shadow-sky-500/25 hover:-translate-y-0.5"
              >
                Work With Us
              </a>
              <a
                href="#values"
                className="border-2 border-sky-200 text-sky-700 font-semibold px-7 py-3 rounded-full hover:bg-sky-50 transition-all"
              >
                Our Values →
              </a>
            </div>
          </div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`card-hover rounded-2xl p-6 border ${p.color}`}
              >
                <div className="mb-4">{p.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
