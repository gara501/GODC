import { PageSections } from '../components/PageSections'
import { useCMSPage } from '../hooks/useCMSPage'

export const Home = () => {
  const page = useCMSPage('home')

  return <PageSections page={page} />
}
