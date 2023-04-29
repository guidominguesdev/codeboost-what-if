import { styled } from '@/styles'

export const FooterContainer = styled('div', {
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '4rem 0',

  strong: {
    fontWeight: 700,
    fontSize: '1.4rem',
  },

  p: {
    flex: 1,
    maxWidth: '59.3rem',
    fontSize: '1.4rem',
    color: '$gray500',
    marginLeft: '18.6rem',
  },
})
