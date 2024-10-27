import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Hero } from "./components/Hero"

function App() {

  return (
    <>
      <Hero>
        <div className="bg-white">
          <div className="container mx-auto py-4">
            <Navbar />
          </div>
        </div>
      </Hero>
      <main>
        <Outlet />
      </main>     
    </>
  )
}

export default App
