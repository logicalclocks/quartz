import { StoryObj } from '@storybook/react';
import { Dot as DotComponent } from './Dot';

export default {
  title: 'DataDisplay/Badge/Dot',
  component: DotComponent,
};

export const Dot: StoryObj<typeof DotComponent> = {
  args: {
    mainText: 'tooltip text(hover the dot)',
  },
};
