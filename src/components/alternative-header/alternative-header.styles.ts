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
  pt: '10px',

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

  pt: '30px',

  ml: '20px',
  left: `${left}px`,
  bottom: 0,

  borderBottomColor: 'primary',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
});

export default {
  p: '20px',
  pb: 0,

  position: 'relative',

  bg: 'white',

  flexDirection: 'column',

  boxShadow: '0 -5px 0 #F5F5F5',

  zIndex: 25,

  width: '100%',
  height: '105px',
} as SxStyleProp;
