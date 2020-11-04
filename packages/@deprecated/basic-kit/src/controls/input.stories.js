
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import {
  View, Input, Text, Box, Label, Spacer, P, Code
} from '../index'

import { addBase, Surround, SectionTitle } from '../storybook/index'

export default {
  title: 'Components/Controls/Input',
  decorators: [addBase()]
}

const ControlledInput = (props) => {
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

const ResetOnFocus = props => {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      onFocus={e => setValue('')}
      onChange={e => setValue(e)}
      onSubmit={action('onSubmit: ')}
      submitOnEnter
    />
  )
}

export const Basics = () => (
  <View isPadded>
    <P><Code>Input</Code> will always dispatch an <Code>onChange</Code> event but will only dispatch the <Code>onSubmit</Code> if you set the <Code>submitOnBlur</Code> or <Code>submitOnEnter</Code> props. This gives you flexibility over what to react to.</P>
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
      <Text>ClearOnSubmit</Text>
      <Spacer pt={1} />
      <Box>
        <Input
          onChange={action('onChange: ')}
          onSubmit={action('onSubmit: ')}
          submitOnEnter
          clearOnSubmit
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
    <Surround>
      <Text>With Label</Text>
      <Spacer py={2} />
      <Label htmlFor='name'>Name</Label>
      <Spacer py={1} />
      <Input id='name' />
    </Surround>
    <Surround>
      <Text>onFocus handler</Text>
      <Box my={1}>
        <ResetOnFocus />
      </Box>
    </Surround>
  </View>
)

export const Variants = () => {
  return (
    <View>
      <Surround>
        <SectionTitle>Basic</SectionTitle>
        <Input />
      </Surround>
      <Surround>
        <SectionTitle>Ghost</SectionTitle>
        <Input variant='ghost' placeholder='name' />
        <Input variant='ghost' disabled placeholder='name' sx={{ mx: 2 }} />
      </Surround>
      <Surround>
        <SectionTitle>Tight</SectionTitle>
        <Input variant='tight' placeholder='name' />
        <Input variant='tight' disabled placeholder='name' sx={{ mx: 2 }} />
      </Surround>
    </View>
  )
}
