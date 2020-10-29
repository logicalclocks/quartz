import { SystemStyleObject } from '@styled-system/css';

export default {
  color: 'black',
  bg: 'grayShade3',
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
} as SystemStyleObject;
