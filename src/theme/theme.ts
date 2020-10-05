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
// Input info themes
import inputInfo from './input-info';
// Inputs themes
import inputs from './inputs';
import inputIntents from './intents';
// Navigation
import navigation from './navigation';
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
    primaryGrayShade3: '#E5E5E5',
    primaryGrayShade4: '#9B9B9B',

    darkGray: '#272727',
    white: '#FFFFFF',

    labels: {
      red: '#EB5757',
      orange: '#f2994a',
      purple: '#9B51E0',
      skyblue: '#56CCF2',
    },
  },
  fonts: {
    buttons: 'Inter',
    inputs: 'Inter',
  },
  shadows: {
    primary: '0px 5px 15px rgba(33, 177, 130, 0.2)',
    disabled: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    cardInsetShadow: 'inset 0px -20px 30px -25px rgba(0, 0, 0, 0.15)',
    navigation: '1px 0px 0px #E5E5E5, 2px 0px 0px #FFFFFF',
  },
  transitions: {
    button: 'all .25s ease',
  },
  variants: {
    ...cards,
    tooltip,
    label,
  },
  text: {
    inputInfo,
  },
  buttons: {
    ...buttons,
    ...iconButtons,
    ...footerButtons,
  },
  navigation,
  inputs,
  inputIntents,
};

export default theme;
