export default {
  bg: 'white',

  borderLeftColor: 'grayShade2',

  '> div:first-of-type': {
    color: 'black',

    svg: {
      mr: '11px',

      path: {
        fill: 'black',
      },
    },
  },

  '~ div': {
    borderTopColor: 'grayShade3',
  },
};
