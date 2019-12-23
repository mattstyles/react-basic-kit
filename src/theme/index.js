
import { lighten } from 'polished'
import palx from 'palx'
import Shevy from 'shevyjs'
import { pick } from 'lodash/fp'

import * as Mixins from './mixins'
import * as Utils from './utils'

export { Mixins as mixins }
export { Utils as utils }

// @TODO use tailwind hand-cranked palette
// create storybook page to compare
const baseColor = '#40fdfd'
const pal = palx(baseColor)

const grays = [
  '#f9fafa',
  '#e9eced',
  '#d2d8da',
  '#96a4a9',
  '#6b7f86',
  '#203f49',
  '#1c3841',
  '#183037',
  '#13262c',
  '#0c191d'
]

const brand = {
  primary: pal.teal,
  error: pal.red
}

const baseLineHeight = 1.6
const baseFontSize = 1.4

const shevy = new Shevy({
  baseFontScale: 'minorThird',
  baseLineHeight: baseLineHeight,
  baseFontSize: `${baseFontSize}rem`,
  proximity: true
})

/**
 * Base scales
 */
const scale4 = [
  0, 4, 8, 16, 32, 64, 128, 256
]

const fibonacci = [
  0, 1, 2, 3, 5, 8, 13, 21, 35
]

const linear10 = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90
]

// @TODO should we use breakpoint versions of these scales, particularly for fonts?
const uiFontScale = [
  1.1, 1.2, 1.4, 1.6, 2.0, 2.3, 2.8, 3.5
].map(i => `${i}rem`)

// aligned to 4px grid, matches size scale
const lineHeights = [
  4, 8, 12, 16, 20, 24, 28, 32
]

const kerning = {
  condensed: '-1px',
  narrow: '-0.5px',
  standard: '0px',
  expanded: '1px'
}

const fonts = {
  fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
  main: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
  heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
  monospace: `Source Code Pro, Consolas, monospace`
}

const borders = {
  light: '1px solid rgba(0, 0, 0, 0.2)'
}

const shadows = {
  textOnLight: '0 1px rgba(0, 0, 0, 0.2)'
}

const transition = {
  main: 150,
  spin: 1250
}

const breaks = [
  '40em',
  '52em',
  '64em'
]

/**
 * Aliases
 */
uiFontScale.xs = uiFontScale[0]
uiFontScale.s = uiFontScale[1]
uiFontScale.m = uiFontScale[2]
uiFontScale.l = uiFontScale[3]
uiFontScale.xl = uiFontScale[4]

lineHeights.s = lineHeights[2]

// https://github.com/system-ui/designql#specification
// https://github.com/salesforce-ux/theo#supported-categories
// https://github.com/primer/components/blob/master/src/theme.js
// https://github.com/styled-system/styled-system/blob/master/docs/table.md
// @TODO this lives inside `styled` for now, it will become the theme
const styled = {
  // type
  fonts: fonts,
  lineHeights: lineHeights,
  letterSpacing: kerning,
  fontSizes: uiFontScale,

  // skin
  colors: {
    primary: pal.green[4],
    gray: grays,
    white: 'hsl(275, 5%, 100%)'
  },
  shadows: shadows,
  breakpoints: breaks,

  // layout
  space: scale4,
  sizes: scale4,
  zIndices: linear10,

  // borders
  borderWidths: fibonacci,
  borders: borders,
  radii: fibonacci,

  // variants

  // movement
  transition: transition
}

export const theme = {
  baseLineHeight,
  basePadding: 1.2,
  borderRadius: 3,

  baseIconSize: 4.4,
  baseIconTextSize: 1.6,

  layout: {
    headerHeight: 4.4,
    footerHeight: 4.4
  },

  transition: {
    main: 150,
    spin: 1250
  },

  type: {
    ...styled.fonts,

    onLightShadow: `0 1px rgba(0, 0, 0, 0.2)`,

    size: {
      vlarge: uiFontScale[4],
      large: uiFontScale[3],
      base: uiFontScale[2],
      small: uiFontScale[1],
      vsmall: uiFontScale[0]
    },

    color: {
      main: pal.gray[9],
      heading: lighten(0.1, pal.gray[9])
    },

    // body copy parameters
    ...pick([
      'body',
      'content',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ], shevy)
  },

  palette: {
    ...pal,
    background: grays,
    ...brand,
    white: '#ffffff'
  },

  // @TODO rework colours, this is not good
  color: {
    primary: brand.primary[5],
    primaryDark: brand.primary[7],
    primaryLight: brand.primary[4],
    header: grays[8],
    error: brand.error[5],

    button: {
      primary: brand.primary[5],
      primaryHover: brand.primary[6],
      primarySelect: brand.primary[7],
      transparent: 'transparent',
      transparentHover: 'rgba(0, 0, 0, 0.1)',
      transparentSelect: 'rgba(0, 0, 0, 0.4)',
      error: brand.error[7],
      errorHover: brand.error[8],
      errorSelect: brand.error[9]
    }
  },

  // @TODO remove, this is unnecessary in a default theme
  gradient: {
    background: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.05) 0,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.4) 100%
    )`,
    backgroundSubtle: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.01) 0,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.15) 100%
    )`,
    primaryRadial: `radial-gradient(
      circle at 50% 90%,
      ${brand.primary[5]} 0,
      ${brand.primary[7]} 60%,
      ${brand.primary[8]} 100%
    )`,
    primary: `linear-gradient(30deg, ${brand.primary[8]}, ${brand.primary[4]})`,
    primaryShift: `linear-gradient(30deg, ${pal.teal[5]}, ${pal.green[4]})`,
    primaryLight: `linear-gradient(30deg, ${pal.lime[3]}, ${pal.green[7]})`,
    primaryDark: `linear-gradient(30deg, ${pal.lime[7]}, ${pal.green[8]})`,
    dusk: `linear-gradient(30deg, ${pal.violet[5]}, ${pal.blue[6]})`,
    sunset: `linear-gradient(30deg, ${pal.orange[3]}, ${pal.red[7]} 75%)`
  },

  // Styled-system
  ...styled
}
