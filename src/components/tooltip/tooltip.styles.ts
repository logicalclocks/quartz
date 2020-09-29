import { keyframes } from '@emotion/core';
import { SxStyleProp } from 'rebass';

// Enums
import TooltipPositions from './positions';

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`;

const popupPositions = {
  [TooltipPositions.bottom]: {
    pt: '7px',
    left: '50%',
    bottom: '0px',
    transform: 'translate(-50%, 100%)',
  },
  [TooltipPositions.right]: {
    pl: '7px',
    right: '0px',
    top: '50%',
    transform: 'translate(100%, -50%)',
  },
};

const tooltipArrows = {
  [TooltipPositions.bottom]: {
    top: '-5px',
    left: '50%',

    transform: 'translateX(-50%)',

    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottomWidth: '5px',
    borderBottomStyle: 'solid',
  },
  [TooltipPositions.right]: {
    top: '50%',
    left: '-5px',

    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',

    transform: 'translateY(-50%)',
  },
};

export const containerStyles = {
  position: 'relative',
  maxWidth: 'max-content',

  ':hover': {
    '> span:last-of-type': {
      visibility: 'visible',
      animation: `${fadeIn} 0.25s ease`,
      animationDelay: '.5s',
      animationFillMode: 'forwards',
    },
  },
} as SxStyleProp;

export const getPopupStyles = (position: TooltipPositions): SxStyleProp => ({
  visibility: 'hidden',
  opacity: 0,

  maxWidth: '200px',
  width: 'max-content',

  position: 'absolute',

  ...popupPositions[position],

  ':hover': {
    visibility: 'visible',
  },
});

export const getTooltipStyles = (position: TooltipPositions): SxStyleProp => ({
  position: 'relative',
  py: '5px',
  px: '10px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flexStart',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '12px',

  lineHeight: '15px',

  cursor: 'default',

  textAlign: 'center',

  borderRadius: '2px',

  ':hover': {
    visibility: 'visible',
  },

  ':after': {
    position: 'absolute',
    content: '""',

    ...tooltipArrows[position],
  },
});
