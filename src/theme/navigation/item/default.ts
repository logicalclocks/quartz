export default {
  color: 'black',
  bg: 'white',

  cursor: 'pointer',

  path: {
    fill: 'black',
  },

  ':hover': {
    bg: 'grayShade3',
    color: 'primary',

    path: {
      fill: 'primary',
    },
  },

  ':active': {
    bg: 'grayShade3',
    color: 'black',

    path: {
      fill: 'black',
    },
  },

  '~ div': {
    borderTopColor: 'grayShade3',
  },
};
