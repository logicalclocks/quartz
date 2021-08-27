export default {
  bg: 'white',
  boxShadow: 'secondary',
  borderColor: 'grayShade2',

  ':hover': {
    borderColor: 'grayShade2',
    boxShadow: '0px 0px 0px white',
  },

  ':active': {
    borderColor: 'grayShade3',
  },

  ':disabled': {
    borderColor: 'grayShade2',
  },

  // Icon color
  '& path': {
    fill: 'black',
  },
};
