export default {
  variant: 'buttons.secondary',

  color: 'labels.red',

  borderColor: 'grayShade2',

  boxShadow: 'secondary',

  ':hover': {
    bg: 'labels.redShade2',
  },
  ':active': {
    borderColor: 'labels.redShade2',
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'focused',
  },
  ':disabled': {
    bg: 'grayShade1',
    color: 'black',
    borderColor: 'grayShade1',
    boxShadow: 'disabled',
  },
};
