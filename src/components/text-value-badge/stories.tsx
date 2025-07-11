import { StoryObj } from '@storybook/react';
import { TextValueBadge as TextValueBadgeComponent } from './TextValueBadge';
import { Flex } from '../flex';

export default {
  title: 'DataDisplay/Badge/TextValueBadge',
  component: TextValueBadgeComponent,
  args: {
    text: 'text',
    value: 'value',
  },
};

export const TextValueBadge: StoryObj<typeof TextValueBadgeComponent> = {
  render: (props) => (
    <Flex justifyContent="center">
      <TextValueBadgeComponent {...props} />
    </Flex>
  ),
};
