import { keyframes } from '@emotion/core';
const ldsRing = keyframes`from {
    transform: rotate(50deg)
  }
  to {
    transform: rotate(410deg)
  }`;

export const spinner = {
  display: 'inline-block',
  position: 'relative',
  width: '20px',
  height: '20px',
  marginRight: '10px',
  '> div': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderRadius: '50%',
    animation: `${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderLeftColor: 'primary',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    ':nth-child(1)': {
      animationDelay: '-0.45s',
    },
    ':nth-child(2)': {
      animationDelay: '-0.3s',
    },
    ':nth-child(3)': {
      animationDelay: '-0.15s',
    },
  },
};

export const loaderCross = (isLoading: boolean) => ({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  cursor: 'pointer',
  mt: isLoading ? '1px' : '-1px',
  ml: '10px',
  svg: {
    ...(isLoading
      ? {
          width: '16px',
          height: '16px',
          path: {
            fill: 'black',
          },
        }
      : {
          width: '20px',
          height: '20px',
          path: {
            fill: 'black',
          },
        }),
  },
});

export const fileNameBox = (isLoading: boolean) => ({
  color: isLoading ? 'primaryShade1' : 'primary',
});

export default (isLoading: boolean) => ({
  overflow: 'hidden',
  color: isLoading ? 'gray' : 'black',
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  alignItems: 'center',
});
