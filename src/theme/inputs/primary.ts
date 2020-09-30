export default {
  color: 'darkGray',

  bg: 'primaryGrayShade2',

  ':hover': {
    borderColor: 'primaryGrayShade1',
  },

  ':focus': {
    borderColor: 'darkGray',
  },

  ':disabled': {
    borderColor: 'transparent',
  },

  '::-webkit-input-placeholder': {
    color: 'primaryGray',
  },
  '::-moz-placeholder': {
    color: 'primaryGray',
  },
  ':-ms-input-placeholder': {
    color: 'primaryGray',
  },
  ':-moz-placeholder': {
    color: 'primaryGray',
  },

  //  Icon
  '~ svg path': {
    fill: 'primaryGray',
  },
};
