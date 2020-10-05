export default {
  bg: 'white',

  borderColor: 'grayShade1',

  ':hover': {
    borderColor: 'black',
  },

  ':active': {
    borderColor: 'grayShade3',
  },

  ':disabled': {
    borderColor: 'grayShade1',
  },

  // Icon color
  '& path': {
    fill: 'black',
  },
};
