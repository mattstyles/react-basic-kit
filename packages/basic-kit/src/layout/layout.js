
import styled from 'styled-components'
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { fill } from '../theme/mixins'
import { Box } from './box'

const { compose } = styledSystem

export const Flex = styled(Box)(
  props => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column'
  }),
  styledSystem.flexbox,
  sx
)
Flex.propTypes = {
  ...Box.propTypes,
  ...systemTypes.flexbox,
  row: propTypes.bool
}
Flex.defaultProps = {
  row: false
}

export const Pane = styled(Box)(
  props => ({
    display: 'flex',
    flexDirection: props.split ? 'row' : 'column',
    flex: props.flex
  }),
  sx
)
Pane.defaultProps = {
  split: false,
  flex: 1
}
Pane.propTypes = {
  split: propTypes.bool,
  flex: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  ...Box.propTypes
}

export const View = styled(Box)(
  props => props.isFlex && {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  props => css({
    px: props.isPadded && themeGet('tokens.layout.padding')(props)
  }),
  sx
)
View.propTypes = {
  ...Box.propTypes,
  isFlex: propTypes.bool,
  isPadded: propTypes.bool
}
View.defaultProps = {
  isFlex: false,
  isPadded: false
}

export const Screen = styled(View)(
  {
    minWidth: '100vw',
    minHeight: '100vh'
  }
)
Screen.propTypes = View.propTypes

export const Spacer = styled('div')(
  compose(
    styledSystem.space,
    styledSystem.layout.display,
    styledSystem.flexbox
  )
)
Spacer.propTypes = {
  ...systemTypes.space,
  ...systemTypes.flexbox,
  display: systemTypes.layout.display
}

export const Divider = styled(Spacer)(
  props => css({
    border: 'none',
    height: 'auto'
  }),
  props => props.isVertical
    ? css({
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      mx: themeGet('tokens.layout.padding')(props),
      my: 0
    })
    : css({
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      my: themeGet('tokens.layout.padding')(props)
    }),
  styledSystem.border,
  sx
)
Divider.propTypes = {
  ...Spacer.propTypes,
  ...systemTypes.border,
  isVertical: propTypes.bool
}
Divider.defaultProps = {
  isVertical: false
}

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

// @TODO add 'break' to turn into a stack at a breakpoint?
export const Spread = styled(Flex)(
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
)
Spread.defaultProps = {
  ...Flex.defaultProps
}
