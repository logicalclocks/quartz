// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FooterButton, { QuartzFooterButtonProps } from '.';
import { GetIcon, IconName } from '../icon';

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
  children: (
    <>
      <span>Open Feature Group’s Page</span>
      <GetIcon icon={IconName.arrow_right} />
    </>
  ),
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
