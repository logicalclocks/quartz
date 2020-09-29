import { SxStyleProp } from 'rebass';

export default {
  display: 'flex',
  flexDirection: 'column',

  fontFamily: 'inputs',
  fontWeight: 'bold',
  fontSize: '12px',
  lineHeight: '15px',

  '> span': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    mb: '4px',
  },
} as SxStyleProp;
