import { NavLink } from 'react-router-dom'
import godc from '../assets/img/godc-logo.png';

function Navbar() {
  return (
    <nav className='flex justify-between items-center'>
      <img src={godc} alt="logo" />
      <div className='text-2xl flex gap-8'>
      <NavLink 
        to="/"
        className={({ isActive }) => 
          isActive ? "text-blue-700" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
        className={({ isActive }) => 
          isActive ? "text-blue-700" : "text-black"
        }
      >
        About
      </NavLink>
      </div>
    </nav>
  )
}

export default Navbar