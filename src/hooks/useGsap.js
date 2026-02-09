import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Custom easing functions
export const customEase = {
  outExpo: 'power4.out',
  outQuart: 'power3.out',
  inOutCirc: 'circ.inOut',
  elastic: 'elastic.out(1, 0.5)',
}

// Parallax hook
export function useParallax(speed = 0.5) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [speed])

  return ref
}

// Reveal animation hook
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 80,
      opacity = 0,
      duration = 1.2,
      delay = 0,
      start = 'top 85%',
      ease = customEase.outExpo,
    } = options

    gsap.set(el, { y, opacity })

    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none reverse',
      },
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return ref
}

// Stagger reveal for multiple elements
export function useStaggerReveal(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const {
      selector = '.stagger-item',
      y = 60,
      opacity = 0,
      duration = 0.9,
      stagger = 0.15,
      start = 'top 80%',
      ease = customEase.outExpo,
    } = options

    const elements = container.querySelectorAll(selector)

    gsap.set(elements, { y, opacity })

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration,
      stagger: {
        each: stagger,
        from: 'start',
      },
      ease,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none reverse',
      },
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return containerRef
}

// Horizontal scroll section
export function useHorizontalScroll() {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!container || !wrapper) return

    const getScrollAmount = () => {
      return -(wrapper.scrollWidth - window.innerWidth)
    }

    gsap.to(wrapper, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return { containerRef, wrapperRef }
}

// Text split and animate
export function useSplitText(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      type = 'chars',
      y = 100,
      rotation = 0,
      duration = 0.8,
      stagger = 0.02,
      start = 'top 85%',
      ease = customEase.outExpo,
    } = options

    // Simple split implementation
    const text = el.textContent
    el.innerHTML = ''

    if (type === 'chars') {
      text.split('').forEach(char => {
        const span = document.createElement('span')
        span.className = 'char'
        span.style.display = 'inline-block'
        span.textContent = char === ' ' ? '\u00A0' : char
        el.appendChild(span)
      })
    } else if (type === 'words') {
      text.split(' ').forEach((word, i) => {
        const wrapper = document.createElement('span')
        wrapper.className = 'word'
        wrapper.style.display = 'inline-block'
        wrapper.style.overflow = 'hidden'

        const inner = document.createElement('span')
        inner.style.display = 'inline-block'
        inner.textContent = word

        wrapper.appendChild(inner)
        el.appendChild(wrapper)

        if (i < text.split(' ').length - 1) {
          el.appendChild(document.createTextNode(' '))
        }
      })
    }

    const targets = type === 'chars'
      ? el.querySelectorAll('.char')
      : el.querySelectorAll('.word > span')

    gsap.set(targets, { y, rotation, opacity: 0 })

    gsap.to(targets, {
      y: 0,
      rotation: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none reverse',
      },
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return ref
}

// Image reveal with mask
export function useImageReveal(options = {}) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    const {
      duration = 1.4,
      delay = 0,
      start = 'top 80%',
      direction = 'left',
      ease = customEase.outExpo,
    } = options

    const clipStart = direction === 'left'
      ? 'inset(0 100% 0 0)'
      : direction === 'right'
      ? 'inset(0 0 0 100%)'
      : direction === 'top'
      ? 'inset(100% 0 0 0)'
      : 'inset(0 0 100% 0)'

    gsap.set(container, { clipPath: clipStart })
    gsap.set(image, { scale: 1.3 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none reverse',
      },
    })

    tl.to(container, {
      clipPath: 'inset(0 0 0 0)',
      duration,
      delay,
      ease,
    })
    .to(image, {
      scale: 1,
      duration: duration * 1.2,
      ease,
    }, 0)

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return { containerRef, imageRef }
}

// Magnetic effect for buttons/elements
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return ref
}

export default gsap
