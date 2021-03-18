import { SxStyleProp } from 'rebass';

export const fileButton = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',

  py: '8px',
  pr: '15px',
  pl: '10px',

  cursor: 'pointer',

  borderRadius: 0,
  boxSizing: 'border-box',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

  transition: ({ transitions }) => transitions.button,

  ':disabled': {
    cursor: 'default',
  },
} as SxStyleProp;

export const inputButton = {
  position: 'absolute',
  display: 'none',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  opacity: 0,
};

export const inputBox = {
  height: '15px',
  overflow: 'hidden',
  display: 'inline-block',
  svg: {
    mr: '11px',
    path: {
      fill: 'primary',
    },
  },
};
