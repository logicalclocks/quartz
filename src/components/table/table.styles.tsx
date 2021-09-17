import { SxStyleProp } from 'rebass';

export const containerStyles = {
  overflowX: 'auto',
  maxHeight: '100%',
  borderWidth: '1px',
  borderColor: 'grayShade3',
  borderTopColor: 'grey',
  borderStyle: 'solid',
  marginRight: '20px',
  width: 'fit-content',
};

export const tableStyles = {
  borderSpacing: '0',
  borderCollapse: 'separate',
  backgroundColor: 'grayShade2',
  borderWidth: '0 1px 1px 0',
  textAlign: 'left',
};

export const theadStyles = {
  zIndex: 1,
  padding: '8px',
  borderWidth: '0 1px 2px 0',
  borderStyle: 'Solid',
  borderColor: 'grayShade1',
  borderBottomColor: 'grey',
  borderTopColor: 'grey',
  color: 'black',
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  backgroundColor: 'white',
  top: '0',
  cursor: 'pointer',
  th: {
    '&.table-corner': {
      width: '31px',
      backgroundColor: 'grayShade2',
      borderLeftColor: 'grayShade2',
      borderTopColor: 'grey',
      borderWidth: '0 1px 2px 0',
      left: '0',
      zIndex: '100',
      cursor: 'pointer',
      position: 'sticky',
    },
    '&:hover': {
      backgroundColor: 'primaryShade2',
    },
    '&:last-child': {
      minWidth: '0px',
      borderWidth: '0 0 2px 0',
      borderStyle: 'Solid',
    },
  },
  '> div': {
    display: 'flex',
    textOverflow: 'ellipsis',
  },
  '&.hover-column': {
    backgroundColor: 'grayShade2',
  },
  '&.static-column': {
    borderRightColor: 'primary',
    borderBottomColor: 'grey',
    borderWidth: '0 1px 2px 0',
    position: 'sticky',
    left: '31px',
    zIndex: '100',
    '&.hover-column': {
      backgroundColor: 'primaryShade2',
    },
  },
} as SxStyleProp;

export const trowStyles = {
  color: 'black',
  fontFamily: 'value',
  fontWeight: 'value',
  fontSize: 'value',
  '&:hover': {
    backgroundColor: 'grayShade3',
    'td.static-column': {
      backgroundColor: 'primaryShade2',
      whiteSpace: 'nowrap',
    },
  },
  '&:last-child td': {
    borderBottomColor: 'gray',
  },
  td: {
    padding: '8px',
    borderWidth: '0 1px 1px 0',
    borderStyle: 'Solid',
    borderColor: 'grayShade1',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:first-of-type': {
      maxWidth: '32px',
      minWidth: '32px',
      zIndex: 1,
      textAlign: 'center',
      borderWidth: '0 1px 1px 0',
      borderColor: 'gray',
      borderBottomColor: 'grayShade2',
      borderStyle: 'Solid',
      left: '0',
      position: 'sticky',
      backgroundColor: 'white',
      display: 'block',
    },
    'td:last-child': {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: 'grayShade2',
    },
    '&.hover-column:not(:hover)': {
      backgroundColor: 'grayShade3',
    },
    '&:last-child': {
      borderRightStyle: 'Solid',
      borderRightWidth: '0px',
      borderRightColor: 'gray',
    },
    '&.static-column': {
      backgroundColor: 'white',
      position: 'sticky',
      left: '31px',
      borderRightColor: 'primary',
      borderLeftColor: 'grayShade1',
      borderRightWidth: '1px',
    },
  },
};
