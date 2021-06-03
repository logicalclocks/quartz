import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Symbol, { SymbolMode, SymbolProps } from './index';
import TooltipPositions from '../tooltip/positions';

export default {
  title: 'Quartz/Symbol',
  component: Symbol,
} as Meta;

const argTypes = {
  inBasket: {
    control: {
      type: 'boolean',
    },
    type: {
      required: true,
      summary: 'in basket',
    },
  },
  mode: {
    control: {
      type: 'select',
      options: SymbolMode,
    },
    type: {
      required: false,
      summary: 'mode',
    },
  },
  tooltipProps: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary: 'tooltip props',
    },
  },
  iconProps: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary: 'icon props',
    },
  },
  tooltipMainText: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'tooltip content text',
    },
  },
  tooltipSecondaryText: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'tooltip secondary text',
    },
  },
};

const Template: Story<SymbolProps> = (props) => <Symbol {...props} />;

export const Default = Template.bind({});

Default.args = {
  inBasket: true,
  tooltipSecondaryText: '12 features',
  tooltipMainText: 'add all features to basket',
  tooltipProps: {
    position: TooltipPositions.right,
  },
  handleClick: () => console.log('clicked'),
};

Default.argTypes = argTypes;
