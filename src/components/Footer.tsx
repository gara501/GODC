import godc from '../assets/img/godc-logo.png'
import type { SiteSettings } from '../lib/cms'

type FooterProps = {
  footer: SiteSettings['footer']
}

export const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" href={footer.websiteUrl}>
            <img src={godc} className="w-[200px]" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{footer.motto}</span>
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg text-gray-500 sm:text-center dark:text-gray-400">
          {footer.copyright}{' '}
          <a href={footer.websiteUrl} className="hover:underline">
            {footer.organizationName}
          </a>
          . Derechos Reservados.
        </span>
      </div>
    </footer>
  )
}
