import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

type HeroProps = {
  children: React.ReactNode
}

export const Hero = ({ children }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null)
  const frameRef = useRef<number>()

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) {
      return
    }

    const intro = animate(hero.querySelectorAll('[data-hero-reveal]'), {
      opacity: [0, 1],
      translateY: [44, 0],
      filter: ['blur(14px)', 'blur(0px)'],
      duration: 1100,
      delay: stagger(140),
      ease: 'outCubic',
    })

    const scrollCue = hero.querySelector('[data-scroll-cue]')
    const pulse = scrollCue
      ? animate(scrollCue, {
          opacity: [0.35, 1],
          translateY: [0, 12],
          duration: 1400,
          loop: true,
          alternate: true,
          ease: 'inOutSine',
        })
      : undefined

    const updateScrollState = () => {
      frameRef.current = undefined
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)
      hero.style.setProperty('--hero-progress', progress.toString())
    }

    const onScroll = () => {
      if (frameRef.current) {
        return
      }

      frameRef.current = window.requestAnimationFrame(updateScrollState)
    }

    updateScrollState()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      intro.revert()
      pulse?.revert()
      window.removeEventListener('scroll', onScroll)

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-stage relative isolate flex h-[100svh] w-full overflow-hidden bg-black text-stone-50"
    >
      <div className="hero-bg absolute inset-0 -z-30 bg-hero bg-cover bg-top-center opacity-45" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_35%,rgba(183,32,45,0.24),rgba(0,0,0,0)_34%),linear-gradient(180deg,rgba(0,0,0,0.42),#030303_86%)]" />
      <div className="absolute inset-x-6 bottom-8 top-24 -z-10 border-x border-white/10 md:inset-x-12" />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-end px-6 pb-12 pt-28 md:px-12 lg:pb-16">
        <div className="hero-content max-w-6xl will-change-transform">{children}</div>
        <div
          className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-stone-400"
          data-hero-reveal
          data-scroll-cue
        >
          <span className="h-px w-16 bg-stone-500" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
