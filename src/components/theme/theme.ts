// Button themes
import buttons from './buttons';
import iconButtons from './icon-buttons';

const theme = {
  colors: {
    primary: '#21B182',
    primaryShade1: '#65D3AF',
    primaryShade2: '#E6F2EE',

    primaryGray: '#A0A0A0',
    primaryGrayShade1: '#CBCBCB',
    primaryGrayShade2: '#F5F5F5',

    dark: '#000000',
    darkGray: '#272727',
    white: '#FFFFFF',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  shadows: {
    primary: '0px 5px 15px rgba(33, 177, 130, 0.2)',
    disabled: '0px 4px 15px rgba(0, 0, 0, 0.25)',
  },
  variants: {},
  text: {},
  buttons: {
    ...buttons,
    ...iconButtons,
  },
  tooltip: {
    bg: 'red',
  },
};

export default theme;
