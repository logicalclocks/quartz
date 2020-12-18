import { SxStyleProp } from 'rebass';

export default (color: string): SxStyleProp => ({
  bg: color,
  width: '10px',
  height: '10px',
  borderRadius: '50%',
});
