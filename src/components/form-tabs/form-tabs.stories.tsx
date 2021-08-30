import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import FormTabs, { FormTabsProps, ValidateOpts } from './index';
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
  onTabChange: {
    summary: 'callback to notify tab changes',
  },
};

const tabs = [
  {
    id: 'title1',
    title: 'Title 1',
    optional: false,
    validationFn: () => ValidateOpts.valid,
  },
  {
    id: 'title2',
    title: 'Title 2',
    optional: true,
    validationFn: () => ValidateOpts.untouched,
  },
  {
    id: 'title3',
    title: 'Title 3',
    optional: false,
    validationFn: () => ValidateOpts.error,
  },
  {
    id: 'summary',
    title: 'Summary',
    optional: false,
    validationFn: () => ValidateOpts.error,
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
  onTabChange: (tab) => console.log('moved to:', tab),
  submitButton: (
    <Button onClick={() => console.log('submit')}>Create feature</Button>
  ),
  initialTab: 'title2',
};

Default.argTypes = argTypes;
