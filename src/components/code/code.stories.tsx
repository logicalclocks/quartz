import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import Code, { CodeProps } from './index';

export default {
  title: 'Quartz/Code',
  component: Code,
} as Meta;

const argTypes = {
  content: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Code content',
    },
  },
  copyButton: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'Show copy to clipboard button',
    },
    defaultValue: { summary: false },
  },
};

const Template: Story<CodeProps> = (props) => (
  <Box width="700px">
    <Code {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  content:
    'SELECT ‘fg2’.’home_team_id’, ‘fg2’.\nFROM ‘demo_featurestore_admin000’\nINNER JOIN ‘demo_featurestore’',
};

Default.argTypes = argTypes;
