import Image from 'next/image'
import { StyledDialog } from './styles'

import PlayIcon from '@/assets/play.svg'

export function Dialog({ label, thumb }) {
  return (
    <StyledDialog>
      <span>{label}</span>

      <button style={{ background: `url(${thumb}) no-repeat center center` }}>
        <div>
          <Image src={PlayIcon} alt="Play" />
        </div>
      </button>
    </StyledDialog>
  )
}
