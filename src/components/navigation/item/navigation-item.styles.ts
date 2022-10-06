export default {
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '50px',

  boxSizing: 'border-box',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

  lineHeight: '15px',

  transition: 'all 0.25s ease',

  '&.oldui': {
    background: 'grayShade3',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderTopColor: 'grayShade2',
    borderBottomColor: 'grayShade2',
  },

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

  '~ div': {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    position: 'relative',
    bottom: '1px',
  },
};
