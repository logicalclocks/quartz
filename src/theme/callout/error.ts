import { SystemStyleObject } from '@styled-system/css';

export default {
  color: 'labels.red',
  bg: 'error',
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
} as SystemStyleObject;
