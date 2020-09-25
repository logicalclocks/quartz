import { SxStyleProp } from 'rebass';

export default {
  position: 'relative',

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

  transition: 'all .25s ease',

  ':disabled': {
    cursor: 'default',
    pointerEvents: 'none',
  },

  '> span': {
    visibility: 'hidden',

    position: 'absolute',
    left: '50%',
    bottom: '-7px',

    transform: 'translate(-50%, 100%)',

    py: '5px',
    px: '10px',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',

    lineHeight: '15px',

    textAlign: 'center',

    borderRadius: '2px',

    ':after': {
      position: 'absolute',
      top: '-5px',
      left: '50%',

      transform: 'translateX(-50%)',

      content: '""',

      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderBottomWidth: '5px',
      borderBlockEndStyle: 'solid',
    },
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

  ':hover > span': {
    visibility: 'visible',
  },
} as SxStyleProp;
