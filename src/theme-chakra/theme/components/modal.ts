/* eslint-disable import/no-extraneous-dependencies */
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { closeButton } from './close-button';
import { overlay } from './overlay';

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
    width: '0px !important',
  },
  dialog: {
    position: 'fixed',
    minWidth: '350px',
    top: '77px',
    right: '8px',
  },
  body: {
    p: 0,
  },
});

const sizes = {
  '7xl': definePartsStyle({ dialog: xl7 }),
};

const baseStyle = definePartsStyle({
  overlay,
  header: {
    fontWeight: 'bold',
    pb: '0px',
  },
  dialogContainer: {
    width: '100%',
    height: '100%',
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
  closeButton,
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: { drawer },
});
