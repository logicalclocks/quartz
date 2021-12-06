const variants = {
  default: {
    '> span': {
      color: 'grayShade3',
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
      color: 'grayShade3',
    },

    bg: 'labels.orange',
  },
  notice: {
    '> span': {
      color: 'black',
    },
    bg: 'labels.yellow',
  },
};

export default variants;
