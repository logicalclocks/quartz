import { ITheme } from '../../theme/types';
import { Intents } from '../intents';

const getIntentColor = (intent: Intents) => ({ inputIntents }: ITheme) =>
  inputIntents[intent] ?? 'transparent';

export const listStyles = {
  position: 'absolute',
  zIndex: 'popups',
  left: 0,
  top: '33px',
};

export const bottomActionStyles = {
  p: '10px',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: 'grayShade2',

  ':hover': {
    bg: 'grayShade3',
  },
};

export const valueStyles = {
  flexGrow: 2,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export const deletabledStyles = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'transparent',
  cursor: 'pointer',
  transition: 'all .25s ease',

  ':hover': {
    borderColor: 'grayShade2',
  },
  svg: {
    width: '16px',
    height: '16px',
  },
};

export const getLabelStyles = (intent: Intents, deletabled?: boolean) => ({
  position: 'relative',

  borderColor: getIntentColor(intent),

  outline: 'none',

  height: '32px',

  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,

  borderWidth: '1px',
  borderStyle: 'solid',

  pl: '5px',
  pr: '5px',

  transition: 'all 0.25s ease',

  ...(!deletabled && {
    svg: {
      minWidth: '8px',
    },
  }),
});
