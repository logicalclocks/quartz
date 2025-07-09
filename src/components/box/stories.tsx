import { StoryObj } from '@storybook/react';
import { Box as BoxComponent } from './Box';

export default {
  title: 'Layout/Box',
  component: BoxComponent,
};

export const Box: StoryObj<typeof BoxComponent> = {
  args: {
    height: '200px',
    width: '200px',
    bg: 'red',
  },
};
