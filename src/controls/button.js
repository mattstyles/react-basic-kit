
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { space, color } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { modTheme } from '../theme/utils'
import { fit } from '../theme/mixins'

const getBasePadding = themeGet('basePadding')
const getBasePadding3 = modTheme('basePadding', 3)

const getPadding = props => props.icon
  ? css`${getBasePadding(props)}rem`
  : css`0 ${getBasePadding3(props)}rem`

export const BaseButton = styled('button')`
  position: relative;
  font-family: ${themeGet('type.main')};
  background: rgba(0, 0, 0, 1);
  color: ${themeGet('palette.white')};
  padding: ${getPadding};
  font-size: ${themeGet('type.size.base')};
  line-height: ${props => props.icon ? 0 : 3};
  border: none;
  border-radius: ${props => props.isCircular ? '200px' : props.theme.borderRadius + 'px'};
  cursor: pointer;
  transition: background ease-out ${themeGet('transition.main')}ms, text-shadow ${themeGet('transition.main')}ms;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  text-transform: ${props => props.shouty && 'uppercase'};
  letter-spacing: ${props => props.shouty && '0.5px'};
  width: ${props => props.fit && '100%'};
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);

  :hover {
    background: rgba(0, 0, 0, 0.9);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }

  :active {
    background: rgba(0, 0, 0, 0.75);
  }

  ${props => props.icon && css`
    * {
      vertical-align: middle;
    }

    i {
      display: inline-block;
    }
  `}

  ${space}
  ${color}
`

export const PrimaryButton = styled(BaseButton)`
  background: ${themeGet('color.button.primary')};

  :hover {
    background: ${themeGet('color.button.primaryHover')};
  }

  :active {
    background: ${themeGet('color.button.primarySelect')};
  }
`

export const ErrorButton = styled(BaseButton)`
  background: ${themeGet('color.button.error')};

  :hover {
    background: ${themeGet('color.button.errorHover')};
  }

  :active {
    background: ${themeGet('color.button.errorSelect')};
  }
`

export const TransparentButton = styled(BaseButton)`
  background: ${themeGet('color.button.transparent')};
  color: ${themeGet('type.color.main')};
  text-shadow: none;

  :hover {
    background: ${themeGet('color.button.transparentHover')};
    text-shadow: none;
  }

  :active {
    background: ${themeGet('color.button.transparentSelect')};
  }
`

const Shade = styled('div')`
  background: linear-gradient(0deg, hsla(0, 0%, 0%, 0.25), hsla(0, 0%, 0%, 0.15));
  color: ${themeGet('type.color.main')};
  opacity: 0;
  transition: opacity ease-out ${themeGet('transition.main')}ms;
  z-index: 10;
  ${fit}

  :hover {
    opacity: 1;
  }

  :active {
    box-shadow: inset 0px 2px 2px 1px hsla(0, 0%, 0%, 0.1);
    opacity: 1;
  }
`

const ButtonText = styled('span')`
  pointer-events: none;
  position: relative;
  z-index: 20;
`

const GradientButton = styled(BaseButton)`
  background: ${props => props.background || props.bg};

  :hover {
    background: ${props => props.background || props.bg};
  }

  :active {
    background: ${props => props.background || props.bg};
  }
`

export const ShadeButton = ({
  children,
  ...more
}) => (
  <GradientButton {...more}>
    <ButtonText>{children}</ButtonText>
    <Shade />
  </GradientButton>
)

export const Button = (props) => {
  if (props.primary) return <PrimaryButton {...props} />
  if (props.error) return <ErrorButton {...props} />
  if (props.transparent) return <TransparentButton {...props} />

  return <BaseButton {...props} />
}
Button.defaultProps = {
  primary: false,
  error: false,
  transparent: false,
  icon: false,
  fit: false,
  shouty: false,
  isCircular: false
}
Button.propTypes = {
  primary: PropTypes.bool,
  error: PropTypes.bool,
  transparent: PropTypes.bool,
  icon: PropTypes.bool,
  fit: PropTypes.bool,
  shouty: PropTypes.bool,
  isCircular: PropTypes.bool
}
