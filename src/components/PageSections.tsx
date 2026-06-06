import { Block } from './Block'
import { BlockTitle } from './BlockTitle'
import { Quote } from './Quote'
import { Testimonials } from './Testimonials'
import { TwoBlocks } from './TwoBlocks'
import type { CMSPage, PageSection } from '../lib/cms'
import { imageMap } from '../lib/imageMap'

type PageSectionsProps = {
  page: CMSPage
}

const sectionClassName = (section: PageSection) =>
  section.theme === 'dark'
    ? 'bg-[#080808] py-24 text-stone-100 md:py-36'
    : 'bg-black py-24 text-stone-100 md:py-36'

const sectionKey = (section: PageSection, index: number) => section.id || `${section.type}-${index}`

const TextSection = ({ section }: { section: PageSection }) => {
  if (section.layout === 'imageText') {
    const image = section.imageKey ? imageMap[section.imageKey] : undefined

    return (
      <div className={sectionClassName(section)}>
        {section.heading ? <BlockTitle title={section.heading} /> : null}
        <TwoBlocks>
          {image ? (
            <div className="flex-1">
              <img
                src={image}
                alt={section.heading || ''}
                className="aspect-[4/5] w-full border border-white/10 object-cover grayscale"
              />
            </div>
          ) : null}
          <div className="flex-1">
            <p className="max-w-3xl text-xl leading-9 text-stone-300 md:text-2xl md:leading-10">{section.body}</p>
          </div>
        </TwoBlocks>
      </div>
    )
  }

  return (
    <div className={sectionClassName(section)}>
      {section.heading ? <BlockTitle title={section.heading} /> : null}
      <Block>
        <div className="max-w-5xl">
          <p className="text-xl leading-9 text-stone-300 md:text-3xl md:leading-[1.45]">{section.body}</p>
        </div>
      </Block>
    </div>
  )
}

const PrinciplesSection = ({ section }: { section: PageSection }) => (
  <div className={sectionClassName(section)}>
    {section.heading ? <BlockTitle title={section.heading} /> : null}
    <Block>
      <div className="grid gap-16">
        {(section.items || []).map((item) => (
          <div
            className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[minmax(220px,0.8fr)_1.7fr]"
            key={item.id || item.heading}
          >
            <h3 className="text-2xl font-cinzel-bold leading-tight text-stone-100 md:text-4xl">{item.heading}</h3>
            <p className="text-xl leading-9 text-stone-300 md:text-2xl md:leading-10">{item.body}</p>
          </div>
        ))}
      </div>
    </Block>
  </div>
)

const LocationSection = ({ section }: { section: PageSection }) => {
  const address = (section.body || 'Cra 8a #17-22 Centro de Bogotá')
    .replace(/\s*-\s*Tel(?:e|é)fono:.*$/i, '')
    .replace(/\.+$/, '')
    .trim()
  const mapURL = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <div className={sectionClassName(section)}>
      {section.heading ? <BlockTitle title={section.heading} /> : null}
      <Block>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:items-start">
          <div>
            <p className="text-lg leading-8 text-stone-300 md:text-2xl md:leading-9">{address}</p>
          </div>
          <div className="overflow-hidden border border-white/10 bg-[#0b0b0b]">
            <iframe
              allowFullScreen
              className="h-[360px] w-full grayscale invert-[0.9] md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapURL}
              title={`Mapa de ${address}`}
            />
          </div>
        </div>
      </Block>
    </div>
  )
}

const TestimonialSection = ({ section }: { section: PageSection }) => {
  const testimonial = section.testimonial || {}
  const logo = testimonial.logoImageKey ? imageMap[testimonial.logoImageKey] : imageMap.compass
  const avatar = testimonial.avatarImageKey ? imageMap[testimonial.avatarImageKey] : imageMap.angel

  return (
    <div className={sectionClassName(section)}>
      <Testimonials
        authorName={testimonial.authorName || ''}
        authorTitle={testimonial.authorTitle || ''}
        avatarSrc={avatar}
        logoSrc={logo}
        quote={testimonial.quote || ''}
      />
    </div>
  )
}

const renderSection = (section: PageSection) => {
  switch (section.type) {
    case 'text':
      return <TextSection section={section} />
    case 'quote':
      return <Quote title={section.heading || ''} />
    case 'testimonial':
      return <TestimonialSection section={section} />
    case 'principles':
      return <PrinciplesSection section={section} />
    case 'location':
      return <LocationSection section={section} />
  }
}

export const PageSections = ({ page }: PageSectionsProps) => (
  <div>{page.sections.map((section, index) => <div key={sectionKey(section, index)}>{renderSection(section)}</div>)}</div>
)
