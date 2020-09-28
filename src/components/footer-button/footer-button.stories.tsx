// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FooterButton, { QuartzFooterButtonProps } from '.';

export default {
  title: 'Quartz/Buttons',
  component: FooterButton,
} as Meta;

const Template: Story<QuartzFooterButtonProps> = (props) => (
  <FooterButton {...props} />
);

export const Footer = Template.bind({});

Footer.args = {
  intent: 'primary',
  children: 'Open Feature Group’s Page',
  onClick: action('onClick'),
};

Footer.argTypes = {
  intent: {
    control: {
      type: 'select',
      options: ['primary'],
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  onClick: {
    table: {
      type: {
        summary: 'On click callback function',
      },
    },
    type: {
      required: true,
    },
  },
  children: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
};
