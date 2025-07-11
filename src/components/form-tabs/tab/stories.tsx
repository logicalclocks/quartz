import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import TabComponent from './Tab';
import { TabState } from '../types';

const meta: Meta<typeof TabComponent> = {
  title: 'Disclosure/Tabs/Tab',
  component: TabComponent,

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

export const Tab: StoryObj<typeof TabComponent> = {
  args: {
    title: 'Title',
    active: false,
    state: TabState.default,
    onClick: action('onClick'),
  },
};
