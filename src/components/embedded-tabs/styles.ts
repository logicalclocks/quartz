import { SxStyleProp } from 'rebass';
import * as R from 'ramda';

export const tabsList = {
  /* It is `inline-table` to have the ability to collapse borders */
  display: 'inline-table',
  verticalAlign: 'middle',
  borderCollapse: 'collapse',

  '> div:not(:last-child)': {
    marginRight: '20px'
  }
} as SxStyleProp;

/* this one is needed to have the line that spans across the rest of the width. Couldn't find any other solution. */
export const tabsLineEnding = {
  display: 'table-cell',
  width: '100%',
  borderBottom: '1px solid',
  borderBottomColor: 'gray',
  pointerEvents: 'none',
};

export const activeTab = {
  backgroundColor: 'white',
  borderBottomColor: 'grayShade3',
};

export const disabledTab = {
  backgroundColor: 'grayShade1',
  pointerEvents: 'none',
};

export const tab = {
  display: 'table-cell',

  p: 10,

  backgroundColor: 'grayShade3',
  border: '1px solid',
  borderColor: ' gray',

  whiteSpace: 'nowrap',
  userSelect: 'none',
  cursor: 'pointer',
  '*': {
    cursor: 'pointer',
  },

  transition: ({ transitions }) => transitions.button,

  ':hover': {
    ...R.dissoc('borderBottomColor', activeTab),
  },
} as SxStyleProp;
