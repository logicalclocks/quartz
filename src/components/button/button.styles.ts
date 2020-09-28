import { SxStyleProp } from 'rebass';

export default {
  display: 'flex',
  flexDirection: 'row',

  py: '8px',
  px: '15px',

  borderRadius: 0,
  boxSizing: 'border-box',

  outlineColor: 'primary',

  fontFamily: 'buttons',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '12px',

  cursor: 'pointer',

  transition: ({ transitions }) => transitions.button,

  ':disabled': {
    cursor: 'default',
  },

  '> span': {
    mr: '8px',
  },
} as SxStyleProp;
