import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Flex } from 'rebass';
import Tab from './Tab';
import { TabState } from '../types';

const meta: Meta<typeof Tab> = {
  title: 'FormTabs/Tab',
  component: Tab,

  argTypes: {
    title: {
      required: true,
      control: {
        type: 'text',
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
    state: {
      summary: Object.keys(TabState),
    },
    onClick: {
      table: {
        description: 'On click callback function',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Tab> = {
  args: {
    title: 'Title',
    active: false,
    state: TabState.default,
    onClick: action('onClick'),
  },
  render: (props) => (
    <Flex width="700px" alignItems="center" justifyContent="center">
      <Tab {...props} />
    </Flex>
  ),
};
