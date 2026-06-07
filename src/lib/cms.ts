export type ImageKey = 'angel' | 'compass' | 'godcLogo' | 'marianne'

export type SiteSettings = {
  hero: {
    title: string
    subtitle: string
  }
  navigation: Array<{
    id?: string
    label: string
    href: string
  }>
  footer: {
    motto: string
    copyright: string
    organizationName: string
    websiteUrl: string
  }
}

export type PageSection = {
  id?: string
  type: 'text' | 'quote' | 'testimonial' | 'principles' | 'location'
  theme?: 'light' | 'dark'
  layout?: 'single' | 'imageText'
  heading?: string
  body?: string
  imageKey?: ImageKey
  items?: Array<{
    id?: string
    heading: string
    body: string
  }>
  testimonial?: {
    quote?: string
    authorName?: string
    authorTitle?: string
    logoImageKey?: ImageKey
    avatarImageKey?: ImageKey
  }
}

export type CMSPage = {
  title: string
  slug: string
  sections: PageSection[]
}

export type CMSMedia = {
  id: number | string
  alt?: string
  url?: string
  filename?: string
}

export type NewsItem = {
  id?: number | string
  title: string
  date: string
  description: string
  image?: CMSMedia | number | string
}

type PayloadListResponse<T> = {
  docs: T[]
}

const cmsURL = (import.meta.env.VITE_CMS_URL || 'http://localhost:3000').replace(/\/$/, '')

