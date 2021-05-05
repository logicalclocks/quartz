export default {
  primary: {
    bg: 'grayShade3',
    borderColor: 'transparent',
    cursor: 'pointer',
    ':hover': { borderColor: 'grayShade1' },
    ':focus': { borderColor: 'gray' },
  },
  white: {
    variant: 'variants.select.primary',
    bg: 'white',
  },
  disabled: {
    bg: 'grayShade2',
    borderColor: 'transparent',
    cursor: 'default',
  },
};
