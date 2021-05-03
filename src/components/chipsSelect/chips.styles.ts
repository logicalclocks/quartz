import { SxStyleProp } from 'rebass';
import { ITheme } from '../../theme/types';
import { Intents } from '../intents';
import { ChipsSelectTypes } from './types';

export const chipIconStyles = (showCross: boolean) => ({
  width: '10px',
  height: '10px',
  marginLeft: '4px',
  cursor: showCross ? 'pointer' : 'default',
});

const getIntentColor = (intent: Intents) => ({ inputIntents }: ITheme) => {
  return inputIntents[intent] ?? 'transparent';
};

export const getContainerStyles = (
  intent: Intents,
  disabled: boolean,
  type: ChipsSelectTypes,
): SxStyleProp => ({
  position: 'relative',
  flexWrap: 'wrap',
  borderColor: getIntentColor(intent),
  outline: 'none',
  cursor: disabled || type === 'base' ? 'default' : 'text',
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

export const inputStyles = {
  flexGrow: 1,
  border: 'none',
  appearance: 'none',
  outline: 'none',
  padding: 0,
  height: '21px',
} as SxStyleProp;

export const listStyles = (parentHeight: number): SxStyleProp => ({
  position: 'absolute',
  zIndex: 'popups',
  left: 0,
  top: `${parentHeight}px`,
});
