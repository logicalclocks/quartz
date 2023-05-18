import * as R from 'ramda';
import { extendTheme } from '@chakra-ui/react';
import { colors, darkThemeColors } from '../../theme/theme';
import { modalTheme } from './components/modal';

const createColors = (c: any, d: any): any =>
  R.mapObjIndexed((color: any, key: any) => {
    if (R.type(color) === 'String') return { _light: color, _dark: d[key] };

    return createColors(colors.labels, d.labels);
  }, c);

const themeColors = createColors(colors, darkThemeColors);

export const chakraTheme = extendTheme({
  config: {
    cssVarPrefix: 'quartz',
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      '*, *::before, &::after': {
        fontFamily: 'Inter',
      },
    },
  },
  colors: themeColors,
  components: { Modal: modalTheme },
});
