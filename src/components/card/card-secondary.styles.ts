import { SxStyleProp } from 'rebass';

export const cardHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  boxSizing: 'border-box',

  // Title
  '> h4': {
    p: '20px',
    pb: 0,
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
