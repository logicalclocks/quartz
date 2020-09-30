export default {
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '50px',

  boxSizing: 'border-box',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '12px',
  lineHeight: '15px',

  transition: 'all 0.25s ease',

  // Icon
  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '50px',
    height: '50px',

    path: {
      transition: 'all 0.25s ease',
    },

    // If there is icon than remove the title padding
    '~ span': {
      pl: 0,
    },
  },

  // Title
  '> span': {
    pl: '20px',
  },
};
