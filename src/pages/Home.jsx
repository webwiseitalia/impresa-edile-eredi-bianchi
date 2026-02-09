import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/foto/grande-cantiere-industriale.webp'
import projectImage1 from '../assets/foto/edificio-moderno-costruzione.webp'
import projectImage2 from '../assets/foto/muratura-mattoni-costruzione.webp'
import projectImage3 from '../assets/foto/struttura-cemento-multipiano.webp'
import projectImage4 from '../assets/foto/cantiere-movimento-terra-aereo.webp'
import projectImage5 from '../assets/foto/gru-cantiere-costruzione.webp'
import projectImage6 from '../assets/foto/gru-gialla-cantiere.webp'
import projectImage7 from '../assets/foto/ingegnere-progetto-cantiere.webp'
import projectImage8 from '../assets/foto/cantiere-gru-multiple.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title-line',
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )

      gsap.fromTo('.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      )

      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.8 }
      )

      // Parallax hero image
      gsap.to('.hero-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Stats counter
      gsap.fromTo('.stat-block',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-row', start: 'top 85%' }
        }
      )

      // About section - horizontal reveal
      gsap.fromTo('.about-text',
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 70%' }
        }
      )

      gsap.fromTo('.about-image-1',
        { scale: 1.2, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 65%' }
        }
      )

      gsap.fromTo('.about-image-2',
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 50%' }
        }
      )

      // Services - stagger reveal
      gsap.fromTo('.service-item',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 70%' }
        }
      )

      // Projects - scale up
      gsap.fromTo('.project-item',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: projectsRef.current, start: 'top 70%' }
        }
      )

      // CTA parallax
      gsap.fromTo('.cta-bg',
        { scale: 1.1 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      )

    })

    return () => ctx.revert()
  }, [])

  const services = [
    { title: 'Costruzioni', desc: 'Edifici residenziali e industriali', image: projectImage1 },
    { title: 'Ristrutturazioni', desc: 'Rinnovo completo di edifici', image: projectImage2 },
    { title: 'Coperture', desc: 'Tetti e isolamento termico', image: projectImage3 },
    { title: 'Consolidamento', desc: 'Interventi strutturali', image: projectImage6 },
  ]

  const projects = [
    { image: projectImage1, title: 'Edificio residenziale', location: 'Brescia', year: '2024' },
    { image: projectImage5, title: 'Cantiere industriale', location: 'Val Camonica', year: '2024' },
    { image: projectImage3, title: 'Complesso multipiano', location: 'Provincia BS', year: '2023' },
    { image: projectImage4, title: 'Movimento terra', location: 'Corteno Golgi', year: '2024' },
    { image: projectImage7, title: 'Direzione lavori', location: 'Val Camonica', year: '2024' },
    { image: projectImage8, title: 'Grande cantiere', location: 'Brescia', year: '2023' },
  ]

  return (
    <div className="bg-[#0c0c0c] text-white overflow-hidden">
      {/* HERO - Full viewport, dramatic */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cantiere"
            className="hero-image w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/60 via-[#0c0c0c]/40 to-[#0c0c0c]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-32">
          <div className="w-full px-6 lg:px-16 xl:px-24">
            {/* Main title */}
            <div className="overflow-hidden mb-4">
              <h1 className="hero-title-line text-[clamp(3rem,10vw,10rem)] font-black leading-[0.85] tracking-tighter">
                COSTRUIAMO
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <h1 className="hero-title-line text-[clamp(3rem,10vw,10rem)] font-black leading-[0.85] tracking-tighter text-amber-500">
                IL FUTURO
              </h1>
            </div>

            {/* Subtitle + CTA row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <p className="hero-subtitle text-xl lg:text-2xl text-white/70 max-w-xl leading-relaxed">
                Impresa edile specializzata in costruzioni civili e industriali.
                <span className="text-white"> Tre generazioni di esperienza</span> nel cuore della Val Camonica.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contatti"
                  className="hero-cta group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300"
                >
                  Richiedi Preventivo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:3408491759"
                  className="hero-cta inline-flex items-center gap-3 border-2 border-white/30 hover:border-white hover:bg-white hover:text-black text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  340 849 1759
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* STATS - Full width bar */}
      <section className="stats-row w-full bg-[#111] border-y border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="stat-block p-8 lg:p-12 border-r border-white/10 text-center lg:text-left">
            <span className="block text-5xl lg:text-7xl font-black text-amber-500">30+</span>
            <span className="text-white/50 text-sm uppercase tracking-wider mt-2 block">Anni di esperienza</span>
          </div>
          <div className="stat-block p-8 lg:p-12 lg:border-r border-white/10 text-center lg:text-left">
            <span className="block text-5xl lg:text-7xl font-black text-white">100+</span>
            <span className="text-white/50 text-sm uppercase tracking-wider mt-2 block">Progetti completati</span>
          </div>
          <div className="stat-block p-8 lg:p-12 border-r border-t lg:border-t-0 border-white/10 text-center lg:text-left">
            <span className="block text-5xl lg:text-7xl font-black text-white">3</span>
            <span className="text-white/50 text-sm uppercase tracking-wider mt-2 block">Generazioni</span>
          </div>
          <div className="stat-block p-8 lg:p-12 border-t lg:border-t-0 border-white/10 text-center lg:text-left">
            <span className="block text-5xl lg:text-7xl font-black text-amber-500">BS</span>
            <span className="text-white/50 text-sm uppercase tracking-wider mt-2 block">Provincia operativa</span>
          </div>
        </div>
      </section>

      {/* ABOUT - Asymmetric full width */}
      <section ref={aboutRef} className="w-full py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Text - left side */}
          <div className="about-text lg:col-span-5 px-6 lg:pl-16 xl:pl-24 lg:pr-12 flex flex-col justify-center">
            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">Chi Siamo</span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.95] mb-8">
              ESPERIENZA E<br />
              <span className="text-white/40">SOLIDITÀ</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              L'Impresa Edile Eredi Bianchi rappresenta una tradizione familiare nel settore delle costruzioni.
              Con sede a Corteno Golgi, operiamo da tre generazioni nella Val Camonica.
            </p>
            <p className="text-white/40 leading-relaxed mb-10">
              La nostra profonda conoscenza del territorio alpino ci permette di affrontare con competenza
              le specificità delle costruzioni in montagna.
            </p>
            <Link
              to="/chi-siamo"
              className="group inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-wider"
            >
              <span className="w-12 h-px bg-amber-500 group-hover:w-20 transition-all duration-300" />
              Scopri di più
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Images - right side, overlapping */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[700px]">
            <div className="about-image-1 absolute top-0 right-0 w-[85%] lg:w-[75%] h-[70%] overflow-hidden">
              <img
                src={projectImage1}
                alt="Cantiere"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="about-image-2 absolute bottom-0 left-6 lg:left-0 w-[60%] lg:w-[50%] h-[50%] overflow-hidden border-8 border-[#0c0c0c]">
              <img
                src={projectImage4}
                alt="Lavori"
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -right-4 -bottom-4 bg-amber-500 text-black p-4 lg:p-6">
                <span className="block text-3xl lg:text-4xl font-black">30+</span>
                <span className="text-xs uppercase tracking-wider">Anni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Full width grid */}
      <section ref={servicesRef} className="w-full bg-[#111]">
        <div className="px-6 lg:px-16 xl:px-24 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">Servizi</span>
              <h2 className="text-4xl lg:text-5xl font-black">I NOSTRI SERVIZI</h2>
            </div>
            <Link
              to="/servizi"
              className="group inline-flex items-center gap-3 text-white/60 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors"
            >
              Vedi tutti
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Link
              key={i}
              to="/servizi"
              className="service-item group relative h-[400px] lg:h-[500px] overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="block text-amber-500 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Scopri
                </span>
                <h3 className="text-2xl lg:text-3xl font-black mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.desc}</p>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-white/10 text-8xl font-black">
                0{i + 1}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROJECTS - Full width showcase */}
      <section ref={projectsRef} className="w-full py-24 lg:py-40">
        <div className="px-6 lg:px-16 xl:px-24 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">Portfolio</span>
              <h2 className="text-4xl lg:text-5xl font-black">LAVORI RECENTI</h2>
            </div>
            <Link
              to="/lavori"
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-amber-500 hover:text-black text-white font-bold px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300"
            >
              Tutti i progetti
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Projects grid - stable layout */}
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Link
                key={i}
                to="/lavori"
                className={`project-item group relative overflow-hidden ${
                  i === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative w-full overflow-hidden bg-[#111] ${
                  i === 0 ? 'h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]' : 'h-[280px] lg:h-[290px]'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">{project.location}</span>
                      <span className="text-white/40 text-xs">{project.year}</span>
                    </div>
                    <h3 className={`font-black ${i === 0 ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Number overlay */}
                  <div className={`absolute top-4 left-4 text-white/10 font-black ${i === 0 ? 'text-8xl lg:text-9xl' : 'text-6xl'}`}>
                    0{i + 1}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full width grid layout */}
      <section className="cta-section w-full">
        {/* Top row - Title and CTA buttons */}
        <div className="grid lg:grid-cols-2">
          {/* Left - Title + Form */}
          <div className="bg-[#111] px-6 lg:px-16 xl:px-24 py-16 lg:py-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-amber-500" />
              <span className="text-amber-500 text-sm font-bold uppercase tracking-widest">Contattaci</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] mb-6">
              INIZIA IL TUO<br />
              <span className="text-white/40">PROGETTO</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Compila il form per ricevere un preventivo gratuito.
            </p>

            {/* Contact Form */}
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Nome *"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefono *"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Descrivi brevemente il tuo progetto..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 text-sm uppercase tracking-wider transition-all duration-300"
              >
                Invia Richiesta
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right - Image with overlay */}
          <div className="relative h-[300px] lg:h-auto overflow-hidden">
            <img
              src={projectImage5}
              alt="Cantiere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Floating CTA */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                to="/contatti"
                className="group flex items-center gap-4 bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-6 text-sm uppercase tracking-wider transition-all duration-300"
              >
                Richiedi Preventivo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row - Contact methods full width */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <a
            href="tel:3408491759"
            className="group flex items-center gap-5 px-6 lg:px-8 py-8 bg-[#0c0c0c] border-t border-r border-white/10 hover:bg-white/5 transition-colors"
          >
            <div className="w-12 h-12 bg-amber-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Telefono</p>
              <p className="text-white font-bold group-hover:text-amber-500 transition-colors truncate">340 849 1759</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/393408491759"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 px-6 lg:px-8 py-8 bg-[#0c0c0c] border-t border-r border-white/10 hover:bg-white/5 transition-colors"
          >
            <div className="w-12 h-12 bg-green-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="text-white font-bold group-hover:text-green-500 transition-colors truncate">Scrivici ora</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-5 px-6 lg:px-8 py-8 bg-[#0c0c0c] border-t border-r border-white/10">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Sede</p>
              <p className="text-white font-bold truncate">Corteno Golgi (BS)</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-5 px-6 lg:px-8 py-8 bg-[#0c0c0c] border-t border-white/10">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Orari</p>
              <p className="text-white font-bold truncate">Lun - Ven 8-18</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
