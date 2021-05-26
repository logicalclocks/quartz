import { SxStyleProp } from 'rebass';

export const tabStyles = {
  cursor: 'pointer',

  textAlign: 'center',

  px: '10px',

  ':hover': {
    div: {
      borderBottomColor: 'grayShade1',
    },
  },
};

export const underlineStyles = () => ({
  transition: 'left .2s',
  width: '110%',
  ml: '-5%',

  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'transparent',

  ':hover': {
    borderBottomColor: 'grayShade1',
  },
});

export const activeUnderlineTabStyles = (width: number, left: number) => ({
  width: `${width}px`,
  position: 'absolute',
  transition: 'all .4s',

  left: `${left}px`,
  bottom: 0,

  borderBottomColor: 'primary',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
});

export default (topContent: boolean) =>
  ({
    p: topContent ? '20px' : '0px 20px 0px 10px',
    pb: 0,

    position: 'relative',

    bg: 'white',

    flexDirection: 'column',

    boxShadow: topContent ? '0 -5px 0 #F5F5F5' : '',

    zIndex: 25,

    width: '100%',
  } as SxStyleProp);
