type TestimonialsProps = {
  authorName: string
  authorTitle: string
  avatarSrc: string
  logoSrc: string
  quote: string
}

export const Testimonials = ({ authorName, authorTitle, avatarSrc, logoSrc, quote }: TestimonialsProps) => {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_50rem_at_50%_0%,rgba(130,24,32,0.22),transparent_62%)]" />
      <div className="mx-auto max-w-5xl">
        <img alt="" src={logoSrc} className="mx-auto h-12 invert opacity-70" />
        <figure className="mt-12">
          <blockquote className="text-center font-cinzel-bold text-3xl font-semibold leading-tight text-stone-100 md:text-5xl">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img alt="" src={avatarSrc} className="mx-auto h-16 w-16 rounded-full border border-white/20 object-cover" />
            <div className="mt-5 flex items-center justify-center space-x-3 text-sm uppercase tracking-[0.2em]">
              <div className="font-semibold text-stone-100">{authorName}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-stone-500">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-stone-500">{authorTitle}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
