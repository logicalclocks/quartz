export default {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  minHeight: '62px',
  width: '100%',

  px: '20px',
  pt: '20px',

  boxSizing: 'border-box',
  borderTopWidth: '5px',
  borderTopStyle: 'solid',
  borderTopColor: 'primary',

  // Title
  '> h4': {
    fontFamily: 'subtitle',
    fontWeight: 'subtitle',
    fontSize: 'subtitle',
  },

  // Shortcut

  '> div': {
    marginLeft: 0,
  },
};
