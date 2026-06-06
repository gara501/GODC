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
    <div className="min-h-screen bg-black text-stone-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto max-w-screen-2xl px-6 py-4 md:px-12">
          <Navbar navigation={siteSettings.navigation} />
        </div>
      </div>
      <Hero>
        <p
          className="mb-8 text-sm uppercase tracking-[0.32em] text-red-300/80 md:text-base"
          data-hero-reveal
        >
          {siteSettings.hero.subtitle}
        </p>
        <h1
          className="max-w-5xl text-5xl font-extrabold leading-[0.95] text-stone-50 md:text-7xl lg:text-[7.5rem]"
          data-hero-reveal
        >
          {siteSettings.hero.title}
        </h1>
        <p
          className="mt-8 max-w-3xl text-lg leading-8 text-stone-300 md:text-2xl md:leading-10"
          data-hero-reveal
        >
          Una obediencia masónica de pensamiento libre, tradición viva y trabajo fraternal.
        </p>
      </Hero>
      <main id="content" className="bg-black">
        <Outlet />
      </main>
      <Footer footer={siteSettings.footer} />
    </div>
  )
}

export default App
