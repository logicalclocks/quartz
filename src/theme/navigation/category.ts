export default {
  bg: 'white',

  borderLeftColor: 'grayShade2',

  '> div:first-of-type': {
    color: 'black',

    svg: {
      mr: '11px',
    },
  },

  '~ div': {
    borderTopColor: 'grayShade3',
  },
};
