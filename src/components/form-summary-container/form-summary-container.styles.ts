import { SxStyleProp } from 'rebass';

export const mainBoxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 1274,
  height: '100%',
  px: '20px',
  '& div': {
    ml: '20px',
  },
  'div: first-child': {
    ml: '0px',
  },
};

export default (hasScrollOnScreen: boolean) => {
  const withScroll = {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: 'grayShade2',
    paddingLeft: '20px',
    paddingRight: '40px',
    mt: '0px',
  };

  const withoutScroll = {
    borderStyle: 'solid',
    borderColor: 'grayShade2',
    borderWidth: '1px',
    paddingLeft: '0px',
    paddingRight: '0px',
    mt: '-80px',
  };

  return {
    ...(hasScrollOnScreen ? withScroll : withoutScroll),
    position: hasScrollOnScreen ? 'fixed' : 'initial',
    bottom: 0,
    left: '240px',
    right: 0,
    bg: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75px',
    zIndex: 1,
    backgroundColor: 'white',
  } as SxStyleProp;
};
