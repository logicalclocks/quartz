import { SxStyleProp } from 'rebass';
// @ts-ignore
import { useTheme } from 'emotion-theming';
import { ITheme } from '../../theme/types';
import { Intents } from '../intents';

export const chipIconStyles = {
  width: '10px',
  height: '10px',
  marginLeft: '4px',
  cursor: 'pointer',
};

export const chipStyles = {
  borderRadius: '1px',
  whiteSpace: 'nowrap',
  cursor: 'default',
};

const getIntentColor = (intent: Intents) => ({ inputIntents }: ITheme) => {
  return inputIntents[intent] ?? 'transparent';
};

export const getContainerStyles = (intent: Intents): SxStyleProp => ({
  position: 'relative',
  flexWrap: 'wrap',
  borderColor: getIntentColor(intent),
  outline: 'none',
  minHeight: '32px',
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  borderWidth: '1px',
  borderStyle: 'solid',
  pl: '5px',
  pr: '5px',
  pt: '4px',
  pb: '4px',
  transition: 'all 0.25s ease',
});

export const inputStyles = (): SxStyleProp => {
  const theme = useTheme<ITheme>();
  return {
    flexGrow: 1,
    border: 'none',
    appearance: 'none',
    outline: 'none',
    padding: 0,
    height: '21px',
    fontSize: '12px',
    fontFamily: 'Inter',
    fontWeight: 500,
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    '::placeholder': {
      color: theme.colors.gray,
      opacity: 1,
    },
    /* Internet Explorer 10-11 */
    ':-ms-input-placeholder': {
      color: theme.colors.gray,
    },
    /* Microsoft Edge */
    '::-ms-input-placeholder': {
      color: theme.colors.gray,
    },
  };
};

export const listStyles = (parentHeight: number): SxStyleProp => ({
  position: 'absolute',
  zIndex: 'popups',
  left: 0,
  top: `${parentHeight}px`,
});

export const messageStyles = {
  p: '10px',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: 'grayShade3',
  cursor: 'default',
};
