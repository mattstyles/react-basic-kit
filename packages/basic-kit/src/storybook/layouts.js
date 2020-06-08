
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { sx, map, apply } from '@raid/ui-core'

import { Box } from '../layout/index'

export const Layout = styled(Box)(
  props => {
    const padding = themeGet('tokens.layout.padding')(props)
    const morePadding = map(apply(2))(padding)

    return css({
      width: props.width || ['100%', '30rem', '36rem'],
      mx: 'auto',
      px: [morePadding, padding],
      py: morePadding,
      boxSizing: 'border-box'
    })
  },
  sx
)
