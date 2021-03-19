import { SxStyleProp } from 'rebass';

export const folderExplorerStyle = (isActive: boolean, children: boolean) =>
  ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',

    backgroundColor: !isActive
      ? 'white'
      : children
      ? 'grayShade2'
      : 'primaryShade2',

    ':focus': {
      backgroundColor: 'primaryShade2',
      borderColor: 'grayShade2',
    },

    width: 190,

    py: '10px',
    px: '11px',

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
