import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '', telefono: '', email: '', zona: '', tipologia: '', messaggio: '', privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ nome: '', telefono: '', email: '', zona: '', tipologia: '', messaggio: '', privacy: false })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title-cont',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )

      gsap.fromTo('.form-field',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 75%' }
        }
      )

      gsap.fromTo('.info-block',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: infoRef.current, start: 'top 75%' }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#0c0c0c] text-white overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="overflow-hidden mb-4">
            <span className="hero-title-cont block text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">
              Contatti
            </span>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-cont text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter">
              PARLIAMO DEL
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-cont text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.85] tracking-tighter text-amber-500">
              TUO PROGETTO
            </h1>
          </div>
          <p className="hero-title-cont text-white/60 text-xl lg:text-2xl max-w-xl leading-relaxed mt-8">
            Compila il form o contattaci direttamente.
            Ti risponderemo nel più breve tempo possibile.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-full py-16 lg:py-24">
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* FORM */}
            <div ref={formRef} className="lg:col-span-7">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#111] p-12 lg:p-16 text-center"
                >
                  <div className="w-20 h-20 bg-amber-500 flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-black mb-4">RICHIESTA INVIATA!</h3>
                  <p className="text-white/60 text-lg mb-8">Grazie per averci contattato. Ti risponderemo il prima possibile.</p>
                  <button onClick={() => setSubmitStatus(null)} className="text-amber-500 font-bold uppercase tracking-wider hover:text-amber-400 transition-colors">
                    Invia un'altra richiesta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label htmlFor="nome" className="block text-sm font-bold uppercase tracking-wider text-white/40 mb-3">Nome e Cognome *</label>
                      <input type="text" id="nome" name="nome" required value={formData.nome} onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 focus:border-amber-500 text-white text-lg outline-none transition-colors placeholder:text-white/30"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="telefono" className="block text-sm font-bold uppercase tracking-wider text-white/40 mb-3">Telefono *</label>
                      <input type="tel" id="telefono" name="telefono" required value={formData.telefono} onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 focus:border-amber-500 text-white text-lg outline-none transition-colors placeholder:text-white/30"
                        placeholder="340 1234567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-white/40 mb-3">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 focus:border-amber-500 text-white text-lg outline-none transition-colors placeholder:text-white/30"
                        placeholder="mario@email.com"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="zona" className="block text-sm font-bold uppercase tracking-wider text-white/40 mb-3">Zona intervento *</label>
                      <input type="text" id="zona" name="zona" required value={formData.zona} onChange={handleChange}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 focus:border-amber-500 text-white text-lg outline-none transition-colors placeholder:text-white/30"
                        placeholder="Es. Brescia, Val Camonica..."
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="tipologia" className="block text-sm font-bold uppercase tracking-wider text-white/40 mb-3">Tipologia lavoro</label>
                    <select id="tipologia" name="tipologia" value={formData.tipologia} onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 focus:border-amber-500 text-white text-lg outline-none transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#111]">Seleziona una tipologia...</option>
                      <option value="nuova-costruzione" className="bg-[#111]">Nuova costruzione</option>
                      <option value="ristrutturazione" className="bg-[#111]">Ristrutturazione</option>
                      <option value="tetto-copertura" className="bg-[#111]">Tetto / Copertura</option>
                      <option value="consolidamento" className="bg-[#111]">Consolidamento</option>
                      <option value="movimento-terra" className="bg-[#111]">Movimento terra</option>
                      <option value="altro" className="bg-[#111]">Altro</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="messaggio" className="block text-sm font-bold uppercase tracking-wider text-white/40 mb-3">Descrizione *</label>
                    <textarea id="messaggio" name="messaggio" required rows={4} value={formData.messaggio} onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/20 focus:border-amber-500 text-white text-lg outline-none transition-colors resize-none placeholder:text-white/30"
                      placeholder="Descrivi brevemente il lavoro..."
                    />
                  </div>

                  <div className="form-field flex items-start gap-4">
                    <input type="checkbox" id="privacy" name="privacy" required checked={formData.privacy} onChange={handleChange}
                      className="mt-1 w-6 h-6 bg-transparent border-2 border-white/20 checked:bg-amber-500 checked:border-amber-500 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-white/50 text-sm leading-relaxed cursor-pointer">
                      Ho letto e accetto la <Link to="/privacy" className="text-amber-500 hover:underline">Privacy Policy</Link> e acconsento al trattamento dei miei dati. *
                    </label>
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="form-field w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-5 text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia Richiesta
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div ref={infoRef} className="lg:col-span-5 space-y-6">
              {/* Phone */}
              <div className="info-block bg-[#111] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-amber-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-wider">Telefono</span>
                </div>
                <a href="tel:3408491759" className="block text-2xl font-black text-white hover:text-amber-500 transition-colors mb-2">
                  +39 340 849 1759
                </a>
                <a href="tel:036474143" className="block text-white/50 hover:text-white transition-colors">
                  +39 0364 74143
                </a>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/393408491759" target="_blank" rel="noopener noreferrer"
                className="info-block flex items-center gap-4 bg-green-600 hover:bg-green-500 p-8 transition-colors group"
              >
                <div className="w-14 h-14 bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-white/80 text-sm uppercase tracking-wider">WhatsApp</span>
                  <span className="block text-white text-xl font-black">Scrivici ora</span>
                </div>
              </a>

              {/* Address */}
              <div className="info-block bg-[#111] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-wider">Sede</span>
                </div>
                <p className="text-white font-bold text-lg">Via Mazzini, 110</p>
                <p className="text-white/50">25040 Corteno Golgi (BS)</p>
              </div>

              {/* Hours */}
              <div className="info-block bg-[#111] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-wider">Orari</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-white">Lun - Ven</span><span className="text-white/50">08:00 - 18:00</span></div>
                  <div className="flex justify-between"><span className="text-white">Sabato</span><span className="text-amber-500">Chiuso</span></div>
                  <div className="flex justify-between"><span className="text-white">Domenica</span><span className="text-amber-500">Chiuso</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="w-full relative">
        <div className="h-[500px] lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.847927693891!2d10.2459!3d46.1645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47833e0b0b0b0b0b%3A0x0!2sVia%20Mazzini%2C%20110%2C%2025040%20Corteno%20Golgi%20BS!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"
            width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Mappa sede"
          />
        </div>

        {/* Info box */}
        <div className="absolute bottom-8 left-6 lg:left-16 xl:left-24 bg-[#111] p-8 max-w-sm border-l-4 border-amber-500">
          <h3 className="text-xl font-black text-white mb-3">La nostra sede</h3>
          <p className="text-white/50 mb-6">Nel cuore della Val Camonica, operiamo in tutta la provincia di Brescia.</p>
          <a href="https://www.google.com/maps/dir//Via+Mazzini,+110,+25040+Corteno+Golgi+BS" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Indicazioni
          </a>
        </div>
      </section>
    </div>
  )
}
