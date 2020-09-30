export default {
  color: 'darkGray',
  bg: 'white',

  cursor: 'pointer',

  path: {
    fill: 'darkGray',
  },

  ':hover': {
    bg: 'primaryGrayShade2',
    color: 'primary',

    path: {
      fill: 'primary',
    },
  },

  ':active': {
    bg: 'primaryGrayShade2',
    color: 'darkGray',

    path: {
      fill: 'darkGray',
    },
  },
};
