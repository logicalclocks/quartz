const variants = {
  primary: {
    span: {
      bg: 'grayShade3',

      borderColor: 'grayShade1',

      ':after': {
        bg: 'black',
      },
    },

    '> input:hover ~ span': {
      bg: 'grayShade1',
    },

    '> input:disabled ~ span': {
      borderColor: 'gray',
      bg: 'grayShade1',
    },
  },
};

export default variants;
