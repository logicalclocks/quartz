export default {
  position: 'absolute',
  width: '190px',
  minHeight: '100%',
  height: 'fit-content',

  zIndex: 2,

  left: '50px',
  top: 0,
  bottom: 0,

  transition: 'all, 0.15s',

  borderLeftWidth: '1px',
  borderLeftStyle: 'solid',

  '> div:first-of-type': {
    boxSizing: 'border-box',
    display: 'flex',

    outline: 'none',

    px: '21px',
    pt: '18px',

    height: '50px',

    cursor: 'pointer',

    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '12px',
  },
};
