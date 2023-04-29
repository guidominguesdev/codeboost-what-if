import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    minWidth: 'space',
    maxWidth: 'space',
    height: 'space',
    minHeight: 'space',
    maxHeight: 'space',
    opacity: 'opacity',
  },
  theme: {
    colors: {
      white: '#ffffff',

      red800: '#ff040d',
      red900: '#ff0000',

      gray100: '#e1e0e7',
      gray200: '#c6c5ce',
      gray400: '#acabb7',
      gray500: '#8c8a97',
      gray600: '#7a7786',
      gray700: '#5f5c6b',
      gray800: '#4e4b59',
      gray900: '#33303e',
    },

    space: {},

    fontSizes: {
      md: '1.6rem',
    },

    borderWidths: {},

    fonts: {
      default: `'Poppins', sans-serif`,
    },

    fontWeights: {},

    lineHeights: {},

    radii: {},

    opacity: {},

    transitions: {},
  },

  media: {},
})