const fetchCMS = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${cmsURL}${path}`)

  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const resolveCMSAssetURL = (url?: string) => {
  if (!url) {
    return undefined
  }

  if (url.startsWith('http')) {
    return url
  }

  return `${cmsURL}${url}`
}

export const getSiteSettings = async () => {
  return fetchCMS<SiteSettings>('/api/globals/site-settings')
}

export const getPage = async (slug: string) => {
  const params = new URLSearchParams({
    'where[slug][equals]': slug,
    limit: '1',
    depth: '0',
  })
  const data = await fetchCMS<PayloadListResponse<CMSPage>>(`/api/pages?${params.toString()}`)

  if (!data.docs[0]) {
    throw new Error(`CMS page not found: ${slug}`)
  }

  return data.docs[0]
}

export const getNews = async () => {
  const params = new URLSearchParams({
    depth: '1',
    limit: '6',
    sort: '-date',
  })
  const data = await fetchCMS<PayloadListResponse<NewsItem>>(`/api/news?${params.toString()}`)

  return data.docs
}

export const defaultSiteSettings: SiteSettings = {
  hero: {
    title: 'Libertad, Igualdad, Fraternidad',
    subtitle: 'G:.O:.D:.C:.',
  },
  navigation: [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Nosotros',
      href: '/about',
    },
    {
      label: 'Noticias',
      href: '/#noticias',
    },
  ],
  footer: {
    motto: 'A:.G:.D:.G:.A:.D:.U:.',
    copyright: '© 2024',
    organizationName: 'Gran Oriente de Colombia',
    websiteUrl: 'https://godc.com.co/',
  },
}

export const defaultNews: NewsItem[] = [
  {
    title: 'Que es y que no es la masoneria',
    date: '2026-06-07T00:00:00.000Z',
    description:
      'Conoce con verdad, decide con libertad, te invitamos a que conozcas mas acerca de la masoneria en Colombia.',
  },
]

export const defaultPages: Record<'home' | 'about', CMSPage> = {
  home: {
    title: 'Inicio',
    slug: 'home',
    sections: [
      {
        type: 'text',
        theme: 'light',
        layout: 'single',
        heading: '¿Qué es la masonería?',
        body: 'La masonería es una antigua organización fraternal con profundas raíces históricas que se originó en los gremios medievales de constructores. Se define como una institución filosófica, filantrópica y progresista que busca el desarrollo moral y espiritual de sus miembros a través de principios fundamentales como la libertad, igualdad y fraternidad. Opera mediante un sistema de símbolos, rituales y enseñanzas alegóricas, principalmente basados en el arte de la construcción, donde sus miembros se reúnen en logias para practicar sus rituales y trabajar en su crecimiento personal. Aunque no es una religión, tradicionalmente requiere que sus miembros crean en un Ser Supremo y se dedica a la búsqueda de la verdad, el conocimiento y el mejoramiento de la sociedad a través de obras benéficas y el desarrollo personal de sus integrantes.',
      },
      {
        type: 'quote',
        theme: 'light',
        layout: 'single',
        heading:
          'En la unión está la fuerza, en la fe está la verdad, y en el trabajo está la virtud',
      },
      {
        type: 'text',
        theme: 'dark',
        layout: 'single',
        heading: 'La masonería francesa',
        body: 'La masonería francesa, representada principalmente por el Gran Oriente de Francia (fundado en 1773), se distingue de otras corrientes masónicas por su carácter particularmente laico y liberal, habiendo eliminado en 1877 el requisito de creer en un Ser Supremo o Gran Arquitecto del Universo, lo que la diferencia de la masonería anglosajona tradicional. Se caracteriza por su fuerte compromiso con los valores republicanos, el laicismo, la justicia social y la libertad de pensamiento, teniendo un papel histórico significativo en el desarrollo de la República Francesa y sus ideales de "Liberté, Égalité, Fraternité". Esta rama de la masonería ha sido especialmente influyente en el desarrollo político y social de Francia, defendiendo activamente la separación entre Iglesia y Estado, la educación pública laica y los derechos humanos, manteniendo hasta hoy una notable presencia en la sociedad francesa y una significativa influencia en la masonería continental europea.',
      },
      {
        type: 'testimonial',
        theme: 'light',
        layout: 'single',
        testimonial: {
          quote:
            '“La verdadera iniciación no se encuentra en los rituales sino en la transformación del corazón”',
          authorName: 'Angel Roncancio',
          authorTitle: 'M:.R:.G:.M:.',
          logoImageKey: 'compass',
          avatarImageKey: 'angel',
        },
      },
    ],
  },
  about: {
    title: 'Nosotros',
    slug: 'about',
    sections: [
      {
        type: 'text',
        theme: 'light',
        layout: 'imageText',
        heading: 'G:.O:.D:.C:.',
        imageKey: 'marianne',
        body: 'El Gran Oriente de Colombia, fundado en 1989 en Bogotá, representa una de las instituciones masónicas más significativas del país. Operando bajo el Rito Francés, esta organización se fundamenta en principios esenciales como la libertad de pensamiento, la tolerancia, la fraternidad y la búsqueda continua del conocimiento. A lo largo de su historia, ha dejado una huella indeleble en la sociedad colombiana a través de sus obras sociales, contribuciones culturales y labor educativa. En la actualidad, mantiene una presencia activa en la sociedad, adaptando sus métodos a los tiempos modernos mientras preserva sus tradiciones centenarias, y continúa su misión de promover el desarrollo personal y espiritual de sus miembros, así como su compromiso con la labor filantrópica, manteniendo relaciones fraternales con grandes logias de otros países y operando en Bogotá.',
      },
      {
        type: 'principles',
        theme: 'dark',
        layout: 'single',
        heading: 'Nuestros principios',
        items: [
          {
            heading: 'FUNDAMENTOS FILOSÓFICOS',
            body: 'La masonería francesa se distingue por su fuerte compromiso con la libertad absoluta de conciencia y el secularismo (laïcité), principios que han sido fundamentales en su desarrollo histórico y filosófico. Esta tradición masónica ha establecido un enfoque único que no requiere la creencia en un Ser Supremo, diferenciándose así de otras corrientes masónicas. Su base filosófica se centra en el racionalismo, el humanismo y la búsqueda constante del conocimiento, promoviendo una aproximación científica y crítica al entendimiento del mundo y la sociedad.',
          },
          {
            heading: 'ESTRUCTURA Y MÉTODO DE TRABAJO',
            body: 'El método de trabajo de la masonería francesa se caracteriza por su aproximación sistemática al desarrollo personal y colectivo, utilizando el simbolismo y la reflexión filosófica como herramientas fundamentales. Sus logias acogen tanto a hombres como mujeres, reflejando su compromiso con la igualdad y la inclusión. El trabajo en logia se desarrolla a través del debate constructivo y la búsqueda colectiva de la verdad, empleando rituales y símbolos como medios para transmitir enseñanzas morales y filosóficas, siempre bajo la perspectiva del pensamiento libre y el análisis racional.',
          },
          {
            heading: 'COMPROMISO SOCIAL Y OBJETIVOS',
            body: 'El compromiso social constituye un pilar fundamental en la masonería francesa, manifestándose a través de su activa participación en debates públicos y la defensa de causas progresistas. Sus objetivos se centran en el perfeccionamiento individual de sus miembros, pero siempre con la vista puesta en la mejora de la sociedad en su conjunto. La promoción de los valores republicanos, la defensa de la democracia y los derechos humanos, así como la búsqueda de la justicia social, son aspectos centrales de su misión. En el ámbito internacional, mantiene una red de cooperación con otras obediencias masónicas, trabajando por la paz mundial y el intercambio cultural, mientras preserva su distintiva identidad laica y progresista.',
          },
        ],
      },
      {
        type: 'location',
        theme: 'light',
        layout: 'single',
        heading: 'Donde nos ubicamos',
        body: 'Carrera 8A #17-22, Bogotá, Colombia',
      },
    ],
  },
}
