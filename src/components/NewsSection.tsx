import type { ReactNode } from 'react'
import eventFallbackImage from '../assets/img/eventoMasones.jpeg'
import { resolveCMSAssetURL, type CMSMedia, type NewsItem } from '../lib/cms'

type NewsSectionProps = {
  news: NewsItem[]
}

const urlPattern = /(https?:\/\/[^\s]+)/g

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))

const linkifyText = (text: string) => {
  const parts = text.split(urlPattern)

  return parts.map<ReactNode>((part, index) => {
    if (!part.match(urlPattern)) {
      return part
    }

    return (
      <a
        className="text-red-300 underline decoration-red-300/40 underline-offset-4 transition-colors hover:text-red-200"
        href={part}
        key={`${part}-${index}`}
        rel="noreferrer"
        target="_blank"
      >
        {part}
      </a>
    )
  })
}

const getImageURL = (image: NewsItem['image']) => {
  if (image && typeof image === 'object') {
    return resolveCMSAssetURL((image as CMSMedia).url)
  }

  return undefined
}

export const NewsSection = ({ news }: NewsSectionProps) => {
  if (news.length === 0) {
    return null
  }

  return (
    <section className="border-y border-white/10 bg-[#060606] py-24 text-stone-100 md:py-36">
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12">
        <div className="mb-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[120px_1fr] md:gap-12">
          <p className="text-xs uppercase tracking-[0.34em] text-red-300/80">Noticias</p>
          <div>
            <h2 className="max-w-5xl text-4xl font-cinzel-bold leading-tight text-stone-50 md:text-6xl">
              Actualidad del Gran Oriente
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-400">
              Eventos, comunicados y encuentros del G:.O:.D:.C:.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {news.map((item) => {
            const imageURL = getImageURL(item.image) || eventFallbackImage

            return (
              <article
                className="grid overflow-hidden border border-white/10 bg-black lg:grid-cols-[0.9fr_1.1fr]"
                key={item.id || `${item.title}-${item.date}`}
              >
                <img
                  alt={item.title}
                  className="h-full min-h-[320px] w-full object-cover"
                  loading="lazy"
                  src={imageURL}
                />
                <div className="flex min-h-[360px] flex-col justify-between p-6 md:p-10">
                  <div>
                    <time className="text-xs uppercase tracking-[0.3em] text-red-300/80" dateTime={item.date}>
                      {formatDate(item.date)}
                    </time>
                    <h3 className="mt-6 text-3xl font-cinzel-bold leading-tight text-stone-50 md:text-5xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-10 text-lg leading-8 text-stone-300 md:text-xl md:leading-9">
                    {linkifyText(item.description)}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
