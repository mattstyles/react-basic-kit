
import {
  fibonacci, linear10,
  borders, shadows, transitions, breaks,
  space, sizes
} from './scale'

import {
  uiFontScale, lineHeights, kerning, fonts,
} from './type'

import {
  common, gray,
  red, green, blue, yellow
} from './colours'

// Core theme tokens
const core = {
  // type
  fonts: fonts,
  lineHeights: lineHeights,
  letterSpacing: kerning,
  fontSizes: uiFontScale,

  // skin
  colors: {
    primary: 'hsl(140, 80%, 58%)',
    white: common.white,
    black: common.black,
    transparent: common.transparent,
    gray,
    red,
    green,
    blue,
    yellow
  },
  shadows: shadows,
  breakpoints: breaks,

  // layout
  space: space,
  sizes: sizes,
  zIndices: linear10,

  // borders
  borderWidths: fibonacci,
  borders: borders,
  radii: fibonacci,

  // variants

  // movement
  transition: transitions
}

// Higher level aliases
// Components may define their own alias tokens as well
const aliases = {}

export const theme = {
  ...core,
  ...aliases
}
