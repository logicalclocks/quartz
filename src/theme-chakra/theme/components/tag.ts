import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: 'background',
    borderRadius: '1px',
    px: '4px',
    fontSize: '12px',
    fontWeight: 500,
  },
  closeButton: {
    mx: '2px',
    '> svg': {
      width: '14px',
      height: '14px',
    },
  },
});

export const tagTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'sm',
  },
});
