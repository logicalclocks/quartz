import { SxStyleProp } from 'rebass';

export const boxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '> div': {
    ml: '3px',
    position: 'relative',
    paddingRight: '5px',
  },
  '> div:after': {
    display: 'block',
    content: '";"',
    width: '8px',
    height: '8px',
    position: 'absolute',
    right: '-5px',
    top: '-1px',
    color: 'gray',
  },

  '> div:last-child:after': {
    display: 'none',
  },
};

export const boxButtonStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  div: {
    ml: '20px',
  },
};

export default {
  width: '100%',
  minWidth: '700px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'grayShade2',
  boxShadow: 'explorer',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: '20px',
  py: '20px',
  zIndex: 1,
  backgroundColor: 'grayShade3',
} as SxStyleProp;
