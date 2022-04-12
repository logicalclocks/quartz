export default {
  variant: 'buttons.secondary',

  color: 'labels.red',

  borderColor: 'grayShade2',

  boxShadow: 'secondary',

  ':hover': {
    bg: 'labels.redShade3',
  },
  ':active': {
    borderColor: 'labels.redShade3',
  },
  ':disabled': {
    bg: 'grayShade1',
    color: 'black',
    borderColor: 'grayShade1',
    boxShadow: 'disabled',
  },
};
