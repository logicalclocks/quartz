import { StoryObj } from '@storybook/react';
import { Dot } from './Dot';

export default {
  title: 'Badges/Dot',
  component: Dot,
};

export const Default: StoryObj<typeof Dot> = {
  args: {
    mainText: 'tooltip text(hover the dot)',
  },
  render: (props) => <Dot {...props} />,
};
