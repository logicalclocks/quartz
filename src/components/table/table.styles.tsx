import { SxStyleProp } from 'rebass';

export const containerStyles = {
  overflow: 'auto',
  maxHeight: '100%',
  borderWidth: '1px',
  borderColor: 'grayShade3',
  borderTopColor: 'grey',
  borderStyle: 'solid',
  '-moz-padding-end': '8px',
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
  borderWidth: '0 1px 2px 0',
  borderStyle: 'Solid',
  borderColor: 'grayShade1',
  borderBottomColor: 'grey',
  borderTopColor: 'grey',
  color: 'black',
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  position: 'sticky',
  top: '0',
  minWidth: '92px',

  'th:first-child': {
    borderTopColor: 'grey',
    minWidth: '31px',
    maxWidth: '31px',
  },
  'th:last-child': {
    minWidth: '0px',
    borderWidth: '0 0 2px 0',
    borderStyle: 'Solid',
    borderColor: 'grayShade1',
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
  },
  '> div': {
    display: 'flex',
    textOverflow: 'ellipsis',
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
    borderTopColor: 'grey',
    borderWidth: '0 1px 2px 0',
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

export const lastTheadStyles = {
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
      backgroundColor: 'grayShade2',
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
    borderWidth: '0 1px 1px 0',
    borderColor: 'gray',
    borderBottomColor: 'grayShade2',
    minWidth: '92px',
    borderStyle: 'Solid',
    left: '0',
    position: 'sticky',
    backgroundColor: 'white',
    display: 'block',
    ':first-child': {
      maxWidth: '31px',
      minWidth: '31px',
    },
  },
  td: {
    borderWidth: '0 1px 1px 0',
    borderStyle: 'Solid',
    borderColor: 'grayShade1',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
      left: '40px',
      borderRightColor: 'gray',
      borderLeftColor: 'grayShade1',
      borderRightWidth: '0',
    },
  },
};

export const dropdownStyles = {
  position: 'absolute',
  width: '100% !important',
  left: '0',
  top: '37px',
  zIndex: '200',
};
