export default {
  color: 'primary',
  bg: 'unset',

  textDecoration: 'underline',

  ':hover': {
    cursor: 'pointer',
  },

  ':focus': {
    outline: 'none',
    boxShadow: 'focused',
  },

  ':disabled': {
    color: 'gray',
    textDecoration: 'none',
  },
};
