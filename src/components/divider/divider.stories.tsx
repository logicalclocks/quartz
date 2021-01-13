import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Divider, { DividerProps } from './index';

export default {
  title: 'Quartz/Divider',
  component: Divider,
} as Meta;

const argTypes = {
  mt: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Margin top',
    },
  },
  mb: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Margin bottom',
    },
  },
  mr: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Margin right',
    },
  },
  ml: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Margin left',
    },
  },
  width: {
    control: {
      type: 'text',
      summary: 'Divider width',
    },
    type: {
      required: false,
    },
  },
  legend: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Legend value',
    },
  },
};

const Template: Story<DividerProps> = (props) => (
  <div
    style={{
      width: '700px',
      height: '300px',
      padding: '20px',
      border: '1px solid grey',
    }}
  >
    <Divider {...props} />
  </div>
);

export const Default = Template.bind({});
export const WithLegend = Template.bind({});

Default.argTypes = argTypes;
WithLegend.argTypes = argTypes;

Default.args = {};
WithLegend.args = {
  legend: 'Legend',
};
