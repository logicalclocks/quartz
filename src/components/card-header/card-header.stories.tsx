// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { Box, Button } from 'rebass';
import { Meta, Story } from '@storybook/react/types-6-0';
import CardHeader, { CardHeaderProps } from '.';

export default {
  title: 'Quartz/CardHeader',
  component: CardHeader,
  decorators: [
    (Story) => (
      <Box width="700px">
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const Default: Story<CardHeaderProps> = (args) => {
  return <CardHeader {...args} />;
};

Default.argTypes = {
  title: {
    description: 'Card title',
    type: {
      name: 'string',
      required: false,
    },
    control: {
      type: 'text',
    },
  },
  actions: {
    description: 'Any Components to show in the right side',
    type: {
      name: 'string',
      required: false,
    },
    control: {
      type: 'select',
    },
    options: ['NakedButton', 'GoToJupyter', 'SimpleText'],
    mapping: {
      NakedButton: (
        <Button variant="inline" pr="0" onClick={action('Card action')}>
          naked button
        </Button>
      ),
      GoToJupyter: (
        <Button
          padding="0"
          variant="inline"
          onClick={action('Shortcut action')}
        >
          {'->'}Go directly to Jupyter notebook directory
        </Button>
      ),
      SimpleText: 'Action text',
    },
  },
  withShadow: {
    description: 'To show bottom shadow',
    defaultValue: false,
    type: {
      name: 'boolean',
      required: false,
    },
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  withBorderBottom: {
    description: 'To show border bottom',
    defaultValue: false,
    type: {
      name: 'boolean',
      required: false,
    },
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
};

Default.args = {
  title: 'Title',
  actions: (
    <Button variant="inline" pr="0" onClick={action('Card action')}>
      naked button
    </Button>
  ),
};
