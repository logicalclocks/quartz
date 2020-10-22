import { SxStyleProp } from 'rebass';

export default ({ sliderTrackStyles }: any) => {
  return {
    '.rc-slider': {
      ...sliderTrackStyles,
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
      marginTop: '-4px',

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

      ':hover, :active': {
        boxShadow: 'none',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'labels.green',
      },
    },
  } as SxStyleProp;
};
