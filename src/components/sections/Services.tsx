import { Drill, Waves, Building2, Wrench, Handshake, LineChart, Truck, FlaskConical } from 'lucide-react'

const services = [
  {
    icon: <Drill className="w-8 h-8" />,
    title: 'Borehole Drilling',
    desc: 'Professional borehole drilling, casing, and development for communities, industries, and individuals across Nigeria.',
    gradient: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: 'Surface Water Exploration',
    desc: 'Comprehensive surface and ground water exploration using modern hydrogeological techniques.',
    gradient: 'from-blue-500 to-sky-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Irrigation & Dams',
    desc: 'Design and construction of irrigation systems and dams to support agriculture and water storage.',
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Engineering Services',
    desc: 'Full-spectrum engineering services — from water supply system design to infrastructure development.',
    gradient: 'from-cyan-500 to-teal-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Consultancy',
    desc: 'Expert consulting in water resources management, feasibility studies, and environmental assessments.',
    gradient: 'from-teal-500 to-green-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'General Contracting',
    desc: 'General contractors and suppliers for civil and water engineering projects of any scale.',
    gradient: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'Water Management',
    desc: 'Responsible water resource management aligned with Nigerian and global best practices.',
    gradient: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: 'Partnerships',
    desc: 'Building transparent, productive, and long-term collaborations with clients and international partners.',
    gradient: 'from-green-600 to-emerald-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-sky-400" />
            What We Offer
            <span className="w-8 h-px bg-sky-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Our{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Comprehensive water and engineering solutions backed by three decades of expertise
            and the latest technology.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`card-hover rounded-2xl border ${service.border} ${service.bg} p-6 group`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 p-10 text-center text-white shadow-2xl shadow-sky-500/20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Need a Custom Water Engineering Solution?
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Give us a trial — we have the requisite manpower and technology to deliver
            best-in-class services, guaranteed.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-sky-700 font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
