import { SxStyleProp } from 'rebass';
import * as R from 'ramda';

export const tabsList = {
  verticalAlign: 'middle',
  display: 'inline-table',
  borderCollapse: 'collapse',
} as SxStyleProp;

/* this one is needed to have the line that spans across the whole width */
export const tabsLineEnding = {
  display: 'table-cell',
  width: '100%',
  borderBottom: '1px solid gray',
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
  border: '1px solid gray',

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
