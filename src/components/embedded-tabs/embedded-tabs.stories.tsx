import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Box } from 'rebass';
import Labeling from '../typography/labeling';
import EmbeddedTabs, { Props } from './EmbeddedTabs';

export default {
  title: 'Quartz/EmbeddedTabs',
  component: EmbeddedTabs,
} as Meta;

const argTypes = {
  tabs: {
    required: true,
    description: 'A list of tab items.',
  },
  initialTab: {
    required: false,
    description: 'The initial tab to be selected.',
    default: 0,
  },
  onTabChange: {
    description: 'Callback to be called when a tab is selected.',
    required: false
  },
};

const tabs = [
  {
    title: 'Validation Reports',
  },
  {
    title: 'Results',
  },
  {
    title: 'Statistics',
  },
  {
    title: 'And a disabled tab',
    disabled: true,
  },
];

const Template: Story<Props> = (props) => {
  const [activeTab, setActiveTab] = useState(props.initialTab ?? 0);

  return (
    <Box width="700px">
      <EmbeddedTabs {...props} onTabChange={setActiveTab} />
      <Box mt={3}>
        <Labeling bold>Active tab: {tabs[activeTab].title}</Labeling>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  tabs,
};

Default.argTypes = argTypes;
