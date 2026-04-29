import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', agreed: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-sky-400" />
            Get In Touch
            <span className="w-8 h-px bg-sky-400" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Let's Work{' '}
            Together
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Ready to start your water engineering project? Fill in the form and our team will
            get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                label: 'Email Us',
                value: 'info@funokwater.com',
                href: 'mailto:info@funokwater.com',
                color: 'bg-sky-500',
              },
              {
                icon: <Phone className="w-5 h-5" />,
                label: 'Call Us',
                value: '+234 803 330 3858',
                href: 'tel:+2348033303858',
                color: 'bg-cyan-500',
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: 'Our Office',
                value: '11a Egwuekwe Street, Maryland Layout Enugu, Nigeria',
                href: '#',
                color: 'bg-green-500',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card-hover flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm group"
              >
                <div className={`${item.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-slate-800 font-semibold text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/2348033303858"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-500/30 hover:from-green-600 hover:to-emerald-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Decorative trust badge */}
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-slate-800 font-semibold text-sm">Why Choose Funok?</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  '30+ years proven expertise',
                  'CAC certified & fully compliant',
                  'International partner network',
                  'Timely delivery guarantee',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h3>
                  <p className="text-slate-600 max-w-sm">
                    Your message has been received. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-700 font-medium text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 font-medium text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-medium text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234 ..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium text-sm mb-2">
                      Project / Enquiry Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project or enquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={form.agreed}
                      onChange={e => setForm({ ...form, agreed: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-sky-500 focus:ring-sky-400 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-slate-600 text-sm cursor-pointer">
                      I agree with the privacy policy and consent to being contacted by Funok Water regarding my enquiry.
                    </label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold py-3.5 rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all shadow-lg shadow-sky-500/30 hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      Become Our Partner
                    </button>
                    <a
                      href="mailto:info@funokwater.com"
                      className="flex items-center justify-center gap-2 border-2 border-sky-200 text-sky-700 font-bold py-3.5 rounded-xl hover:bg-sky-50 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      Send Us a Message
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
