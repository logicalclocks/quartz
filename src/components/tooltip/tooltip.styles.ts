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
    pt: '6px',
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
  [TooltipPositions.top]: {
    left: '50%',
    top: '-6px',
    transform: 'translate(-50%, -100%)',
  },
  [TooltipPositions.left]: {
    left: '-7px',
    top: '50%',
    transform: 'translate(-100%, -50%)',
  },
};

const tooltipArrows = {
  [TooltipPositions.bottom]: {
    top: '-4px',
    left: '50%',

    transform: 'translateX(-50%)',

    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottomWidth: '5px',
    borderBottomStyle: 'solid',
  },
  [TooltipPositions.right]: {
    top: '50%',
    left: '-4px',

    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',

    transform: 'translateY(-50%)',
  },
  [TooltipPositions.top]: {
    bottom: '-5px',
    left: '50%',

    transform: 'translateX(-50%) rotate(180deg)',

    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottomWidth: '5px',
    borderBottomStyle: 'solid',
  },
  [TooltipPositions.left]: {
    top: '50%',
    right: '-5px',

    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',

    transform: 'translateY(-50%) rotate(180deg)',
  },
};

export const containerStyles = (isDelayed: boolean) =>
  ({
    position: 'relative',
    maxWidth: 'max-content',

    ':hover': {
      '> span:last-of-type': {
        visibility: 'visible',
        animation: `${fadeIn} 0.25s ease`,
        animationDelay: isDelayed ? '.5s' : '0s',
        animationFillMode: 'forwards',
      },
    },
  } as SxStyleProp);

export const getPopupStyles = (
  position: TooltipPositions,
  visibleDefault = false,
): SxStyleProp => ({
  visibility: visibleDefault ? 'visible' : 'hidden',
  opacity: visibleDefault ? 1 : 0,

  maxWidth: '200px',
  width: 'max-content',

  position: 'absolute',

  zIndex: 'tooltips',

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

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

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
