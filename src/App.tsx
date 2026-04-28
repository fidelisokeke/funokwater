import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Values from './components/sections/Values'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import Works from './components/sections/Works'
import Partners from './components/sections/Partners'
import Contact from './components/sections/Contact'
import { MessageCircle, ArrowUp } from 'lucide-react'
import { useEffect } from 'react'

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-11 h-11 bg-gradient-to-br from-sky-500 to-cyan-500 text-white rounded-full shadow-lg shadow-sky-500/40 flex items-center justify-center hover:from-sky-600 hover:to-cyan-600 transition-all hover:-translate-y-1"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Values />
          <Services />
          <Works />
          <Partners />
          <Contact />
        </main>
        <Footer />

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/2348033303858"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>

        <ScrollTop />
      </div>
    </>
  )
}
