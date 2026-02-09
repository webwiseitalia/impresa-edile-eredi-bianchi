import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/foto/cantiere-gru-multiple.webp'
import costruzioniImage from '../assets/foto/edificio-moderno-costruzione.webp'
import ristrutturazioniImage from '../assets/foto/muratura-mattoni-costruzione.webp'
import copertureImage from '../assets/foto/edificio-cemento-armato-ponteggi.webp'
import consolidamentoImage from '../assets/foto/struttura-cemento-multipiano.webp'
import movimentoTerraImage from '../assets/foto/cantiere-movimento-terra-aereo.webp'
import opereCiviliImage from '../assets/foto/grande-cantiere-industriale.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Servizi() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)

  const services = [
    {
      id: 'costruzioni',
      title: 'Costruzioni Nuove',
      subtitle: 'Realizziamo il tuo sogno edilizio',
      description: 'Dalla progettazione alla consegna, ci occupiamo della realizzazione completa di nuovi edifici.',
      image: costruzioniImage,
      features: ['Edilizia residenziale', 'Ville', 'Complessi abitativi', 'Edifici industriali'],
    },
    {
      id: 'ristrutturazioni',
      title: 'Ristrutturazioni',
      subtitle: 'Nuova vita ai tuoi spazi',
      description: 'Trasformiamo e rinnoviamo edifici esistenti con soluzioni moderne per comfort ed efficienza.',
      image: ristrutturazioniImage,
      features: ['Ristrutturazione case', 'Edifici civili', 'Rifacimento facciate', 'Efficientamento'],
    },
    {
      id: 'coperture',
      title: 'Coperture e Tetti',
      subtitle: 'Protezione dall\'alto',
      description: 'Coperture progettate per resistere ai carichi nevosi e alle condizioni alpine.',
      image: copertureImage,
      features: ['Costruzione tetti', 'Coperture industriali', 'Controsoffitti', 'Isolamento'],
    },
    {
      id: 'consolidamento',
      title: 'Consolidamento',
      subtitle: 'Sicurezza e durabilità',
      description: 'Interveniamo su strutture esistenti per garantirne sicurezza e durabilità nel tempo.',
      image: consolidamentoImage,
      features: ['Consolidamento strutturale', 'Impermeabilizzazioni', 'Anti-umidità', 'Rinforzo fondazioni'],
    },
    {
      id: 'movimento-terra',
      title: 'Movimento Terra',
      subtitle: 'Preparazione cantiere',
      description: 'Mezzi e competenze per movimentazione terra, scavi e preparazione terreni.',
      image: movimentoTerraImage,
      features: ['Movimentazione terra', 'Scavi', 'Demolizioni', 'Sistemazione terreni'],
    },
    {
      id: 'opere-civili',
      title: 'Opere Civili',
      subtitle: 'Infrastrutture per il territorio',
      description: 'Realizziamo opere civili contribuendo allo sviluppo delle infrastrutture locali.',
      image: opereCiviliImage,
      features: ['Opere civili', 'Infrastrutture', 'Urbanizzazioni', 'Sistemazioni esterne'],
    },
  ]

  const processSteps = [
    { number: '01', title: 'Sopralluogo', description: 'Valutiamo il sito e le vostre esigenze' },
    { number: '02', title: 'Preventivo', description: 'Preventivo dettagliato e trasparente' },
    { number: '03', title: 'Realizzazione', description: 'Eseguiamo con cura e puntualità' },
    { number: '04', title: 'Consegna', description: 'Lavoro finito, pronto per essere vissuto' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo('.hero-title-serv',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )

      gsap.fromTo('.hero-bg-serv',
        { scale: 1.2 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      )

      // Services
      gsap.fromTo('.service-block',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 70%' }
        }
      )

      // Process
      gsap.fromTo('.process-step',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 75%' }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#0c0c0c] text-white overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Cantiere" className="hero-bg-serv w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/70 via-[#0c0c0c]/50 to-[#0c0c0c]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
          <div className="w-full px-6 lg:px-16 xl:px-24">
            <div className="overflow-hidden mb-4">
              <span className="hero-title-serv block text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">
                I Nostri Servizi
              </span>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-serv text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter">
                SOLUZIONI
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-serv text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter text-amber-500">
                COMPLETE
              </h1>
            </div>
            <p className="hero-title-serv text-white/60 text-xl lg:text-2xl max-w-2xl leading-relaxed mt-8">
              Dalla costruzione alla ristrutturazione, offriamo una gamma completa
              di servizi per ogni esigenza edile.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="w-full py-24 lg:py-40">
        <div className="px-6 lg:px-16 xl:px-24 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">Servizi</span>
              <h2 className="text-4xl lg:text-5xl font-black">COSA OFFRIAMO</h2>
            </div>
            <p className="text-white/50 text-lg max-w-md">
              Competenza e professionalità per ogni tipologia di intervento edilizio.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-block grid lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}
            >
              {/* Image */}
              <div className={`relative h-[400px] lg:h-[600px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent lg:hidden" />
                {/* Number overlay */}
                <div className="absolute top-8 left-8 text-white/10 text-[10rem] font-black leading-none hidden lg:block">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className={`bg-[#111] px-6 lg:px-16 py-12 lg:py-20 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">
                  {service.subtitle}
                </span>
                <h2 className="text-4xl lg:text-5xl font-black mb-6">{service.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 self-start"
                >
                  Richiedi Preventivo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section ref={processRef} className="w-full bg-amber-500 py-24 lg:py-32">
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <span className="text-black/60 text-sm font-bold uppercase tracking-widest mb-4 block">Come Lavoriamo</span>
            <h2 className="text-4xl lg:text-5xl font-black text-black">IL NOSTRO PROCESSO</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`process-step p-8 lg:p-12 text-center ${i !== processSteps.length - 1 ? 'md:border-r border-black/10' : ''}`}
              >
                <span className="text-7xl lg:text-8xl font-black text-black/10">{step.number}</span>
                <h3 className="text-2xl font-black text-black mt-4 mb-3">{step.title}</h3>
                <p className="text-black/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-32 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[#0c0c0c]/80" />
        </div>

        <div className="relative z-10 px-6 lg:px-16 xl:px-24 text-center">
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8">
            HAI BISOGNO DI UN<br />
            <span className="text-amber-500">SERVIZIO SPECIFICO?</span>
          </h2>
          <p className="text-white/60 text-xl lg:text-2xl max-w-2xl mx-auto mb-12">
            Contattaci per discutere del tuo progetto.
            Ti forniremo un preventivo personalizzato.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Richiedi Preventivo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:3408491759"
              className="inline-flex items-center gap-3 border-2 border-white/30 hover:border-white hover:bg-white hover:text-black text-white font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              340 849 1759
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
