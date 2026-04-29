import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from 'lucide-react'

const images: { src: string; caption?: string }[] = [
  { src: '/images/image16.jpg', caption: 'Solar powered Borehole, Onyuha Nike Enugu, Enugu State' },
  { src: '/images/image17.jpg', caption: 'Ground water Based Water Scheme, 50 Feet, Ugwugo Nike Enugu (Borehole)' },
  ...Array.from({ length: 15 }, (_, i) => ({ src: `/images/image${i + 1}.jpg.jpeg` })),
]

const VISIBLE = 3

export default function Works() {
  const [start, setStart] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(images.length - VISIBLE, s + 1))

  const visible = images.slice(start, start + VISIBLE)

  return (
    <section id="works" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="w-8 h-px bg-green-400" />
              Portfolio
              <span className="w-8 h-px bg-green-400" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Some of Our{' '}
              Works
            </h2>
            <p className="text-slate-600 mt-3 max-w-md">
              A glimpse at the projects we've delivered over the years across Nigeria.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={start === 0}
              className="w-11 h-11 rounded-full border-2 border-sky-200 flex items-center justify-center text-sky-600 hover:bg-sky-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={start >= images.length - VISIBLE}
              className="w-11 h-11 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center text-white hover:from-sky-600 hover:to-cyan-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky-500/30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-slate-500 text-sm ml-1">
              {start + 1}–{Math.min(start + VISIBLE, images.length)} of {images.length}
            </span>
          </div>
        </div>

        {/* Project image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item, i) => {
            const idx = start + i
            return (
              <div
                key={idx}
                onClick={() => setLightbox(idx)}
                className="card-hover rounded-3xl overflow-hidden shadow-md bg-slate-100 cursor-pointer group relative"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption ?? `Funok Water project ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                    <span className="text-white font-semibold text-sm leading-snug max-w-[80%]">
                      {item.caption ?? `Project ${(idx + 1).toString().padStart(2, '0')}`}
                    </span>
                    <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dot navigation */}
        <div className="mt-10 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(Math.min(i, images.length - VISIBLE))}
              className={`h-2 rounded-full transition-all ${
                i >= start && i < start + VISIBLE
                  ? 'w-8 bg-gradient-to-r from-sky-500 to-cyan-500'
                  : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white shadow-xl shadow-green-500/20">
          <div>
            <h3 className="text-xl font-bold mb-2">View Our Latest Project Portfolio</h3>
            <p className="text-white/80 text-sm">
              Download our detailed project document for an in-depth look at our recent works.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-full whitespace-nowrap hover:bg-green-50 transition-all shadow-lg hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            Request Portfolio
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l !== null && l > 0 ? l - 1 : l)) }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption ?? `Project ${lightbox + 1}`}
              className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl object-contain"
            />
            {images[lightbox].caption && (
              <p className="text-white/80 text-sm text-center max-w-lg">{images[lightbox].caption}</p>
            )}
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l !== null && l < images.length - 1 ? l + 1 : l)) }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            {lightbox + 1} / {images.length} — click outside to close
          </span>
        </div>
      )}
    </section>
  )
}
