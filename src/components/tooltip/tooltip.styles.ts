import { SxStyleProp } from 'rebass';

// Enums
import { keyframes } from '@emotion/react';
import TooltipPositions from './positions';

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
  [TooltipPositions.left]: {
    top: '50%',
    right: '-4px',

    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',

    transform: 'translateY(-50%) rotate(180deg)',
  },
  [TooltipPositions.top]: {
    bottom: '-4px',
    left: '50%',

    transform: 'translateX(-50%) rotate(180deg)',

    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottomWidth: '5px',
    borderBottomStyle: 'solid',
  },
};

const getTransform = (position: TooltipPositions) => {
  const transformMap = new Map<TooltipPositions, string>([
    [TooltipPositions.right, 'translateY(-50%)'],
    [TooltipPositions.bottom, 'translateX(-50%)'],
    [TooltipPositions.top, 'translateX(-50%)'],
    [TooltipPositions.left, 'translate(-100%, -50%)'],
  ]);

  return transformMap.get(position);
};

export const getPopupStyles = (
  position: TooltipPositions,
  visibleDefault = false,
): SxStyleProp => ({
  visibility: visibleDefault ? 'visible' : 'hidden',
  opacity: visibleDefault ? 1 : 0,

  width: 'max-content',

  zIndex: 'tooltips',

  animation: `${appear} .3s linear`,

  transform: getTransform(position),
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

  ':after': {
    position: 'absolute',
    content: '""',

    ...tooltipArrows[position],
  },
});

const appear = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;
