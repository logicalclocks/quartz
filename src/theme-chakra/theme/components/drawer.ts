/* eslint-disable import/no-extraneous-dependencies */
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { closeButton } from './close-button';
import { overlay } from './overlay';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay,
  dialog: {
    top: '77px !important',
    right: '20px !important',
    bottom: '20px !important',
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
  body: {
    p: 0,
  },
  header: {
    fontWeight: 'bold',
    p: 0,
  },
  footer: {
    p: 0,
  },
  closeButton,
});

export const drawerTheme = defineMultiStyleConfig({
  baseStyle,
});
