import React from 'react';

export const boxStyles: React.CSSProperties = {
  width: '100%',
  lineHeight: '16px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
  backgroundColor: 'grayShade3',
  fontWeight: 'text',
  marginTop: 0,
  marginBottom: 0,
};

export const codeHeaderStyles = {
  backgroundColor: 'grayShade2',
  color: 'gray',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: 'value',
};

export const buttonsStyles = {
  display: 'flex',
  color: 'black',
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '12px',
  paddingTop: '2px',
  paddingBottom: '3px',
  paddingLeft: '8px',
  paddingRight: '8px',
  backgroundColor: 'grayShade2',
  ':hover': {
    backgroundColor: 'grayShade1',
  },
  ':active': {
    backgroundColor: 'primaryShade1',
  },
  ':disabled': {
    backgroundColor: 'primaryShade2',
  },
  borderLeftStyle: 'solid',
  borderLeftWidth: 1,
  borderLeftColor: 'grayShade1',
  maxHeight: 23,
  borderRadius: 0,
  transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
};
