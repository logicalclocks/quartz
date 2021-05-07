import { SxStyleProp } from 'rebass';

export const folderExplorerStyle = (active: number, id: number) =>
  ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',

    ':focus': {
      backgroundColor: 'grayShade2',
      outlineWidth: 0,
    },

    backgroundColor: active === id ? 'grayShade2' : '',

    width: 190,
    overflowX: 'hidden',

    py: '9px',
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
