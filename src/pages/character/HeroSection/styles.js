import { styled } from '@/styles'

import BgHero from '@/assets/bg-hero.jpg'

export const HeroContainer = styled('section', {
  paddingTop: '9.6rem',
  height: '73.1rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${BgHero.src}) no-repeat top center`,
  backgroundAttachment: 'fixed',

  '.image': {
    maxWidth: '48.6rem',
    height: '100%',
    overflow: 'hidden',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative',
    flex: 1,
  },

  '.info-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
    flex: 1,
  },

  '.info': {
    display: 'flex',
    flex: 1,
    maxWidth: '65rem',
    marginLeft: '3.2rem',

    span: {
      fontSize: '1.8rem',
      color: '$gray400',
      opacity: '.6',
      display: 'block',
      marginTop: '2rem',
    },

    '& > div': {
      flex: 1,
      maxWidth: '54.6rem',
      paddingLeft: '2.7rem',
      marginLeft: '1.9rem',
      position: 'relative',

      '&::before': {
        content: '',
        position: 'absolute',
        top: '1.2rem',
        left: 0,
        width: '0.4rem',
        height: '4.6rem',
        backgroundColor: '$red800',
      },

      h1: {
        fontSize: '6.1rem',
        fontWeight: 600,
        lineHeight: '116%',
        marginBottom: '1.3rem',
      },

      p: {
        maxWidth: '38.5rem',
        color: '$gray400',
      },
    },
  },
})
