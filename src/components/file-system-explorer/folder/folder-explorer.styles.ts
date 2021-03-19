import { SxStyleProp } from 'rebass';

export const folderExplorerStyle = (children: boolean) =>
  ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',

    ':focus': {
      backgroundColor: children ? 'grayShade2' : 'primaryShade2',
      outlineWidth: 0,
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
