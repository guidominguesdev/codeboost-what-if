import Image from 'next/image'
import { CardCharacter, Container } from '@/components'
import LogoMarvel from '@/assets/logo.svg'
import { ListContainer, ListGrid } from './styles'

export function ListCharacters({ data }) {
  return (
    <ListContainer>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>

        <ListGrid>
          {data.map((character) => {
            return (
              <CardCharacter
                key={character.id}
                image={character.data.image_character.url}
                name={character.data.name_character}
                slug={character.data.slug}
              />
            )
          })}

          <div className="marvel">
            <Image src={LogoMarvel} alt="Marvel Studios" />
          </div>
        </ListGrid>
      </Container>
    </ListContainer>
  )
}
