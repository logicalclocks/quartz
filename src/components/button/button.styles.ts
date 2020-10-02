import { SxStyleProp } from 'rebass';

export default {
  display: 'flex',
  flexDirection: 'row',

  py: '8px',
  px: '15px',

  borderRadius: 0,
  boxSizing: 'border-box',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

  cursor: 'pointer',

  transition: ({ transitions }) => transitions.button,

  ':disabled': {
    cursor: 'default',
  },

  '> span': {
    mr: '8px',
  },
} as SxStyleProp;
