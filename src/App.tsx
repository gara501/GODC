import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <Navbar />
        </div>
      </div>
      <Hero>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">Libertad, Igualdad, Fraternidad</h1>
        <p className="mb-8 text-xl font-bold text-gray-300 lg:text-5xl sm:px-16 lg:px-48">G:.O:.D:.C:.</p>
      </Hero>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
