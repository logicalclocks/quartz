export default {
  bg: 'white',

  borderLeftColor: 'primaryGrayShade3',

  '> div:first-of-type': {
    color: 'darkGray',

    svg: {
      mr: '11px',

      path: {
        fill: 'darkGray',
      },
    },
  },

  '~ div': {
    borderTopColor: 'primaryGrayShade2',
  },
};
