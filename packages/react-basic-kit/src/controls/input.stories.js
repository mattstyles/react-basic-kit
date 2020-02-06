
import styled from 'styled-components'
import { css } from '@styled-system/css'
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import {
  View, Input, Text, Box
} from '../index'

import { addBase, Surround } from '../storybook/index'

export default {
  title: 'Components/Controls/Input',
  decorators: [addBase()]
}

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      placeholder='Enter something:'
      onChange={e => setValue(e)}
      onSubmit={action('onSubmit: ')}
      submitOnEnter
    />
  )
}

export const Basics = () => (
  <View isPadded>
    <Surround>
      <Text>Input field</Text>
      <Box my={1}>
        <Input placeholder='This is a placeholder' />
      </Box>
    </Surround>
    <Surround>
      <Text>onChange</Text>
      <Box my={1}>
        <Input
          onChange={action('onChange: ')}
          onSubmit={action('onSubmit: ')}
        />
      </Box>
    </Surround>
    <Surround>
      <Text>Controlled input</Text>
      <Box my={1}>
        <ControlledInput />
      </Box>
    </Surround>
    <Surround>
      <Text>SubmitOnEnter</Text>
      <Box my={1}>
        <Input
          onChange={action('onChange: ')}
          onSubmit={action('onSubmit: ')}
          submitOnEnter
        />
      </Box>
    </Surround>
    <Surround>
      <Text>SubmitOnBlur</Text>
      <Box my={1}>
        <Input
          onChange={action('onChange: ')}
          onSubmit={action('onSubmit: ')}
          submitOnBlur
        />
      </Box>
    </Surround>
    <Surround>
      <Text>Pass props through</Text>
      <Box my={1}>
        <Input
          placeholder='Password field'
          type='password'
          onChange={action('onChange: ')}
        />
      </Box>
    </Surround>
    <Surround>
      <Text>Disabled state</Text>
      <Box my={1}>
        <Input
          disabled
        />
      </Box>
    </Surround>
  </View>
)

const Title = styled(Text)(
  css({
    display: 'block',
    mb: 1
  })
)

export const Variants = () => {
  return (
    <View>
      <Surround>
        <Title>Basic</Title>
        <Input />
      </Surround>
      <Surround>
        <Title>Flat</Title>
        <Input variant='flat' />
      </Surround>
    </View>
  )
}
