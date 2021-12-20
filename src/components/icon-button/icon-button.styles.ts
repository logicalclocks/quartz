import { SxStyleProp } from 'rebass';

export default (disabled: boolean): SxStyleProp => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '32px',
  width: '32px',
  position: 'relative',

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
    width: '16px',
    height: '16px',
    position: 'absolute',
    path: { fill: disabled ? 'gray' : 'black' },
  },
});
