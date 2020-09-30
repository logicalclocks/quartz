export default {
  position: 'absolute',
  width: '190px',
  minHeight: '100%',
  height: 'fit-content',

  zIndex: 2,

  left: '50px',
  top: 0,
  bottom: 0,

  bg: 'white',

  transition: 'all, 0.15s',

  borderLeft: '1px solid #E5E5E5',

  '> div:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    px: '21px',
    pt: '18px',
    pb: '18px',

    cursor: 'pointer',

    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '12px',

    svg: {
      mr: '11px',
    },
  },
};
