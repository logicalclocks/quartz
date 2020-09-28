export default {
  color: 'primary',
  bg: 'white',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'white',

  ':hover': {
    bg: 'primaryShade2',
  },

  ':focus': {
    outline: 'none',
  },

  ':active': {
    outline: 'none',
    bg: 'primaryShade2',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary',
  },

  ':disabled': {
    bg: 'unset',
  },
};
