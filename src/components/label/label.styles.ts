import { SxStyleProp } from 'rebass';

export default {
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  lineHeight: '15px',

  '> span': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    mb: '8px',
    mr: '8px',
  },
} as SxStyleProp;
