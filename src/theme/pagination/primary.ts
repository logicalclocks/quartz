export default {
  bg: 'transparent',

  label: {
    color: 'black',

    bg: 'grayShade3',

    cursor: 'pointer',

    ':hover': {
      borderColor: 'grayShade1',
    },

    ':focus-within': {
      borderColor: 'black',
    },
  },

  '& > div > button:disabled > svg > path': {
    fill: 'grayShade1',
  },
};
