import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const base = definePartsStyle({
  field: {
    color: 'text',
    outline: 'none',

    transition: 'all 0.25s ease',

    fontFamily: 'text',
    fontWeight: 'text',
    fontSize: 'text',
    lineHeight: '20px',

    borderWidth: '1px !important',
    borderColor: 'transparent',

    _hover: {
      borderColor: 'grayShade1',
    },
    _focusWithin: {
      borderColor: 'text',
    },
    _disabled: {
      bg: 'grayShade2',
      borderColor: 'grayShade2',
    },
    _placeholder: {
      fontSize: '12px',
      fontFamily: 'inter',
    },
  },
});

const primary = definePartsStyle({
  field: {
    background: 'grayShade3',
    _hover: {
      background: 'grayShade3',
    },
    _focus: {
      bg: 'grayShade3',
    },
  },
});

const white = definePartsStyle({
  field: {
    background: 'background',
    _hover: {
      background: 'background',
    },
    _focus: {
      bg: 'background',
    },
    _focusWithin: {
      borderColor: 'grayShade2',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle: base,
  variants: {
    primary,
    white,
  },
  defaultProps: {
    variant: 'primary',
  },
});
