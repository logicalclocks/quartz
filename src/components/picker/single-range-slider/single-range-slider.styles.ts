import { SxStyleProp } from 'rebass';

export default {
  '.rc-slider': {
    ':active': {
      '.rc-slider-track': {
        bg: 'labels.green',
      },
    },
  },

  '.rc-slider-track': {
    borderRadius: 0,
    height: '2px',
    bg: 'black',
  },

  '.rc-slider-handle': {
    height: '10px',
    width: '10px',
    bg: 'grayShade3',
    boxShadow: 'none',
    borderRadius: '0px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',

    ':after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: '1px',
      bottom: '1px',
      left: '50%',
      transform: 'translate(-50%)',
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderLeftColor: 'gray',
    },

    ':active': {
      boxShadow: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'labels.green',
    },
  },
} as SxStyleProp;
