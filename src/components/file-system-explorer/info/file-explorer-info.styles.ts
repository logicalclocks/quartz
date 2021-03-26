export const FileExplorerInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  minHeight: '62px',
  width: '100%',
  minWidth: '230px',

  p: '20px',

  boxSizing: 'border-box',

  // Title
  '> h4': {
    fontFamily: 'subtitle',
    fontWeight: 'subtitle',
    fontSize: 'subtitle',
  },
};

export const blockInfoStyles = {
  display: 'flex',
  flexDirection: 'column',
  ' > div > span': {
    color: 'black',
    marginLeft: 0,
  },
};

export const contentInfoStyles = (side: boolean) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: side ? '60px' : '80px',
  textAlign: side ? 'right' : 'left',
  marginRight: '4px',
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '8px',
  },
  'div:last-child': {
    height: 'auto',
  },
  'div:first-child': {
    height: 'auto',
  },
});
