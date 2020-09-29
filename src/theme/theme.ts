// Button themes
import buttons from './buttons';
import iconButtons from './icon-buttons';
import footerButtons from './footer-buttons';
// Label themes
import label from './label';
// Tooltip themes
import tooltip from './tooltip';
// Card themes
import cards from './cards';
// Types
import { ITheme } from './types';

const theme: ITheme = {
  colors: {
    primary: '#21B182',
    primaryShade1: '#65D3AF',
    primaryShade2: '#E6F2EE',
    primaryShade3: '#E2E2E2',

    primaryGray: '#A0A0A0',
    primaryGrayShade1: '#CBCBCB',
    primaryGrayShade2: '#F5F5F5',

    dark: '#000000',
    darkGray: '#272727',
    white: '#FFFFFF',
  },
  fonts: {
    buttons: 'Inter',
    inputs: 'Inter',
  },
  shadows: {
    primary: '0px 5px 15px rgba(33, 177, 130, 0.2)',
    disabled: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    cardInsetShadow: 'inset 0px -20px 30px -25px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    button: 'all .25s ease',
  },
  variants: {
    ...cards,
    tooltip,
    label,
  },
  text: {},
  buttons: {
    ...buttons,
    ...iconButtons,
    ...footerButtons,
  },
};

export default theme;
