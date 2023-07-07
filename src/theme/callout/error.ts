import { SxStyleProp } from 'rebass';

export default {
  color: 'labels.red',
  bg: 'labels.redShade2',
  borderLeftWidth: 0,
  borderLeftStyle: 'solid',
  borderLeftColor: 'labels.red',

  '> div': {
    ':first-of-type': {
      fill: 'labels.red',
    },
    pre: {
      '> div': {
        color: 'labels.red',
      },
    },
  },
} as SxStyleProp;
