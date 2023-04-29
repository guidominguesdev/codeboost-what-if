import { styled } from '@/styles'
import Link from 'next/link'

export const CardContainer = styled(Link, {
  display: 'block',
  width: '100%',
  maxWidth: '28rem',

  '.image': {
    width: '100%',
    height: '37.2rem',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: '1.6rem',
    position: 'relative',

    img: {
      transition: 'transform .3s ease',
    },
  },

  '.info': {
    display: 'flex',
    justifyContent: 'space-between',

    h3: {
      fontSize: '1.8rem',
      fontWeight: 600,
      marginBottom: '0.4rem',
      transition: 'color .3s ease',
    },

    span: {
      fontSize: '1.4rem',
      color: '$gray500',
    },
  },

  '&:hover': {
    '.image': {
      img: {
        transform: 'scale(1.05)',
      },
    },

    '.info': {
      h3: {
        color: '$red800',
      },
    },
  },
})
