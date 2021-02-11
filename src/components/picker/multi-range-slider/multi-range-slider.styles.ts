import { SxStyleProp } from 'rebass';

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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='3' height='12' viewBox='0 0 3 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 11L0.999999 11L1 1L3 1' stroke='black'/%3E%3C/svg%3E%0A")`,
            height: '12px',
          },
        },
        ':nth-of-type(odd)': {
          '.icon': {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='3' height='12' viewBox='0 0 3 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1H2V11H0' stroke='black'/%3E%3C/svg%3E")`,
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
