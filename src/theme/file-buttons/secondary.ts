export default {
  color: 'primary',
  bg: 'white',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'grayShade2',

  boxShadow: 'file',

  ':hover': {
    bg: 'primaryShade2',
    borderColor: 'grayShade2',
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
