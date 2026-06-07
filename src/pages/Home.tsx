import { NewsSection } from '../components/NewsSection'
import { PageSections } from '../components/PageSections'
import { useCMSPage } from '../hooks/useCMSPage'
import { useNews } from '../hooks/useNews'

export const Home = () => {
  const page = useCMSPage('home')
  const news = useNews()

  return (
    <>
      <NewsSection news={news} />
      <PageSections page={page} />
    </>
  )
}
