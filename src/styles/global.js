import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
  },

  'html, body': {
    '@media (prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },

  body: {
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    OFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    background: 'linear-gradient(119.36deg, #010101 0%, #000000 100%)',
  },

  'body, input, button, textarea, select': {
    fontFamily: '$default',
    fontSize: '$md',
    lineHeight: '150%',
    color: '$white',
  },

  'img, svg, picture, video, canvas ': {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  },

  'hr, iframe': {
    border: 0,
  },

  'ol, ul': {
    listStyle: 'none',
  },

  'a, button': {
    cursor: 'pointer',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  button: {
    border: 0,
    background: 'transparent',
  },
})
