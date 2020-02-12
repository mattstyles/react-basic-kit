
import styled from 'styled-components'
import propTypes from 'prop-types'
import { sf } from 'react-kit-core'
import { css } from '@styled-system/css'

import { typography, common } from '../system/props'
import { variant } from '../utils'
import { tokens } from '../theme/tokens'

/**
 * defualt theme to px.
 * scale:          [   0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10 ]
 * fontSizes:      [  11,  12,  14,  16,  19,  21,  26,  32,  40,  58,  72 ]
 * lineHeights:    [   4,   8,  12,  16,  20,  24,  32,  36,  40,  52,  84 ]
 * matched:        [  16,  16,  20,  24,  32,  32,  36,  48,  56,  72,  90 ]
 * ratio (approx): [ 1.4, 1.3, 1.4, 1.5, 1.7, 1.5, 1.4, 1.5, 1.4, 1.2, 1.2 ]
 *
 * `matchedLineHeights` scale is applied to the theme to reflect the ratios
 * and maintain vertical alignment of text.
 */

export const Text = styled('span')(
  variant('type'),
  css({
    mt: 0,
    mb: 0,
    fontWeight: 400
  }),
  sf.hover,
  sf.focus,
  sf.active,
  typography,
  common,
  // Note that common inherits a size prop from styled-system space scale,
  // which can cause conflicts
  props => props.size && css({
    fontSize: props.size,
    lineHeight: props.size
  }),
  props => props.block && {
    display: 'block'
  },
  sf.sx
)
Text.propTypes = {
  ...typography.propTypes,
  ...common.propTypes,
  size: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  block: propTypes.bool
}
Text.defaultProps = {
  block: false,
  size: tokens.type.size
}
