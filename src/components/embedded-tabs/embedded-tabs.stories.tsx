import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Box } from 'rebass';
import Labeling from '../typography/labeling';
import EmbeddedTabs, {
  EmbeddedTabsProps,
  ControlledEmbeddedTabsProps,
} from '.';

export default {
  title: 'Quartz/EmbeddedTabs',
  component: EmbeddedTabs,
  subcomponents: { Controlled: EmbeddedTabs.Controlled },
} as Meta;

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

export const Uncontrolled: Story<EmbeddedTabsProps> = (props) => {
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

export const Controlled: Story<ControlledEmbeddedTabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box width="700px">
      <EmbeddedTabs.Controlled
        {...props}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <Box mt={3}>
        <Labeling bold>Active tab: {tabs[activeTab].title}</Labeling>
      </Box>
    </Box>
  );
};

const args = {
  tabs,
};

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
    required: false,
  },
};

Uncontrolled.args = args;
Uncontrolled.argTypes = argTypes;

Controlled.args = args;
Controlled.argTypes = argTypes;
