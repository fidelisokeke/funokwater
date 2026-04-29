import { Target, Eye, Heart, Leaf } from 'lucide-react'

const coreValues = [
  { label: 'Integrity', color: 'bg-sky-500' },
  { label: 'Respect for People', color: 'bg-cyan-500' },
  { label: 'Value for Investment', color: 'bg-green-600' },
  { label: 'Excellence', color: 'bg-emerald-500' },
  { label: 'Transparency', color: 'bg-teal-500' },
]

const cards = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'What We Do',
    color: 'bg-sky-500',
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Given our vision <em>"Construction tomorrow for today"</em>, we are committed to quality
          services delivery at all times. Our services span:
        </p>
        <ul className="space-y-1.5 text-sm text-slate-700">
          {[
            'Surface & ground water explorations',
            'Exploitation & management',
            'Engineering services providers',
            'Consultants & allied services',
            'General contractors & suppliers',
            'Manufacturers representatives',
            'Partnerships & collaborations',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: 'Our Vision',
    color: 'bg-cyan-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full py-4 text-center">
        <blockquote className="text-2xl font-bold text-slate-800 italic leading-snug">
          "Construction tomorrow for today"
        </blockquote>
        <p className="mt-4 text-slate-500 text-sm">
          A vision we live to its true meaning through every project we undertake.
        </p>
      </div>
    ),
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Our Mission',
    color: 'bg-green-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full py-4 text-center">
        <p className="text-xl font-semibold text-slate-800 leading-snug">
          To be amongst the leading water and engineering services providers in Nigeria and beyond.
        </p>
        <p className="mt-4 text-slate-500 text-sm">
          Partnering with global organizations to drive water access and sustainability.
        </p>
      </div>
    ),
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'We Strive to Save Nature',
    color: 'bg-emerald-500',
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Funok Water adheres to the principles of responsible water resources management within
        the Nigerian water sector and applies global best practices in water supply and engineering
        projects. We stand for <strong className="text-slate-800">transparent and long-term partnership</strong> —
        our business is open and we expect the same from our partners.
      </p>
    ),
  },
]

export default function Values() {
  return (
    <section id="values" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-green-400" />
            What Drives Us
            <span className="w-8 h-px bg-green-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Our{' '}
            Values
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            The principles that guide every decision, every project, and every partnership we build.
          </p>
        </div>

        {/* Core Values pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {coreValues.map((v) => (
            <span
              key={v.label}
              className={`${v.color} text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md`}
            >
              {v.label}
            </span>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-hover bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className={`${card.color} px-6 py-4 flex items-center gap-3`}>
                <div className="text-white">{card.icon}</div>
                <h3 className="text-white font-bold text-lg">{card.title}</h3>
              </div>
              <div className="p-6">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
