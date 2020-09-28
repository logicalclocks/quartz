export default {
  color: 'primary',
  bg: 'white',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'primary',

  boxShadow: 'primary',

  ':hover': {
    bg: 'primaryShade2',
    borderColor: 'primaryShade1',
  },

  ':focus': {
    outline: 'none',
  },

  ':active': {
    outline: 'none',
    borderColor: 'primaryShade2',
  },

  ':disabled': {
    bg: 'primaryGrayShade1',
    color: 'darkGray',
    borderColor: 'primaryGrayShade1',
    boxShadow: 'disabled',
  },
};
