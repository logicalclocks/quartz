import { SxStyleProp } from 'rebass';

export const backdropStyles: SxStyleProp = {
  position: 'fixed',
  zIndex: 'popups',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bg: 'rgba(39, 39, 39, 0.2)',
};

interface GetStylesParams {
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
}

const getTransformStyles = (params: GetStylesParams): string | undefined => {
  const isCustomPosition = Object.values(params).some(Boolean);

  return isCustomPosition ? undefined : 'translate(-50%, -50%)';
};

const getStyles = ({
  left,
  top,
  bottom,
  right,
}: GetStylesParams): SxStyleProp => ({
  position: 'absolute',
  zIndex: 31,

  maxHeight: '100%',

  overflowY: 'auto',

  borderTopStyle: 'solid',
  borderTopWidth: '4px',

  display: 'flex',
  flexDirection: 'column',

  top: top ?? '50%',
  left: left ?? '50%',
  bottom,
  right,
  transform: getTransformStyles({ left, top, bottom, right }),
});

export default getStyles;
