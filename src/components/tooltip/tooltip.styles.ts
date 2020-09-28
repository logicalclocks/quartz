import { SxStyleProp } from 'rebass';

export const containerStyles = {
  position: 'relative',

  ':hover': {
    '> span:last-of-type': {
      visibility: 'visible',
      opacity: 1,
    },
  },
} as SxStyleProp;

export const popupStyles = {
  visibility: 'hidden',
  opacity: 0,

  maxWidth: '200px',
  width: 'max-content',

  position: 'absolute',
  left: '50%',
  bottom: '0px',

  pt: '7px',

  transition: 'visibility, opacity 0.25s ease',

  transform: 'translate(-50%, 100%)',

  ':hover': {
    visibility: 'visible',
  },
} as SxStyleProp;

export const tooltipStyles = {
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
    top: '-5px',
    left: '50%',

    transform: 'translateX(-50%)',

    content: '""',

    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottomWidth: '5px',
    borderBlockEndStyle: 'solid',
  },
} as SxStyleProp;
