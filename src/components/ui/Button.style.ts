import { cva, type RecipeVariantProps } from '@styled-system/css';

const buttonStyle = cva({
  base: {
    borderRadius: 'md',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'md',
    outline: 'none',
    padding: '13px 23px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    touchAction: 'manipulation',
    transition: 'box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s',
    userSelect: 'none',
    width: 'full',
    _active: {
      transform: 'scale(.96)',
    },
    _focusVisible: {
      transition: 'box-shadow .2s',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
  variants: {
    variant: {
      outline: {
        color: 'button.black',
        backgroundColor: 'button.bg',
        border: '1px solid token(colors.button.black)',
        _hover: {
          backgroundColor: 'button.bg.state',
        },
        _active: {
          transform: 'scale(.96)',
        },
        _focusVisible: {
          boxShadow: '{colors.button.black} 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px',
        },
      },
      solid: {
        color: 'white',
        backgroundColor: 'button.black',
        _hover: {
          backgroundColor: 'black',
        },
        _active: {
          backgroundColor: 'black',
          borderColor: 'black',
          transform: 'scale(.96)',
        },
        _focusVisible: {
          boxShadow: '{colors.button.black} 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px',
        },
      },
      }
  }
});

export default buttonStyle;