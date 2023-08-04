import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    // this will style the MenuList component
    py: '2',
    borderRadius: 'sm',
    bg: 'background',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    fontSize: '14px',
    fontWeight: '600',
    color: 'text',
    bg: 'background',
    _hover: {
      bg: 'primaryShade2._light',
      color: 'text',
      _dark: {
        bg: 'primaryShade2._dark',
      },
    },
    _focus: {
      bg: 'primaryShade2._light',
      color: 'text',
      _dark: {
        bg: 'primaryShade2._dark',
      },
    },
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
