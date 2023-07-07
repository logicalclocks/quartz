import { SxStyleProp } from 'rebass';

export default {
  color: 'labels.orange',
  bg: 'labels.orangeShade2',
  borderLeftWidth: 0,
  borderLeftStyle: 'solid',
  borderLeftColor: 'labels.orange',

  '> div': {
    ':first-of-type': {
      fill: 'labels.orange',
    },
    pre: {
      '> div': {
        color: 'labels.orange',
      },
    },
  },
} as SxStyleProp;
