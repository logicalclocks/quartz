import { SxStyleProp } from 'rebass';

export default {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

  lineHeight: '15px',

  transition: ({ transitions }) => transitions.button,

  borderTopWidth: '3px',
  borderTopStyle: 'solid',
  borderRadius: 0,

  boxSizing: 'border-box',

  cursor: 'pointer',

  outline: 'none',

  px: '35px',
  py: '15px',

  ':after': {
    fontSize: '13px',
    marginLeft: '4px',
    content: '"\\01F852"',
  },

  ':disabled': {
    cursor: 'default',
  },
} as SxStyleProp;
