import { SxStyleProp } from 'rebass';

// eslint-disable-next-line import/prefer-default-export
export const fileExplorerStyle = (
  isActive: boolean,
  selected: boolean,
  mode: string,
  isValidExtension = true,
) =>
  ({
    position: 'relative',

    // eslint-disable-next-line no-nested-ternary
    backgroundColor: !isActive ? 'white' : selected ? 'grayShade2' : 'white',
    width: '222px',

    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    ':focus': {
      ...(isValidExtension && { backgroundColor: 'primaryShade2' }),
      outlineWidth: 0,
    },

    'div >label': {
      overflow: 'hidden',
      '>input': {
        minWidth: '16px',
        minHeight: '16px',
      },
      span: {
        minWidth: '18px',
      },
      div: {
        width: '172px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontFamily: 'text',
        fontWeight: 'text',
        fontSize: 'text',
      },
    },

    '> label': {
      m: 9,
    },

    p: mode === 'nFiles' ? 0 : 9,

    cursor: isValidExtension ? 'pointer' : 'default',

    borderRadius: 0,
    borderColor: 'grayShade2',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',

    fontFamily: 'text',
    fontWeight: 'text',
    fontSize: 'text',

    ...(!isValidExtension && { color: 'gray' }),
  } as SxStyleProp);
