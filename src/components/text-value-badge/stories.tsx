import { StoryObj } from '@storybook/react';
import { TextValueBadge } from './TextValueBadge';

export default {
  title: 'DataDisplay/Badge/TextValueBadge',
  component: TextValueBadge,
  args: {
    text: 'text',
    value: 'value',
  },
};

export const Default: StoryObj<typeof TextValueBadge> = {
  render: (props) => <TextValueBadge {...props} />,
};
