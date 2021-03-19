export default {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  minHeight: '62px',
  width: '100%',

  p: '20px',

  boxSizing: 'border-box',
  borderTopWidth: '5px',
  borderTopStyle: 'solid',
  borderTopColor: 'primary',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',

  boxShadow: '0px 10px 40px -20px rgba(0, 0, 0, 0.15)',

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
