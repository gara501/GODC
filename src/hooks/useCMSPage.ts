import { useEffect, useState } from 'react'
import { type CMSPage, defaultPages, getPage } from '../lib/cms'

export const useCMSPage = (slug: keyof typeof defaultPages) => {
  const [page, setPage] = useState<CMSPage>(defaultPages[slug])

  useEffect(() => {
    let isMounted = true

    getPage(slug)
      .then((cmsPage) => {
        if (isMounted) {
          setPage(cmsPage)
        }
      })
      .catch((error: unknown) => {
        console.error(error)
      })

    return () => {
      isMounted = false
    }
  }, [slug])

  return page
}
