import { SxStyleProp } from 'rebass';

export default (possible: boolean): SxStyleProp => ({
  color: 'primaryShade1',
  fontSize: '15px',
  cursor: possible ? 'pointer' : 'unset',
  textDecoration: 'none',
  fontStyle: 'normal',
});
