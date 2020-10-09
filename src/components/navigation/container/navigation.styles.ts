export default {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'relative',

  overflowX: 'hidden',

  width: '240px',
  height: '100%',

  '> ul': {
    width: '100%',
    height: 'max-content',

    display: 'flex',
    flexDirection: 'column',

    m: 0,
    p: 0,
  },

  '> div': {
    width: '100%',
    fontSize: '12px',
    fontFamily: 'Inter',

    pb: '16px',

    '>*': {
      textAlign: 'center',
    },
  },
};
