
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { themeGet } from '@styled-system/theme-get'

import { Icon } from './icon'
import { Text, View, theme, FlexBox } from '../'
import { Surround } from '../storybook'

const customIconSet = {
  test: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46"><path d="M276.393 157.13l-4.283-5.825c-4.622-6.396-4.738-15.016-.17-21.41l4.167-5.88c6.396-9.022 3.427-21.583-6.338-26.78l-6.394-3.426c-6.966-3.71-10.734-11.477-9.422-19.24l1.2-7.14c1.825-10.905-6.283-20.954-17.357-21.41l-7.196-.286c-7.88-.343-14.672-5.65-16.843-13.246l-2-6.966c-3.08-10.62-14.73-16.102-24.892-11.762l-6.623 2.855c-7.25 3.14-15.644 1.255-20.955-4.626l-4.796-5.367c-7.42-8.28-20.326-8.165-27.576.17l-4.74 5.425c-5.196 5.937-13.59 7.936-20.84 4.91l-6.68-2.742C84.433 10.162 72.84 15.87 69.93 26.55l-1.884 6.965C65.99 41.11 59.253 46.533 51.373 46.99l-7.193.4c-11.02.627-19.014 10.79-17.015 21.64l1.312 7.078c1.427 7.766-2.284 15.53-9.135 19.355l-6.34 3.483C3.356 104.314.558 116.93 7.066 125.84l4.283 5.823c4.625 6.396 4.738 15.018.17 21.41l-4.167 5.882c-6.394 9.02-3.424 21.584 6.34 26.777l6.393 3.427c6.966 3.71 10.734 11.475 9.42 19.243l-1.198 7.135c-1.826 10.905 6.28 20.952 17.358 21.41l7.193.285c7.88.343 14.674 5.655 16.844 13.246l2 6.966c3.082 10.62 14.73 16.102 24.893 11.76l6.623-2.853c7.25-3.14 15.645-1.256 20.955 4.626l4.796 5.365c7.367 8.223 20.27 8.107 27.52-.228l4.74-5.424c5.196-5.94 13.588-7.938 20.84-4.91l6.68 2.74c10.22 4.225 21.813-1.485 24.723-12.162l1.885-6.966c2.055-7.594 8.792-13.018 16.67-13.473l7.196-.4c11.02-.628 19.013-10.79 17.016-21.64l-1.313-7.08c-1.428-7.763 2.285-15.53 9.136-19.354l6.336-3.484c9.708-5.307 12.507-17.924 5.997-26.832z"/></svg>',
  OA: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="3.4" cy="6" r="2.8" stroke-width="0.2" /><polygon points="6,3 3,9 9,9" stroke-width="0.2" /></svg>',
  grad: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dusk" gradientTransform="rotate(75)"><stop offset='20%' stop-color='${theme.palette.violet[5]}' /><stop offset='95%' stop-color='${theme.palette.blue[6]}' /></linearGradient></defs><circle cx="50" cy="50" r="40" stroke="url('#dusk')" stroke-width="20" fill="none" /></svg>`
}
const getCustomIcon = _ => {
  return customIconSet[_]
}

const ExtendedStyledIcon = styled(Icon)`
  width: ${themeGet('space.6')}px;
  height: ${themeGet('space.6')}px;
  svg {
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.15));
  }
  svg circle {
    fill: ${themeGet('palette.blue.6')};
  }
  svg polygon {
    fill: ${themeGet('palette.blue.7')};
    stroke: ${themeGet('palette.background.0')};
    transition: transform ${themeGet('transition.main')}ms ease-out;
    transform-origin: center center;
  }
  :hover {
    svg polygon {
      transform: scale(0.8);
    }
  }
`

storiesOf('Icons', module)
  .add('Icons', () => (
    <View>
      <Surround>
        <Text>Basic Icon</Text>
        <Icon icon='HOME' />
      </Surround>
      <Surround>
        <Text>Size</Text>
        <Icon icon='LOADING' size={8.8} />
        <Icon icon='LOADING' size={2.2} />
      </Surround>
      <Surround>
        <Text>Colour and Hover Colour</Text>
        <Icon icon='SETTINGS' color={theme.palette.orange[3]} hover={theme.palette.red[7]} />
      </Surround>
      <Surround>
        <Text>Custom Icon Set</Text>
        <Icon icon='test' getIcon={getCustomIcon} color={theme.palette.violet[6]} />
      </Surround>
      <Surround>
        <Text>Custom Styling</Text>
        <ExtendedStyledIcon getIcon={getCustomIcon} icon='OA' />
      </Surround>
      <Surround>
        <Text>Rotation</Text>
        <FlexBox flexDirection='row'>
          <Icon icon='ARROW' m={1} />
          <Icon icon='ARROW' rotation={90} m={1} />
          <Icon icon='ARROW' rotation={180} m={1} />
          <Icon icon='ARROW' rotation={270} m={1} />
        </FlexBox>
      </Surround>
      <Surround>
        <Text mb={2} as='div'>Gradient Colouring</Text>
        <Icon getIcon={getCustomIcon} icon='grad' />
      </Surround>
    </View>
  ))
