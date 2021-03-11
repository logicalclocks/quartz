import { SxStyleProp } from 'rebass';

export const boxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> div': {
    ml: '20px',
  },
};

export const boxButtonStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  div: {
    ml: '20px',
  },
};

export default (hasScrollOnScreen: boolean) =>
  ({
    ...(hasScrollOnScreen
      ? {
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
          borderTopColor: 'grayShade2',
        }
      : {
          borderStyle: 'solid',
          borderColor: 'grayShade2',
          borderWidth: '1px',
        }),

    position: hasScrollOnScreen ? 'fixed' : 'initial',
    bottom: 0,
    left: '240px',
    right: 0,
    bg: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: '20px',
    py: '20px',
    mt: hasScrollOnScreen ? '0px' : '-80px',
    zIndex: 1,
    backgroundColor: 'white',
  } as SxStyleProp);
