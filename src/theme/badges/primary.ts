const variants = {
  bold: {
    '> span': {
      color: 'white',
    },
    bg: 'gray',
  },
  fail: {
    '> span': {
      color: 'white',
    },

    bg: 'labels.red',
  },
  label: {
    '> span': {
      color: 'white',
    },

    bg: 'black',
  },
  light: {
    '> span': {
      color: 'black',
    },

    bg: 'grayShade3',
  },
  success: {
    '> span': {
      color: 'white',
    },

    bg: 'labels.green',
  },
  warning: {
    '> span': {
      color: 'black',
    },

    bg: 'labels.yellow',
  },
  border: {
    '> span': {
      color: 'black',
    },
    bg: 'grayShade3',
    border: '1px solid',
    borderColor: 'grayShade1',
  },
};

export default variants;
