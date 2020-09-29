import { SxStyleProp } from 'rebass';

export default {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '32px',
  width: '32px',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,

  boxSizing: 'border-box',

  outline: 'none',
  cursor: 'pointer',

  transition: ({ transitions }) => transitions.button,

  ':disabled': {
    cursor: 'default',
    pointerEvents: 'none',
  },

  '> svg': {
    fontSize: '20px',

    ':nth-child(2)': {
      display: 'none',
    },
  },

  ':hover > svg': {
    display: 'none',

    ':nth-child(2)': {
      display: 'block',
    },
  },
} as SxStyleProp;
