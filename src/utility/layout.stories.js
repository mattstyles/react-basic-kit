
import { storiesOf } from '@storybook/react'
// import oc from 'open-color'
import styled from 'styled-components'

import { View, Pane, H1, H2, P, TextBlock,
  Scrollable, ScrollTarget } from '../'

const Image = styled('img')`
  width: 100%;
`

storiesOf('Layout', module)
  .add('Panes', () => (
    <View flex>
      <Pane split>
        <Pane>
          <H1>1st Pane</H1>
        </Pane>
        <Pane background={'rgb(242, 244, 242)'}>
          <H1>2nd Pane</H1>
        </Pane>
      </Pane>
      <Pane>
        <H2>Bottom Pane</H2>
      </Pane>
    </View>
  ))
  .add('Panes Sizing', () => (
    <View flex>
      <Pane maxHeight={'20px'}>
        <P>Fixed 20px height</P>
      </Pane>
      <Pane split>
        <Pane>
          <H1>1st Pane</H1>
        </Pane>
        <Pane background={'rgb(242, 244, 242)'}>
          <H1>2nd Pane</H1>
        </Pane>
      </Pane>
      <Pane flex={0.25}>
        <P>Flex 25%</P>
      </Pane>
    </View>
  ))
  .add('Scrollable', () => (
    <Scrollable isPadded>
      <TextBlock>
        <H1>Scrollable element</H1>
        <P>Great turbulent clouds venture the ash of stellar alchemy citizens of distant epochs a still more glorious dawn awaits shores of the cosmic ocean. Another world permanence of the stars how far away invent the universe realm of the galaxies kindling the energy hidden in matter.</P>
        <P>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        <Image src='https://picsum.photos/id/1002/400/250' />
        // <ScrollTarget>
        //   <div>Scroll Target</div>
        // </ScrollTarget>
        <H2 mt={4}>Diamonds and alcohol</H2>
        <P>Rings of Uranus trillion quasar galaxies another world dispassionate extraterrestrial observer. Courage of our questions take root and flourish finite but unbounded star stuff harvesting star light astonishment permanence of the stars. Extraordinary claims require extraordinary evidence made in the interiors of collapsing stars the ash of stellar alchemy encyclopaedia galactica concept of the number one invent the universe.</P>
        <P>Invent the universe descended from astronomers made in the interiors of collapsing stars shores of the cosmic ocean rich in mystery kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
      </TextBlock>
    </Scrollable>
  ))
