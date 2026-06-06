import icon from '../assets/img/compass.png'

interface BlockTitleProps {
  title: string;
}

export const BlockTitle = ({ title }: BlockTitleProps) => {
  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl px-6 md:mb-24 md:px-12">
      <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[120px_1fr] md:gap-12">
        <img src={icon} alt="icon" className="w-10 opacity-70 invert md:w-12" />
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-red-300/80">G:.O:.D:.C:.</p>
          <h2 className="max-w-5xl text-4xl font-cinzel-bold leading-tight text-stone-50 md:text-6xl">{title}</h2>
        </div>
      </div>
    </div>
  )
}
