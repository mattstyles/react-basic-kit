
import { action } from '@storybook/addon-actions'
import { GiBrutalHelm } from 'react-icons/gi'

import { Button } from './button'
import { ButtonGroup } from './buttongroup'

import { theme } from '../theme'
console.log(theme)

export default {
  title: 'Components|Controls/Button'
}

export const Basic = () => {
  return (
    <>
      <ButtonGroup>
        <Button type='icon' onClick={action('Click')}>Click me</Button>
        <Button as='a' href='#'>As anchor</Button>
      </ButtonGroup>
      <h3>Variants</h3>
      <ButtonGroup>
        <Button variant='solid'>Solid</Button>
        <Button variant='transparent'>Transparent</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='link'>Link</Button>
      </ButtonGroup>
      <h3>Colour</h3>
      <ButtonGroup>
        <Button colour='red'>Red</Button>
        <Button colour='green'>Green</Button>
        <Button colour='blue'>Blue</Button>
        <Button colour='yellow'>Yellow</Button>
      </ButtonGroup>
      <h3>Size</h3>
      <p>Each size still aligns to the grid, even if flowing over multiple lines</p>
      <ButtonGroup>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </ButtonGroup>
      <h3>Rounding</h3>
      <ButtonGroup>
        <Button rounding='square'>Square</Button>
        <Button rounding='rounded'>Rounded</Button>
        <Button rounding='pill'>Pill</Button>
      </ButtonGroup>
      <h3>Misc</h3>
      <Button width='160px'>Text overflow to multiple lines </Button>
      <p>Minimum width so that small buttons retain some shape</p>
      <Button>Ok</Button>
      <p>Disabled button styling</p>
      <ButtonGroup>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button disabled variant='transparent'>Disabled</Button>
        <Button disabled variant='outline'>Disabled</Button>
        <Button disabled variant='link'>Disabled</Button>
      </ButtonGroup>
      <p>Tight, fits to the content. (first button is default size)</p>
      <ButtonGroup>
        <Button>Ok</Button>
        <Button tight>Ok</Button>
        <Button tight icon rounding='pill'><GiBrutalHelm size={20} /></Button>
        <Button tight icon width={8} height={8} rounding='pill'>Ok</Button>
      </ButtonGroup>
      <p>Standard button sizes match horizontal spacing scale</p>
      <ButtonGroup display='block' mb={3}>
        <Button tight size='small'>S</Button>
        <Button tight size='medium'>M</Button>
        <Button tight size='large'>L</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button tight width={7} height={7} p={0} rounding='pill'>S</Button>
        <Button tight width={8} height={8} rounding='pill'>M8</Button>
        <Button tight width={9} height={9} rounding='pill'>L9</Button>
      </ButtonGroup>
    </>
  )
}

export const group = () => {
  return (
    <>
      <h3>Condensed</h3>
      <ButtonGroup
        condensed
      >
        <Button variant='transparent'>One</Button>
        <Button variant='transparent'>Two</Button>
        <Button variant='transparent'>Three</Button>
      </ButtonGroup>
      <h3>Condensed with shape</h3>
      <ButtonGroup
        condensed
        rounding='200px'
        css={{
          marginLeft: 8
        }}
      >
        <Button variant='transparent' minWidth='auto' pr={2}>1</Button>
        <Button variant='transparent' minWidth='auto' px={2}>2</Button>
        <Button variant='transparent' minWidth='auto' pl={2}>3</Button>
      </ButtonGroup>
      <h3>Spacing</h3>
      <ButtonGroup spacing={8}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}

export const FullWidth = () => {
  return (
    <>
      <Button fit>Full width</Button>
      <Button fit size='large' mt={2}>Large full width</Button>
      <Button fit rounding='pill' mt={2}>Pill full width</Button>
      <Button width='full' mt={2}>Full width prop</Button>
    </>
  )
}
