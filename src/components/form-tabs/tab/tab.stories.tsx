// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Flex } from 'rebass';
import Tab, { TabProps } from './Tab';
import { TabState } from '../types';

export default {
  title: 'Quartz/FormTabs/Tab',
  component: Tab,
} as Meta;

const argTypes = {
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
      type: {
        summary: 'On click callback function',
      },
    },
    type: {
      required: true,
    },
  },
};

const Template: Story<TabProps> = (props) => (
  <Flex width="700px" alignItems="center" justifyContent="center">
    <Tab {...props} />
  </Flex>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  active: false,
  state: TabState.default,
  onClick: action('onClick'),
};

Default.argTypes = argTypes;
