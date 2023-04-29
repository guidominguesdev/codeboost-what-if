import { useRouter } from 'next/router'
import { getPrismicClient } from '@/services/prismic'
import { ListCharacters, PageTitle } from '@/components'
import { HeroSection } from './HeroSection'

export default function PageCharacter({ character, characters }) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <PageTitle
        title="Detalhes do personagem | What If? - CodeBoost"
        description="Um projeto do curso CodeBoost"
      />
      {character && <HeroSection data={character} />}
      {characters && <ListCharacters data={characters} />}
    </>
  )
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient()
  const characters = await prismic.getAllByType('character')

  const paths = characters.map(({ data }) => {
    return {
      params: { slug: data.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient()
  const characters = await prismic.getAllByType('character')

  const character = characters.find(({ data }) => {
    return data.slug === context.params.slug
  })

  characters.splice(
    characters.findIndex((e) => {
      return e.data.slug === character.data.slug
    }),
    1,
  )

  return {
    props: {
      character: character.data,
      characters,
    },
  }
}
