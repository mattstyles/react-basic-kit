
import { variant } from 'styled-system'
import { tokens } from '../theme/index'

// @TODO how to solve spreading size variants?
// For now extending `size` is not possible. Text buttons need the padding set
// or they look poor. Icons need it squared up or look odd.
export const variants = {
  rounding: {
    square: {
      borderRadius: 0
    },
    rounded: {
      borderRadius: tokens.layout.rounding
    },
    pill: {
      borderRadius: '2000px'
    }
  },
  buttons: {
    solid: {
      bg: 'gray.200',
      '&:hover': {
        bg: 'gray.300'
      },
      '&:active': {
        bg: 'gray.400'
      },
      '&:disabled': {
        color: 'gray.500',
        '&:hover': {
          bg: 'gray.200'
        }
      }
    },
    transparent: {
      bg: 'transparent',
      color: tokens.type.body.dark,
      '&:hover': {
        bg: 'rgba(0, 0, 0, 0.05)'
      },
      '&:active': {
        bg: 'rgba(0, 0, 0, 0.1)'
      },
      '&:disabled': {
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent'
        }
      }
    },
    outline: {
      bg: 'transparent',
      color: tokens.type.body.dark,
      borderColor: 'gray.300',
      '&:hover': {
        bg: 'gray.300'
      },
      '&:active': {
        bg: 'gray.300'
      },
      '&:disabled': {
        bg: 'gray.200',
        color: 'gray.500',
        borderColor: 'gray.200',
        '&:hover': {
          bg: 'gray.200'
        }
      }
    },
    link: {
      bg: 'transparent',
      color: 'inherit',
      lineHeight: 'inherit',
      minWidth: 'auto',
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:disabled': {
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent',
          textDecoration: 'none'
        }
      }
    },
    naked: {
      bg: 'transparent',
      color: 'inherit',
      lineHeight: 'inherit',
      minWidth: 'auto',
      p: 0,
      verticalAlign: 'baseline',
      fontWeight: 'inherit',
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:disabled': {
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent',
          textDecoration: 'none'
        }
      }
    }
  },
  colours: {
    red: {
      bg: 'red.500',
      color: tokens.type.body.light,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'red.600',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'red.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.red[400]} 0px 0px 0px 0.1875rem`
      }
    },
    green: {
      bg: 'green.500',
      color: tokens.type.body.light,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'green.600',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'green.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.green[400]} 0px 0px 0px 0.1875rem`
      }
    },
    blue: {
      bg: 'blue.600',
      color: tokens.type.body.light,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'blue.700',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'blue.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.blue[400]} 0px 0px 0px 0.1875rem`
      }
    },
    yellow: {
      bg: 'yellow.500',
      color: tokens.type.body.dark,
      '&:hover': {
        bg: 'yellow.600'
      },
      '&:active': {
        bg: 'yellow.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.yellow[400]}88 0px 0px 0px 0.1875rem`
      }
    }
  }
}

const sizeVariantBase = ({
  icon
}) => ({
  small: {
    fontSize: tokens.type.baseSize,
    px: icon ? 1 : tokens.layout.padding,
    py: 1,
    minWidth: tokens.layout.padding * 20
  },
  medium: {
    fontSize: tokens.type.baseSize,
    px: icon ? 2 : tokens.layout.padding,
    py: 2,
    minWidth: tokens.layout.padding * 22
  },
  large: {
    fontSize: tokens.type.baseSize + 1,
    px: icon ? 3 : tokens.layout.padding,
    py: 3,
    minWidth: tokens.layout.padding * 30
  }
})

// size is not exposed as a scale on the theme
export const sizeVariant = ({
  icon
}) => variant({
  prop: 'size',
  variants: sizeVariantBase({ icon })
})

export const roundingVariant = variant({
  prop: 'rounding',
  scale: 'buttonRounding',
  variants: variants.rounding
})

export const typeVariant = variant({
  prop: 'variant',
  scale: 'buttons',
  variants: variants.buttons
})

export const colourVariant = variant({
  prop: 'colour',
  scale: 'buttonColours',
  variants: variants.colours
})
