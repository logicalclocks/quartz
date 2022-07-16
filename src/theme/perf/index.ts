const variants = {
  black: {
    bg: 'grayShade2',
    '> div': {
      bg: 'black',
    },
  },
  gray: {
    bg: 'grayShade3',
    '& > div': {
      bg: 'grayShade1',
    },
  },
  green: {
    bg: 'primaryShade2',
    '& > div': {
      bg: 'primary',
    },
  },
  orange: {
    bg: 'labels.orangeShade2',
    '& > div': {
      bg: 'labels.orange',
    },
  },
};

export default variants;
