import { SxStyleProp } from 'rebass';

export const tab = (active: boolean, disabled?: boolean) => ({
  cursor: 'pointer',

  textAlign: 'center',

  px: '8px',
  mx: '2px',

  transition: 'border-color .4s',

  ':after': {
    width: '110%',
    ml: '-5%',
    content: '""',
    display: 'block',
    borderBottom: '2px solid',
    borderBottomColor: active ? 'primary' : 'transparent',
    transition: 'border-bottom-color .3s',
  },

  ':hover:after': !active && {
    borderBottom: '2px solid',
    borderBottomColor: 'grayShade1',
  },
  ...(disabled && {
    ':after': {
      display: 'none',
    },
    cursor: 'default !important',
    border: 'none !important',
    color: 'red !important',
  }),
});

export const wrapper = (topContent: boolean) =>
  ({
    p: topContent ? '20px' : '0px 20px 0px 10px',
    pb: 0,

    position: 'relative',

    bg: 'white',

    flexDirection: 'column',

    boxShadow: topContent ? '0 -5px 0 grayShade3' : '',

    zIndex: 25,

    width: '100%',
  }) as SxStyleProp;

export const base = {
  position: 'absolute',
  height: '1px',
  backgroundColor: 'grayShade2',
  width: '100%',
  bottom: '0px',
  zIndex: -1,
};
