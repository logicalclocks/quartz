export default {
  color: 'black',

  bg: 'grayShade3',

  ':hover': {
    borderColor: 'grayShade1',
  },

  ':focus': {
    borderColor: 'black',
  },

  ':disabled': {
    bg: 'grayShade2',
    borderColor: 'grayShade2',
  },

  '::-webkit-input-placeholder': {
    color: 'gray',
  },
  '::-moz-placeholder': {
    color: 'gray',
  },
  ':-ms-input-placeholder': {
    color: 'gray',
  },
  ':-moz-placeholder': {
    color: 'gray',
  },

  //  Icon
  '~ svg path': {
    fill: 'gray',
  },
};
