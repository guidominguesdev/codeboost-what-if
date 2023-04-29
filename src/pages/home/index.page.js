import { getPrismicClient } from '@/services/prismic'
import { ListCharacters, PageTitle } from '@/components'
import { HeroSection } from './HeroSection'

export default function PageHome({ dataPage, characters }) {
  return (
    <>
      <PageTitle
        title="What If? - CodeBoost"
        description="Um projeto do curso CodeBoost"
      />
      <HeroSection data={dataPage} />
      <ListCharacters data={characters} />
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient()

  const contentsPage = await prismic.getSingle('home')
  const characters = await prismic.getAllByType('character')

  return {
    props: {
      dataPage: contentsPage.data,
      characters,
    },
    revalidate: 60,
  }
}
