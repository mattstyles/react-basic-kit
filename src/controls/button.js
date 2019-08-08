
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import oc from 'open-color'
import { space, colors } from 'styled-system'

import { getTheme, getColor, modTheme } from '../theme/utils'

const getBasePadding = getTheme('basePadding')
const getBasePadding3 = modTheme('basePadding', 3)

const getPadding = props => props.icon
  ? css`${getBasePadding(props)}rem`
  : css`0 ${getBasePadding3(props)}rem`

export const BaseButton = styled('button')`
  position: relative;
  font-family: ${getTheme('type.main')};
  background: rgba(0, 0, 0, 1);
  color: ${oc.white};
  padding: ${getPadding};
  font-size: ${getTheme('type.size.base')}rem;
  line-height: ${props => props.icon ? 0 : 3};
  border: none;
  border-radius: ${props => props.isCircular ? '200px' : props.theme.borderRadius + 'px'};
  cursor: pointer;
  transition: background ease-out ${getTheme('transition.main')}ms, text-shadow ${getTheme('transition.main')}ms;
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
  ${colors}
`

export const PrimaryButton = styled(BaseButton)`
  background: ${getColor('button.primary')};

  :hover {
    background: ${getColor('button.primaryHover')};
  }

  :active {
    background: ${getColor('button.primarySelect')};
  }
`

export const ErrorButton = styled(BaseButton)`
  background: ${getColor('button.error')};

  :hover {
    background: ${getColor('button.errorHover')};
  }

  :active {
    background: ${getColor('button.errorSelect')};
  }
`

export const TransparentButton = styled(BaseButton)`
  background: ${getColor('button.transparent')};
  color: ${getTheme('type.color.main')};
  text-shadow: none;

  :hover {
    background: ${getColor('button.transparentHover')};
    text-shadow: none;
  }

  :active {
    background: ${getColor('button.transparentSelect')};
  }
`

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
