import { sliderAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: 'white',
    opacity: 0.8,
    borderWidth: '2px',
    borderColor: 'primary._light',
    _dark: {
      borderColor: 'primary._dark',
    },
  },
  filledTrack: {
    bg: 'primary._light', // change the background of the filled track to blue.600
    _dark: {
      bg: 'primary._dark',
    },
  },
  track: {
    bg: 'grayShade2._light',
    _dark: {
      bg: 'grayShade2._dark',
    },
  },
});

export const sliderTheme = defineMultiStyleConfig({ baseStyle });
