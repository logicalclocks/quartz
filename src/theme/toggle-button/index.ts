const variants = {
  primary: {
    div: {
      bg: 'grayShade3',

      borderColor: 'transparent',
    },

    '> input:hover ~ div': {
      bg: 'grayShade3',
      borderColor: 'gray',
    },

    '> input:focus,> input:checked ~ div': {
      borderColor: 'black',
    },

    '> input:disabled ~ div': {
      bg: 'grayShade2',
      borderColor: 'transparent',
    },
  },
  white: {
    div: {
      bg: 'white',

      borderColor: 'transparent',
    },

    '> input:hover ~ div': {
      bg: 'grayShade3',
      borderColor: 'gray',
    },

    '> input:focus,> input:checked ~ div': {
      borderColor: 'black',
    },

    '> input:disabled ~ div': {
      bg: 'grayShade2',
      borderColor: 'transparent',
    },
  },
};

export default variants;
