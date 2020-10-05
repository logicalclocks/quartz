export default {
  color: 'primary',
  bg: 'white',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'primary',

  boxShadow: 'primary',

  ':hover': {
    bg: 'primaryShade2',
    borderColor: 'primary',
  },

  ':focus': {
    outline: 'none',
  },

  ':active': {
    outline: 'none',
    borderColor: 'primaryShade2',
  },

  ':disabled': {
    bg: 'grayShade1',
    color: 'black',
    borderColor: 'grayShade1',
    boxShadow: 'disabled',
  },
};
