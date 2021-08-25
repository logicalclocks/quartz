import { SxStyleProp } from 'rebass';

export default {
  flexDirection: 'column',
  justifyContent: 'center',
  px: '20px',
  py: '8px',
  height: '100%',
  borderRightStyle: 'solid',
  borderRightWidth: '1px',
  borderRightColor: 'grayShade2',

  borderRadius: 0,
  boxSizing: 'border-box',

  cursor: 'pointer',

  transition: ({ transitions }) => transitions.button,

  ':hover': {
    backgroundColor: 'grayShade3',
  },
} as SxStyleProp;
