import { SxStyleProp } from 'rebass';
import { keyframes } from '@emotion/core';

const blink = keyframes`
  {
    8.33% { opacity: 1; }
    50% { opacity: 0.1; }
    58.33% { opacity: 0.1; }
    100% { opacity: 1; }
  }
`;

const styles = (): SxStyleProp => ({
  width: '12px',
  height: '12px',
  fontSize: '11px',
  alignItems: 'center',
  fontFamily: 'Inter',
  borderRadius: '50%',
  userSelect: 'none',
  justifyContent: 'center',
  animation: `${blink} 1.2s infinite`,
});

export default styles;
