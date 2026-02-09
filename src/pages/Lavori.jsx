import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'
import heroImage from '../assets/foto/gru-cantiere-costruzione.webp'
import project1 from '../assets/foto/edificio-moderno-costruzione.webp'
import project2 from '../assets/foto/muratura-mattoni-costruzione.webp'
import project3 from '../assets/foto/struttura-cemento-multipiano.webp'
import project4 from '../assets/foto/grande-cantiere-industriale.webp'
import project5 from '../assets/foto/cantiere-movimento-terra-aereo.webp'
import project6 from '../assets/foto/edificio-cemento-armato-ponteggi.webp'
import project7 from '../assets/foto/gru-gialla-cantiere.webp'
import project8 from '../assets/foto/gru-rossa-cielo.webp'
import project9 from '../assets/foto/cantiere-gru-multiple.webp'
import project10 from '../assets/foto/ingegnere-progetto-cantiere.webp'
import project11 from '../assets/foto/progetto-3d-edifici.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Lavori() {
  const [activeFilter, setActiveFilter] = useState('tutti')
  const [selectedProject, setSelectedProject] = useState(null)
  const heroRef = useRef(null)
  const galleryRef = useRef(null)

  const categories = [
    { id: 'tutti', label: 'Tutti' },
    { id: 'residenziale', label: 'Residenziale' },
    { id: 'industriale', label: 'Industriale' },
    { id: 'ristrutturazione', label: 'Ristrutturazioni' },
    { id: 'coperture', label: 'Coperture' },
  ]

  const projects = [
    { id: 1, title: 'Edificio residenziale moderno', category: 'residenziale', location: 'Brescia', year: '2024', description: 'Realizzazione completa di un edificio residenziale con design contemporaneo.', image: project1 },
    { id: 2, title: 'Restauro strutturale', category: 'ristrutturazione', location: 'Val Camonica', year: '2023', description: 'Intervento di ristrutturazione con consolidamento strutturale.', image: project2 },
    { id: 3, title: 'Complesso multipiano', category: 'industriale', location: 'Provincia BS', year: '2024', description: 'Costruzione di un complesso industriale multipiano.', image: project3 },
    { id: 4, title: 'Grande cantiere industriale', category: 'industriale', location: 'Brescia', year: '2023', description: 'Realizzazione di un importante complesso industriale.', image: project4 },
    { id: 5, title: 'Preparazione cantiere', category: 'residenziale', location: 'Corteno Golgi', year: '2024', description: 'Lavori di movimento terra per nuova costruzione.', image: project5 },
    { id: 6, title: 'Ristrutturazione copertura', category: 'coperture', location: 'Val Camonica', year: '2023', description: 'Rifacimento completo della copertura.', image: project6 },
    { id: 7, title: 'Edificio commerciale', category: 'industriale', location: 'Brescia', year: '2024', description: 'Realizzazione di un edificio commerciale.', image: project7 },
    { id: 8, title: 'Struttura industriale', category: 'industriale', location: 'Provincia BS', year: '2023', description: 'Costruzione di una struttura industriale.', image: project8 },
    { id: 9, title: 'Grande progetto edilizio', category: 'industriale', location: 'Brescia', year: '2024', description: 'Gestione di un grande cantiere con multiple gru.', image: project9 },
    { id: 10, title: 'Direzione lavori', category: 'residenziale', location: 'Val Camonica', year: '2024', description: 'Supervisione e direzione lavori di cantiere residenziale.', image: project10 },
    { id: 11, title: 'Progettazione 3D', category: 'residenziale', location: 'Brescia', year: '2024', description: 'Progettazione e rendering 3D per nuovi complessi residenziali.', image: project11 },
  ]

  const filteredProjects = activeFilter === 'tutti'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title-lav',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )

      gsap.fromTo('.hero-bg-lav',
        { scale: 1.2 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      )

      gsap.fromTo('.gallery-item',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: galleryRef.current, start: 'top 70%' }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.fromTo('.gallery-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
    )
  }, [activeFilter])

  return (
    <div className="bg-[#0c0c0c] text-white overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Cantiere" className="hero-bg-lav w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/70 via-[#0c0c0c]/50 to-[#0c0c0c]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
          <div className="w-full px-6 lg:px-16 xl:px-24">
            <div className="overflow-hidden mb-4">
              <span className="hero-title-lav block text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">
                Portfolio
              </span>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-lav text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter">
                I NOSTRI
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-lav text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter text-white/40">
                LAVORI
              </h1>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 right-0 hidden lg:flex">
          <div className="bg-amber-500 text-black px-12 py-8">
            <span className="block text-6xl font-black">100+</span>
            <span className="text-sm uppercase tracking-wider">Progetti</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-12 py-8">
            <span className="block text-6xl font-black">30+</span>
            <span className="text-sm uppercase tracking-wider text-white/60">Anni</span>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-0 z-40 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/10">
        <div className="px-6 lg:px-16 xl:px-24 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={galleryRef} className="w-full py-16 lg:py-24">
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="gallery-item cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content always visible at bottom */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                      <span>{project.location}</span>
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Plus icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>

                  {/* Project number */}
                  <div className="absolute top-4 left-4 text-white/10 text-5xl font-black">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-white/50 text-xl">Nessun progetto trovato per questa categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-14 h-14 bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div
              className="h-full overflow-y-auto flex items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#111]"
              >
                <div className="h-[300px] lg:h-auto">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                  <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">
                    {categories.find(c => c.id === selectedProject.category)?.label}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-white/50 text-sm mb-8 pb-8 border-b border-white/10">
                    <span>{selectedProject.location}</span>
                    <span className="w-1 h-1 bg-white/40" />
                    <span>{selectedProject.year}</span>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed mb-10">{selectedProject.description}</p>
                  <Link
                    to="/contatti"
                    onClick={() => setSelectedProject(null)}
                    className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 self-start"
                  >
                    Richiedi Info
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="w-full bg-amber-500 py-24 lg:py-32">
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-black/60 text-sm font-bold uppercase tracking-widest mb-4 block">Il Prossimo</span>
              <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
                VUOI VEDERE IL TUO PROGETTO QUI?
              </h2>
              <p className="text-black/70 text-xl leading-relaxed">
                Contattaci per discutere delle tue esigenze.
                Saremo felici di realizzare il tuo prossimo progetto.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
              >
                Richiedi Preventivo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:3408491759"
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                340 849 1759
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
