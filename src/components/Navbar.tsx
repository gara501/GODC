import { NavLink } from 'react-router-dom'
import godc from '../assets/img/godc-logo.png'
import type { SiteSettings } from '../lib/cms'

type NavbarProps = {
  navigation: SiteSettings['navigation']
}

function Navbar({ navigation }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center">
      <img src={godc} alt="logo" />
      <div className="text-2xl flex gap-8">
        {navigation.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-black')}
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
