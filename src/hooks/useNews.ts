import { useEffect, useState } from 'react'
import { defaultNews, getNews, type NewsItem } from '../lib/cms'

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>(defaultNews)

  useEffect(() => {
    let isMounted = true

    getNews()
      .then((cmsNews) => {
        if (isMounted && cmsNews.length > 0) {
          setNews(cmsNews)
        }
      })
      .catch((error: unknown) => {
        console.error(error)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return news
}
