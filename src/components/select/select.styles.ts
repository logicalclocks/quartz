export const listStyles = {
  position: 'absolute',
  zIndex: 'popups',
  left: 0,
  top: '33px',
};

export const bottomActionStyles = {
  p: '10px',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: 'grayShade2',

  ':hover': {
    bg: 'grayShade3',
  },
};

export const valueStyles = {
  flexGrow: 2,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export default {
  position: 'relative',

  outline: 'none',

  height: '32px',

  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,

  borderWidth: '1px',
  borderStyle: 'solid',

  pl: '12px',
  pr: '8px',

  transition: 'all 0.25s ease',

  svg: {
    minWidth: '8px',
    ml: 'auto',
  },
};
