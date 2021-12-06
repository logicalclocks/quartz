const variants = {
  default: {
    '> span': {
      color: 'black',
    },

    bg: 'grayShade2',
    border: '1px solid',
    borderColor: 'black',
  },
  fail: {
    '> span': {
      color: 'labels.red',
    },

    bg: 'labels.redShade3',
    border: '1px solid',
    borderColor: 'labels.red',
  },
  label: {
    '> span': {
      color: 'black',
    },

    bg: 'white',
    border: '1px solid',
    borderColor: 'black',
  },
  light: {
    '> span': {
      color: 'black',
    },

    bg: 'grayShade3',
    border: '1px solid',
    borderColor: 'grayShade1',
  },
  success: {
    '> span': {
      color: 'labels.green',
    },

    bg: 'primaryShade2',
    border: '1px solid',
    borderColor: 'labels.green',
  },
  warning: {
    '> span': {
      color: 'labels.orange',
    },

    bg: 'labels.orangeShade3',
    border: '1px solid',
    borderColor: 'labels.orange',
  },
  notice: {
    '> span': {
      color: 'black',
    },
    bg: 'labels.yellowLight',
    border: '1px solid',
    borderColor: 'labels.yellow',
  },
};

export default variants;
