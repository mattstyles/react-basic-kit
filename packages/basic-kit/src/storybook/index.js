
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { Base } from './base'
import { Box } from '../layout/index'
import { Layout } from './layouts'
import { theme } from '../theme/index'
import { Text } from '../type/text'
import { map, dec } from '../utils'

export const Surround = styled(Box)(
  props => css({
    bg: 'background.100',
    m: map(themeGet('tokens.layout.padding')(props))(dec(2)),
    p: themeGet('tokens.layout.padding')(props),
    borderRadius: 2
  }),
  sx
)

export const SectionTitle = styled(Text)(
  css({
    display: 'block',
    mb: 2
  })
)

const defaults = {
  theme: theme,
  Layout: Layout
}

export const addBase = ({
  theme,
  Layout
} = defaults) => story => {
  return (
    <Base theme={theme}>
      <Layout>
        {story()}
      </Layout>
    </Base>
  )
}
