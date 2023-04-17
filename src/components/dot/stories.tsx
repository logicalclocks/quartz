import { Story } from '@storybook/react';
import React from 'react';
import { Dot, Props } from './Dot';

export default {
  title: 'Quartz/Badges/Dot',
  component: Dot,
  args: {
    mainText: 'tooltip text(hover the dot)',
  },
};

const Template: Story<Props> = (props) => <Dot {...props} />;

export const Default = Template.bind({});
