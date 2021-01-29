export default {
  color: 'primary',
  bg: 'transparent',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',

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
    color: 'gray',
  },
};
