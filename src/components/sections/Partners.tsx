import { Globe, Star } from 'lucide-react'

const partners = [
  {
    name: 'WaterAid',
    description: 'International NGO improving access to safe water, sanitation and hygiene worldwide.',
    logo: 'https://www.wateraid.org/us/sites/g/files/jkxoof291/files/2023-10/wateraid-logo.svg',
    fallbackInitials: 'WA',
    bg: 'bg-blue-50 border-blue-100',
    href: 'https://www.wateraid.org',
  },
  {
    name: 'Agence Française de Développement',
    description: 'French development agency financing sustainable development projects globally.',
    logo: 'https://www.afd.fr/sites/default/files/2025-03/logo_AFD.png',
    fallbackInitials: 'AFD',
    bg: 'bg-sky-50 border-sky-100',
    href: 'https://www.afd.fr',
  },
  {
    name: 'Seureca Veolia',
    description: 'Global leader in optimised resource management — water, waste and energy solutions.',
    logo: 'https://www.veolia.com/themes/custom/veo_site/build/assets/images/temp/logo-sticky.png',
    fallbackInitials: 'SV',
    bg: 'bg-cyan-50 border-cyan-100',
    href: 'https://www.veolia.com',
  },
  {
    name: 'UNICEF',
    description: "UN agency championing children's rights and access to safe water globally.",
    logo: 'https://www.unicef.org/sites/default/files/styles/logo/public/English_3.png',
    fallbackInitials: 'UN',
    bg: 'bg-teal-50 border-teal-100',
    href: 'https://www.unicef.org',
  },
]

const testimonialQuote = `"Funok Water Engineering services strives to create productive and effective
cooperation and collaboration with our clients and partners. Our business is open and transparent,
and we expect the same from our partners — building long-term value together."`

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-sky-400" />
            Collaborations
            <span className="w-8 h-px bg-sky-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Our{' '}
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            We collaborate with globally recognised organisations to deliver water solutions
            that make a lasting impact.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-hover rounded-2xl border ${partner.bg} p-6 flex flex-col items-center text-center group`}
            >
              {/* Logo with initials fallback */}
              <div className="w-full h-24 flex items-center justify-center mb-5">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-16 max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.style.display = 'none'
                    const fallback = img.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                {/* Initials fallback (hidden by default) */}
                <div
                  className="hidden w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {partner.fallbackInitials}
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-sky-700 transition-colors">
                {partner.name}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{partner.description}</p>
            </a>
          ))}
        </div>

        {/* Partnership philosophy */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center shadow-2xl">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-sky-400" />
              </div>
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">
                Our Partnership Philosophy
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Transparent &amp; Long-Term Partnerships
            </h3>
            <p className="text-slate-400 leading-relaxed">
              We stand for transparency and expect the same from our partners. Funok Water
              strives to create productive and effective cooperation that generates lasting
              value for communities across Nigeria.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-start gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-white/90 text-sm leading-relaxed italic">
              {testimonialQuote}
            </blockquote>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-white font-semibold text-sm">Funok Water &amp; Engineering</p>
              <p className="text-slate-500 text-xs">Enugu, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
