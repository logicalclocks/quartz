// Button themes
import buttons from './buttons';
import iconButtons from './icon-buttons';
import footerButtons from './footer-buttons';
import fileButtons from './file-buttons';
import toggleButton from './toggle-button';
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
// ListF
import list from './list';
// Header
import header from './header';
// Typography
import typography from './typography';
// Popup
import popup from './popup';
// Badges
import badges from './badges';
// Checkbox
import checkbox from './checkbox';
// Radio
import radio from './radio';
// Select
import select from './select';
// Select info themes
import selectInfo from './select-info';
// Bar
import bar from './bar';
// Code
import code from './code';
import callout from './callout';
// Icon
import icon from './icon';
// Pagination
import pagination from './pagination';
// Types
import { ITheme } from './types';
// Notifications
import notification from './notifications';
// Chip
import editableSelect from './editableSelect';

const theme: ITheme = {
  colors: {
    primary: '#21B182',
    primaryShade1: '#65D3AF',
    primaryShade2: '#E6F2EE',

    gray: '#a0a0a0',
    grayShade1: '#CBCBCB',
    grayShade2: '#E2E2E2',
    grayShade3: '#F5F5F5',

    black: '#272727',
    white: '#FFFFFF',

    labels: {
      red: '#EB5757',
      orange: '#f2994a',
      purple: '#9B51E0',
      yellow: '#FFF066',
      green: '#21B182',
      skyblue: '#56CCF2',
      blue: '#41B7DC',
      redShade3: '#F8DEDE',
      orangeShade3: '#FDF0E4',
    },
  },
  fonts: {
    text: 'Inter',
    title: 'Inter',
    subtitle: 'Inter',
    label: 'Inter',
    microlabel: 'Inter',
    value: 'IBM Plex Mono',
  },
  fontSizes: {
    text: '12px',
    title: '24px',
    subtitle: '18px',
    label: '12px',
    microlabel: '10px',
    value: '12px',
  },
  fontWeights: {
    text: 500,
    title: 700,
    subtitle: 700,
    label: 700,
    microlabel: 700,
    value: 700,
  },
  transitions: {
    button: 'all .25s ease',
  },
  shadows: {
    primary: '0px 5px 15px rgba(33, 177, 130, 0.2)',
    secondary: '0px 5px 15px rgba(144, 144, 144, 0.2)',
    explorer: '0px -1px 1px #E5E5E5',
    alert: '0px 5px 15px rgba(235, 87, 87, 0.25)',
    disabled: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    cardInsetShadow: 'inset 0px -20px 30px -25px rgba(0, 0, 0, 0.15)',
    navigation: '1px 0px 0px #E5E5E5, 2px 0px 0px #FFFFFF',
    list: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    popup: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    notification: '0px 0px 15px rgba(0, 0, 0, 0.25)',
  },
  variants: {
    ...cards,
    tooltip,
    label,
    list,
    header,
    checkbox,
    radio,
    badges,
    popup,
    bar,
    code,
    select,
    callout,
    icon,
    editableSelect,
    ...typography,
  },
  text: {
    inputInfo,
    selectInfo,
    ...typography,
  },
  zIndices: {
    default: 10,
    tooltips: 1000,
    popups: 30,
    modals: 40,
    notifications: 50,
  },
  buttons: {
    ...buttons,
    ...iconButtons,
    ...footerButtons,
    ...fileButtons,
    toggleButton,
  },
  navigation,
  inputs,
  inputIntents,
  pagination,
  notification,
};

export default theme;
