
import React, { useState } from 'react'
import styled from 'styled-components'
import { sx } from 'react-kit-core'
import { func, bool, string, number } from 'prop-types'
import { css } from '@styled-system/css'
import cx from 'classnames'

import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop } from '../utils'
import { focus, fill } from '../theme/mixins'
import { getTransition } from '../theme/utils'
import { tokens } from '../theme/index'
import { variants } from './checkbox.variants.js'

const StyledCheckbox = styled('input')(
  {
    cursor: 'inherit',
    margin: 0,
    opacity: 0,
    padding: 0
  },
  fill
)

const CheckMark = styled(Box)(
  props => css({
    opacity: props.isChecked ? 1 : 0,
    transition: getTransition('opacity', 'main'),
    'i, svg': {
      width: 'full',
      height: 'full',
      fill: 'currentColor'
    }
  })
)
CheckMark.defaultProps = {
  size: '100%'
}

// This makes the outline a square by using border
// Use a squircle icon instead, much nicer.
const Wrapper = styled(Box)(
  props => css({
    position: 'relative',
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: t => `${getTransition('box-shadow', 'main')(t)}, ${getTransition('background', 'main')(t)}`,
    borderRadius: tokens.layout.rounding,
    ...props.isFocussed && focus
  }),
  variants,
  sx
)

export const Checkbox = ({
  value,
  onChange,
  id,
  name,
  width,
  height,
  color,
  size,
  sx,
  disabled,
  children,
  ...more
}) => {
  const isControlled = value === undefined
  let [finalValue, finalOnChange] = [value, onChange]

  const [isFocussed, setIsFocussed] = useState(false)

  if (isControlled) {
    const [stateValue, setStateValue] = useState(false)
    finalValue = stateValue
    finalOnChange = event => {
      setStateValue(!stateValue)
      onChange(!stateValue)
    }
  }

  const onChangeCallback = isControlled
    ? finalOnChange
    : event => finalOnChange(!finalValue)

  return (
    <>
      <Wrapper
        {...more}
        className={cx({
          disabled: disabled,
          selected: finalValue
        })}
        isFocussed={isFocussed}
        isSelected={finalValue}
        sx={{
          width: size || width,
          height: size || height,
          ...sx || {}
        }}
      >
        <CheckMark
          color={color}
          isChecked={finalValue}
        >
          {children || <Icon icon='check' color={color} />}
        </CheckMark>
        <StyledCheckbox
          type='checkbox'
          disabled={disabled}
          aria-checked={finalValue}
          checked={finalValue}
          value={finalValue}
          onChange={onChangeCallback}
          onFocus={event => setIsFocussed(true)}
          onBlur={event => setIsFocussed(false)}
          id={id}
          name={name}
        />
      </Wrapper>
    </>
  )
}

const defaultSize = 6

Checkbox.propTypes = {
  value: bool,
  onChange: func,
  id: string,
  name: string,
  width: number,
  height: number,
  color: string,
  size: number
}
Checkbox.defaultProps = {
  onChange: noop,
  width: defaultSize,
  height: defaultSize,
  size: defaultSize,
  variant: 'standard'
}
