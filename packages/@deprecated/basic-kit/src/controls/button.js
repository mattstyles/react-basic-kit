
import propTypes from 'prop-types'
import styled from 'styled-components'
import { sx, focus, disabled } from '@raid/ui-core'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { common, size as sizeProps } from '../system/props'
import { noop } from '../utils'

import {
  sizeVariant,
  typeVariant,
  colourVariant
} from './button.variants.js'
import { rounding } from '../theme/variants'

const base = css({
  apperance: 'none',
  display: 'inline-flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  verticalAlign: 'middle',
  textDecoration: 'none',

  // Horizontal fix for alignment of anchors
  textAlign: 'center',

  // Firefox and Safari margin fix
  margin: 0
})

export const Button = styled('button').attrs(({
  disabled,
  onClick
}) => ({
  onClick: disabled ? noop : onClick
}))(
  base,
  props => css({
    fontFamily: 'main',
    fontWeight: '600',
    fontSize: themeGet('tokens.type.baseSize')(props),
    lineHeight: themeGet('tokens.type.baseSize')(props),
    letterSpacing: -0.25,
    color: themeGet('tokens.type.heading.main')(props),
    border: 'none',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    transition: `background ease-out ${themeGet('transition.main')(props)}ms, text-shadow ease-out ${themeGet('transition.main')(props)}ms, box-shadow ease-out ${themeGet('transition.main')(props)}ms`
  }),
  focus,
  disabled,

  sizeVariant, // size prop -> buttonSizes theme
  rounding, // rounding prop -> rounding theme
  colourVariant, // colour prop -> buttonColour theme
  typeVariant, // type prop -> buttons theme

  // These require more specificity than variants
  props => css({
    width: props.fit && 'fit',
    minWidth: props.tight && 'auto'
  }),
  props => props.align && css({
    '> *': {
      verticalAlign: 'middle'
    },
    '> * + svg': {
      ml: 2
    },
    '> svg + *': {
      ml: 2
    }
  }),
  common,
  sizeProps,
  sx
)

Button.propTypes = {
  ...common.propTypes,
  ...sizeProps.propTypes,
  fit: propTypes.bool,
  tight: propTypes.bool
}
Button.defaultProps = {
  size: 'medium',
  rounding: 'rounded',
  variant: 'solid',
  fit: false,
  tight: false
}

Button.displayName = 'ChesneyHawkesFTW'
