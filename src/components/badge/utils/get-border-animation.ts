import { keyframes } from '@emotion/core';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const getBorderAnimation = (borderColor: string) => {
  return {
    border: 'none',
    display: 'inline-block',
    position: 'relative',
    zIndex: '0',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    padding: '3px 6px',
    fontFamily: 'arial',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '1px',
    color: '#f2994a',
    ':before': {
      content: "''",
      position: 'absolute',
      zIndex: '-2',
      left: '-150%',
      top: '-450%',
      width: '400%',
      height: '1000%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 50%, 50% 50%',
      backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
      backgroundImage: `linear-gradient(${borderColor}, ${borderColor})`,
      animation: `${rotate} 4s linear infinite`,
    },
    ':after': {
      content: "''",
      position: 'absolute',
      zIndex: '-1',
      left: '1px',
      top: '1px',
      width: 'calc(100% - 2px)',
      height: 'calc(100% - 2px)',
      background: 'inherit',
      borderRadius: '1px',
    },
  };
};
