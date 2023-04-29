import { Container, Dialog } from '@/components'
import { SocialArea, StyledHeroSection, TextContent } from './styles'

import YouTubeIcon from '@/assets/youtube.svg'
import InstagramIcon from '@/assets/instagram.svg'
import Image from 'next/image'

const socialMedia = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/',
    icon: YouTubeIcon,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    icon: InstagramIcon,
  },
]

export function HomeHeroSection({ data }) {
  return (
    <StyledHeroSection>
      <Container css={{ display: 'flex', alignItems: 'flex-start' }}>
        <SocialArea>
          <ul>
            {socialMedia.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Image src={icon} alt={name} />
                  </a>
                </li>
              )
            })}
          </ul>
        </SocialArea>
        <TextContent>
          <div className="left">
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>{data.description_hero[0].text}</p>
            <a href={data.url_button.url} target="_blank" rel="noreferrer">
              {data.label_button}
            </a>
          </div>
          <Dialog
            label={data.label_trailer}
            thumb={data.thumbnail_trailer.url}
          />
        </TextContent>
      </Container>
    </StyledHeroSection>
  )
}
