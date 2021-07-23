import { keyframes } from '@emotion/core';
import { SxStyleProp } from 'rebass';

const ldsRing = keyframes`from {
    transform: rotate(50deg)
  }
  to {
    transform: rotate(410deg)
  }`;

export default (size: number, color: string): SxStyleProp => ({
  display: 'inline-block',
  position: 'relative',
  width: `${size}px`,
  height: `${size}px`,
  '> div': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    borderStyle: 'solid',
    borderWidth: '3px',
    borderRadius: '50%',
    animation: `${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderLeftColor: color,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    ':nth-of-type(1)': {
      animationDelay: '-0.45s',
    },
    ':nth-of-type(2)': {
      animationDelay: '-0.3s',
    },
    ':nth-of-type(3)': {
      animationDelay: '-0.15s',
    },
  },
});
