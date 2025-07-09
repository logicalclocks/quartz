import { Meta, StoryObj } from '@storybook/react';
import SymbolComponent from './index';
import TooltipPositions from '../tooltip/positions';
import { SymbolMode } from './types';

const meta: Meta<typeof SymbolComponent> = {
  title: 'Media and Icons/Symbol',
  component: SymbolComponent,
  argTypes: {
    inBasket: {
      control: {
        type: 'boolean',
      },
      description: 'in basket',
    },
    mode: {
      control: {
        type: 'select',
        options: SymbolMode,
      },
      description: 'mode',
    },
    tooltipProps: {
      control: {
        type: 'object',
      },
      description: 'tooltip props',
    },
    iconProps: {
      control: {
        type: 'object',
      },
      description: 'icon props',
    },
    tooltipMainText: {
      control: {
        type: 'text',
      },
      description: 'tooltip content text',
    },
    tooltipSecondaryText: {
      control: {
        type: 'text',
      },
      description: 'tooltip secondary text',
    },
  },
};
export default meta;

export const Symbol: StoryObj<typeof SymbolComponent> = {
  args: {
    inBasket: true,
    tooltipSecondaryText: '12 features',
    tooltipMainText: 'add all features to basket',
    tooltipProps: {
      position: TooltipPositions.right,
    },
    handleClick: () => console.log('clicked'),
  },
  render: (props) => <SymbolComponent {...props} />,
};
