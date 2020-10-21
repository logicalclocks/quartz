import { SxStyleProp } from 'rebass';
import LSB from '../img/lsb.svg';
import RSB from '../img/rsb.svg';

export default {
  '.rc-slider': {
    ':active': {
      '.rc-slider-track': {
        bg: 'labels.green',
      },
    },

    '.rc-slider-handle': {
      ':nth-of-type(even)': {
        backgroundImage: `url(${LSB})`,

        ':active': {
          backgroundImage: 'none',
        },
      },
      ':nth-of-type(odd)': {
        backgroundImage: `url(${RSB})`,

        ':active': {
          backgroundImage: 'none',
        },
      },
    },

    '.rc-slider-handle-dragging': {
      border: 'none',
      boxShadow: 'none',
    },
  },

  '.rc-slider-track': {
    borderRadius: 0,
    height: '2px',
    bg: 'black',
  },

  '.rc-slider-handle': {
    height: '12px',
    width: '3px',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '0px',
    bg: 'transparent',

    ':active:after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: '1px',
      bottom: '1px',
      left: '50%',
      transform: 'translate(-50%)',
      borderRadius: '0px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderLeftColor: 'gray',
    },

    ':active': {
      height: '10px',
      width: '10px',
      backgroundImage: 'none',
      bg: 'grayShade3',
      borderRadius: '0px',
      boxShadow: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'labels.green',
    },
  },
} as SxStyleProp;
