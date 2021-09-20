import { SxStyleProp } from 'rebass';

export const summaryContainerStyles = {
  paddingLeft: '0px',
};

export const containerStyles = {
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
} as SxStyleProp;

export const tabsStyles = {
  overflowX: 'scroll',
  marginLeft: '-20px !important',
  height: '100%',
  alignItems: 'center',
} as SxStyleProp;

export const gradientStyles = {
  width: '20px',
  height: '100%',
  flexShrink: 0,
  marginLeft: '0px !important',
  position: 'absolute',
  left: '-20px',
  background:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
} as SxStyleProp;

export const buttonsContainerStyles = {
  flexShrink: 0,
  height: '100%',
  alignItems: 'center',
  ml: '0px !important',
  position: 'relative',
} as SxStyleProp;
