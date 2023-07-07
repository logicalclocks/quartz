import { SxStyleProp } from 'rebass';

export default {
  color: 'labels.green',
  bg: 'primaryShade2',
  borderLeftWidth: 0,
  borderLeftStyle: 'solid',
  borderLeftColor: 'labels.green',

  '> div': {
    ':first-of-type': {
      fill: 'labels.green',
    },

    pre: {
      '> div': {
        color: 'labels.green',
      },
    },
  },
} as SxStyleProp;
