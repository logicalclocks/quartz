import { SxStyleProp } from 'rebass';

export default {
  color: 'black',
  bg: 'grayShade2',
  borderLeftWidth: 0,
  borderLeftStyle: 'solid',
  borderLeftColor: 'black',

  '> div': {
    ':first-of-type': {
      fill: 'black',
    },
    pre: {
      '> div': {
        color: 'black',
      },
    },
  },
} as SxStyleProp;
