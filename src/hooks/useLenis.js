import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function useLenis() {
  const lenis = useRef(null)

  useEffect(() => {
    if (lenisInstance) {
      lenis.current = lenisInstance
      return
    }

    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisInstance = lenis.current

    lenis.current.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.current.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      // Don't destroy on unmount to persist across page changes
    }
  }, [])

  return lenis
}

export function scrollTo(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: 0,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    })
  }
}

export default useLenis
