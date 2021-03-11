import { SxStyleProp } from 'rebass';

const paddingY = 40;

export const contentStyles = (isOpen: boolean, height: number) => ({
  px: '20px',
  bg: 'white',
  overflow: 'hidden',
  py: isOpen ? '20px' : 0,

  maxHeight: isOpen ? `${height + paddingY}px !important` : 0,

  transition: 'all .25s linear',
});

export const containerStyles = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'grayShade2',
};

export default (isOpen: boolean) =>
  ({
    p: '8px',
    bg: 'grayShade3',
    cursor: 'pointer',
    justifyContent: 'space-between',

    transition: 'background-color .25s ease',

    ...(isOpen && {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'grayShade2',
    }),

    ':hover': {
      backgroundColor: 'grayShade2',
    },

    div: {
      div: {
        height: '15px',

        svg: {
          width: '16px',
          height: '16px',

          path: {
            fill: isOpen ? 'black' : 'gray',
          },
        },
      },
    },
  } as SxStyleProp);
