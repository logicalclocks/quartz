export default {
  color: 'black',
  bg: 'white',

  cursor: 'pointer',

  ':hover': {
    bg: 'grayShade3',
    color: 'primary',
  },

  ':active': {
    bg: 'grayShade3',
    color: 'black',
  },

  'svg, svg *': {
    transition: 'none !important',
  },

  '~ div': {
    borderTopColor: 'grayShade3',
  },
};
