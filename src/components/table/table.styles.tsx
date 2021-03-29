import { SxStyleProp } from 'rebass';

export const containerStyles = {
  overflow: 'auto',
  maxHeight: '100%',
  borderWidth: '0 3px 3px 0',
  borderColor: 'gray',
  borderStyle: 'solid',
  marginRight: '20px',
};

export const tableStyles = {
  borderSpacing: '0',
  borderCollapse: 'separate',
  backgroundColor: 'grayShade1',
  borderWidth: '0 1px 1px 0',
  borderColor: 'primary',
  textAlign: 'left',
};

export const theadStyles = {
  zIndex: 1,
  padding: '8px',
  borderWidth: '1px 2px 1px 0',
  borderStyle: 'Solid',
  borderColor: 'grayShade1',
  borderBottomColor: 'grey',
  color: 'black',
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  position: 'sticky',
  top: '0',
  minWidth: '100px',
  'th:first-child': {
    minWidth: '18px',
  },
  '> div': {
    display: 'flex',
  },

  backgroundColor: 'white',
  cursor: 'pointer',
  'th:hover': {
    backgroundColor: 'primaryShade2',
  },
  'th:last-child:hover': {
    backgroundColor: 'white',
  },
  '&.table-corner': {
    backgroundColor: 'grayShade2',
    borderLeftColor: 'grayShade2',
    borderTopColor: 'grayShade2',
    borderWidth: '0 4px 4px 0',
    left: '0',
    zIndex: '100',
    width: '40px',
    cursor: 'pointer',
  },
  '&.hover-column': {
    backgroundColor: 'grayShade2',
  },
  '&.static-column': {
    borderColor: 'primary',
    borderWidth: '1px',
    position: 'sticky',
    left: '40px',
    zIndex: '100',
    '&.hover-column': {
      backgroundColor: 'primaryShade2',
    },
  },
} as SxStyleProp;

export const testStyles = {
  width: '100%',
  backgroundColor: 'white',
  borderWidth: '1px 1px 1px 0',
  borderStyle: 'Solid',
  borderColor: 'grayShade1',
  position: 'sticky',
  top: 0,
};

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
    th: {
      backgroundColor: 'white',
    },
  },
  '&:last-child td, &:last-child th': {
    borderBottomColor: 'gray',
  },
  'td, th': {
    padding: '8px',
  },
  th: {
    textAlign: 'center',
    borderWidth: '0 1px 1px 1px',
    borderColor: 'gray',
    borderBottomColor: 'grayShade2',
    borderStyle: 'Solid',
    left: '0',
    position: 'sticky',
    backgroundColor: 'white',
    display: 'block',
  },
  td: {
    borderWidth: '0 1px 1px 0',
    borderStyle: 'Solid',
    borderColor: 'grayShade1',
    backgroundColor: 'white',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: 'grayShade2',
    },
    '&.hover-column:not(:hover)': {
      backgroundColor: 'grayShade3',
    },
    '&:last-child': {
      borderRightStyle: 'Solid',
      borderRightWidth: '1px',
      borderRightColor: 'gray',
    },
    '&.static-column': {
      backgroundColor: 'white',
      position: 'sticky',
      left: '40px',
      borderRightColor: 'gray',
      borderRightWidth: '1px',
    },
  },
};

export const dropdownStyles = {
  position: 'absolute',
  left: '0',
  top: '32px',
  zIndex: '200',
};
