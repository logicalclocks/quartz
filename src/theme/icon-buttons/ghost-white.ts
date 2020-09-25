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
    fill: 'dark',
  },

  //  Tooltip
  '> span': {
    bg: 'dark',
    color: 'white',

    // Arrow
    ':after': {
      borderBottomColor: 'dark',
    },
  },
};
