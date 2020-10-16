import { SxStyleProp } from 'rebass';

export const boxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> div': {
    ml: '14px',
  },
};

export const boxButtonStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  div: {
    ml: '19px',
  },
};

export default {
  boxShadow: '0px -1px 0px #E5E5E5, 0px -2px 0px #FFFFFF',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  pl: '29px',
  pr: '35px',
  py: '20px',
} as SxStyleProp;
