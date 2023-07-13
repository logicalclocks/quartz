import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const primary = definePartsStyle({
  field: {
    color: 'text',
    background: 'grayShade3',

    outline: 'none',

    transition: 'all 0.25s ease',

    fontFamily: 'text',
    fontWeight: 'text',
    fontSize: 'text',
    lineHeight: '20px',

    borderWidth: '1px',

    _hover: {
      borderColor: 'grayShade1',
    },
    _focus: {
      borderColor: 'red',
    },
    _focusVisible: {
      borderColor: 'black',
    },
    _disabled: {
      bg: 'grayShade2',
      borderColor: 'grayShade2',
    },
    _placeholder: {
      color: 'gray',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { primary },
  defaultProps: {
    variant: 'primary',
  },
});
