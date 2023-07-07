import { SxStyleProp } from 'rebass';

export default {
  userSelect: 'none',

  label: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',

    transition: 'all 0.25s ease',

    '> div': {
      pr: '3px',
      fontWeight: 'label',
      fontSize: 'label',
      fontFamily: 'label',

      textAlign: 'right',

      width: 'min-content',
    },

    '> input': {
      width: '30px',

      border: 'none',
      outline: 'none',

      textAlign: 'right',
      bg: 'inherit',

      fontWeight: 'label',
      fontSize: 'label',
      fontFamily: 'label',

      // Hide control arrows in the input
      MozAppearance: 'textfield',
      '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },
    },
  },

  '& > div > button > svg': {
    fontSize: '14px',
  },
} as SxStyleProp;
