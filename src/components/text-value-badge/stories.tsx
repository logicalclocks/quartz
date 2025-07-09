import { StoryObj } from '@storybook/react';
import { TextValueBadge as TextValueBadgeComponent } from './TextValueBadge';

export default {
  title: 'DataDisplay/Badge/TextValueBadge',
  component: TextValueBadgeComponent,
  args: {
    text: 'text',
    value: 'value',
  },
};

export const TextValueBadge: StoryObj<typeof TextValueBadgeComponent> = {};
