export default {
  div: {
    display: 'flex',
    flexDirection: 'row',

    py: '8px',
    px: '15px',

    boxSizing: 'border-box',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 0,

    transition: 'all 0.25s ease',

    cursor: 'pointer',
  },

  // Hide the HTML checkbox
  '> input': {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
  },

  '> input:disabled ~ div': {
    cursor: 'default',
  },
};
