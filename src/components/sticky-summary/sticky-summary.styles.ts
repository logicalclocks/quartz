import { SxStyleProp } from 'rebass';

export const boxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> div': {
    ml: '20px',
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
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  borderTopColor: 'grayShade2',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  bg: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: '20px',
  py: '20px',
  backgroundColor: '#FFFFFF',
} as SxStyleProp;
