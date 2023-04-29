import { Container } from '@/components'
import { FooterContainer } from './styles'

import LogoCodeBoost from '@/assets/logo-codeboost.svg'
import Image from 'next/image'

export function Footer() {
  return (
    <FooterContainer>
      <Container
        css={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',

          '& > div': {
            display: 'flex',
            alignItems: 'flex-start',
          },
        }}
      >
        <div>
          <strong>©2022 CodeBoost</strong>
          <p>
            O curso Codeboost foi desenvolvido por William Moreira. As vagas são
            distribuídas por turmas de forma sazonal. Caso perca alguma
            oportunidade é só aguardar a próxima turma que normalmente acontece
            dentro do período de 3 a 4 meses.
          </p>
        </div>

        <Image src={LogoCodeBoost} alt="CodeBoost" />
      </Container>
    </FooterContainer>
  )
}
