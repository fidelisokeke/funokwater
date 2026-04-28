import { Droplets, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-sky-400">FUNOK</span>
                <span className="font-light text-xl text-white"> WATER</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Funok Water and Engineering Services Limited — delivering modern, professional
              water resource solutions across Nigeria for over 30 years.
            </p>
            <a
              href="https://wa.me/2348033303858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Values', 'Services', 'Our Works', 'Partners', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">
                  11a Egwuekwe Street,<br />Maryland Layout Enugu,<br />Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+2348033303858" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                  +234 803 330 3858
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@funokwater.com" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                  info@funokwater.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Funok Water & Engineering Services Ltd. All rights reserved.
          </p>
          <div className="flex flex-col sm:items-end gap-1">
            <p className="text-slate-600 text-xs">
              Incorporated under the Companies and Allied Matters Act 1990, Federal Republic of Nigeria
            </p>
            <p className="text-slate-600 text-xs">
              Designed by <span className="text-sky-500 font-medium">Seratek LC</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
