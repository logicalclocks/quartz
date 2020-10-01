export default {
  bg: 'transparent',
  borderColor: 'transparent',

  ':hover': {
    bg: 'white',
    borderColor: 'white',
  },

  ':active': {
    bg: 'white',
    borderColor: 'primaryGray',
  },

  ':disabled': {
    bg: 'transparent',
    borderColor: 'transparent',
  },

  // Icon color
  '& path': {
    fill: 'darkGray',
  },
};
