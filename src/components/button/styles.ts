import { SxStyleProp } from 'rebass';
import buttonsStyles from '../../theme/buttons';

export const wrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  py: '8px',
  px: '15px',

  borderRadius: 0,
  boxSizing: 'border-box',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

  cursor: 'pointer',

  transition: ({ transitions }) => transitions.button,

  ':disabled': {
    cursor: 'default',
  },

  '> span': {
    mr: '8px',
    display: 'flex',
    height: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
} as SxStyleProp;

export const spinnerColor = (intent: keyof typeof buttonsStyles): string => {
  const disabledStyles = buttonsStyles[intent][':disabled'];
  return disabledStyles.color;
};
