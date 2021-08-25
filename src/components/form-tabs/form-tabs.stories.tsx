import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import FormTabs, { FormTabsProps } from './index';
import { Button } from '../..';

export default {
  title: 'Quartz/FormTabs',
  component: FormTabs,
} as Meta;

const argTypes = {
  tabs: {
    required: true,
  },
  submitButton: {
    required: true,
    type: 'text',
  },
  hasScrollOnScreen: {
    control: {
      type: 'boolean',
    },
  },
};

const tabs = [
  {
    title: 'Title 1',
    optional: false,
    validationFn: () => true,
  },
  {
    title: 'Title 2',
    optional: true,
    validationFn: () => true,
  },
  {
    title: 'Title 3',
    optional: false,
    validationFn: () => true,
  },
  {
    title: 'Summary',
    optional: false,
    validationFn: () => true,
  },
];

const Template: Story<FormTabsProps> = (props) => (
  <Box width="700px">
    <FormTabs {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  tabs,
  hasScrollOnScreen: false,
  submitButton: (
    <Button onClick={() => console.log('submit')}>Create feature</Button>
  ),
};

Default.argTypes = argTypes;
