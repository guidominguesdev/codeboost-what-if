import { styled } from '@/styles'

export const ListContainer = styled('div', {
  paddingBlock: '5.6rem 7.2rem',

  '.title': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5.6rem',

    span: {
      fontSize: '1.8rem',
      opacity: 0.4,
      marginRight: '11.3rem',
    },

    h2: {
      position: 'relative',
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: '140%',
      maxWidth: '21.6rem',
      paddingLeft: '1.6rem',

      '&::before': {
        content: '',
        position: 'absolute',
        top: '0.5rem',
        left: 0,
        width: '.2rem',
        height: '5.9rem',
        backgroundColor: '$red800',
      },
    },
  },
})

export const ListGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '4rem 3.2rem',

  '.marvel': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '28rem',
    height: '36.8rem',
  },
})
