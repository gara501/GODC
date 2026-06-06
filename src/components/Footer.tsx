import godc from '../assets/img/godc-logo.png'
import type { SiteSettings } from '../lib/cms'

type FooterProps = {
  footer: SiteSettings['footer']
}

export const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10 md:px-12 md:py-14">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" href={footer.websiteUrl}>
            <img src={godc} className="w-32 brightness-125 md:w-40" alt="logo" />
            <span className="self-center text-lg font-semibold text-stone-100 md:text-2xl">{footer.motto}</span>
          </a>
        </div>
        <hr className="my-8 border-white/10" />
        <span className="block text-sm uppercase tracking-[0.18em] text-stone-500 sm:text-center">
          {footer.copyright}{' '}
          <a href={footer.websiteUrl} className="text-stone-300 transition-colors hover:text-white">
            {footer.organizationName}
          </a>
          . Derechos Reservados.
        </span>
      </div>
    </footer>
  )
}
