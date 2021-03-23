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

export const blockInfo = {
  display: 'flex',
  flexDirection: 'column',
  // minWidth: '230px',
  '> div': {
    marginBottom: '8px',
  },
  ' > div > span': {
    color: 'black',
    marginLeft: 0,
  },
};
