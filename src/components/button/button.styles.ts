export default {
  display: 'flex',
  flexDirection: 'row',

  py: '8px',
  px: '15px',

  borderRadius: 0,
  boxSizing: 'border-box',

  outlineColor: 'primary',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '12px',

  cursor: 'pointer',

  transition: 'all .25s ease',

  ':disabled': {
    cursor: 'default',
  },

  '> span': {
    mr: '8px',
  },
};
