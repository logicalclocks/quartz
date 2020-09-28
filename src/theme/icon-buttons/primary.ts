export default {
  bg: 'white',

  borderColor: 'primaryGrayShade1',

  ':hover': {
    borderColor: 'dark',
  },

  ':active': {
    borderColor: 'primaryGrayShade2',
  },

  ':disabled': {
    borderColor: 'primaryGrayShade1',
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
