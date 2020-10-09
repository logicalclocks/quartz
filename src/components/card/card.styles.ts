import { SxStyleProp } from 'rebass';
import { ITheme } from '../../theme/types';

export const cardHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '62px',
  width: '100%',

  px: '20px',

  boxSizing: 'border-box',

  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  // @ts-ignore
  borderBottomColor: ({ variants }: ITheme) => variants?.card?.borderColor,

  boxShadow: '0px 10px 40px -20px rgba(0, 0, 0, 0.15)',

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
};

export default {
  display: 'flex',
  flexDirection: 'column',

  borderWidth: '1px',
  borderStyle: 'solid',
  boxSizing: 'border-box',
} as SxStyleProp;
