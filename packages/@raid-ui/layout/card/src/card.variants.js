
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid-ui/core'

const cards = {
  standard: props => ({
    bg: 'background.50',
    border: '1px solid transparent',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    color: themeGet('tokens.type.body.main')(props)
  })
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.cards',
  variants: cards
})
