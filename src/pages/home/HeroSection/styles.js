import { styled } from '@/styles'

import BgHero from '@/assets/bg-hero.jpg'

export const StyledHeroSection = styled('section', {
  display: 'flex',
  width: '100%',
  height: '73.1rem',
  position: 'relative',
  zIndex: 1,
  paddingTop: '9.6rem',
  background: `url(${BgHero.src}) no-repeat top center`,
  backgroundAttachment: 'fixed',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30rem',
    backgroundImage: 'linear-gradient(transparent, #000000)',
    zIndex: -1,
  },
})

export const SocialArea = styled('div', {
  width: '7.2rem',
  height: '100%',
  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
  borderRight: '1px solid rgba(255, 255, 255, 0.2)',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    padding: '3rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',

    li: {
      '&:not(:last-child)': {
        marginBottom: '3.2rem',
      },

      a: {
        display: 'block',
      },
    },
  },
})

export const TextContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flex: 1,
  height: '100%',
  paddingLeft: '9.6rem',
  paddingRight: '7.1rem',
  paddingBottom: '3.1rem',
  borderRight: '1px solid rgba(255, 255, 255, 0.2)',

  '.left': {
    flex: 1,
    maxWidth: '57.4rem',
    paddingBottom: '10.1rem',

    h3: {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '0.095em',
      color: '#FFA800',
      textTransform: 'uppercase',
      marginBottom: '0.8rem',
    },

    h1: {
      fontSize: '6.1rem',
      fontWeight: 600,
      lineHeight: '116%',
      marginBottom: '2.4rem',
      maxWidth: '40rem',
    },

    p: {
      color: '$gray200',
      maxWidth: '49rem',
      marginBottom: '3.2rem',
    },

    a: {
      display: 'inline-block',
      padding: '1.5rem 5.2rem',
      backgroundColor: '$red900',
      borderRadius: 5,
      fontWeight: 600,
      transition: 'filter .3s ease',

      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
})
