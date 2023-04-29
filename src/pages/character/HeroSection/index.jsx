import Image from 'next/image'
import { Container } from '@/components'
import { HeroContainer } from './styles'

export function HeroSection({ data }) {
  return (
    <HeroContainer>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div className="image">
          <Image
            src={data.image_character.url}
            alt="Character"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="info-wrapper">
          <div className="info">
            <span>A História</span>
            <div>
              <h1>{data.name_character}</h1>
              <p>{data.description_character[0].text}</p>
            </div>
          </div>
        </div>
      </Container>
    </HeroContainer>
  )
}
