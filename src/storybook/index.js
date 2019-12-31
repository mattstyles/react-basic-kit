
import styled from 'styled-components'

import { Box } from '../utility/utility'
import { utils } from '../theme/theme'

const { getRangeTheme } = utils

export const Surround = styled(Box)`
  background: ${getRangeTheme('palette.background', 0)};
  margin: ${getRangeTheme('space', 2)}px;
  padding: ${getRangeTheme('space', 2)}px;
  border-radius: ${getRangeTheme('radii', 2)}px;
`
