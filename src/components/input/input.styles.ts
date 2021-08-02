import { ITheme } from '../../theme/types';
import { Intents } from '../intents';

const getIntentColor = (intent: Intents) => ({ inputIntents }: ITheme) =>
  inputIntents[intent] ?? 'transparent';

const getStyles = (intent: Intents, isTextArea: boolean, isCode: boolean) => ({
  width: '100%',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: getIntentColor(intent),

  outline: 'none',

  px: isCode ? '20px' : '8px',
  pt: isTextArea ? '4px' : undefined,
  py: isCode ? '8px' : undefined,

  transition: 'all 0.25s ease',

  fontFamily: 'text',
  fontWeight: 'text',
  fontSize: 'text',
  lineHeight: isTextArea ? '20px' : '28px',

  ...(isTextArea && { resize: 'vertical' }),

  // Left icon
  '~ svg: first-of-type': {
    left: '10px',
    position: 'absolute',
    top: '15px',
    transform: 'translateY(-50%)',

    fontSize: '14px',
  },
});

export default getStyles;
