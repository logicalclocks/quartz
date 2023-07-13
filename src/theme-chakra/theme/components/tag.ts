import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: 'background',
    borderRadius: '1px',
    px: '8px',
    _hover: {},
  },
});

export const tagTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'sm',
  },
});
