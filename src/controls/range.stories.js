
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import oc from 'open-color'
import styled from 'styled-components'

import { Range, View, Box } from '../'

const Value = styled('span')`
  line-height: ${props => props.height || 16}px;
  width: 40px;
  text-align: center;
  background: ${oc.gray[7]};
  color: ${oc.white};
  font-weight: 600;
  letter-spacing: 0.2px;
`

const ColorRange = props => {
  const [value, setValue] = useState(props.initialValue)

  return (
    <Range {...props}
      onChange={setValue}
      color={`rgb(${180 + (value * 75)}, 50, 90)`}
    />
  )
}
ColorRange.defaultProps = {
  initialValue: 0.5
}

const ValueSlider = props => {
  const { min, max, isDiscrete, height, initialValue } = props
  const [value, setValue] = useState(initialValue)

  return (
    <Box m={2} display='flex' border='solid 1px black'>
      <Value height={height}>{value.toFixed(2)}</Value>
      <Range
        background={oc.gray[7]}
        color={oc.green[4]}
        onChange={setValue}
        min={min}
        max={max}
        initialValue={initialValue}
        isDiscrete={isDiscrete}
        width={1}
        height={height}
      />
    </Box>
  )
}
ValueSlider.defaultProps = {
  height: 24,
  initialValue: 0.5
}

storiesOf('Range', module)
  .add('Simple', () => (
    <View>
      <Box bg={oc.gray[8]} p='2' width={120}>
        <Range
          background={oc.gray[7]}
          color={oc.orange[6]}
          width={120}
        />
      </Box>
      <Box bg={oc.gray[8]} py={2} mt={1} width={1}>
        <Range
          background={oc.gray[7]}
          color={oc.orange[6]}
          width={1}
        />
      </Box>
    </View>
  ))
  .add('Sizes', () => (
    <View>
      <Box p={1}>
        <p>Full width</p>
        <Range background={oc.gray[7]} color={oc.violet[3]} width={1} />
      </Box>
      <Box p={1}>
        <p>Half width</p>
        <Range background={oc.gray[7]} color={oc.violet[4]} width={0.5} />
      </Box>
      <Box p={1}>
        <p>Set Width (150px)</p>
        <Range background={oc.gray[7]} color={oc.violet[5]} width={150} />
      </Box>
      <Box p={1}>
        <p>Set Height (24px)</p>
        <Range background={oc.gray[7]} color={oc.violet[6]} width={150} height={24} />
      </Box>
    </View>
  ))
  .add('Values', () => (
    <View>
      <ValueSlider min={0} max={1} />
      <ValueSlider min={0} max={10} initialValue={4} />
      <ValueSlider min={2} max={16} initialValue={10} />
      <ValueSlider min={-5} max={5} initialValue={0} />
    </View>
  ))
  .add('Misc', () => (
    <View>
      <p>Dynamically setting the color value</p>
      <Box p={2} mb={3} bg={oc.gray[7]}>
        <ColorRange background={oc.gray[8]} />
      </Box>
      <p>Indented</p>
      <Box pl={5} bg={oc.gray[6]}>
        <Box p={3} pl={5} mb={2} bg={oc.gray[7]}>
          <ColorRange background={oc.gray[8]} />
        </Box>
      </Box>
      <p>Linear Gradient</p>
      <Box p={2} mb={3} bg={oc.gray[7]}>
        <Range color={`linear-gradient(30deg, ${oc.orange[3]}, ${oc.red[7]} 75%)`} />
      </Box>
      <p>Discrete</p>
      <ValueSlider isDiscrete min={0} max={20} initialValue={5} />
    </View>
  ))
