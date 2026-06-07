import type { MouseEvent } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import godc from '../assets/img/godc-logo.png'
import type { SiteSettings } from '../lib/cms'

type NavbarProps = {
  navigation: SiteSettings['navigation']
}

function Navbar({ navigation }: NavbarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const navigationItems = navigation.some((item) => item.href.includes('#noticias'))
    ? navigation
    : [
        ...navigation,
        {
          label: 'Noticias',
          href: '/#noticias',
        },
      ]

  return (
    <nav className="flex items-center justify-between gap-8">
      <img src={godc} alt="logo" className="w-20 brightness-125 md:w-24" />
      <div className="flex gap-6 text-sm uppercase tracking-[0.22em] text-stone-400 md:gap-10">
        {navigationItems.map((item) => {
          const isHashLink = item.href.includes('#')
          const [path = '', hash = ''] = item.href.split('#')
          const targetHash = hash ? `#${hash}` : ''
          const targetPath = path || location.pathname

          const handleHashClick = (event: MouseEvent<HTMLAnchorElement>) => {
            if (!isHashLink || !hash) {
              return
            }

            event.preventDefault()
            navigate(`${targetPath}#${hash}`)

            window.setTimeout(() => {
              document.getElementById(hash)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }, location.pathname === targetPath ? 0 : 80)
          }

          return (
            <NavLink
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-stone-50 ${
                  (isHashLink ? location.hash === targetHash : isActive && !location.hash)
                    ? 'text-stone-50'
                    : 'text-stone-400'
                }`
              }
              key={item.id || item.href}
              onClick={handleHashClick}
              to={item.href}
            >
              {item.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
