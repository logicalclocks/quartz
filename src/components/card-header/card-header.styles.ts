import { SxStyleProp } from 'rebass';
import { ITheme } from '../../theme/types';

export default (withShadow: boolean, withBorderBottom: boolean) =>
  ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: '62px',
    minHeight: '62px',
    width: '100%',

    px: '20px',

    boxSizing: 'border-box',

    borderBottomWidth: withBorderBottom ? '1px' : '0px',
    borderBottomStyle: 'solid',
    // @ts-ignore
    borderBottomColor: ({ variants }: ITheme) => variants?.card?.borderColor,

    boxShadow: withShadow ? '0px 10px 40px -20px rgba(0, 0, 0, 0.15)' : 'none',

    // Title
    '> h4': {
      fontFamily: 'subtitle',
      fontWeight: 'subtitle',
      fontSize: 'subtitle',
    },

    // Actions
    '> div': {
      ml: 'auto',
    },
  } as SxStyleProp);
