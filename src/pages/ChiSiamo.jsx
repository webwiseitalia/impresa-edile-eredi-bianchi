import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import teamImage from '../assets/foto/ingegnere-progetto-cantiere.webp'
import projectImage from '../assets/foto/grande-cantiere-industriale.webp'
import projectImage2 from '../assets/foto/edificio-moderno-costruzione.webp'
import projectImage3 from '../assets/foto/cantiere-movimento-terra-aereo.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo('.hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )

      gsap.fromTo('.hero-bg-chi',
        { scale: 1.2 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      )

      // Story - horizontal reveal
      gsap.fromTo('.story-text',
        { x: -100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 65%' }
        }
      )

      gsap.fromTo('.story-img-1',
        { scale: 1.3, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 60%' }
        }
      )

      gsap.fromTo('.story-img-2',
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 50%' }
        }
      )

      // Timeline
      gsap.fromTo('.timeline-item',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline-section', start: 'top 70%' }
        }
      )

      // Values
      gsap.fromTo('.value-item',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 70%' }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const values = [
    { title: 'Affidabilità', desc: 'Manteniamo sempre le promesse fatte ai nostri clienti', number: '01' },
    { title: 'Qualità', desc: 'Utilizziamo sempre materiali di prima scelta', number: '02' },
    { title: 'Puntualità', desc: 'Rispettiamo le tempistiche concordate', number: '03' },
    { title: 'Professionalità', desc: 'Team esperto e qualificato al tuo servizio', number: '04' },
  ]

  const timeline = [
    { year: '1990', title: 'Le Origini', desc: 'L\'impresa nasce dalla passione per l\'edilizia e dalla volontà di creare qualcosa di duraturo.' },
    { year: '2000', title: 'Espansione', desc: 'Ampliamento dell\'offerta con servizi specializzati: ristrutturazioni, coperture, consolidamento.' },
    { year: 'OGGI', title: 'Nuova Generazione', desc: 'Bianchi Davide guida l\'impresa portando avanti la tradizione con innovazione.' },
  ]

  return (
    <div className="bg-[#0c0c0c] text-white overflow-hidden">
      {/* HERO - Full screen dramatic */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projectImage}
            alt="Cantiere"
            className="hero-bg-chi w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/70 via-[#0c0c0c]/50 to-[#0c0c0c]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
          <div className="w-full px-6 lg:px-16 xl:px-24">
            <div className="overflow-hidden mb-4">
              <span className="hero-title block text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">
                Chi Siamo
              </span>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter">
                UNA TRADIZIONE
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter text-white/40">
                FAMILIARE
              </h1>
            </div>
            <p className="hero-title text-white/60 text-xl lg:text-2xl max-w-2xl leading-relaxed mt-8">
              Tre generazioni di esperienza nel settore delle costruzioni,
              con un profondo legame con il territorio della Val Camonica.
            </p>
          </div>
        </div>

        {/* Stats on hero */}
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <div className="flex">
            <div className="bg-amber-500 text-black px-12 py-8">
              <span className="block text-6xl font-black">30+</span>
              <span className="text-sm uppercase tracking-wider">Anni</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-12 py-8">
              <span className="block text-6xl font-black">3</span>
              <span className="text-sm uppercase tracking-wider text-white/60">Generazioni</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY - Asymmetric */}
      <section ref={storyRef} className="w-full py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Text */}
          <div className="story-text lg:col-span-5 px-6 lg:pl-16 xl:pl-24 lg:pr-12 flex flex-col justify-center">
            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">La Nostra Storia</span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.95] mb-8">
              COSTRUTTORI<br />
              <span className="text-white/40">DA GENERAZIONI</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                L'<strong className="text-white">Impresa Edile Eredi Bianchi</strong> ha sede a Corteno Golgi,
                un comune situato a circa 1100 metri di altitudine nel cuore della Val Camonica.
              </p>
              <p>
                La nostra impresa si distingue per la profonda conoscenza delle specificità costruttive
                tipiche delle zone alpine, dove le condizioni climatiche richiedono competenze specializzate.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-12 pl-6 border-l-2 border-amber-500">
              <p className="text-white/80 text-xl italic leading-relaxed">
                "La nostra forza è la conoscenza del territorio e delle sue esigenze costruttive specifiche."
              </p>
              <p className="mt-4 text-amber-500 font-bold">— Davide Bianchi</p>
              <p className="text-white/40 text-sm">Titolare</p>
            </div>
          </div>

          {/* Images */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[800px]">
            <div className="story-img-1 absolute top-0 right-0 w-[80%] lg:w-[70%] h-[65%] overflow-hidden">
              <img
                src={teamImage}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="story-img-2 absolute bottom-0 left-6 lg:left-0 w-[55%] lg:w-[45%] h-[45%] overflow-hidden border-8 border-[#0c0c0c]">
              <img
                src={projectImage2}
                alt="Progetto"
                className="w-full h-full object-cover"
              />
              {/* Badge */}
              <div className="absolute -right-6 -bottom-6 bg-amber-500 text-black px-6 py-4">
                <span className="block text-3xl font-black">100+</span>
                <span className="text-xs uppercase tracking-wider">Progetti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE - Full width */}
      <section className="timeline-section w-full bg-[#111] border-y border-white/10">
        <div className="px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="mb-16">
            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">Il Percorso</span>
            <h2 className="text-4xl lg:text-5xl font-black">LA NOSTRA STORIA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`timeline-item p-8 lg:p-12 ${i !== timeline.length - 1 ? 'md:border-r border-white/10' : ''}`}
              >
                <span className="text-7xl lg:text-9xl font-black text-white/10">{item.year}</span>
                <h3 className="text-2xl font-black text-white mt-4 mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES - Grid with numbers */}
      <section ref={valuesRef} className="w-full py-24 lg:py-40">
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">Valori</span>
              <h2 className="text-4xl lg:text-5xl font-black">COSA CI GUIDA</h2>
            </div>
            <p className="text-white/50 text-lg max-w-md">
              I principi fondamentali che ispirano il nostro lavoro e il rapporto con i clienti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {values.map((value, i) => (
              <div
                key={i}
                className={`value-item p-8 lg:p-10 group hover:bg-white/5 transition-colors duration-300 ${
                  i !== values.length - 1 ? 'border-r border-white/10' : ''
                } ${i < 2 ? 'border-b lg:border-b-0 border-white/10' : ''}`}
              >
                <span className="text-7xl font-black text-white/5 group-hover:text-amber-500/20 transition-colors duration-300">
                  {value.number}
                </span>
                <h3 className="text-2xl font-black text-white mt-4 mb-3">{value.title}</h3>
                <p className="text-white/50">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION - Split section */}
      <section className="w-full">
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src={projectImage3}
              alt="Area operativa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent lg:bg-gradient-to-l" />
          </div>

          {/* Content side */}
          <div className="bg-[#111] px-6 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col justify-center">
            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">Area Operativa</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              PROVINCIA DI<br />
              <span className="text-white/40">BRESCIA</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Con sede a Corteno Golgi, siamo strategicamente posizionati per servire
              l'intera Val Camonica e la provincia di Brescia.
            </p>

            <div className="space-y-4 mb-10">
              {['Corteno Golgi e comuni limitrofi', 'Tutta la Val Camonica', 'Provincia di Brescia'].map((loc, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-500" />
                  <span className="text-white">{loc}</span>
                </div>
              ))}
            </div>

            {/* Company info box */}
            <div className="bg-[#0c0c0c] p-8 border-l-4 border-amber-500">
              <h3 className="text-white font-bold text-lg mb-2">Impresa Edile Eredi Bianchi</h3>
              <p className="text-white/50 text-sm mb-4">di Bianchi Davide & C. Snc</p>
              <div className="space-y-2 text-white/60">
                <p>Via Mazzini, 110</p>
                <p>25040 Corteno Golgi (BS)</p>
                <p className="text-white/40 text-sm pt-2">P.IVA 02545590982</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full width */}
      <section className="w-full bg-amber-500 py-24 lg:py-32">
        <div className="px-6 lg:px-16 xl:px-24 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-black mb-8">
            VUOI CONOSCERCI<br />MEGLIO?
          </h2>
          <p className="text-black/70 text-xl lg:text-2xl max-w-2xl mx-auto mb-12">
            Contattaci per discutere del tuo progetto.
            Saremo felici di mostrarti i nostri lavori.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Richiedi Preventivo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/lavori"
              className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
            >
              I Nostri Lavori
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
