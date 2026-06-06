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
  section.theme === 'dark' ? 'py-[100px] bg-slate-800 text-white' : 'py-[100px]'

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
              <img src={image} alt={section.heading || ''} />
            </div>
          ) : null}
          <div className="text-3xl flex-1">
            <p className="my-4 leading-10">{section.body}</p>
          </div>
        </TwoBlocks>
      </div>
    )
  }

  return (
    <div className={sectionClassName(section)}>
      {section.heading ? <BlockTitle title={section.heading} /> : null}
      <Block>
        <div className="text-3xl">
          <p className="my-4 leading-10">{section.body}</p>
        </div>
      </Block>
    </div>
  )
}

const PrinciplesSection = ({ section }: { section: PageSection }) => (
  <div className={sectionClassName(section)}>
    {section.heading ? <BlockTitle title={section.heading} /> : null}
    <Block>
      <div className="flex-col">
        {(section.items || []).map((item, index) => (
          <div className={index < (section.items || []).length - 1 ? 'mb-[100px]' : ''} key={item.id || item.heading}>
            <h3 className="md:text-4xl xl:text-5xl">{item.heading}</h3>
            <p className="text-3xl my-4 leading-10">{item.body}</p>
          </div>
        ))}
      </div>
    </Block>
  </div>
)

const LocationSection = ({ section }: { section: PageSection }) => (
  <div className={sectionClassName(section)}>
    {section.heading ? <BlockTitle title={section.heading} /> : null}
    <Block>
      <div className="text-2xl text-center">
        <p className="my-4 leading-10">{section.body}</p>
      </div>
    </Block>
  </div>
)

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
