import { StoryObj } from '@storybook/react';
import { TextValueBadge } from './TextValueBadge';

export default {
  title: 'Badges/TextValueBadge',
  component: TextValueBadge,
  args: {
    text: 'text',
    value: 'value',
  },
};

export const Default: StoryObj<typeof TextValueBadge> = {
  render: (props) => <TextValueBadge {...props} />,
};
