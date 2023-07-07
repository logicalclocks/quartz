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

export const getIconStyle = {
  left: '8px',
  position: 'absolute',
  top: '8px',
  fontSize: '14px',
};

export default getStyles;
