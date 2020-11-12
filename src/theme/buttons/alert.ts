export default {
  variant: 'buttons.secondary',

  color: 'labels.red',

  borderColor: 'labels.red',

  boxShadow: 'alert',

  ':hover': {
    bg: 'labels.redShade3',
  },

  ':active': {
    outline: 'none',
    bg: 'labels.redShade3',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'labels.red',
  },
};
