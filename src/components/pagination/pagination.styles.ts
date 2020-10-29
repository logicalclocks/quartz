export default {
  userSelect: 'none',

  label: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',

    transition: 'all 0.25s ease',

    '> div': {
      pr: '3px',
      fontWeight: 'label',
      fontSize: 'label',
      fontFamily: 'label',

      textAlign: 'right',

      width: 'min-content',
    },

    '> input': {
      position: 'absolute',
      zIndex: -1,
      opacity: 0,

      ':focus ~ div:first-of-type:after': {
        content: '"|"',
        fontSize: '10px',
      },
    },
  },

  '& > div > button > svg': {
    fontSize: '14px',
  },
};
