import * as R from 'ramda';
import { extendTheme } from '@chakra-ui/react';

import { colors, darkThemeColors } from '../../theme/theme';
import { drawerTheme } from './components/drawer';
import { menuTheme } from './components/menu';
import { modalTheme } from './components/modal';
import { sliderTheme } from './components/slider';
import { inputTheme } from './components/input';
import { semanticTokens } from './semanticTokens';
import { tagTheme } from './components/tag';

const createColors = (c: any, d: any): any =>
  R.mapObjIndexed((color: any, key: any) => {
    if (R.type(color) === 'String') return { _light: color, _dark: d[key] };

    return createColors(colors.labels, d.labels);
  }, c);

const themeColors = createColors(colors, darkThemeColors);

export const chakraTheme = (extendConfig: object = {}) =>
  extendTheme(
    R.mergeDeepLeft(extendConfig, {
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
          '*::placeholder': {
            color: 'gray',
          },
          'a:focus-visible': {
            outlineOffset: '-1px',
            transition: 'none',
            outlineColor: 'rgba(33, 177, 130, 0.6)',
            _dark: {
              outlineColor: 'rgba(33, 177, 130, 0.6)',
            },
          },
        },
      },
      colors: themeColors,
      components: {
        Drawer: drawerTheme,
        Menu: menuTheme,
        Modal: modalTheme,
        Slider: sliderTheme,
        Input: inputTheme,
        Tag: tagTheme,
      },
      semanticTokens,
    }),
  );
