
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { fill } from '../theme/mixins'
import { Box } from './box'

export const Aspect = styled(Box)(
  props => css({
    position: 'relative',
    '&::before': {
      display: 'block',
      height: 0,
      content: '" "',
      pb: `${(1 / props.ratio) * 100}%`
    },
    '&& > *': {
      ...fill()
    }
  }),
  sx
)
Aspect.defaultProps = {
  ...Box.defaultProps,
  ratio: 1
}
Aspect.propTypes = {
  ratio: propTypes.number,
  children: propTypes.element.isRequired
}
