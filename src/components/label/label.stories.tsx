// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Label, { LabelProps } from '.';

export default {
  title: 'Quartz/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (props) => <Label {...props} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Some label',
  children: <input type="text" />,
};
