import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from 'rebass';
import FormSummaryContainer, { FormSummaryContainerProps } from './index';

export default {
  title: 'Quartz/FormSummaryContainer',
  component: FormSummaryContainer,
} as Meta;

const argTypes = {
  hasScrollOnScreen: {
    control: {
      type: 'boolean',
    },
  },
};

const Template: Story<FormSummaryContainerProps> = (props) => (
  <Box width="700px">
    <FormSummaryContainer {...props}>
      the content goes here
    </FormSummaryContainer>
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  hasScrollOnScreen: false,
};

Default.argTypes = argTypes;
