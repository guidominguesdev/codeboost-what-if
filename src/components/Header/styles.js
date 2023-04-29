import { styled } from '@/styles'

export const StyledHeader = styled('header', {
  position: 'absolute',
  top: 0,
  left: 0,

  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '9.6rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  zIndex: 2023,

  '.logo': {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    paddingLeft: '2.3rem',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',

    '&::before': {
      content: '',
      backgroundColor: '$red800',
      boxShadow: '0px 2px 4px rgba(255, 4, 13, 0.16)',
      width: '8.8rem',
      height: 1,
      position: 'absolute',
      bottom: '-0.1rem',
      left: '2.3rem',
    },
  },

  '.code': {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 2.3rem',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
  },
})
