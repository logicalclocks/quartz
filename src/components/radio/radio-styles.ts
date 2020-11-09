export default {
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '18px',
    height: '18px',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50%',

    cursor: 'pointer',

    transition: 'all 0.25s ease',

    boxSizing: 'border-box',

    // Flag styles
    ':after': {
      width: '8px',
      height: '8px',
      borderRadius: '50%',

      display: 'none',

      content: '""',
    },
  },

  // Hide the HTML radio
  '> input': {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
  },

  '> input:checked ~ span:after': {
    display: 'block',
  },

  '> input:disabled ~ span': {
    borderWidth: '1px',
    borderStyle: 'solid',

    cursor: 'default',
  },
};
