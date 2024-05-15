import { SxStyleProp } from 'rebass';
import { ITheme } from '../../theme/types';
import { Intents } from '../intents';

const getIntentColor =
  (intent: Intents) =>
  ({ inputIntents }: ITheme) =>
    inputIntents[intent] ?? 'transparent';

const getStyles = (intent: Intents, isTextArea: boolean): SxStyleProp => ({
  width: '100%',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: getIntentColor(intent),

  outline: 'none',

  px: '8px',
  pt: isTextArea ? '4px' : undefined,

  transition: 'all 0.25s ease',

  fontFamily: 'text',
  fontWeight: 'text',
  fontSize: 'text',
  lineHeight: isTextArea ? '20px' : '28px',

  ...(isTextArea && { resize: 'vertical' }),
});

export default getStyles;

export const getIconStyle = {
  left: '8px',
  position: 'absolute',
  top: '8px',
  fontSize: '14px',
};

export const passwordStyles = (isShow: boolean, disabled: boolean) => ({
  border: 'none',
  right: '5px',
  position: 'absolute',
  top: '16px',
  transform: 'translateY(-50%)',
  fontSize: '14px',
  userSelect: 'none',

  cursor: 'pointer',

  div: {
    ': hover': {
      backgroundColor: 'grayShade2',
    },
    height: '25px',
    border: 'none',
    backgroundColor: 'grayShade3',

    svg: {
      path: {
        // eslint-disable-next-line no-nested-ternary
        fill: disabled ? 'gray' : isShow ? 'primary' : 'black',
      },
    },
  },
});
