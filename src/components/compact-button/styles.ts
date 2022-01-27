export default {
  default: {
    border: '1px solid',
    borderColor: 'grayShade3',
    borderRadius: '2px',
    backgroundColor: 'grayShade3',
    cursor: 'pointer',
    boxShadow: 'none',
    color: 'black',
    lineHeight: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
    py: '4px',
    px: '6px',

    ':hover': {
      backgroundColor: 'grayShade3',
      borderColor: 'grayShade1',
    },

    span: {
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: 'gray',

      '&[data-active="true"]': {
        backgroundColor: 'primary',
      },
    },
  },
  highlight: {
    backgroundColor: 'primaryShade2',
    borderColor: 'primaryShade2',

    ':hover': {
      backgroundColor: 'primaryShade2',
      borderColor: 'primary',
    },
  },
  flex: {
    gap: '4px',
  },
};
