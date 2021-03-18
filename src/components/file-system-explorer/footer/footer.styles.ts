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
  width: 700,
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
