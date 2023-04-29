import { styled } from '@/styles'

export const NotFoundContainer = styled('section', {
  paddingTop: '9.6rem',

  h1: {
    fontWeight: 600,
    fontSize: '4.9rem',
    lineHeight: '120%',
    marginBottom: '2.4rem',
  },

  '.wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBlock: '9.6rem',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
  },

  p: {
    textAlign: 'center',
    maxWidth: '64.1rem',
    marginBottom: '4rem',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '5.4rem',
    width: '19.6rem',
    backgroundColor: '$red900',
    borderRadius: 5,
    fontWeight: 600,
    transition: 'filter .3s ease',
    marginBottom: '7.2rem',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
})
