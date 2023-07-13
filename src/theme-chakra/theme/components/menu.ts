import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    // this will style the MenuList component
    py: '2',
    borderRadius: 'sm',
    bg: 'white._light',
    _dark: {
      bg: 'white._dark',
    },
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    fontSize: '14px',
    fontWeight: '600',
    color: 'black._light',
    bg: 'white._light',
    _dark: {
      color: 'black._dark',
      bg: 'white._dark',
    },
    _hover: {
      bg: 'primaryShade2._light',
      _dark: {
        bg: 'primaryShade2._dark',
      },
    },
    _focus: {
      bg: 'primaryShade2._light',
      _dark: {
        bg: 'primaryShade2._dark',
      },
    },
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
