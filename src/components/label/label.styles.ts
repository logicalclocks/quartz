import { SxStyleProp } from 'rebass';

export default {
  display: 'flex',
  flexDirection: 'column',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  lineHeight: '15px',

  '> span': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    mb: '4px',
  },
} as SxStyleProp;
