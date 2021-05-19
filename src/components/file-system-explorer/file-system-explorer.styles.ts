import { SxStyleProp } from 'rebass';
import { ITheme } from '../../theme/types';

export const fileExplorerHeaderStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  height: '62px',
  minHeight: '62px',
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
};

export default {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 45px)',
  maxHeight: 'calc(100vh - 20px)',
  borderWidth: '1px',
  borderBottomWidth: '0px',
  borderStyle: 'solid',
  boxSizing: 'border-box',
} as SxStyleProp;
