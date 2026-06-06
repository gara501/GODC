import { NavLink } from 'react-router-dom'
import godc from '../assets/img/godc-logo.png'
import type { SiteSettings } from '../lib/cms'

type NavbarProps = {
  navigation: SiteSettings['navigation']
}

function Navbar({ navigation }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between gap-8">
      <img src={godc} alt="logo" className="w-20 brightness-125 md:w-24" />
      <div className="flex gap-6 text-sm uppercase tracking-[0.22em] text-stone-400 md:gap-10">
        {navigation.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-stone-50 ${isActive ? 'text-stone-50' : 'text-stone-400'}`
            }
            key={item.id || item.href}
            to={item.href}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
