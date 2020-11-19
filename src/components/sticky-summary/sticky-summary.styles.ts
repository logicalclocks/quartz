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
  position: 'fixed',
  bottom: 0,
  left: '240px',
  right: 0,
  bg: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: '20px',
  py: '20px',
  zIndex: 100,
  backgroundColor: '#FFFFFF',
} as SxStyleProp;
