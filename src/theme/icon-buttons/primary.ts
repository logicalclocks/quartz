export default {
  bg: 'white',

  borderColor: 'primaryGrayShade1',

  ':hover': {
    borderColor: 'darkGray',
  },

  ':active': {
    borderColor: 'primaryGrayShade2',
  },

  ':disabled': {
    borderColor: 'primaryGrayShade1',
  },

  // Icon color
  '& path': {
    fill: 'darkGray',
  },
};
