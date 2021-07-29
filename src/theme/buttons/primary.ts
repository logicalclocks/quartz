export default {
  color: 'white',
  bg: 'primary',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'primary',

  boxShadow: 'primary',

  ':hover': {
    bg: 'primaryShade1',
    borderColor: 'primaryShade1',
  },

  ':focus': {
    outline: 'none',
  },

  ':active': {
    outline: 'none',
    borderColor: 'primary',
  },

  ':disabled': {
    bg: 'gray',
    color: 'white',
    borderWidth: '1px ',
    borderStyle: 'solid ',
    borderColor: 'gray',
    boxShadow: 'disabled',
  },
};
