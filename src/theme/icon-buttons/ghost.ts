export default {
  bg: 'white',

  borderColor: 'white',

  ':hover': {
    bg: 'grayShade3',
    borderColor: 'grayShade3',
  },

  ':active': {
    bg: 'grayShade3',
    borderColor: 'gray',
  },

  ':disabled': {
    borderColor: 'grayShade3',
  },

  // Icon color
  '& path': {
    fill: 'black',
  },
};
