import { ITheme } from '../../theme/types';
import { Intents } from '../intents';

const getIntentColor = (intent: Intents) => ({ inputIntents }: ITheme) =>
  inputIntents[intent] ?? 'transparent';

const getStyles = (intent: Intents) => ({
  width: '100%',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: getIntentColor(intent),

  outline: 'none',

  px: '9px',

  transition: 'all 0.25s ease',

  fontFamily: 'text',
  fontWeight: 'text',
  fontSize: 'text',
  lineHeight: '28px',

  // Icon
  '~ svg': {
    left: '10px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',

    fontSize: '14px',
  },
});

export default getStyles;
