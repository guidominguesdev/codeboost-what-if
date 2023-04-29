import Image from 'next/image'
import { CardContainer } from './styles'

export function CardCharacter({ image, name, slug }) {
  return (
    <CardContainer href={`/character/${slug}`}>
      <div className="image">
        <Image
          src={image}
          alt="Character"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="info">
        <div>
          <h3>{name}</h3>
          <span>Marvel Studios</span>
        </div>

        <span>What if</span>
      </div>
    </CardContainer>
  )
}
