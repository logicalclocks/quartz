const styles = (isOpen: boolean) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',

  borderRightStyle: 'solid',
  borderRightWidth: '1px',

  position: 'relative',

  overflowX: 'hidden',

  width: '240px',
  minWidth: '240px',
  height: '100%',

  '> ul': {
    width: '100%',
    height: 'max-content',

    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    m: 0,
    p: 0,
    '>li>div': {
      display: 'flex',
      overflow: isOpen && 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      padding: !isOpen ? '6px 16px' : '0px',
      height: !isOpen ? '24px' : '1px',
      background: 'grayShade3',
      color: 'gray',
      borderColor: 'grayShade2',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRightWidth: '0px',
      borderLeftWidth: '0px',
      cursor: 'default',
      paddingLeft: '0px',
      ':hover': {
        color: 'gray',
      },
    },
    '>li:first-of-type>div': {
      height: '0px',
      padding: '0px',
      borderWidth: '0px',
    },
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
});

export default styles;
