import { SxStyleProp } from 'rebass';

export const fileExplorerStyle = (
  isActive: boolean,
  selected: boolean,
  mode: string,
) =>
  ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',

    backgroundColor: !isActive
      ? 'white'
      : selected
      ? 'grayShade2'
      : 'primaryShade2',

    width: 190,

    ':focus': {
      backgroundColor: 'primaryShade2',
      outlineWidth: 0,
    },

    '> label': {
      m: 9,
    },

    '> div': {
      p: mode === 'nFiles' ? 0 : 9,
    },

    cursor: 'pointer',

    borderRadius: 0,
    borderColor: 'grayShade2',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',

    fontFamily: 'label',
    fontWeight: 'label',
    fontSize: 'label',
  } as SxStyleProp);
