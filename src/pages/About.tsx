import { PageSections } from '../components/PageSections'
import { useCMSPage } from '../hooks/useCMSPage'

export const About = () => {
  const page = useCMSPage('about')

  return <PageSections page={page} />
}
