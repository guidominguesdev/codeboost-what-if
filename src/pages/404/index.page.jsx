import Link from 'next/link'
import Image from 'next/image'
import { Container, PageTitle } from '@/components'
import { NotFoundContainer } from './styles'

import ImageNotFound from '@/assets/image-not-found.png'

export default function PageNotFound() {
  return (
    <>
      <PageTitle
        title="Página não encontrada | What If? - CodeBoost"
        description="Um projeto do curso CodeBoost"
      />
      <NotFoundContainer>
        <Container
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="wrapper">
            <h1>Whoops, essa página sumiu.</h1>
            <p>
              OHHH, parece que não conseguimos encontrar a página que você está
              procurando. Tente voltar à página anterior ou consulte nossa
              Central de Ajuda para obter mais informações.
            </p>
            <Link href="/">Voltar</Link>

            <Image src={ImageNotFound} alt="Error 404" />
          </div>
        </Container>
      </NotFoundContainer>
    </>
  )
}
