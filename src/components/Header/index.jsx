import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.svg'
import LogoCodeBoost from '@/assets/logo-codeboost.svg'
import { Container } from '@/components'

import { StyledHeader } from './styles'

export function Header() {
  return (
    <StyledHeader>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Marvel Studios" priority />
          </Link>
        </div>

        <a className="code" href="https://codeboost.com.br/" target="_blank">
          <Image src={LogoCodeBoost} alt="CodeBoost" priority />
        </a>
      </Container>
    </StyledHeader>
  )
}
