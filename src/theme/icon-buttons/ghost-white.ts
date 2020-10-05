export default {
  bg: 'transparent',
  borderColor: 'transparent',

  ':hover': {
    bg: 'white',
    borderColor: 'white',
  },

  ':active': {
    bg: 'white',
    borderColor: 'gray',
  },

  ':disabled': {
    bg: 'transparent',
    borderColor: 'transparent',
  },

  // Icon color
  '& path': {
    fill: 'black',
  },
};
