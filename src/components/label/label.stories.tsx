import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Label, { LabelProps } from '.';
import { Button } from '../button';

export default {
  title: 'Quartz/Input/Label',
  component: Label,
} as Meta;

const argTypes = {
  text: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Label text',
    },
  },
  children: {
    type: {
      required: true,
      summary: 'A component which needs the tooltip',
    },
  },
  action: {
    type: {
      required: false,
      summary: 'Additional action (button, link, ...)',
    },
  },
};

const Template: Story<LabelProps> = (props) => <Label {...props} />;

export const Default = Template.bind({});
export const WithAction = Template.bind({});

Default.args = {
  text: 'Label',
  children: <input type="text" />,
};

WithAction.args = {
  text: 'Label',
  children: <input type="text" />,
  action: (
    <Button p="0 0 0 10px" intent="inline">
      reference
    </Button>
  ),
};

Default.argTypes = argTypes;
WithAction.argTypes = argTypes;
