import { styled } from '@/styles'

// import BgThumb from '@/assets/thumb-video.png'

export const StyledDialog = styled('div', {
  width: '100%',
  maxWidth: '31.2rem',

  span: {
    display: 'block',
    fontSize: '1.2rem',
    fontWeight: 600,
    lineHeight: '1.8rem',
    letterSpacing: '0.095em',
    color: '$gray100',
    marginBottom: '1.4rem',
    textTransform: 'uppercase',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '17.9rem',

    // background: `url(${BgThumb.src}) no-repeat center center`,
    border: 0,
    borderRadius: 10,

    '&:hover': {
      '& > div': {
        transform: 'scale(1.1)',
      },
    },

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '4.7rem',
      height: '4.7rem',

      background: 'rgba(19, 19, 19, 0.8)',
      backdropFilter: 'blur(2.5px)',
      borderRadius: '50%',
      transition: 'transform .3s ease',
    },
  },
})
