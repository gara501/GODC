interface QuoteProps {
  title: string
}


export const Quote = ({ title }: QuoteProps) => {
  return (
    <div className="min-h-[70vh] border-y border-white/10 bg-[#070707]">
      <div className="mx-auto flex min-h-[70vh] max-w-screen-xl items-center px-6 md:px-12">
        <div className="max-w-6xl">
          <p className="mb-8 text-xs uppercase tracking-[0.34em] text-stone-500">Principio</p>
          <h2 className="text-4xl font-cinzel-bold leading-tight text-stone-100 md:text-6xl lg:text-7xl">{title}</h2>
        </div>
      </div>
    </div>
  )
}
