
import styled from 'styled-components'
import propTypes from 'prop-types'
import { compose, flexbox, border, position } from 'styled-system'
import systemTypes from '@styled-system/prop-types'

import { common, layout } from '@raid-ui/system'
import { sx, __hover, __focus, __active } from '@raid-ui/core'

/**
 * Primitive component
 * flex, border, position, layout, color, display, space, pseudo, sx
 */
export const Flex = styled('div')(
  props => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column'
  }),
  compose(
    border,
    position,
    flexbox,
    common,
    layout
  ),
  __hover,
  __focus,
  __active,
  sx
)
Flex.propTypes = {
  ...systemTypes.flexbox,
  ...systemTypes.border,
  ...systemTypes.position,
  ...common.propTypes,
  ...layout.propTypes,
  row: propTypes.bool
}
Flex.defaultProps = {
  row: false
}
Flex.displayName = 'Ninja'
