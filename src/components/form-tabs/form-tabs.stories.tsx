import React from 'react';
import { action } from '@storybook/addon-actions';
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

const handleSubmit = async (validateAll: any) => {
  const isAllValid = await validateAll();
  action('all tabs valid')(isAllValid);
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
    id: 'title4',
    title: 'Title 4',
    optional: false,
    validationFn: () => ValidateOpts.error,
  },
  {
    id: 'title5',
    title: 'Title 5',
    optional: false,
    validationFn: () => ValidateOpts.error,
  },
  {
    id: 'summary',
    title: 'Summary',
    optional: false,
    submit: true,
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
  onTabChange: action('moved to'),
  SubmitButton: ({ validateAll }: { validateAll: () => boolean }) => (
    <Button onClick={() => handleSubmit(validateAll)}>Create feature</Button>
  ),
  initialTab: 'title2',
};

Default.argTypes = argTypes;
