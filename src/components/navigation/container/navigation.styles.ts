const styles = (isOpen: boolean) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

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

    m: 0,
    p: 0,
    '>li>div': {
      display: 'flex',
      overflow: isOpen && 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      padding: !isOpen ? '6px 16px' : '0px',
      height: !isOpen ? '24px' : '1px',
      background: '#F5F5F5',
      color: '#a0a0a0',
      borderColor: 'grayShade2',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRightWidth: '0px',
      borderLeftWidth: '0px',
      cursor: 'default',
      paddingLeft: '0px',
      ':hover': {
        color: '#a0a0a0',
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
