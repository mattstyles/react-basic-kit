
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import {
  View, Pane, H1, H2, P, Box, Code,
  Flex, Scrollable, createScrollTarget
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components/Layout/Scrollable',
  decorators: [addBase()]
}

const Image = styled('img')`
  width: 100%;
`

const ScrollResponder = createScrollTarget(({
  isVisible
}) => (
  <P>{`isVisible: ${isVisible}`}</P>
))

const ScrollMove = createScrollTarget(styled('div')`
  height: 20px;
  width: ${props => props.isVisible ? 100 : 0}%;
  transition: width ${themeGet('transition.main')}ms linear;
  background: ${themeGet('palette.teal.5')};
`)

const ScrollGrow = createScrollTarget(styled('div')`
  height: 10px;
  width: 10px;
  transition: transform ${themeGet('transition.main')}ms linear;
  transform: scale(${props => props.isVisible ? 5 : 1});
  background: ${props => props.color || props.theme.colors.primary};
  border-radius: 200px;
`)

const Horizontal = styled('div')`
  display: flex;
  flex-direction: row;
  width: 300%;
  min-height: 120px;
  background: rgb(243, 243, 243);
`

const HorizontalItem = styled('div')`
  border: 1px solid rgb(200, 202, 203);
  min-height: 120px;
  width: 100%;
`

const CustomScrollbars = styled(Scrollable)`
  background: ${themeGet('palette.background.0')};

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-corner {
    border-radius: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: ${themeGet('palette.teal.5')};
  }
`

export const BasicVertical = () => (
  <Scrollable isPadded>
    <Box>
      <H1>Scrollable element</H1>
      <P>Great turbulent clouds venture the ash of stellar alchemy citizens of distant epochs a still more glorious dawn awaits shores of the cosmic ocean. Another world permanence of the stars how far away invent the universe realm of the galaxies kindling the energy hidden in matter.</P>
      <Box p={4}>
        <ScrollGrow />
      </Box>
      <ScrollMove />
      <P mt={2}>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
      <Image src='https://picsum.photos/id/1002/400/250' />
      <H2 mt={4}>Diamonds and alcohol</H2>
      <P>Rings of Uranus trillion quasar galaxies another world dispassionate extraterrestrial observer. Courage of our questions take root and flourish finite but unbounded star stuff harvesting star light astonishment permanence of the stars. Extraordinary claims require extraordinary evidence made in the interiors of collapsing stars the ash of stellar alchemy encyclopaedia galactica concept of the number one invent the universe.</P>
      <ScrollResponder />
      <ScrollMove />
      <P>Invent the universe descended from astronomers made in the interiors of collapsing stars shores of the cosmic ocean rich in mystery kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
      <ScrollMove />
      <Box p={4}>
        <ScrollGrow color='red' />
      </Box>
    </Box>
  </Scrollable>
)

export const BasicHorizontal = () => (
  <View>
    <Box p={1}>
      <H1>Scrollable Element</H1>
    </Box>
    <Scrollable xscroll>
      <Horizontal>
        <HorizontalItem>
          <P>One</P>
          <Box p={4}>
            <ScrollGrow color='red' El='div' />
          </Box>
        </HorizontalItem>
        <HorizontalItem>
          <P>Two</P>
          <Box p={4}>
            <ScrollGrow color='green' />
          </Box>
        </HorizontalItem>
        <HorizontalItem>
          <P>Three</P>
          <Box p={4}>
            <ScrollGrow color='blue' />
          </Box>
        </HorizontalItem>
      </Horizontal>
    </Scrollable>
    <Box>
      <H2>Some more content</H2>
      <P>Scroll the above element horizontally to expose scroll responsive elements</P>
    </Box>
  </View>
)

export const InitiallyAppears = () => (
  <Scrollable isPadded>
    <Box>
      <H1>A title</H1>
      <P>Elements within a scrollable should have <Code>isVisible</Code> set to try initially.</P>
    </Box>
    <Box p={4}>
      <ScrollGrow color='rebeccapurple' />
    </Box>
  </Scrollable>
)

export const MultipleScrollables = () => (
  <View isFlex>
    <Pane maxHeight='100px' background='rgb(244, 244, 244)'>
      <Scrollable>
        <Box p={2}>
          <H1>One</H1>
          <P>This panel will scroll vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='rebeccapurple' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </Scrollable>
    </Pane>
    <Pane maxHeight='100px' background='rgb(232, 235, 236)'>
      <Scrollable>
        <Box p={2}>
          <H1>Two</H1>
          <P>This panel will scroll vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='rebeccapurple' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </Scrollable>
    </Pane>
    <Pane p={2}>
      <H2>An additional panel</H2>
      <P>This one does not scroll.</P>
      <P>Multiple scrollables are ok, not sure about scrollables within scrollables but that is a rare use-case.</P>
    </Pane>
  </View>
)

export const CustomScrollbarsExample = () => (
  <View>
    <Flex maxHeight='200px' m={2}>
      <CustomScrollbars>
        <Box p={2}>
          <H1>One</H1>
          <P>This panel will scroll vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='rebeccapurple' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </CustomScrollbars>
    </Flex>
  </View>
)
CustomScrollbarsExample.story = {
  title: 'Custom Scrollbars'
}
