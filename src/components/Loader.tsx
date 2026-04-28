import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { Droplets } from 'lucide-react'

// Fallback animated loader if Lottie JSON isn't loaded
function FallbackLoader() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-sky-300/30 animate-ping" />
        <div className="absolute inset-2 rounded-full border-4 border-cyan-400/40 animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute inset-4 rounded-full border-4 border-blue-300/50 animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Droplets className="w-10 h-10 text-white animate-bounce" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-white text-xl font-bold tracking-wide">FUNOK WATER</p>
        <p className="text-sky-300 text-sm mt-1">Engineering Resources</p>
      </div>
      <div className="flex gap-1.5 mt-2">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className="w-2 h-2 bg-white/80 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Loader({ onDone }: { onDone: () => void }) {
  const [lottieData, setLottieData] = useState<object | null>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Attempt to load the water Lottie animation from public folder
    fetch('/water-animation.json')
      .then(r => r.json())
      .then(data => setLottieData(data))
      .catch(() => null) // silently fall back

    const timer = setTimeout(() => {
      setFading(true)
      setTimeout(onDone, 600)
    }, 2800)

    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      className="loader-overlay"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {lottieData ? (
        <div className="flex flex-col items-center gap-4">
          <Lottie
            animationData={lottieData}
            loop
            style={{ width: 200, height: 200 }}
          />
          <div className="text-center">
            <p className="text-white text-2xl font-bold tracking-wide">FUNOK WATER</p>
            <p className="text-sky-300 text-sm mt-1">Engineering Resources</p>
          </div>
        </div>
      ) : (
        <FallbackLoader />
      )}
    </div>
  )
}
