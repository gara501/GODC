import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import { defaultSiteSettings, getSiteSettings, type SiteSettings } from './lib/cms'

function App() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(defaultSiteSettings)

  useEffect(() => {
    let isMounted = true

    getSiteSettings()
      .then((settings) => {
        if (isMounted) {
          setSiteSettings(settings)
        }
      })
      .catch((error: unknown) => {
        console.error(error)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <Navbar navigation={siteSettings.navigation} />
        </div>
      </div>
      <Hero>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
          {siteSettings.hero.title}
        </h1>
        <p className="mb-8 text-xl font-bold text-gray-300 lg:text-5xl sm:px-16 lg:px-48">
          {siteSettings.hero.subtitle}
        </p>
      </Hero>
      <main>
        <Outlet />
      </main>
      <Footer footer={siteSettings.footer} />
    </>
  )
}

export default App
