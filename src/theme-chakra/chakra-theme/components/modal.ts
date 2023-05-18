/* eslint-disable import/no-extraneous-dependencies */
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const xl7 = defineStyle({
  width: 'calc(100vw - 80px)',
  height: 'calc(100vh - 80px)',
  maxWidth: 'calc(100vw - 80px)',
  maxHeight: 'calc(100vh - 80px)',
});

const drawer = definePartsStyle({
  dialogContainer: {
    right: '0px',
    top: '0px',
    left: 'none',
  },
  dialog: {
    mt: '77px',
    mr: '8px',
  },
  body: {
    p: 0,
  },
});

const sizes = {
  '7xl': definePartsStyle({ dialog: xl7 }),
};

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(39, 39, 39, 0.2)',
    _dark: {
      bg: 'rgba(39, 39, 39, 0.4)',
    },
  },
  header: {
    fontWeight: 'bold',
    pb: '0px',
  },
  dialog: {
    minHeight: '140px',
    borderTopStyle: 'solid',
    borderTopWidth: '4px',
    borderColor: 'primary._light',
    borderRadius: 0,
    bg: `white._light`,
    _dark: {
      bg: 'white._dark',
      borderColor: 'primary._dark',
    },
  },
  footer: {
    bgColor: 'grayShade3._light',
    _dark: { bgColor: 'grayShade3._dark' },
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: { drawer },
});
