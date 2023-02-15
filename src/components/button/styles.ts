import { SxStyleProp } from 'rebass';
import buttonsStyles from '../../theme/buttons';

export const wrapper = {
  // transition: ({ transitions }) => transitions.button,

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

export const spinnerColor = (intent: string): string => {
  const disabledStyles = buttonsStyles[intent][':disabled'];
  return disabledStyles.color;
};
