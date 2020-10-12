import { SxStyleProp } from 'rebass';

export const overflowStyles = (translate: number): SxStyleProp => ({
  width: '101%',
  height: '100%',
  background: '#EBEBEB',
  display: 'block',

  pointerEvents: 'none',

  transform: `translateX(${100 * translate}%)`,
});

export default {
  height: '7px',

  overflow: 'hidden',

  borderRadius: '3.5px',
};
