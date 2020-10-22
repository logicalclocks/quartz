import { SxStyleProp } from 'rebass';
import LSB from '../img/lsb.svg';
import RSB from '../img/rsb.svg';

export default ({ sliderTrackStyles }: any) => {
  return {
    '.rc-slider': {
      '.rc-slider-track': {
        borderRadius: 0,
        height: '2px',
        bg: 'black',

        ':focus': {
          bg: 'green',
        },
      },
      ...sliderTrackStyles,

      '.rc-slider-handle': {
        height: '12px',
        width: '3px',
        boxShadow: 'none',
        border: 'none',
        borderRadius: '0px',
        bg: 'transparent',

        ':nth-of-type(even)': {
          '.icon': {
            backgroundImage: `url(${LSB})`,
            height: '12px',
          },
        },
        ':nth-of-type(odd)': {
          '.icon': {
            backgroundImage: `url(${RSB})`,
            height: '12px',
          },
        },

        ':hover,:active': {
          marginTop: '-4px',

          '.icon': {
            backgroundImage: 'none',
            height: '10px',
            width: '10px',
            bg: 'grayShade3',
            borderRadius: '0px',
            boxShadow: 'none',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'labels.green',
            marginTop: '0px',
            marginLeft: '-4px',

            ':after': {
              content: '""',
              position: 'absolute',
              zIndex: 1,
              top: '2px',
              bottom: '4px',
              left: '50%',
              transform: 'translate(-50%)',
              borderRadius: '0px',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1px',
              borderLeftColor: 'gray',
            },
          },
        },
      },
    },
  } as SxStyleProp;
};
